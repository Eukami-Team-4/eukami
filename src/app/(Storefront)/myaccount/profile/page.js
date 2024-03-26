"use client";
import { useUser } from "@/app/_context/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { Pencil } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const ProfilePage = () => {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState(null);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const { user } = useUser();

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, username, website, avatar_url`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      console.error("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);

      const { error } = await supabase.from("profiles").upsert({
        id: user?.id,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == "PASSWORD_RECOVERY") {
        const newPassword = prompt(
          "What would you like your new password to be?"
        );
        const { data, error } = await supabase.auth.updateUser({
          password: newPassword,
        });

        if (data) alert("Password updated successfully!");
        if (error) alert("There was an error updating your password.");
      }
    });
  }, []);
  return (
    <div className="flex flex-col">
      <h1 className="flex items-center justify-center w-full h-20 mt-20 mb-5 text-4xl font-bold uppercase">
        PROFILE
      </h1>

      <div className="flex items-center justify-center mb-10">
        <div className="flex items-end justify-end rounded-full w-28 h-28 w bg-slate-300">
          <Pencil size={16} className="pointer-events-none" />
        </div>
      </div>

      <div className="relative flex items-center justify-center w-2/5 mx-auto mb-10">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          className="block w-full h-10 py-1.5 pr-10 text-xs bg-white border-white rounded-none "
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={fullname || ""}
          onChange={(e) => setFullname(e.target.value)}
        ></Input>
        <Pencil size={16} className="absolute pointer-events-none right-4" />
      </div>

      <div className="relative flex items-center justify-center w-2/5 mx-auto mb-10">
        <Label htmlFor="email">Email</Label>
        <Input
          className="block w-full h-10 py-1.5 pr-10 text-xs bg-white border-white rounded-none "
          type="text"
          id="email"
          name="email"
          value={user?.email}
          disabled
          placeholder="Email"
        ></Input>
        <Pencil size={16} className="absolute pointer-events-none right-4" />
      </div>

      <div className="relative flex items-center justify-center w-2/5 mx-auto mb-10">
        <Label htmlFor="fullName">Phone Number</Label>
        <Input
          className="block w-full h-10 py-1.5 pr-10 text-xs bg-white border-white rounded-none "
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
        ></Input>
        <Pencil size={16} className="absolute pointer-events-none right-4" />
      </div>

      <div className="flex items-center justify-center gap-6 mb-10">
        <div>
          <Button variant="outline">Send Password Reset to your email</Button>
        </div>

        <div>
          <form action="/auth/logout" method="post">
            <Button variant="outline" type="submit">
              Sign out
            </Button>
          </form>
        </div>
        <div>
          <Button
            onClick={() =>
              updateProfile({ fullname, username, website, avatar_url })
            }
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update Profile"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
