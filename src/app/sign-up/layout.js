import { cn } from "@/lib/utils";

export const metadata = {
  title: "Admin Dashboard - Sign Up",
  description: "Sign up for an admin account",
};

export default function Layout({ children }) {
  return (
    <main className={cn("min-h-screen bg-background font-sans antialiased")}>
      {children}
    </main>
  );
}
