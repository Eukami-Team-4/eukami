import { cn } from "@/lib/utils";

export const metadata = {
  title: "Admin Login",
  description: "Login to the admin dashboard.",
};

export default function RootLayout({ children }) {
  return (
    <main className={cn("min-h-screen bg-background font-sans antialiased")}>
      {children}
    </main>
  );
}
