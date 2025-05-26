import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
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
          <Button variant="secondary">Login</Button>
          <Button>
            Join us <span aria-hidden="true" className="font-bold">→</span>
          </Button>
        </div>
      </div>
    </header>
  );
}