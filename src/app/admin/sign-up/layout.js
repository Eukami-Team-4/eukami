import { cn } from "@/lib/utils";

export const metadata = {
  title: "Admin Sign Up",
  description: "Sign up for an admin account",
};

export default function Layout({ children }) {
  return (
    <main className={cn("absolute h-screen w-screen min-h-screen bg-background font-sans antialiased")}>
      {children}
    </main>
  );
}
