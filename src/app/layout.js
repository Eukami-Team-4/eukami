import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Eukami",
    description: "Audio Store",
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
                    "min-h-screen bg-background font-sans antialiased scroll-smooth",
                    fontSans.variable
                )}
            >
                {children}
                <Toaster />
            </body>
        </html>
    );
}
