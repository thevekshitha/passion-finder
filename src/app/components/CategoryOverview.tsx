import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { categories } from '@/app/data/categories';
import { Layers, TrendingUp } from 'lucide-react';

interface CategoryOverviewProps {
  onCategorySelect?: (categoryId: string) => void;
}

export function CategoryOverview({ onCategorySelect }: CategoryOverviewProps) {
  const totalSubDomains = categories.reduce((sum, cat) => sum + cat.subDomains.length, 0);
  const totalSpecializations = categories.reduce(
    (sum, cat) => sum + cat.subDomains.reduce((s, sd) => s + sd.specializations.length, 0),
    0
  );

  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100 rounded-2xl opacity-50" />
      
      <Card className="relative border-2 border-purple-200">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600">
              Career Path Navigator
            </Badge>
            <h3 className="text-2xl md:text-3xl mb-3">
              Choose Your Professional Journey
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Navigate through {categories.length} major career categories, {totalSubDomains} specialized domains, 
              and {totalSpecializations} unique career paths
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {categories.map((category, index) => {
              const totalPaths = category.subDomains.reduce(
                (sum, sd) => sum + sd.specializations.length,
                0
              );

              return (
                <div
                  key={category.id}
                  onClick={() => onCategorySelect && onCategorySelect(`explore-${category.id}`)}
                  className="group relative overflow-hidden rounded-lg transition-all hover:scale-105 cursor-pointer"
                >
                  <div className={`h-full p-4 bg-gradient-to-br ${category.gradient} text-white`}>
                    <div className="flex flex-col items-center text-center gap-2">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        <Layers className="h-5 w-5" />
                      </div>
                      <div className="text-xs font-semibold leading-tight">
                        {category.name.split(' ').map((word, i) => (
                          <div key={i}>{word}</div>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-xs bg-white/20 px-2 py-1 rounded-full">
                        <TrendingUp className="h-3 w-3" />
                        <span>{totalPaths}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Click on any category to explore detailed career paths and educational pathways
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}