
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ComponentCard } from "@/components/ComponentCard";
import { ComponentViewer } from "@/components/ComponentViewer";
import { useComponents } from "@/lib/component-data";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams } from "react-router-dom";

export default function ButtonsPage() {
  const { buttonComponents } = useComponents();
  const { id } = useParams();
  const [radius, setRadius] = useState(4);
  const [selectedColor, setSelectedColor] = useState("blue");

  const selectedComponent = id
    ? buttonComponents.find((component) => component.id === id)
    : null;

  const colors = [
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
    { value: "red", label: "Red" },
    { value: "purple", label: "Purple" },
  ];

  const colorMap: Record<string, string> = {
    blue: "#2563eb",
    green: "#10b981",
    red: "#ef4444",
    purple: "#8b5cf6",
  };

  const customizationPanel = (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="radius">Border Radius (px)</Label>
        <Slider
          id="radius"
          min={0}
          max={12}
          step={1}
          value={[radius]}
          onValueChange={(value) => setRadius(value[0])}
        />
        <span className="text-sm text-muted-foreground">{radius}px</span>
      </div>
      <div className="space-y-2">
        <Label htmlFor="color">Button Color</Label>
        <Select value={selectedColor} onValueChange={setSelectedColor}>
          <SelectTrigger id="color">
            <SelectValue placeholder="Select a color" />
          </SelectTrigger>
          <SelectContent>
            {colors.map((color) => (
              <SelectItem key={color.value} value={color.value}>
                <div className="flex items-center">
                  <div
                    className="h-3 w-3 rounded-full mr-2"
                    style={{ backgroundColor: colorMap[color.value] }}
                  />
                  {color.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  // For the customized preview
  const CustomizedButton = () => {
    const style = {
      backgroundColor: colorMap[selectedColor],
      borderRadius: `${radius}px`,
      color: "white",
      fontWeight: 500,
      padding: "0.5rem 1rem",
      border: "none",
      cursor: "pointer",
      transition: "opacity 0.2s",
    };

    return (
      <button
        style={style}
        onMouseOver={(e) => {
          e.currentTarget.style.opacity = "0.9";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
      >
        Customized Button
      </button>
    );
  };

  // Generate HTML based on current customization
  const generateHtml = () => {
    return `<button class="custom-button">Customized Button</button>`;
  };

  // Generate CSS based on current customization
  const generateCss = () => {
    return `.custom-button {
  background-color: ${colorMap[selectedColor]};
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: ${radius}px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

.custom-button:hover {
  opacity: 0.9;
}`;
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        {selectedComponent ? (
          <div>
            <h1 className="text-3xl font-bold mb-6">Button Components</h1>
            <ComponentViewer
              title={selectedComponent.title}
              description={selectedComponent.description}
              preview={selectedComponent.preview}
              html={selectedComponent.html}
              css={selectedComponent.css}
            />
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Button Components</h1>
              <p className="text-muted-foreground">
                Collection of button styles and variants for your web projects.
              </p>
            </div>

            {/* Featured customizable component */}
            <ComponentViewer
              title="Customizable Button"
              description="Adjust the properties to create your perfect button"
              preview={<CustomizedButton />}
              html={generateHtml()}
              css={generateCss()}
              customization={customizationPanel}
            />

            {/* Grid of component cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {buttonComponents.map((component) => (
                <ComponentCard
                  key={component.id}
                  title={component.title}
                  description={component.description}
                  preview={component.preview}
                  href={`/components/buttons/${component.id}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
