import { Card, CardContent } from '@/app/components/ui/card';
import { ChevronRight, GraduationCap, Code, BookOpen, Globe } from 'lucide-react';
import { NavigationBar } from '@/app/components/passion-finder/NavigationBar';

interface ITEducationPathsProps {
  onSelect: (education: string) => void;
  onBack: () => void;
  onTalkToMentor: () => void;
}

const educationPaths = [
  {
    id: 'btech',
    title: 'B.Tech / B.E (CSE / IT / AI & DS)',
    icon: GraduationCap,
    duration: '4 years',
    description: 'Traditional engineering degree with strong fundamentals in computer science and programming',
    bestFor: 'Students seeking structured learning with strong theoretical foundation',
  },
  {
    id: 'bca-mca',
    title: 'BCA / MCA',
    icon: Code,
    duration: '3-5 years',
    description: 'Computer applications focused degree with emphasis on software development and applications',
    bestFor: 'Students preferring application-focused learning over pure engineering',
  },
  {
    id: 'integrated',
    title: 'Integrated Computer Science Programs',
    icon: BookOpen,
    duration: '5 years',
    description: 'Dual degree or integrated masters programs combining undergraduate and graduate studies',
    bestFor: 'Students wanting to fast-track their education and specialize early',
  },
  {
    id: 'self-learning',
    title: 'Self-Learning & Online Tech Pathways',
    icon: Globe,
    duration: 'Flexible',
    description: 'Online courses, bootcamps, certifications, and self-paced learning platforms',
    bestFor: 'Working professionals or those seeking practical skills without formal degree',
  },
];

export function ITEducationPaths({ onSelect, onBack, onTalkToMentor }: ITEducationPathsProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
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
            IT & Technology <ChevronRight className="inline h-4 w-4 mx-1" /> Education Paths
          </p>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your Education Path
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your educational background shapes your journey.
            <br />
            Select the path that aligns with your current or planned education.
          </p>
        </div>

        {/* Education Path Cards */}
        <div className="space-y-6">
          {educationPaths.map((path) => {
            const Icon = path.icon;
            return (
              <Card
                key={path.id}
                className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-green-500 group"
                onClick={() => onSelect(path.id)}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {path.title}
                        </h3>
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {path.duration}
                        </span>
                      </div>

                      <p className="text-gray-700 mb-4 text-lg">
                        {path.description}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-medium">Best for:</span>
                        <span>{path.bestFor}</span>
                      </div>
                    </div>

                    <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0 mt-2" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Help Text */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Still confused about which path to choose?{' '}
            <button
              onClick={onTalkToMentor}
              className="text-green-600 font-medium hover:underline"
            >
              Talk to a mentor
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
