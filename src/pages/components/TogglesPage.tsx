
import { Layout } from "@/components/Layout";
import { ComponentCard } from "@/components/ComponentCard";
import { ComponentViewer } from "@/components/ComponentViewer";
import { useComponents } from "@/lib/component-data";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function TogglesPage() {
  const { toggleComponents } = useComponents();
  const { id } = useParams();
  const [enabled, setEnabled] = useState(false);
  
  const selectedComponent = id
    ? toggleComponents.find((component) => component.id === id)
    : null;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4">
        {selectedComponent ? (
          <div>
            <h1 className="text-3xl font-bold mb-6">Toggle Components</h1>
            <ComponentViewer
              title={selectedComponent.title}
              description={selectedComponent.description}
              preview={selectedComponent.preview}
              html={selectedComponent.html}
              css={selectedComponent.css}
              customization={
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="toggle-demo" checked={enabled} onCheckedChange={setEnabled} />
                    <label htmlFor="toggle-demo" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {enabled ? "Enabled" : "Disabled"}
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    This is a functional demo using the shadcn/ui Switch component.
                  </p>
                </div>
              }
            />
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Toggle Components</h1>
              <p className="text-muted-foreground">
                Toggle switches and controls for your web projects.
              </p>
            </div>

            {/* Grid of component cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {toggleComponents.map((component) => (
                <ComponentCard
                  key={component.id}
                  title={component.title}
                  description={component.description}
                  preview={component.preview}
                  href={`/components/toggles/${component.id}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
