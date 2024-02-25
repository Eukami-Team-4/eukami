"use client"
import Cart from "@/app/(Storefront)/cart/cart";
import MainNav from "@/app/(Storefront)/components/main-nav";
import Logo from "@/components/logo";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";


export function Navbar() {
  
  function openCart(e){
    toast("This will open the cart in the future")
  }
  return (
    <div className="w-full bg-indigoDye">
      <div className="container flex items-center justify-between p-4 py-6 text-white border-b border-platinum/30">
        <button className="flex items-center justify-center w-12 h-12 p-2 transition-all md:hidden hover:text-brightOrange hover:-translate-y-1">
          <Menu />
        </button>
        <Link href="/">
          <Logo className="w-24" variant="type" dark />
        </Link>
        <div className="hidden md:block">
          <MainNav />
        </div>
        <div>
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}
