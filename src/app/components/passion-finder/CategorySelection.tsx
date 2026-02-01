import { Card, CardContent } from '@/app/components/ui/card';
import { Code, Wrench, Heart, Building, Briefcase, Palette, BookOpen } from 'lucide-react';
import { NavigationBar } from '@/app/components/passion-finder/NavigationBar';

interface CategorySelectionProps {
  onSelectCategory: (category: string) => void;
  onBack: () => void;
  onTalkToMentor: () => void;
}

const categories = [
  {
    id: 'it-technology',
    title: 'IT & Technology',
    icon: Code,
    description: 'Software, AI, Cloud, Cybersecurity, and Tech Roles',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'core-engineering',
    title: 'Core Engineering',
    icon: Wrench,
    description: 'Mechanical, Civil, Electrical, Aerospace, and more',
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    icon: Heart,
    description: 'Medicine, Nursing, Pharmacy, Biotechnology',
    color: 'from-red-500 to-red-600',
  },
  {
    id: 'government',
    title: 'Government & Public Sector',
    icon: Building,
    description: 'Civil Services, Banking, Defense, PSUs',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    id: 'business',
    title: 'Business & Entrepreneurship',
    icon: Briefcase,
    description: 'Marketing, Finance, HR, Operations, Startups',
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 'creative',
    title: 'Creative, Media & Digital',
    icon: Palette,
    description: 'Design, Content, Animation, Digital Marketing',
    color: 'from-pink-500 to-pink-600',
  },
  {
    id: 'education-research',
    title: 'Education & Research',
    icon: BookOpen,
    description: 'Teaching, Research, NGOs, Policy, Social Impact',
    color: 'from-green-500 to-green-600',
  },
];

export function CategorySelection({ onSelectCategory, onBack, onTalkToMentor }: CategorySelectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <NavigationBar 
          onBack={onBack} 
          onTalkToMentor={onTalkToMentor}
          mentorButtonColor="green"
        />

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your Career Category
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select a category to begin your exploration journey.
            <br />
            Each path is unique and designed for deep discovery.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                className="hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-green-500 group"
                onClick={() => onSelectCategory(category.id)}
              >
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${category.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Help Text */}
        <div className="text-center">
          <p className="text-gray-500">
            Not sure where to start? Talk to our career mentors for guidance.
          </p>
        </div>
      </div>
    </div>
  );
}
