import { Card, CardContent } from '@/app/components/ui/card';
import { ChevronRight, Code, Globe, Smartphone, Database, Brain, Cloud, Shield, Network, Gamepad, Blocks, Briefcase } from 'lucide-react';
import { NavigationBar } from '@/app/components/passion-finder/NavigationBar';

interface ITDomainsProps {
  onSelect: (domain: string) => void;
  onBack: () => void;
  onTalkToMentor: () => void;
}

const domains = [
  {
    id: 'software-development',
    title: 'Software Development',
    icon: Code,
    description: 'Building applications, systems, and software products',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'web-technologies',
    title: 'Web Technologies',
    icon: Globe,
    description: 'Creating websites and web applications',
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 'mobile-technologies',
    title: 'Mobile Technologies',
    icon: Smartphone,
    description: 'Developing iOS and Android applications',
    color: 'from-pink-500 to-pink-600',
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    icon: Database,
    description: 'Analyzing data to extract insights and drive decisions',
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & ML',
    icon: Brain,
    description: 'Building intelligent systems and machine learning models',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Computing & DevOps',
    icon: Cloud,
    description: 'Managing infrastructure and deployment pipelines',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Ethical Hacking',
    icon: Shield,
    description: 'Protecting systems and data from threats',
    color: 'from-red-500 to-red-600',
  },
  {
    id: 'networking',
    title: 'Networking & Systems',
    icon: Network,
    description: 'Managing networks and system infrastructure',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    id: 'database',
    title: 'Database & Storage Technologies',
    icon: Database,
    description: 'Designing and managing data storage systems',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    id: 'product-engineering',
    title: 'Product & Platform Engineering',
    icon: Briefcase,
    description: 'Building scalable products and platforms',
    color: 'from-teal-500 to-teal-600',
  },
  {
    id: 'game-development',
    title: 'Game Development & AR/VR',
    icon: Gamepad,
    description: 'Creating games and immersive experiences',
    color: 'from-violet-500 to-violet-600',
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3 Technologies',
    icon: Blocks,
    description: 'Building decentralized applications and systems',
    color: 'from-emerald-500 to-emerald-600',
  },
];

export function ITDomains({ onSelect, onBack, onTalkToMentor }: ITDomainsProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
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
            <ChevronRight className="inline h-4 w-4 mx-1" /> Domains
          </p>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Select a Technology Domain
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technology is vast. Choose a domain that interests you to explore further.
          </p>
        </div>

        {/* Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <Card
                key={domain.id}
                className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-green-500 group"
                onClick={() => onSelect(domain.id)}
              >
                <CardContent className="p-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${domain.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {domain.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {domain.description}
                  </p>

                  <div className="flex items-center text-green-600 font-medium group-hover:gap-2 transition-all">
                    <span>Explore</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Help Text */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Can't decide? Our mentors can help you understand each domain better.
          </p>
        </div>
      </div>
    </div>
  );
}
