import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Phone, ChevronRight, RotateCcw, Layers, Map, Home, BookOpen, Users, User } from 'lucide-react';

interface ITNextActionsProps {
  confidence: string;
  onTryAnother: () => void;
  onExploreDomain: () => void;
  onGetRoadmap: () => void;
  onStartOver: () => void;
  onTalkToMentor: () => void;
}

export function ITNextActions({ confidence, onTryAnother, onExploreDomain, onGetRoadmap, onStartOver, onTalkToMentor }: ITNextActionsProps) {
  const getRecommendations = () => {
    if (confidence === 'high') {
      return {
        title: 'Great! You found a strong match! 🎉',
        subtitle: 'Here are your recommended next steps:',
        actions: [
          {
            id: 'roadmap',
            title: 'Get Your Learning Roadmap',
            description: 'Receive a personalized step-by-step plan to start your journey',
            icon: Map,
            onClick: onGetRoadmap,
            primary: true,
          },
          {
            id: 'mentor',
            title: 'Connect with a Mentor',
            description: 'Talk to professionals in this field for guidance',
            icon: Users,
            onClick: onTalkToMentor,
            primary: true,
          },
          {
            id: 'resources',
            title: 'Explore Learning Resources',
            description: 'Access curated courses, tutorials, and study materials',
            icon: BookOpen,
            onClick: onGetRoadmap,
            primary: false,
          },
        ],
      };
    } else if (confidence === 'medium') {
      return {
        title: 'You need more exploration',
        subtitle: 'That\'s perfectly normal! Here\'s what you can do:',
        actions: [
          {
            id: 'another',
            title: 'Try Another Specialization',
            description: 'Explore different specializations in the same domain',
            icon: Layers,
            onClick: onTryAnother,
            primary: true,
          },
          {
            id: 'mentor',
            title: 'Talk to a Mentor',
            description: 'Get guidance on which path might suit you better',
            icon: Users,
            onClick: onTalkToMentor,
            primary: true,
          },
          {
            id: 'domain',
            title: 'Explore Another Domain',
            description: 'Maybe a different technology domain resonates more',
            icon: RotateCcw,
            onClick: onExploreDomain,
            primary: false,
          },
        ],
      };
    } else {
      return {
        title: 'This path doesn\'t feel right - and that\'s okay!',
        subtitle: 'Discovery is about finding what doesn\'t work too:',
        actions: [
          {
            id: 'domain',
            title: 'Explore Another IT Domain',
            description: 'Try a completely different area of technology',
            icon: RotateCcw,
            onClick: onExploreDomain,
            primary: true,
          },
          {
            id: 'category',
            title: 'Explore Different Career Category',
            description: 'Maybe technology isn\'t your calling - try another field',
            icon: Home,
            onClick: onStartOver,
            primary: true,
          },
          {
            id: 'mentor',
            title: 'Talk to a Career Mentor',
            description: 'Get expert guidance on finding the right path for you',
            icon: Users,
            onClick: onTalkToMentor,
            primary: false,
          },
        ],
      };
    }
  };

  const recommendations = getRecommendations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header with Mentor Button */}
        <div className="flex justify-end items-center gap-3 mb-8">
          <Button
            onClick={onTalkToMentor}
            variant="outline"
            className="border-2 border-green-600 text-green-600 hover:bg-green-50"
          >
            <Phone className="h-4 w-4 mr-2" />
            Talk to a Mentor
          </Button>

          <Button
            onClick={() => alert('My Account feature - Coming soon!')}
            variant="outline"
            className="border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
          >
            <User className="h-4 w-4 mr-2" />
            My Account
          </Button>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {recommendations.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {recommendations.subtitle}
          </p>
        </div>

        {/* Action Cards */}
        <div className="space-y-6 mb-12">
          {recommendations.actions.map((action) => {
            const Icon = action.icon;
            return (
              <Card
                key={action.id}
                className={`border-2 hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                  action.primary ? 'border-green-300 bg-gradient-to-br from-white to-green-50' : ''
                }`}
                onClick={action.onClick}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`p-5 rounded-2xl group-hover:scale-110 transition-transform shadow-lg ${
                        action.primary
                          ? 'bg-gradient-to-br from-green-500 to-green-600'
                          : 'bg-gradient-to-br from-blue-500 to-blue-600'
                      }`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {action.title}
                      </h3>

                      <p className="text-gray-700 text-lg">
                        {action.description}
                      </p>
                    </div>

                    <ChevronRight className="h-8 w-8 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0 mt-2" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Journey Summary */}
        <Card className="border-2 bg-white mb-8">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Your Exploration Journey
            </h3>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 flex-wrap">
              <span>IT & Technology</span>
              <ChevronRight className="h-4 w-4" />
              <span>Education Path</span>
              <ChevronRight className="h-4 w-4" />
              <span>Domain</span>
              <ChevronRight className="h-4 w-4" />
              <span>Specialization</span>
              <ChevronRight className="h-4 w-4" />
              <span>Real-Life Exposure</span>
              <ChevronRight className="h-4 w-4" />
              <span>Practical Experience</span>
              <ChevronRight className="h-4 w-4" />
              <span>Self-Reflection</span>
              <ChevronRight className="h-4 w-4" />
              <span className="font-bold text-green-600">Confidence: {confidence.toUpperCase()}</span>
            </div>
          </CardContent>
        </Card>

        {/* Motivational Message */}
        <Card className="border-2 bg-gradient-to-br from-purple-50 to-blue-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🌟 Remember
            </h3>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Finding your passion is a journey, not a destination. Every exploration brings you closer to understanding yourself better. Keep exploring with an open mind!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
