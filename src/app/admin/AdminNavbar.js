import Logo from "@/components/logo";
import Link from "next/link";
import { MainNav } from "./components/main-nav";
import { Search } from "./components/search";
import { ModeToggle } from "./components/theme-toggle";
import { UserNav } from "./components/user-nav";

export const AdminNavbar = () => {
  return (
    <div className="flex items-center h-16 gap-6 px-8 bg-indigoDye">
      <Link href="/admin">
        <Logo className="w-24" variant="type" dark />
      </Link>
      <div className="flex justify-center flex-1">
        <MainNav />
      </div>
      <div className="flex items-center ml-auto space-x-4 ">
        <Search />
        <ModeToggle />
        <UserNav />
      </div>
    </div>
  );
};
