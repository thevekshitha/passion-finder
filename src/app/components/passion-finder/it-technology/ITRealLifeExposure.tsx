import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { ChevronRight, Clock, Users, TrendingUp, AlertCircle, Briefcase, DollarSign } from 'lucide-react';
import { NavigationBar } from '@/app/components/passion-finder/NavigationBar';

interface ITRealLifeExposureProps {
  specialization: string;
  onContinue: () => void;
  onBack: () => void;
  onTalkToMentor: () => void;
}

export function ITRealLifeExposure({ specialization, onContinue, onBack, onTalkToMentor }: ITRealLifeExposureProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <NavigationBar 
          onBack={onBack} 
          onTalkToMentor={onTalkToMentor}
          mentorButtonColor="green"
        />

        {/* Breadcrumb */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            IT & Technology <ChevronRight className="inline h-4 w-4 mx-1" /> ... <ChevronRight className="inline h-4 w-4 mx-1" /> Real-Life Exposure
          </p>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Real-Life Exposure
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Understanding what this career actually looks like day-to-day.
          </p>
        </div>

        {/* Exposure Cards */}
        <div className="space-y-6 mb-12">
          {/* Daily Routine */}
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Daily Work Routine
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>• <strong>9:00 AM - 10:00 AM:</strong> Team standup, discuss blockers and daily goals</p>
                    <p>• <strong>10:00 AM - 1:00 PM:</strong> Deep focus work - coding, debugging, building features</p>
                    <p>• <strong>2:00 PM - 4:00 PM:</strong> Code reviews, team collaboration, pair programming</p>
                    <p>• <strong>4:00 PM - 6:00 PM:</strong> Meetings with product team, planning, documentation</p>
                    <p>• <strong>After hours:</strong> Learning new tools, staying updated with tech trends</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Environment */}
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Work Environment
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>• Mostly <strong>desk work</strong> with computer screens for 8-10 hours</p>
                    <p>• Can work <strong>remotely</strong> or from office (hybrid common)</p>
                    <p>• Collaborative environment with frequent team interactions</p>
                    <p>• Fast-paced with constant learning and adaptation needed</p>
                    <p>• Screen time intensive - requires good posture and eye care</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pressure & Expectations */}
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-xl">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Pressure & Expectations
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>• <strong>Deadlines</strong> can be tight, especially before product launches</p>
                    <p>• Need to <strong>debug issues quickly</strong> when systems break</p>
                    <p>• Continuous learning required - technology changes fast</p>
                    <p>• Problem-solving under pressure is common</p>
                    <p>• Sometimes requires working odd hours for urgent fixes</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Growth */}
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Career Growth & Stability
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>• <strong>High demand</strong> in job market globally</p>
                    <p>• Clear growth path: Junior → Senior → Lead → Architect/Manager</p>
                    <p>• Opportunities to switch companies for better compensation</p>
                    <p>• Can freelance or start your own ventures</p>
                    <p>• Salary growth potential is strong with experience</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Salary Expectations */}
          <Card className="border-2 bg-gradient-to-br from-green-50 to-blue-50">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-green-600 rounded-xl">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Salary Expectations (India)
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>• <strong>Fresher (0-1 year):</strong> ₹3-8 LPA depending on company</p>
                    <p>• <strong>Mid-level (3-5 years):</strong> ₹10-25 LPA</p>
                    <p>• <strong>Senior (7+ years):</strong> ₹25-60 LPA</p>
                    <p>• <strong>Top tech companies:</strong> Can offer ₹50+ LPA for experienced developers</p>
                    <p>• Compensation includes base salary, bonuses, and stock options</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <Button
            onClick={onContinue}
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-lg"
          >
            Continue to Day-in-the-Life Experience
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
