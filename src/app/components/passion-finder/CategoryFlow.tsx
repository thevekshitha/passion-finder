import { Card, CardContent } from '@/app/components/ui/card';
import { ChevronRight, Code, Construction } from 'lucide-react';
import { NavigationBar } from '@/app/components/passion-finder/NavigationBar';

interface CategoryFlowProps {
  category: string;
  onBack: () => void;
  onTalkToMentor: () => void;
  onComplete: () => void;
}

const categoryInfo: { [key: string]: { title: string; description: string } } = {
  'core-engineering': {
    title: 'Core Engineering (Non-IT)',
    description: 'Mechanical, Civil, Electrical, Electronics, Chemical, Aerospace, Robotics',
  },
  'healthcare': {
    title: 'Healthcare & Life Sciences',
    description: 'MBBS, Nursing, Pharmacy, Allied Health, Biotechnology',
  },
  'government': {
    title: 'Government & Public Sector',
    description: 'Civil Services, Banking, Defense, PSUs, Teaching',
  },
  'business': {
    title: 'Business, Management & Entrepreneurship',
    description: 'Marketing, Finance, HR, Operations, Startups',
  },
  'creative': {
    title: 'Creative, Media & Digital Careers',
    description: 'Design, Content, Media, Animation, Digital Marketing',
  },
  'education-research': {
    title: 'Education, Research & Social Impact',
    description: 'Teaching, Research, NGOs, Policy',
  },
};

export function CategoryFlow({ category, onBack, onTalkToMentor, onComplete }: CategoryFlowProps) {
  const info = categoryInfo[category] || { title: 'Career Category', description: 'Explore this career path' };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <NavigationBar 
          onBack={onBack} 
          onTalkToMentor={onTalkToMentor}
          backLabel="Back to Categories"
          mentorButtonColor="green"
        />

        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex p-5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <Construction className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {info.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {info.description}
          </p>
        </div>

        {/* Coming Soon Card */}
        <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white mb-8">
          <CardContent className="p-12 text-center">
            <div className="inline-flex p-4 bg-purple-100 rounded-full mb-6">
              <Construction className="h-10 w-10 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Full Exploration Flow Coming Soon!
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We're building a comprehensive step-by-step exploration journey for this category, 
              just like IT & Technology. It will include education paths, specializations, 
              real-life exposure, and personalized guidance.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
              <span>Flow Structure:</span>
              <ChevronRight className="h-4 w-4" />
              <span>Education Paths</span>
              <ChevronRight className="h-4 w-4" />
              <span>Domains</span>
              <ChevronRight className="h-4 w-4" />
              <span>Specializations</span>
              <ChevronRight className="h-4 w-4" />
              <span>Real-Life Exposure</span>
              <ChevronRight className="h-4 w-4" />
              <span>Day in Life</span>
              <ChevronRight className="h-4 w-4" />
              <span>Practical Experience</span>
              <ChevronRight className="h-4 w-4" />
              <span>Self-Reflection</span>
              <ChevronRight className="h-4 w-4" />
              <span>Passion Confidence</span>
            </div>
          </CardContent>
        </Card>

        {/* Emphasis Points */}
        <Card className="border-2 mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What This Category Will Emphasize
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category === 'core-engineering' && (
                <>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Field vs Office Work</p>
                    <p className="text-sm text-gray-600">Hands-on vs desk-based roles</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Responsibility & Safety</p>
                    <p className="text-sm text-gray-600">High-stakes decision making</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Physical Demands</p>
                    <p className="text-sm text-gray-600">Site visits and physical work</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Project Lifecycles</p>
                    <p className="text-sm text-gray-600">Long-term project involvement</p>
                  </div>
                </>
              )}
              {category === 'healthcare' && (
                <>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Emotional Load</p>
                    <p className="text-sm text-gray-600">Dealing with patient care and emotions</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Shift Work</p>
                    <p className="text-sm text-gray-600">Irregular hours and night shifts</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Patient Interaction</p>
                    <p className="text-sm text-gray-600">Direct care and communication</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Continuous Learning</p>
                    <p className="text-sm text-gray-600">Medical knowledge updates</p>
                  </div>
                </>
              )}
              {category === 'government' && (
                <>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Preparation Timeline</p>
                    <p className="text-sm text-gray-600">Years of focused exam prep</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Authority & Responsibility</p>
                    <p className="text-sm text-gray-600">Public service and decision-making</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Job Security</p>
                    <p className="text-sm text-gray-600">Stable but structured career path</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Exam-Based Entry</p>
                    <p className="text-sm text-gray-600">Competitive examinations</p>
                  </div>
                </>
              )}
              {category === 'business' && (
                <>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Targets & Performance</p>
                    <p className="text-sm text-gray-600">Results-driven environment</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Risk & Uncertainty</p>
                    <p className="text-sm text-gray-600">Dealing with market dynamics</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Accountability</p>
                    <p className="text-sm text-gray-600">Decision ownership and outcomes</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">People Management</p>
                    <p className="text-sm text-gray-600">Team leadership and collaboration</p>
                  </div>
                </>
              )}
              {category === 'creative' && (
                <>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Portfolio Building</p>
                    <p className="text-sm text-gray-600">Showcasing your work</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Income Instability</p>
                    <p className="text-sm text-gray-600">Freelance and project-based work</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Creativity Pressure</p>
                    <p className="text-sm text-gray-600">Constant ideation and innovation</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Client Management</p>
                    <p className="text-sm text-gray-600">Handling feedback and revisions</p>
                  </div>
                </>
              )}
              {category === 'education-research' && (
                <>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Impact Over Income</p>
                    <p className="text-sm text-gray-600">Making a difference vs high salary</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Long-term Contribution</p>
                    <p className="text-sm text-gray-600">Patience and sustained effort</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Research & Publication</p>
                    <p className="text-sm text-gray-600">Academic rigor and publishing</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">Social Impact</p>
                    <p className="text-sm text-gray-600">Community and societal change</p>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-gray-600 mb-6">
            In the meantime, you can explore IT & Technology or talk to our mentors for guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onTalkToMentor}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6"
            >
              <Phone className="h-5 w-5 mr-2" />
              Talk to a Career Mentor
            </Button>
            <Button
              onClick={onBack}
              variant="outline"
              className="px-8 py-6"
            >
              Explore Other Categories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
