
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ComponentCardProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  href: string;
  className?: string;
}

export function ComponentCard({
  title,
  description,
  preview,
  href,
  className,
}: ComponentCardProps) {
  return (
    <Link to={href}>
      <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
        <CardContent className="p-6 flex items-center justify-center bg-secondary/50 h-[180px]">
          <div className="w-full">{preview}</div>
        </CardContent>
        <CardFooter className="flex flex-col items-start p-4 gap-1">
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
