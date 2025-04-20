
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  ChevronLeft, 
  Download, 
  Github, 
  MenuSquare, 
  Settings, 
  ToggleLeft, 
  Square, 
  CreditCard, 
  FormInput, 
  Navigation, 
  Loader 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarNavProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const categories = [
  {
    title: "Buttons",
    href: "/components/buttons",
    icon: MenuSquare,
  },
  {
    title: "Toggles",
    href: "/components/toggles",
    icon: ToggleLeft,
  },
  {
    title: "Checkboxes",
    href: "/components/checkboxes",
    icon: Square,
  },
  {
    title: "Cards",
    href: "/components/cards",
    icon: CreditCard,
  },
  {
    title: "Forms",
    href: "/components/forms",
    icon: FormInput,
  },
  {
    title: "Navigation Bars",
    href: "/components/navigation",
    icon: Navigation,
  },
  {
    title: "Loaders",
    href: "/components/loaders",
    icon: Loader,
  },
];

export function SidebarNav({ isOpen, setIsOpen }: SidebarNavProps) {
  const location = useLocation();

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex h-full flex-col border-r bg-background transition-all duration-300 md:relative",
        isOpen ? "w-64" : "w-0 md:w-16 overflow-hidden"
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        <Link
          to="/"
          className={cn(
            "flex items-center gap-2 font-semibold",
            !isOpen && "md:hidden"
          )}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            UI
          </div>
          <span>UI Vault</span>
        </Link>
        {isOpen && (
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto h-8 w-8 md:flex"
            onClick={() => setIsOpen(false)}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        )}
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {categories.map((category) => (
            <Link
              key={category.href}
              to={category.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                location.pathname === category.href && "bg-accent font-medium",
                !isOpen && "md:justify-center md:px-2"
              )}
            >
              <category.icon className={cn("h-5 w-5")} />
              <span className={cn(!isOpen && "md:hidden")}>{category.title}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="sticky bottom-0 border-t bg-background p-2">
        <div className="grid gap-1">
          <Link
            to="/contribute"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-accent",
              !isOpen && "md:justify-center md:px-2"
            )}
          >
            <Github className={cn("h-5 w-5")} />
            <span className={cn(!isOpen && "md:hidden")}>Contribute</span>
          </Link>
          <Link
            to="/download"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-accent",
              !isOpen && "md:justify-center md:px-2"
            )}
          >
            <Download className={cn("h-5 w-5")} />
            <span className={cn(!isOpen && "md:hidden")}>Download</span>
          </Link>
          <Link
            to="/settings"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-accent",
              !isOpen && "md:justify-center md:px-2"
            )}
          >
            <Settings className={cn("h-5 w-5")} />
            <span className={cn(!isOpen && "md:hidden")}>Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
