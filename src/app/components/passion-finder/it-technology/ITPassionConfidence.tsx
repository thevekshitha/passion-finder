import { Card, CardContent } from '@/app/components/ui/card';
import { ChevronRight, TrendingDown, Minus, TrendingUp } from 'lucide-react';
import { NavigationBar } from '@/app/components/passion-finder/NavigationBar';

interface ITPassionConfidenceProps {
  onSelect: (confidence: string) => void;
  onBack: () => void;
  onTalkToMentor: () => void;
}

export function ITPassionConfidence({ onSelect, onBack, onTalkToMentor }: ITPassionConfidenceProps) {
  const confidenceLevels = [
    {
      id: 'low',
      title: 'Low Confidence',
      icon: TrendingDown,
      description: 'This doesn\'t feel like my path. I didn\'t enjoy the experience and don\'t see myself here.',
      nextStep: 'Try exploring another specialization or domain',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
    {
      id: 'medium',
      title: 'Medium Confidence',
      icon: Minus,
      description: 'I\'m interested but not fully convinced. I need more exploration and real-world exposure.',
      nextStep: 'Explore related specializations or get mentorship',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
    },
    {
      id: 'high',
      title: 'High Confidence',
      icon: TrendingUp,
      description: 'This feels right! I enjoyed it, I\'m curious, and I can see myself growing in this career.',
      nextStep: 'Get a personalized learning roadmap',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <NavigationBar 
          onBack={onBack} 
          onTalkToMentor={onTalkToMentor}
          mentorButtonColor="green"
        />

        {/* Breadcrumb */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            IT & Technology <ChevronRight className="inline h-4 w-4 mx-1" /> ... <ChevronRight className="inline h-4 w-4 mx-1" /> Passion Confidence
          </p>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Your Passion Confidence
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Based on your exploration, how confident are you about this career path?
          </p>
        </div>

        {/* Confidence Cards */}
        <div className="space-y-6 mb-12">
          {confidenceLevels.map((level) => {
            const Icon = level.icon;
            return (
              <Card
                key={level.id}
                className={`border-2 ${level.borderColor} ${level.bgColor} hover:shadow-xl transition-all duration-300 cursor-pointer group`}
                onClick={() => onSelect(level.id)}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`p-5 bg-gradient-to-br ${level.color} rounded-2xl group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">
                        {level.title}
                      </h3>

                      <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                        {level.description}
                      </p>

                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium text-gray-600">What's next:</span>
                        <span className="text-gray-700">{level.nextStep}</span>
                      </div>
                    </div>

                    <ChevronRight className="h-8 w-8 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0 mt-2" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Help Text */}
        <Card className="border-2 bg-white">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              💡 Remember
            </h3>
            <ul className="space-y-2 text-gray-700 max-w-2xl mx-auto">
              <li>• It's completely okay to have low or medium confidence - that's valuable discovery!</li>
              <li>• You can always come back and explore other paths</li>
              <li>• Most people don't find their passion on the first try</li>
              <li>• The journey of exploration itself teaches you about yourself</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
