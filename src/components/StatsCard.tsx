import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  icon: LucideIcon;
  iconColor: string;
  label: string;
  value: string | number;
  glowColor: string;
}

const StatsCard = ({ icon: Icon, iconColor, label, value, glowColor }: StatsCardProps) => {
  return (
    <Card className={`glass-card h-20 transition-all duration-300 hover:shadow-[0_0_15px_${glowColor}]`}>
      <CardContent className="flex items-center h-full p-4">
        <div className="flex items-center gap-4 w-full">
          <Icon size={24} className={iconColor} />
          <div className="flex flex-col items-start">
            <div className="font-medium text-sm">{label}</div>
            <div className="text-xl font-bold">{value}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;