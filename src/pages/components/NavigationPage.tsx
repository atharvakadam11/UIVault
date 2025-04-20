
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ComponentCard } from "@/components/ComponentCard";
import { ComponentViewer } from "@/components/ComponentViewer";
import { useComponents } from "@/lib/component-data";
import { cn } from "@/lib/utils";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";

export default function NavigationPage() {
  const { navigationComponents } = useComponents();
  const { id } = useParams();
  
  const selectedComponent = id
    ? navigationComponents.find((component) => component.id === id)
    : null;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4">
        {selectedComponent ? (
          <div>
            <h1 className="text-3xl font-bold mb-6">Navigation Components</h1>
            <ComponentViewer
              title={selectedComponent.title}
              description={selectedComponent.description}
              preview={selectedComponent.preview}
              html={selectedComponent.html}
              css={selectedComponent.css}
              customization={
                <div className="space-y-4">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Demo Menu</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-4 w-[200px]">
                            <li>
                              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}>
                                Option 1
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}>
                                Option 2
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Another Link
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                  <p className="text-xs text-muted-foreground">
                    Interactive shadcn/ui NavigationMenu demo
                  </p>
                </div>
              }
            />
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Navigation Components</h1>
              <p className="text-muted-foreground">
                A collection of navigation components for your web projects. Click on any component to view the code.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {navigationComponents.map((component) => (
                <ComponentCard
                  key={component.id}
                  title={component.title}
                  description={component.description}
                  preview={component.preview}
                  href={`/components/navigation/${component.id}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
