"use client";
import { login, signout, signup } from "@/lib/supabase/auth-actions";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

export const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function fetchData() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }
    fetchData();
  }, [supabase.auth]);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setSession(session);
        setUser(session.user);
      }
      if (event === "SIGNED_OUT") {
        setSession(null);
        setUser(null);
      } else if (session) {
        setSession(session);
        setUser(session.user);
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const signIn = useCallback(
    async ({ email, password }) => {
      try {
        const { user, session } = await login({ email, password });
        setUser(user);
        setSession(session);
        toast("Welcome back!", "success");
      } catch (error) {
        toast(error.message || error, "error");
      }
      router.push("/myaccount");
    },
    [router]
  );

  const signUp = useCallback(
    async ({ email, password }) => {
      try {
        const { user, session } = await signup({ email, password });
        setUser(user);
        setSession(session);
        toast("Account Created Successfully", "success");
      } catch (error) {
        toast(error.message || error, "error");
      }
      router.push("/myaccount");
    },
    [router]
  );

  const signOut = useCallback(async () => {
    try {
      await signout();
      toast("Signed out successfully", "success");
      setUser(null);
      setSession(null);
    } catch (error) {
      toast(error.message || error, "error");
    }
    router.push("/");
  }, [router]);

  return (
    <AuthContext.Provider
      value={{ session, user, loading, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useUser = () => {
  const { user, loading } = useAuth();
  return { user, loading };
};

export const useSession = () => {
  const { session, loading } = useAuth();
  return { session, loading };
};

export const useIsAuthenticated = () => {
  const { user } = useAuth();
  return user !== null;
};

export const useSignIn = () => {
  const { signIn } = useAuth();
  return signIn;
};

export const useSignUp = () => {
  const { signUp } = useAuth();
  return signUp;
};

export const useSignOut = () => {
  const { signOut } = useAuth();
  return signOut;
};

export const useRequireAuth = () => {
  const { user, loading } = useAuth();
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading]);
};

export const useRequireNotAuth = () => {
  const { user, loading } = useAuth();
  useEffect(() => {
    if (!loading && user) {
      router.push("/myaccount");
    }
  }, [user, loading]);
};
