import { Footer } from "@/app/(Storefront)/components/storefront-footer";
import { Navbar } from "@/app/(Storefront)/components/storefront-navbar";
import { Badge } from "@/components/ui/badge";
import { Settings } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen border-4 border-red-500">
            <div className="flex items-center w-full h-8 px-1 bg-onyx">
                {/* if logged in then show the button to go to the admin page */}
                <Link className="text-sm hover:underline hover:text-primary" href="/admin">
                    <Badge variant="secondary">
                        <Settings className="mr-2" size={12} /> Go to Admin Dashboard
                    </Badge>
                </Link>
            </div>
            <Navbar />
            <div className="flex-1">
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
