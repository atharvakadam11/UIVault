
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ComponentCard } from "@/components/ComponentCard";
import { ComponentViewer } from "@/components/ComponentViewer";
import { useComponents } from "@/lib/component-data";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function FormsPage() {
  const { formComponents } = useComponents();
  const { id } = useParams();
  const { toast } = useToast();
  
  const selectedComponent = id
    ? formComponents.find((component) => component.id === id)
    : null;

  const handleFormSubmitDemo = () => {
    toast({
      title: "Form submitted",
      description: "This is a demo submission. In a real app, this would connect to your backend.",
    });
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4">
        {selectedComponent ? (
          <div>
            <h1 className="text-3xl font-bold mb-6">Form Components</h1>
            <ComponentViewer
              title={selectedComponent.title}
              description={selectedComponent.description}
              preview={selectedComponent.preview}
              html={selectedComponent.html}
              css={selectedComponent.css}
              customization={
                <div className="space-y-4">
                  <Button size="sm" onClick={handleFormSubmitDemo}>
                    Test Form Submit
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Click to see a toast notification simulating form submission.
                  </p>
                </div>
              }
            />
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Form Components</h1>
              <p className="text-muted-foreground">
                A collection of form components for your web projects. Click on any component to view the code.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {formComponents.map((component) => (
                <ComponentCard
                  key={component.id}
                  title={component.title}
                  description={component.description}
                  preview={component.preview}
                  href={`/components/forms/${component.id}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
