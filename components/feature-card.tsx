import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  icon: LucideIcon;
}

export function FeatureCard({
  title,
  description,
  children,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <div className="rounded-xl p-6 shadow-lg dark:shadow-white/5 transition-all hover:shadow-xl max-w-6xl mx-auto mt-4">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary dark:bg-primary/20 p-2 dark:ring-8 dark:ring-primary/10 ">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground tracking-tight">{description}</p>
      {children}
    </div>
  );
}
