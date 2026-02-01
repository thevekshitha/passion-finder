import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { ArrowLeft, ArrowDown, CheckCircle, BookOpen, Users, Target, Heart, Phone, TrendingUp } from 'lucide-react';

interface TechnologyITPageProps {
  onBack: () => void;
}

export function TechnologyITPage({ onBack }: TechnologyITPageProps) {
  const educationPaths = [
    'B.Tech / B.E (CSE / IT / AI & DS)',
    'BCA / MCA',
    'Integrated Computer Science Programs',
    'Self-Learning & Online Tech Pathways'
  ];

  const domains = [
    'Software Development',
    'Web Technologies',
    'Mobile Technologies',
    'Data Science & Analytics',
    'Artificial Intelligence & Machine Learning',
    'Cybersecurity & Ethical Hacking',
    'Cloud Computing & DevOps',
    'Networking & Systems',
    'Database & Storage Technologies',
    'Product & Platform Engineering',
    'Game Development & AR/VR',
    'Blockchain & Web3 Technologies',
    'Technical Product & Management Roles'
  ];

  const specializations = [
    {
      domain: 'Software Development',
      roles: ['Frontend Development', 'Backend Development', 'Full-Stack Development', 'Mobile App Development', 'Systems Programming']
    },
    {
      domain: 'Web & Mobile',
      roles: ['React / Angular Development', 'Web Performance Engineering', 'Android Development', 'iOS Development', 'Cross-Platform Development']
    },
    {
      domain: 'Data & AI',
      roles: ['Data Analyst', 'Business Analyst', 'Machine Learning Engineer', 'AI Engineer', 'Applied Data Scientist']
    },
    {
      domain: 'Cybersecurity',
      roles: ['Security Analyst', 'Ethical Hacker', 'Penetration Tester', 'SOC Analyst']
    },
    {
      domain: 'Cloud & DevOps',
      roles: ['Cloud Engineer', 'DevOps Engineer', 'Site Reliability Engineer', 'Platform Engineer']
    }
  ];

  const realLifeAspects = [
    'Daily work routine',
    'Work environment',
    'Pressure & expectations',
    'Career growth & stability'
  ];

  const selfReflectionQuestions = [
    'Did I enjoy this work?',
    'Was I curious or stressed?',
    'Can I see myself doing this long-term?'
  ];

  const nextActions = [
    'Try another specialization',
    'Explore another IT domain',
    'Get a personalized learning roadmap'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <Button onClick={onBack} variant="ghost" className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Categories
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg px-6 py-2">
            IT & TECHNOLOGY
          </Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Technology Career Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EXPLORE → EXPERIENCE → REFLECT → DECIDE
          </p>
        </div>

        {/* Flow Journey */}
        <div className="space-y-6">
          {/* Education Paths */}
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Technology Education Paths
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {educationPaths.map((path, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="font-medium text-gray-800">{path}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 text-green-600 animate-bounce" />
          </div>

          {/* IT Domains */}
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6" />
                IT & Technology Domains
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {domains.map((domain, index) => (
                  <div key={index} className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-all cursor-pointer">
                    <span className="text-sm font-medium text-gray-800">{domain}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 text-green-600 animate-bounce" />
          </div>

          {/* Specializations */}
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardTitle>Domain → Specializations</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {specializations.map((spec, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-green-700 mb-3">{spec.domain} →</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-4">
                      {spec.roles.map((role, roleIndex) => (
                        <div key={roleIndex} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-green-200">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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
            <ArrowDown className="h-8 w-8 text-green-600 animate-bounce" />
          </div>

          {/* Real-Life Exposure */}
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                Real-Life Exposure
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <h4 className="font-semibold text-gray-800 mb-4">Career Reality Overview:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {realLifeAspects.map((aspect, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{aspect}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2">Day-in-the-Life Experience</h5>
                  <p className="text-blue-800 text-sm">Observation of real professional workflows</p>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h5 className="font-semibold text-purple-900 mb-2">Practical Experience</h5>
                  <p className="text-purple-800 text-sm">Mini task / Sample project / Case study</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 text-green-600 animate-bounce" />
          </div>

          {/* Self-Reflection */}
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                Self-Reflection
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {selfReflectionQuestions.map((question, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                    <p className="text-gray-800 font-medium">💭 {question}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 text-green-600 animate-bounce" />
          </div>

          {/* Call-Based Mentorship */}
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-6 w-6" />
                Call-Based Mentorship
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 rounded-lg text-center">
                  <Phone className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Voice-based professional guidance</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Local-language support</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg text-center">
                  <Heart className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Parent-inclusive discussion</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 text-green-600 animate-bounce" />
          </div>

          {/* Passion Confidence Output */}
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Passion Confidence Output
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex justify-center gap-4">
                <Badge variant="outline" className="px-6 py-3 text-lg border-red-300 text-red-700">
                  Low Passion Alignment
                </Badge>
                <Badge variant="outline" className="px-6 py-3 text-lg border-yellow-300 text-yellow-700">
                  Medium Passion Alignment
                </Badge>
                <Badge variant="outline" className="px-6 py-3 text-lg border-green-300 text-green-700">
                  High Passion Alignment
                </Badge>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="h-8 w-8 text-green-600 animate-bounce" />
          </div>

          {/* Next Actions */}
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardTitle>Next Actions</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {nextActions.map((action, index) => (
                  <Button
                    key={index}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-lg py-6"
                  >
                    {action}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <div className="text-center py-8">
            <div className="inline-block p-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-2">EXPLORE → EXPERIENCE → REFLECT → DECIDE</h3>
              <p className="text-green-100">Your journey to finding your perfect tech career starts here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
