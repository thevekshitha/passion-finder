import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { ChevronRight, ChevronDown, BookOpen, Users, Target } from 'lucide-react';
import { categories, Category, SubDomain } from '@/app/data/categories';

interface CategoryExplorerProps {
  onCategorySelect?: (categoryId: string) => void;
}

export function CategoryExplorer({ onCategorySelect }: CategoryExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [expandedSubDomains, setExpandedSubDomains] = useState<Set<string>>(new Set());

  const toggleSubDomain = (subDomainName: string) => {
    const newExpanded = new Set(expandedSubDomains);
    if (newExpanded.has(subDomainName)) {
      newExpanded.delete(subDomainName);
    } else {
      newExpanded.add(subDomainName);
    }
    setExpandedSubDomains(newExpanded);
  };

  const handleCategoryClick = (category: Category) => {
    if (onCategorySelect) {
      // Special handling for Technology & IT - navigate to education paths
      if (category.id === 'tech-it') {
        onCategorySelect('tech-education');
      } else {
        onCategorySelect(category.id);
      }
    } else {
      setSelectedCategory(category);
      setExpandedSubDomains(new Set());
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Grid */}
      <div>
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Explore Career Paths
          </h3>
          <p className="text-gray-600 text-lg">
            Choose your domain and discover specialized learning paths
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const totalSpecializations = category.subDomains.reduce(
              (sum, sd) => sum + sd.specializations.length,
              0
            );
            
            return (
              <Card
                key={category.id}
                className={`group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  selectedCategory?.id === category.id
                    ? 'ring-2 ring-purple-500 shadow-xl scale-105'
                    : ''
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                <div className={`h-2 bg-gradient-to-r ${category.gradient}`} />
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.gradient} mb-4 transition-transform group-hover:scale-110 duration-300`}>
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg mb-2 group-hover:text-purple-600 transition-colors">
                    {category.name}
                  </h4>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Target className="h-4 w-4" />
                      <span>{category.subDomains.length} Domains</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{totalSpecializations} Paths</span>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Explore →
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Selected Category Details */}
      {selectedCategory && (
        <Card className="border-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <CardHeader className={`bg-gradient-to-r ${selectedCategory.gradient} text-white`}>
            <CardTitle className="flex items-center justify-between text-2xl">
              <span>{selectedCategory.name}</span>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                {selectedCategory.subDomains.length} Sub-Domains
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {selectedCategory.subDomains.map((subDomain, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden transition-all hover:shadow-md"
                >
                  <button
                    onClick={() => toggleSubDomain(subDomain.name)}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${selectedCategory.gradient}`}>
                        {expandedSubDomains.has(subDomain.name) ? (
                          <ChevronDown className="h-5 w-5 text-white" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-white" />
                        )}
                      </div>
                      <span className="font-semibold text-lg">{subDomain.name}</span>
                    </div>
                    <Badge variant="outline">
                      {subDomain.specializations.length} Specializations
                    </Badge>
                  </button>

                  {expandedSubDomains.has(subDomain.name) && (
                    <div className="p-4 bg-white animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {subDomain.specializations.map((spec, specIndex) => (
                          <div
                            key={specIndex}
                            className="group flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all cursor-pointer"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedCategory.gradient}`} />
                            <span className="text-sm group-hover:text-purple-700 transition-colors">
                              {spec.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <Button className={`flex-1 bg-gradient-to-r ${selectedCategory.gradient} hover:opacity-90`}>
                Start Learning in {selectedCategory.name}
              </Button>
              <Button variant="outline" onClick={() => setSelectedCategory(null)}>
                Browse Other Categories
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}