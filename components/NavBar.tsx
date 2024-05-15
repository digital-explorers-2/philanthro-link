import Link from "next/link"; // Importing Link component from Next.js
import { Menu, Phone } from "lucide-react"; // Importing Menu and PlaneTakeoff icons from lucide-react
import { Button } from "@/components/ui/button"; // Importing Button component from custom UI library
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Importing Sheet components from custom UI library

export default function NavBar() {
  return (
    // Header section with flex layout and styling
    <header className="absolute w-full">
      <div className="top-0 flex h-16 items-center gap-4 border-b bg-transparent px-4 md:px-6">
      {/* Navigation menu with flex layout */}
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        {/* Link to home page with a PlaneTakeoff icon */}
        <Link href="#" className="flex items-center gap-2 text-sm font-semibold md:text-base">
          <img src="/logo.png" alt="Logo" className="h-7 w-21" />
          <span className="sr-only">PhilanthroLink</span> {/* Screen reader only text for accessibility */}
        </Link>
        <div className="flex-grow"></div> {/* Placeholder to push links to the right */}
      </nav>
      
      {/* Links container */}
      <div className="hidden md:flex items-center space-x-4 mr-auto text-sm"> {/* Container for text links with ml-auto to align them to the right */}
        {/* Individual links for different sections */}
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">Home</Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">About</Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">Contact</Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">Help</Link>
      </div>

      <div className="hidden md:flex items-center space-x-4 ml-auto text-sm"> {/* Container for text links with ml-auto to align them to the right */}
        <Link href="#" className="flex items-center gap-2 text-sm font-semibold">
            <Phone className="h-4 w-4" /> {/* Phone icon */}
        </Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">+372 5882 5555</Link>
      </div>
      
      {/* Mobile navigation menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span> {/* Screen reader only text for accessibility */}
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          {/* Navigation menu for mobile view */}
          <nav className="grid gap-6 text-sm font-medium">
            {/* Link to home page with a PlaneTakeoff icon */}
            <Link href="#" className="flex items-center gap-2 text-sm font-semibold">
            <img src="/logo.png" alt="Logo" className="h-7 w-21" />
              <span className="sr-only">PhilanthroLink</span> {/* Screen reader only text for accessibility */}
            </Link>
            {/* Individual links for different sections */}
            <Link href="#" className="text-muted-foreground hover:text-foreground">Home</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">About</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Help</Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="md:hidden items-center space-x-4 ml-auto text-sm"> {/* Container for text links with ml-auto to align them to the right */}
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Link href="#" className="flex items-center gap-2 text-sm font-semibold">
            <Phone href="#" className="h-5 w-5" />
        </Link>
        <span className="sr-only">Contact us</span> {/* Screen reader only text for accessibility */}
      </Button>
      </div>
      </div>
    </header>
  );
}