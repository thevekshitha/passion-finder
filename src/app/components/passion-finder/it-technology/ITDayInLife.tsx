import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { ChevronRight, Coffee, Code, Users, Bug, BookOpen, Moon } from 'lucide-react';
import { NavigationBar } from '@/app/components/passion-finder/NavigationBar';

interface ITDayInLifeProps {
  specialization: string;
  onContinue: () => void;
  onBack: () => void;
  onTalkToMentor: () => void;
}

export function ITDayInLife({ specialization, onContinue, onBack, onTalkToMentor }: ITDayInLifeProps) {
  const timeline = [
    {
      time: '9:00 AM',
      title: 'Morning Standup',
      icon: Coffee,
      description: 'Start the day with team sync-up. Share what you worked on yesterday and your plan for today.',
      feeling: 'Energized and focused',
      color: 'from-orange-500 to-orange-600',
    },
    {
      time: '10:00 AM',
      title: 'Deep Work - Feature Development',
      icon: Code,
      description: 'Write code for a new feature. Working on implementing user authentication flow using JWT tokens.',
      feeling: 'In the zone, creative flow',
      color: 'from-blue-500 to-blue-600',
    },
    {
      time: '12:30 PM',
      title: 'Code Review Session',
      icon: Users,
      description: 'Review teammates code, provide feedback. Learn different approaches to solving problems.',
      feeling: 'Collaborative and learning',
      color: 'from-purple-500 to-purple-600',
    },
    {
      time: '2:00 PM',
      title: 'Debugging Production Issue',
      icon: Bug,
      description: 'Users reported a bug. Trace through logs, identify the issue in the payment gateway integration.',
      feeling: 'Focused, slight pressure',
      color: 'from-red-500 to-red-600',
    },
    {
      time: '4:00 PM',
      title: 'Learning New Technology',
      icon: BookOpen,
      description: 'Research and learn about new framework the team is considering. Watch tutorials, read documentation.',
      feeling: 'Curious and excited',
      color: 'from-green-500 to-green-600',
    },
    {
      time: '6:00 PM',
      title: 'Wrap Up & Documentation',
      icon: Moon,
      description: 'Update project documentation, commit code, plan tomorrow tasks. Respond to any pending messages.',
      feeling: 'Satisfied with the day',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

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
            IT & Technology <ChevronRight className="inline h-4 w-4 mx-1" /> ... <ChevronRight className="inline h-4 w-4 mx-1" /> Day in the Life
          </p>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            A Day in the Life
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience a typical workday through the eyes of a professional.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-12">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative pl-20">
                  {/* Time Marker */}
                  <div className="absolute left-0 top-0">
                    <div className={`p-3 bg-gradient-to-br ${item.color} rounded-full shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <Card className="border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {item.time}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-gray-700 mb-3">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500">Feeling:</span>
                        <span className="text-green-600 font-medium">{item.feeling}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Insight Box */}
        <Card className="border-2 bg-gradient-to-br from-blue-50 to-purple-50 mb-8">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              💡 Key Insights
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Work involves a <strong>mix of solo coding and team collaboration</strong></li>
              <li>• Every day is different - new problems to solve</li>
              <li>• Balance between building new features and fixing issues</li>
              <li>• Continuous learning is part of the job, not extra</li>
              <li>• Problem-solving satisfaction is a big part of daily joy</li>
            </ul>
          </CardContent>
        </Card>

        {/* Continue Button */}
        <div className="text-center">
          <Button
            onClick={onContinue}
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-lg"
          >
            Try a Practical Task
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
