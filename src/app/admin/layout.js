import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/server";
import "@/styles/globals.css";
import { ArrowLeftCircle, Store } from "lucide-react";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { AdminNavbar } from "./AdminNavbar";
import { ThemeProvider } from "./components/theme-provider";
import { AlertProvider } from "@/app/admin/_context/alert-context";
import { StoreProvider } from "@/app/_context/store-context";

export const metadata = {
  title: "Admin Dashboard",
  description: "Manage the store and view reports.",
};

export default async function Layout({ children }) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased relative"
      )}
    >
      <StoreProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AlertProvider>
            <div className="flex items-center w-full h-8 px-1 bg-accent text-accent-foreground">
              <Link
                className="text-sm hover:underline hover:text-primary"
                href="/"
              >
                <Badge>
                  <ArrowLeftCircle className="mr-2" size={12} /> Return to
                  Storefront
                </Badge>
              </Link>
            </div>
            {user && (
              <div className="border-b">
                <AdminNavbar />
              </div>
            )}
            {children}
          </AlertProvider>
        </ThemeProvider>
      </StoreProvider>
    </div>
  );
}
