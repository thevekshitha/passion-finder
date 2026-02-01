import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/app/components/ui/breadcrumb';
import { ArrowLeft, Hexagon, ArrowRight } from 'lucide-react';

interface SoftwareDevPageProps {
  onBack: () => void;
  onNavigateToBackend?: () => void;
}

export function SoftwareDevPage({ onBack, onNavigateToBackend }: SoftwareDevPageProps) {
  const specializations = [
    { 
      id: 'frontend', 
      title: 'Frontend Development',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      id: 'backend', 
      title: 'Backend Development',
      color: 'from-green-500 to-green-600'
    },
    { 
      id: 'fullstack', 
      title: 'Full-Stack Development',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      id: 'mobile', 
      title: 'Mobile App Development',
      color: 'from-orange-500 to-orange-600'
    },
    { 
      id: 'systems', 
      title: 'Systems Programming',
      color: 'from-red-500 to-red-600'
    }
  ];

  const handleSpecializationClick = (id: string) => {
    if (id === 'backend' && onNavigateToBackend) {
      onNavigateToBackend();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Button onClick={onBack} variant="ghost" className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Categories
        </Button>

        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-green-600 hover:text-green-700">
                  IT & Technology
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-700 font-medium">
                  Software Development
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Software Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your specialization path
          </p>
        </div>

        {/* Flowchart-style Specialization Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {specializations.map((spec, index) => (
            <div key={spec.id} className="relative">
              {/* Specialization Card with Hexagon Style */}
              <Card 
                className={`relative overflow-hidden border-2 ${
                  spec.id === 'backend' 
                    ? 'border-green-400 shadow-lg hover:shadow-xl cursor-pointer' 
                    : 'border-gray-200 hover:border-gray-300 cursor-pointer'
                } transition-all duration-300 hover:scale-105`}
                onClick={() => handleSpecializationClick(spec.id)}
              >
                <div className="flex items-center gap-6 p-6">
                  {/* Hexagon Icon */}
                  <div className={`relative flex-shrink-0`}>
                    <Hexagon className={`h-20 w-20 fill-current text-transparent stroke-2 bg-gradient-to-br ${spec.color} rounded-lg p-4`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                      {spec.title}
                    </h3>
                    {spec.id === 'backend' && (
                      <Badge className="bg-green-100 text-green-700 border-green-300 mt-2">
                        Click to explore career reality →
                      </Badge>
                    )}
                  </div>

                  {/* Arrow Indicator */}
                  <ArrowRight className={`h-6 w-6 ${spec.id === 'backend' ? 'text-green-600' : 'text-gray-400'}`} />
                </div>
              </Card>

              {/* Connecting Arrow (except for last item) */}
              {index < specializations.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-gray-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border border-green-200">
            <p className="text-green-800 font-medium">
              💡 Select a specialization to explore detailed career paths and real-world insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
