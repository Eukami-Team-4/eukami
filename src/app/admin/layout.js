import { Badge } from "@/components/ui/badge";
import "@/styles/globals.css";
import { ArrowLeftCircle } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { AdminNavbar } from "./AdminNavbar";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard",
  description: "Manage the store and view reports.",
};

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      ><ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
          <div className="flex items-center w-full h-8 px-1 bg-accent text-accent-foreground">
            <Link className="text-sm hover:underline hover:text-primary" href="/">
              <Badge>
                <ArrowLeftCircle className="mr-2" size={12} /> Return to
                Storefront
              </Badge>
            </Link>
          </div>
          <div className="border-b">
            <AdminNavbar />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
