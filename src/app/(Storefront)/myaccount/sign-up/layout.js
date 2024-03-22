import { cn } from "@/lib/utils";

export const metadata = {
  title: "Admin Sign Up",
  description: "Sign up for an admin account",
};

export default function Layout({ children }) {
  return (
    <main className={cn("font-sans antialiased w-full h-full  py-8 lg:py-16")}>
      {children}
    </main>
  );
}
