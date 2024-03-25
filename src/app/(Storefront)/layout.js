
import { Footer } from "@/app/(Storefront)/components/storefront-footer";
import { Navbar } from "@/app/(Storefront)/components/storefront-navbar";
import { Badge } from "@/components/ui/badge";
import { Settings } from "lucide-react";
import Link from "next/link";
import { StoreProvider } from "../_context/store-context";
import { ThemeProvider } from "@/app/admin/components/theme-provider";
import { AuthProvider } from "@/app/_context/auth-context";
import { CartProvider } from "./cart/cart-context";

export default function Layout({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex flex-col min-h-screen">
          <div className="flex items-center w-full h-8 px-1 bg-onyx">
            {/* if logged in then show the button to go to the admin page */}
            <Link
              className="text-sm hover:underline hover:text-primary"
              href="/admin"
            >
              <Badge variant="secondary">
                <Settings className="mr-2" size={12} /> Go to Admin Dashboard
              </Badge>
            </Link>
          </div>
          <StoreProvider>
            <CartProvider>
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
            </CartProvider>
          </StoreProvider>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}
