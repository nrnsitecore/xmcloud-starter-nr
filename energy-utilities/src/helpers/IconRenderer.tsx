import { Snowflake, Clock, Lightbulb, Home, Zap } from "lucide-react";

const icons = {
  Snowflake: Snowflake,
  Clock: Clock,
  Lightbulb: Lightbulb,
  Home: Home,
  Zap: Zap,
};

interface IconRendererProps {
  iconName?: string;
}

export default function IconRenderer({ iconName }: IconRendererProps) {
  console.log(iconName);
  const IconComponent = icons[iconName as keyof typeof icons] || Zap;
  return <IconComponent className="h-12 w-12 mx-auto text-blue-600 mb-4" />;
}