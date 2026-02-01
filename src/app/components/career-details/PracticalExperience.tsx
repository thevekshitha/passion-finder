import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/app/components/ui/breadcrumb';
import { ArrowLeft, CheckCircle, Code, Lightbulb, FileText } from 'lucide-react';

interface PracticalExperienceProps {
  onBack: () => void;
}

export function PracticalExperience({ onBack }: PracticalExperienceProps) {
  const sampleTasks = [
    {
      title: 'Design a REST API',
      description: 'Create endpoints for a user authentication system',
      difficulty: 'Beginner',
      color: 'green'
    },
    {
      title: 'Database Schema Design',
      description: 'Design tables for an e-commerce product catalog',
      difficulty: 'Intermediate',
      color: 'blue'
    },
    {
      title: 'Debug Production Issue',
      description: 'Identify and fix a performance bottleneck in API response time',
      difficulty: 'Advanced',
      color: 'orange'
    }
  ];

  const learningOutcomes = [
    'Understand API design principles',
    'Experience real problem-solving scenarios',
    'Learn about backend architecture decisions',
    'Gain insights into debugging workflows'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Button onClick={onBack} variant="ghost" className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
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
                <BreadcrumbLink className="text-green-600 hover:text-green-700">
                  Software Development
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-green-600 hover:text-green-700">
                  Backend Development
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-700 font-medium">
                  Practical Experience
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg px-6 py-2">
            PRACTICAL EXPERIENCE
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Try Backend Development Tasks
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get hands-on experience with real-world backend development scenarios
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Sample Tasks */}
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Code className="h-6 w-6" />
                Sample Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {sampleTasks.map((task, index) => (
                  <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all hover:scale-102 cursor-pointer">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 text-lg">{task.title}</h4>
                              <Badge 
                                variant="outline" 
                                className={`mt-1 ${
                                  task.color === 'green' ? 'border-green-300 text-green-700 bg-green-50' :
                                  task.color === 'blue' ? 'border-blue-300 text-blue-700 bg-blue-50' :
                                  'border-orange-300 text-orange-700 bg-orange-50'
                                }`}
                              >
                                {task.difficulty}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-gray-600 ml-13">{task.description}</p>
                        </div>
                        <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                          Try Task →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Outcomes */}
          <Card className="border-2 border-blue-200">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Lightbulb className="h-6 w-6" />
                What You'll Learn
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{outcome}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mini Project Challenge */}
          <Card className="border-2 border-purple-200">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              <CardTitle className="text-2xl flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Mini Project Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 text-xl mb-3">
                    Build a Simple Blog API
                  </h4>
                  <p className="text-purple-800 mb-4">
                    Create a RESTful API with endpoints for creating, reading, updating, and deleting blog posts. 
                    Include user authentication and proper error handling.
                  </p>
                  <div className="space-y-2">
                    <h5 className="font-medium text-purple-900">Requirements:</h5>
                    <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                      <li>User registration and login endpoints</li>
                      <li>CRUD operations for blog posts</li>
                      <li>Database schema design</li>
                      <li>Input validation and error handling</li>
                      <li>API documentation</li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white">
                    Start Mini Project →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case Study */}
          <Card className="border-2 border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <CardTitle className="text-2xl">Real-World Case Study</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 text-xl mb-3">
                  Scaling an E-commerce Platform
                </h4>
                <p className="text-orange-800 mb-4">
                  Learn how a backend team handled a 10x increase in traffic during a flash sale event. 
                  Explore their architecture decisions, caching strategies, and database optimizations.
                </p>
                <div className="space-y-2">
                  <h5 className="font-medium text-orange-900">Key Topics Covered:</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-800 border-orange-300">Load Balancing</Badge>
                    <Badge className="bg-orange-100 text-orange-800 border-orange-300">Redis Caching</Badge>
                    <Badge className="bg-orange-100 text-orange-800 border-orange-300">Database Sharding</Badge>
                    <Badge className="bg-orange-100 text-orange-800 border-orange-300">Microservices</Badge>
                    <Badge className="bg-orange-100 text-orange-800 border-orange-300">Monitoring</Badge>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-700 hover:bg-orange-50">
                  Read Case Study →
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps Info */}
          <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-green-900 text-lg font-medium mb-2">
                  💭 After completing these tasks...
                </p>
                <p className="text-green-700 text-sm mb-6">
                  Reflect on your experience: Did you enjoy problem-solving? Were you curious or stressed? 
                  Can you see yourself doing this daily?
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                >
                  Continue to Self-Reflection →
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
