import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between p-4 sm:px-8 lg:px-16 xl:px-32">
        <div className="flex items-center p-4">
          <Image src="/images/kite-logo.svg" alt="Kite AI Logo" width={60} height={60} className="mr-2" />
        </div>
        <div className="flex items-center gap-4">
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
          <Button variant="secondary" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Join us <span aria-hidden="true" className="font-bold">→</span></Link>
          </Button>
        </div>
      </div>
    </header>
  );
}