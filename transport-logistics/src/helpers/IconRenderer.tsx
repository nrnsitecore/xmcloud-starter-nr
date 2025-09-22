import { Package, Truck, MapPin, Calculator, BarChart3, Calendar, Target } from "lucide-react";

const icons = {
  Package: Package,
  Truck: Truck,
  Pin: MapPin,
  Calculator: Calculator,
  BarChart3: BarChart3,
  Calendar: Calendar,
  Target: Target,
};

interface IconRendererProps {
  iconName?: string;
}

export default function IconRenderer({ iconName }: IconRendererProps) {
  const IconComponent = icons[iconName as keyof typeof icons] || Package;
  return <IconComponent className="h-12 w-12 mx-auto mb-4" />;
}