import { cn } from "@/lib/utils";

export const metadata = {
  title: "My Account",
  description: "Login to the shopper dashboard.",
};

export default function Layout({ children }) {
  return (
    <main className={cn("font-sans antialiased w-full h-full  py-8 lg:py-16")}>
      {children}
    </main>
  );
}
