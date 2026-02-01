import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/app/components/ui/breadcrumb';
import { ArrowLeft, GraduationCap, BookOpen, Laptop, ArrowRight } from 'lucide-react';

interface TechEducationPathsProps {
  onBack: () => void;
  onSelectPath?: (pathId: string) => void;
}

export function TechEducationPaths({ onBack, onSelectPath }: TechEducationPathsProps) {
  const educationPaths = [
    {
      id: 'btech',
      title: 'B.Tech / B.E (CSE / IT / AI & DS)',
      description: 'Traditional 4-year engineering degree with comprehensive technical foundation',
      icon: GraduationCap,
      duration: '4 years',
      type: 'Formal Degree',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'bca-mca',
      title: 'BCA / MCA',
      description: 'Bachelor/Master of Computer Applications for focused computer science education',
      icon: BookOpen,
      duration: '3-5 years',
      type: 'Formal Degree',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'integrated',
      title: 'Integrated Computer Science Programs',
      description: '5-year integrated programs combining undergraduate and postgraduate studies',
      icon: GraduationCap,
      duration: '5 years',
      type: 'Integrated Degree',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'self-learning',
      title: 'Self-Learning & Online Tech Pathways',
      description: 'Flexible learning through online courses, bootcamps, and self-study',
      icon: Laptop,
      duration: 'Flexible',
      type: 'Alternative Path',
      color: 'from-orange-500 to-orange-600'
    }
  ];

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
                  Technology Education Paths
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg px-6 py-2">
            STEP 1: EDUCATION FOUNDATION
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Technology Education Paths
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the educational path that aligns with your goals and circumstances
          </p>
        </div>

        {/* Education Paths Grid */}
        <div className="space-y-6 mb-12">
          {educationPaths.map((path, index) => {
            const Icon = path.icon;
            return (
              <Card 
                key={path.id}
                className="border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => onSelectPath && onSelectPath(path.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    {/* Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${path.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="h-10 w-10 text-white" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-600 font-bold border-2 border-green-500">
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                          {path.title}
                        </h3>
                        <ArrowRight className="h-6 w-6 text-green-600 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-gray-600 mb-4">{path.description}</p>
                      
                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">
                          {path.duration}
                        </Badge>
                        <Badge variant="outline" className="border-blue-300 text-blue-700 bg-blue-50">
                          {path.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Information Box */}
        <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                💡 Not sure which path is right for you?
              </h3>
              <p className="text-blue-700 mb-4">
                Each path has its own advantages. Traditional degrees offer structured learning and campus experience, 
                while self-learning paths provide flexibility and faster entry into the job market.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button 
                  variant="outline"
                  className="border-2 border-blue-500 text-blue-700 hover:bg-blue-50"
                >
                  Compare Education Paths
                </Button>
                <Button 
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                  onClick={() => onSelectPath && onSelectPath('continue')}
                >
                  Continue to Domains →
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Step Preview */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Next Step:</p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-xl border-2 border-gray-200">
            <span className="text-gray-700 font-medium">Explore IT & Technology Domains</span>
            <ArrowRight className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
