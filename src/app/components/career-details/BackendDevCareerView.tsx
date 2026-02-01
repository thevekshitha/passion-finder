import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb";
import {
  ArrowLeft,
  Clock,
  Briefcase,
  AlertTriangle,
  TrendingUp,
  Coffee,
  Code,
  MessageSquare,
  GitBranch,
  Bug,
  Users,
} from "lucide-react";

interface BackendDevCareerViewProps {
  onBack: () => void;
  onContinue?: () => void;
}

export function BackendDevCareerView({
  onBack,
  onContinue,
}: BackendDevCareerViewProps) {
  const careerReality = [
    {
      title: "Daily work routine",
      icon: Clock,
      description:
        "Code writing, debugging, code reviews, team meetings, and documentation",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Work environment",
      icon: Briefcase,
      description:
        "Hybrid/Remote setups, collaborative teams, agile sprints, flexible hours",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Pressure & expectations",
      icon: AlertTriangle,
      description:
        "Meeting deadlines, handling production bugs, maintaining code quality, on-call duties",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Career growth & stability",
      icon: TrendingUp,
      description:
        "High demand, clear progression path, continuous learning, competitive salaries",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const dayInLife = [
    {
      time: "9:00 AM",
      activity: "Daily standup meeting",
      icon: Users,
      description: "Team sync on progress and blockers",
    },
    {
      time: "9:30 AM",
      activity: "Code review session",
      icon: GitBranch,
      description: "Review teammates' pull requests",
    },
    {
      time: "10:30 AM",
      activity: "Feature development",
      icon: Code,
      description: "Write server-side code for new features",
    },
    {
      time: "12:30 PM",
      activity: "Lunch break",
      icon: Coffee,
      description: "Recharge and informal team discussions",
    },
    {
      time: "1:30 PM",
      activity: "Debug production issue",
      icon: Bug,
      description: "Investigate and fix critical bugs",
    },
    {
      time: "3:00 PM",
      activity: "Architecture discussion",
      icon: MessageSquare,
      description: "Design system improvements with team",
    },
    {
      time: "4:30 PM",
      activity: "API development & testing",
      icon: Code,
      description: "Build and test RESTful endpoints",
    },
    {
      time: "6:00 PM",
      activity: "Documentation & wrap-up",
      icon: Clock,
      description: "Update docs and plan next day",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6"
        >
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
                <BreadcrumbPage className="text-gray-700 font-medium">
                  Backend Development
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg px-6 py-2">
            REAL-LIFE EXPOSURE
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Backend Development – Real-Life Career View
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the reality of working as a Backend
            Developer
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Career Reality Overview */}
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardTitle className="text-2xl">
                Career Reality Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {careerReality.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={index}
                      className="border border-gray-200 hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 text-lg mb-2">
                              {item.title}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Day in the Life */}
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Clock className="h-6 w-6" />
                Day in the Life
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {dayInLife.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="relative">
                      {/* Timeline connector */}
                      {index < dayInLife.length - 1 && (
                        <div className="absolute left-6 top-16 w-0.5 h-8 bg-green-200"></div>
                      )}

                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full border-2 border-green-500 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="flex items-baseline gap-3 mb-1">
                            <Badge
                              variant="outline"
                              className="bg-white border-green-300 text-green-700 font-mono text-xs"
                            >
                              {item.time}
                            </Badge>
                            <h4 className="font-semibold text-gray-800">
                              {item.activity}
                            </h4>
                          </div>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Honest Reality Note */}
          <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-blue-900 text-lg font-medium mb-2">
                  💡 This is what real backend developers
                  experience daily
                </p>
                <p className="text-blue-700 text-sm">
                  The work is challenging but rewarding, with
                  opportunities to build systems used by
                  millions of users
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              onClick={onContinue}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg px-8 py-6"
            >
              Try a Sample Task →
            </Button>
            <Button
              onClick={onContinue}
              size="lg"
              variant="outline"
              className="border-2 border-green-500 text-green-700 hover:bg-green-50 text-lg px-8 py-6"
            >
              Continue to Reflection →
            </Button>
          </div>

          {/* Bottom Info */}
          <div className="text-center pt-4 pb-8">
            <p className="text-gray-500 text-sm">
              Experience hands-on tasks to see if this career
              path resonates with you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}