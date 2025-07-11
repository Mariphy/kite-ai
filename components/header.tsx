"use client"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signOut } from "next-auth/react";
import type { UserType } from "@/app/(auth)/auth";

type HeaderUser = {
  id?: string;
  email?: string | null;
  type: UserType;
};

const navItems = [
  { name: "About", href: "/about" },
  { name: "Free Resources", href: "/resources" },
];

export default function Header({ user }: { user?: HeaderUser }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between py-4 px-7 md:py-6 md:px-12 lg:px-20 xl:px-24">
        <Link href="/" className="flex items-center">
          <Image src="/images/kite-logo.svg" alt="Kite AI Logo" width={78} height={36} className="mr-2" />
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink 
                    href={item.href} 
                    className="px-4 py-2 rounded-md hover:bg-gray-100 transition font-normal"
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
           {user ? (
              <Button variant="secondary" onClick={() => signOut({ callbackUrl: "/" })}>
                Logout
              </Button>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Join us <Image src="/images/button_arrow.svg" alt="Arrow" width={24} height={24} /></Link>
                </Button>
              </>
            )}
        </div>
        <button
          className="md:hidden p-2"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Image 
            src={isMobileMenuOpen ? "/images/x.svg" : "/images/list.svg"} 
            alt={isMobileMenuOpen ? "Close menu" : "Open menu"} 
            width={28} 
            height={28} 
          />
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-[#203067] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t">
              {user ? (
                <Button 
                  variant="secondary" 
                  className="w-full" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    signOut({ callbackUrl: "/" });
                  }}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}