import { CareerDetailTemplate } from './CareerDetailTemplate';

interface GovernmentPageProps {
  onBack: () => void;
}

export function GovernmentPage({ onBack }: GovernmentPageProps) {
  const data = {
    title: 'GOVERNMENT & PUBLIC SECTOR',
    gradient: 'from-red-500 to-rose-600',
    borderColor: 'border-red-200',
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
    iconColor: 'text-red-600',
    educationPaths: [
      '10th / 12th Based Exams',
      'Graduation Based Exams',
      'Post-Graduation Based Exams',
      'Professional Qualification Based Exams'
    ],
    domains: [
      'Civil Services',
      'Banking & Financial Services',
      'Defense & Security Services',
      'Public Sector Undertakings (PSUs)',
      'Education & Teaching Services',
      'State & Local Government Services',
      'Regulatory & Administrative Services'
    ],
    specializations: [
      { domain: 'Civil Services', roles: ['UPSC Civil Services', 'State Public Service Commissions', 'Central Administrative Services'] },
      { domain: 'Banking & Financial Services', roles: ['Probationary Officer', 'Clerk', 'Specialist Officer'] },
      { domain: 'Defense & Security', roles: ['Army / Navy / Air Force', 'Paramilitary Forces', 'Intelligence Services'] },
      { domain: 'Public Sector Undertakings', roles: ['Engineering Officer', 'Management Trainee', 'Technical Officer'] },
      { domain: 'Education & Teaching', roles: ['Government School Teacher', 'Lecturer / Professor', 'Educational Administrator'] },
      { domain: 'State & Local Government', roles: ['Municipal Officer', 'Revenue Officer', 'Rural Development Officer'] }
    ],
    realLifeAspects: ['Work responsibilities', 'Transfer & posting reality', 'Work-life balance', 'Authority & accountability'],
    dayInLife: 'Understanding administrative routines • Field vs office exposure',
    practicalExp: 'Scenario-based problem solving • Policy & decision simulations',
    reflectionQuestions: [
      'Can I handle responsibility & pressure?',
      'Am I comfortable with long preparation cycles?',
      'Do I value service & stability?'
    ],
    mentorshipDesc: 'Interaction with serving / retired officers',
    nextActions: [
      'Explore another government path',
      'Understand eligibility & timelines',
      'Create a long-term preparation roadmap'
    ]
  };

  return <CareerDetailTemplate data={data} onBack={onBack} />;
}
