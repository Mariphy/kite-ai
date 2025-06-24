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
import { Dialog } from "@headlessui/react";
import type { UserType } from "@/app/(auth)/auth";

type HeaderUser = {
  id?: string;
  email?: string | null;
  type: UserType;
};

export default function Header({ user }: { user?: HeaderUser }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between p-4 sm:px-8 lg:px-16 xl:px-32">
        <Link href="/" className="flex items-center p-4">
          <Image src="/images/kite-logo.svg" alt="Kite AI Logo" width={78} height={36} className="mr-2" />
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about" className="px-4 py-2 rounded-md hover:bg-gray-100 transition font-normal">About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/resources" className="px-4 py-2 rounded-md hover:bg-gray-100 transition font-normal">Free Resources</NavigationMenuLink>
              </NavigationMenuItem>     
            </NavigationMenuList>
          </NavigationMenu>
           {user && user.type !== "guest" ? (
              <Button variant="secondary" onClick={() => signOut({ callbackUrl: "/" })}>
                Logout
              </Button>
            ) : (
              <>
                <Button variant="secondary" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Join us <span aria-hidden="true" className="font-bold">→</span></Link>
                </Button>
              </>
            )}
        </div>
        <button
          className="md:hidden p-2"
          aria-label="Open menu"
          onClick={() => setIsModalOpen(true)}
        >
          <Image src="/images/list.svg" alt="Open menu" width={28} height={28} />
        </button>
      </div>
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="bg-white w-11/12 max-w-xs rounded-lg shadow-lg p-6 flex flex-col gap-4 relative">
            <button
              className="absolute top-2 right-2 text-2xl"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <Link href="/about" className="py-2" onClick={() => setIsModalOpen(false)}>
              About
            </Link>
            <Link href="/resources" className="py-2" onClick={() => setIsModalOpen(false)}>
              Free Resources
            </Link>
            {user ? (
              <Button
                variant="secondary"
                className="mt-4"
                onClick={() => {
                  setIsModalOpen(false);
                  signOut({ callbackUrl: "/" });
                }}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button asChild className="mt-4">
                  <Link href="/login" onClick={() => setIsModalOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/register" onClick={() => setIsModalOpen(false)}>
                    Join us <span aria-hidden="true" className="font-bold">→</span>
                  </Link>
                </Button>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>      
    </header>
  );
}