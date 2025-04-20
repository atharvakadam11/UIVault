
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ComponentCard } from "@/components/ComponentCard";
import { ComponentViewer } from "@/components/ComponentViewer";
import { useComponents } from "@/lib/component-data";
import { useParams } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { type CheckedState } from "@radix-ui/react-checkbox";

export default function CheckboxesPage() {
  const { checkboxComponents } = useComponents();
  const { id } = useParams();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  
  const selectedComponent = id
    ? checkboxComponents.find((component) => component.id === id)
    : null;

  // Create a properly typed handler for the checkbox
  const handleCheckedChange = (checked: CheckedState) => {
    setIsChecked(checked === true);
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4">
        {selectedComponent ? (
          <div>
            <h1 className="text-3xl font-bold mb-6">Checkbox Components</h1>
            <ComponentViewer
              title={selectedComponent.title}
              description={selectedComponent.description}
              preview={selectedComponent.preview}
              html={selectedComponent.html}
              css={selectedComponent.css}
              customization={
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="checkbox-demo" checked={isChecked} onCheckedChange={handleCheckedChange} />
                    <label htmlFor="checkbox-demo" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {isChecked ? "Checked" : "Unchecked"}
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    This is a functional demo using the shadcn/ui Checkbox component.
                  </p>
                </div>
              }
            />
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Checkbox Components</h1>
              <p className="text-muted-foreground">
                Checkbox controls and components for your web projects.
              </p>
            </div>

            {/* Grid of component cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {checkboxComponents.map((component) => (
                <ComponentCard
                  key={component.id}
                  title={component.title}
                  description={component.description}
                  preview={component.preview}
                  href={`/components/checkboxes/${component.id}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
