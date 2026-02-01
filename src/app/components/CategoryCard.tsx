import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  count: string;
  color: string;
  onClick?: () => void;
}

export function CategoryCard({ icon: Icon, title, count, color, onClick }: CategoryCardProps) {
  return (
    <Card 
      className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <CardContent className="p-6 text-center">
        <div className={`inline-flex p-4 rounded-2xl ${color} mb-4 transition-transform group-hover:scale-110 duration-300`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl mb-1">{title}</h3>
        <p className="text-gray-500">{count} courses</p>
      </CardContent>
    </Card>
  );
}