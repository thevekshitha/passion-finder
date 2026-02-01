import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { ChevronRight, Code, Server, Layers, Smartphone, Terminal } from 'lucide-react';
import { NavigationBar } from '@/app/components/passion-finder/NavigationBar';

interface ITSpecializationsProps {
  domain: string;
  onSelect: (specialization: string) => void;
  onBack: () => void;
  onTalkToMentor: () => void;
}

// Specializations map for different domains
const specializationsMap: { [key: string]: any[] } = {
  'software-development': [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Code,
      description: 'Build user interfaces and interactive web experiences',
      skills: ['React', 'Vue', 'HTML/CSS', 'JavaScript', 'UI/UX'],
      difficulty: 'Beginner Friendly',
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: Server,
      description: 'Create server-side logic, APIs, and database management',
      skills: ['Node.js', 'Python', 'Java', 'Databases', 'APIs'],
      difficulty: 'Intermediate',
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      icon: Layers,
      description: 'Master both frontend and backend development',
      skills: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'DevOps'],
      difficulty: 'Advanced',
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      icon: Smartphone,
      description: 'Build native or cross-platform mobile applications',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Mobile UI'],
      difficulty: 'Intermediate',
    },
    {
      id: 'systems',
      title: 'Systems Programming',
      icon: Terminal,
      description: 'Work on operating systems, compilers, and low-level code',
      skills: ['C/C++', 'Rust', 'Linux', 'Memory Management', 'Performance'],
      difficulty: 'Advanced',
    },
  ],
  // Default specializations for other domains
  default: [
    {
      id: 'specialist-1',
      title: 'Specialization Option 1',
      icon: Code,
      description: 'First specialization path in this domain',
      skills: ['Skill 1', 'Skill 2', 'Skill 3'],
      difficulty: 'Beginner Friendly',
    },
    {
      id: 'specialist-2',
      title: 'Specialization Option 2',
      icon: Server,
      description: 'Second specialization path in this domain',
      skills: ['Skill 4', 'Skill 5', 'Skill 6'],
      difficulty: 'Intermediate',
    },
    {
      id: 'specialist-3',
      title: 'Specialization Option 3',
      icon: Layers,
      description: 'Third specialization path in this domain',
      skills: ['Skill 7', 'Skill 8', 'Skill 9'],
      difficulty: 'Advanced',
    },
  ],
};

export function ITSpecializations({ domain, onSelect, onBack, onTalkToMentor }: ITSpecializationsProps) {
  const specializations = specializationsMap[domain] || specializationsMap.default;

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
            IT & Technology <ChevronRight className="inline h-4 w-4 mx-1" /> Education Paths{' '}
            <ChevronRight className="inline h-4 w-4 mx-1" /> Domains{' '}
            <ChevronRight className="inline h-4 w-4 mx-1" /> Specializations
          </p>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your Specialization
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Narrow down to a specific area you want to explore in depth.
          </p>
        </div>

        {/* Specialization Cards */}
        <div className="space-y-6">
          {specializations.map((spec) => {
            const Icon = spec.icon;
            return (
              <Card
                key={spec.id}
                className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-green-500 group"
                onClick={() => onSelect(spec.id)}
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
                          {spec.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="bg-blue-50 text-blue-700 font-medium"
                        >
                          {spec.difficulty}
                        </Badge>
                      </div>

                      <p className="text-gray-700 mb-4 text-lg">
                        {spec.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm font-medium text-gray-600">Key Skills:</span>
                        {spec.skills.map((skill: string, index: number) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
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
            Want to understand career prospects in each specialization?{' '}
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
