
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ComponentCard } from "@/components/ComponentCard";
import { ComponentViewer } from "@/components/ComponentViewer";
import { useComponents } from "@/lib/component-data";
import { Loader, LoaderCircle } from "lucide-react";

export default function LoadersPage() {
  const { loaderComponents } = useComponents();
  const { id } = useParams();
  
  const selectedComponent = id
    ? loaderComponents.find((component) => component.id === id)
    : null;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4">
        {selectedComponent ? (
          <div>
            <h1 className="text-3xl font-bold mb-6">Loader Components</h1>
            <ComponentViewer
              title={selectedComponent.title}
              description={selectedComponent.description}
              preview={selectedComponent.preview}
              html={selectedComponent.html}
              css={selectedComponent.css}
              customization={
                <div className="space-y-4">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-center">
                      <Loader className="h-6 w-6 animate-spin text-primary" />
                    </div>
                    <div className="flex items-center justify-center">
                      <LoaderCircle className="h-6 w-6 animate-spin text-primary" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Lucide React loader icons with animation
                  </p>
                </div>
              }
            />
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Loader Components</h1>
              <p className="text-muted-foreground">
                A collection of loader and animation components for your web projects. Click on any component to view the code.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {loaderComponents.map((component) => (
                <ComponentCard
                  key={component.id}
                  title={component.title}
                  description={component.description}
                  preview={component.preview}
                  href={`/components/loaders/${component.id}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
