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


export default function HomePage() {
  return (
    <>
      <header className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo placeholder */}
          <div className="flex items-center">
            <span className="text-xl font-bold">Logo</span>
          </div>
          <div className="flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Free Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
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
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-stone-200 w-full h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Kite AI!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Your career transition assistant. Get started by signing up or logging in.
          </p>
          {/* Add links to login/register if you want */}
        </div>
        <div className="bg-white w-full h-screen flex flex-col items-center justify-center">
          <h2>How can we help you</h2>
          <p>Your next step toward brighter days!</p>
        </div>
      </main>
    </>
  );
}