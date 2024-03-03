import { cn } from "@/lib/utils";

export const metadata = {
  title: "Admin Dashboard",
  description: "Login to the admin dashboard.",
};

export default function Layout({ children }) {
  return (
    <main className={cn("absolute h-screen w-screen bg-background font-sans antialiased")}>
      {children}
    </main>
  );
}
