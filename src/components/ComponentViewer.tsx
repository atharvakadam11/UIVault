
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Clipboard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useSyntaxHighlighter } from "@/hooks/useSyntaxHighlighter";

interface ComponentViewerProps {
  title: string;
  description?: string;
  preview: React.ReactNode;
  html: string;
  css: string;
  customization?: React.ReactNode;
}

export function ComponentViewer({
  title,
  description,
  preview,
  html,
  css,
  customization,
}: ComponentViewerProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("html");
  const { toast } = useToast();
  
  // Use the syntax highlighter hook
  useSyntaxHighlighter();

  const copyToClipboard = () => {
    const codeToCopy = activeTab === "html" ? html : activeTab === "css" ? css : `${html}\n\n/* CSS */\n${css}`;
    
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: `${activeTab.toUpperCase()} code has been copied to your clipboard.`,
      });
      
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    // Re-highlight when the tab changes
    if (typeof window !== 'undefined' && window.Prism) {
      window.Prism.highlightAll();
    }
  }, [activeTab]);

  return (
    <Card className="w-full mb-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 p-6 border rounded-lg flex items-center justify-center bg-secondary/50 min-h-[200px]">
            {preview}
          </div>
          {customization && (
            <div className="w-full lg:w-72 space-y-4 p-4 border rounded-lg">
              <h3 className="font-medium">Customize</h3>
              {customization}
            </div>
          )}
        </div>
        <Tabs defaultValue="html" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex items-center justify-between mb-2">
            <TabsList>
              <TabsTrigger value="html">HTML</TabsTrigger>
              <TabsTrigger value="css">CSS</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1"
              onClick={copyToClipboard}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Clipboard className="h-4 w-4" />
                  <span>Copy</span>
                </>
              )}
            </Button>
          </div>
          <TabsContent value="html" className="mt-0">
            <pre>
              <code className="language-html">{html}</code>
            </pre>
          </TabsContent>
          <TabsContent value="css" className="mt-0">
            <pre>
              <code className="language-css">{css}</code>
            </pre>
          </TabsContent>
          <TabsContent value="all" className="mt-0">
            <pre>
              <code className="language-html">{html}</code>
            </pre>
            <pre className="mt-4">
              <code className="language-css">{css}</code>
            </pre>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col items-start text-sm text-muted-foreground">
        <h4 className="font-medium text-foreground mb-1">Usage Notes:</h4>
        <p>
          Copy and paste this code into your project. Customize as needed to match your project's design system.
        </p>
      </CardFooter>
    </Card>
  );
}
