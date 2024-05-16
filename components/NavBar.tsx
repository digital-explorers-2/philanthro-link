import Link from "next/link"; 
import { Menu, Phone } from "lucide-react"; 
import { Button } from "@/components/ui/button"; 
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; 

export default function NavBar() {
  return (
    <header className="absolute w-full z-10">
      <div className="top-0 flex h-16 items-center gap-4 bg-transparent px-4 md:px-6 mt-2">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="#" className="flex items-center gap-2 text-sm font-semibold md:text-base">
          <img src="/logo.png" alt="Logo" className="h-7 w-21" />
          <span className="sr-only">PhilanthroLink</span>
        </Link>
        <div className="flex-grow"></div>
      </nav>
      
      <div className="hidden md:flex items-center space-x-4 mr-auto text-sm">
        <Link href="#" className="text-muted-foreground transition-colors hover:text-primary text-white">Home</Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-primary text-white">About</Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-primary text-white">Contact</Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-primary text-white">Help</Link>
      </div>

      <div className="hidden md:flex items-center space-x-4 ml-auto text-sm">
        <Link href="#" className="flex items-center gap-2 text-sm font-semibold">
            <Phone className="h-4 w-4 text-white hover:text-primary" />
        </Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-primary text-white">+372 5882 5555</Link>
      </div>
      
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" className="shrink-0 md:hidden bg-transparent">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-sm font-medium">
            <Link href="#" className="flex items-center gap-2 text-sm font-semibold">
            <img src="/logo.png" alt="Logo" className="h-7 w-21" />
              <span className="sr-only">PhilanthroLink</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Home</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">About</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Help</Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="md:hidden items-center space-x-4 ml-auto text-sm">
      <Button size="icon" className="shrink-0 md:hidden bg-transparent">
        <Link href="#" className="flex items-center gap-2 text-sm font-semibold">
            <Phone href="#" className="h-5 w-5" />
        </Link>
        <span className="sr-only">Contact us</span>
      </Button>
      </div>
      </div>
    </header>
  );
}
