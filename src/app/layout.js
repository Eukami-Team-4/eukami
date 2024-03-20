import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Eukami",
    description: "Audio Store",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    "min-h-screen bg-seasalt font-sans antialiased scroll-smooth",
                    inter
                )}
            >
                {children}
                <Toaster />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
