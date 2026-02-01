import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { ArrowLeft, ArrowDown, CheckCircle, BookOpen, Users, Target, Heart, Phone, TrendingUp } from 'lucide-react';

interface CoreEngineeringPageProps {
  onBack: () => void;
}

export function CoreEngineeringPage({ onBack }: CoreEngineeringPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <Button onClick={onBack} variant="ghost" className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Categories
        </Button>

        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg px-6 py-2">
            CORE ENGINEERING (NON-IT)
          </Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Core Engineering Career Journey
          </h1>
          <p className="text-xl text-gray-600">EXPLORE → EXPERIENCE → REFLECT → DECIDE</p>
        </div>

        <div className="space-y-6">
          {/* Education Paths */}
          <Card className="border-2 border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Engineering Education Paths
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['B.Tech / B.E', 'Diploma / Polytechnic', 'Integrated Core Engineering Programs'].map((path, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <span className="font-medium text-gray-800">{path}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 text-orange-600 animate-bounce" />
          </div>

          {/* Engineering Branches */}
          <Card className="border-2 border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6" />
                Engineering Branches
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {['Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Electronics Engineering (Hardware-focused)', 'Chemical Engineering', 'Aerospace / Aeronautical Engineering', 'Robotics & Automation', 'Mechatronics Engineering', 'Instrumentation Engineering', 'Industrial Engineering'].map((branch, index) => (
                  <div key={index} className="p-3 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200 hover:shadow-md transition-all cursor-pointer">
                    <span className="text-sm font-medium text-gray-800">{branch}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 text-orange-600 animate-bounce" />
          </div>

          {/* Specializations */}
          <Card className="border-2 border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
              <CardTitle>Branch → Core Domains & Specializations</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {[
                  { domain: 'Mechanical Engineering', roles: ['Design Engineering', 'Manufacturing & Production', 'Thermal Engineering', 'Automotive Engineering', 'Maintenance & Operations'] },
                  { domain: 'Civil Engineering', roles: ['Structural Engineering', 'Construction & Site Management', 'Transportation Engineering', 'Environmental Engineering', 'Urban & Smart City Planning'] },
                  { domain: 'Electrical Engineering', roles: ['Power Systems', 'Electrical Machines', 'Control Systems', 'Renewable Energy Systems', 'Industrial Automation'] },
                  { domain: 'General Specializations', roles: ['Design Engineer', 'Site Engineer', 'Maintenance Engineer', 'Automation Engineer', 'Project Engineer', 'Quality & Safety Engineer'] }
                ].map((spec, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-orange-700 mb-3">{spec.domain} →</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-4">
                      {spec.roles.map((role, roleIndex) => (
                        <div key={roleIndex} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-orange-200">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 text-orange-600 animate-bounce" />
          </div>

          {/* Real-Life Exposure */}
          <Card className="border-2 border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                Real-Life Exposure
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <h4 className="font-semibold text-gray-800 mb-4">Career Reality Overview:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Field vs office work', 'Physical & mental demands', 'Safety & responsibility', 'Growth & stability'].map((aspect, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">{aspect}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2">Day-in-the-Life Experience</h5>
                  <p className="text-blue-800 text-sm">Understanding real site / plant / lab routines</p>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h5 className="font-semibold text-purple-900 mb-2">Practical Experience</h5>
                  <p className="text-purple-800 text-sm">Mini field scenario / Case-based exposure</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 text-orange-600 animate-bounce" />
          </div>

          {/* Self-Reflection */}
          <Card className="border-2 border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                Self-Reflection
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {['Do I enjoy field work?', 'Can I handle responsibility & pressure?', 'Is this lifestyle suitable for me?'].map((question, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                    <p className="text-gray-800 font-medium">💭 {question}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 text-orange-600 animate-bounce" />
          </div>

          {/* Call-Based Mentorship */}
          <Card className="border-2 border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-6 w-6" />
                Call-Based Mentorship
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-orange-50 rounded-lg text-center">
                  <Phone className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Interaction with practicing engineers</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg text-center">
                  <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Local-language guidance</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg text-center">
                  <Heart className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Family-inclusive discussion</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 text-orange-600 animate-bounce" />
          </div>

          {/* Passion Confidence Output */}
          <Card className="border-2 border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Passion Confidence Output
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex justify-center gap-4">
                <Badge variant="outline" className="px-6 py-3 text-lg border-red-300 text-red-700">Low</Badge>
                <Badge variant="outline" className="px-6 py-3 text-lg border-yellow-300 text-yellow-700">Medium</Badge>
                <Badge variant="outline" className="px-6 py-3 text-lg border-green-300 text-green-700">High</Badge>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 text-orange-600 animate-bounce" />
          </div>

          {/* Next Actions */}
          <Card className="border-2 border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
              <CardTitle>Next Actions</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {['Explore another branch', 'Try another specialization', 'Get a role-specific preparation roadmap'].map((action, index) => (
                  <Button key={index} className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-lg py-6">
                    {action}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center py-8">
            <div className="inline-block p-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-2">EXPLORE → EXPERIENCE → REFLECT → DECIDE</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
