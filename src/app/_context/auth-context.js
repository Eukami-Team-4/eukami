"use client";
// create a context to wrap around the app so that i can check if the user is logged in or not and perform simple actions like logging out

import { createClient } from "@/lib/supabase/client";
import { set } from "date-fns";
import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
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
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      router.push("/myaccount");
    },
    [router, supabase.auth]
  );

  const signUp = useCallback(
    async ({ email, password }) => {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      router.push("/myaccount");
    },
    [router, supabase.auth]
  );

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    router.push("/");
  }, [router, supabase.auth]);

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
