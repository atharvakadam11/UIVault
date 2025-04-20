
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ComponentCard } from "@/components/ComponentCard";
import { ComponentViewer } from "@/components/ComponentViewer";
import { useComponents } from "@/lib/component-data";

export default function CardsPage() {
  const { cardComponents } = useComponents();
  const [selectedComponent, setSelectedComponent] = useState(cardComponents[0]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const component = cardComponents.find(c => c.id === id);
      if (component) {
        setSelectedComponent(component);
      }
    } else {
      setSelectedComponent(cardComponents[0]);
    }
  }, [id, cardComponents]);

  return (
    <Layout>
      <div className="container py-8 px-4 mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Card Components</h1>
          <p className="text-lg text-muted-foreground">
            A collection of card components for your web projects. Click on any component to view the code.
          </p>
        </div>
        
        {id ? (
          <ComponentViewer
            title={selectedComponent.title}
            description={selectedComponent.description}
            preview={selectedComponent.preview}
            html={selectedComponent.html}
            css={selectedComponent.css}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cardComponents.map((component) => (
              <ComponentCard
                key={component.id}
                title={component.title}
                description={component.description}
                preview={component.preview}
                href={`/components/cards/${component.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
