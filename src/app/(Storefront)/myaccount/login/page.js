"use client";

import { useSignIn } from "@/app/_context/auth-context";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const login = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="flex flex-col items-center justify-center w-full h-full">
      <Card className="w-96">
        <CardHeader>
          <div className="w-32 mx-auto">
            <Logo></Logo>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center gap-3">
          <Button
          type="button"
            onClick={async () => await login({email, password})}
            className="w-full rounded-full"
          >
            Sign In
          </Button>
          <div className="flex flex-col items-center justify-center py-6">
            <p>Don&apos;t have an account?</p>
            <Button
              variant="link"
              type="button"
              onClick={() => router.push("/myaccount/sign-up")}
            >
              Sign up
            </Button>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
}
