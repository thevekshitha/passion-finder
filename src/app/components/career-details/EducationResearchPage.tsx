import { CareerDetailTemplate } from './CareerDetailTemplate';

interface EducationResearchPageProps {
  onBack: () => void;
}

export function EducationResearchPage({ onBack }: EducationResearchPageProps) {
  const data = {
    title: 'EDUCATION, RESEARCH & SOCIAL IMPACT',
    gradient: 'from-amber-700 to-stone-600',
    borderColor: 'border-amber-300',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-800',
    iconColor: 'text-amber-700',
    educationPaths: [
      'Graduation & Post-Graduation',
      'Teaching Certifications',
      'Research Degrees (M.Phil / PhD)',
      'Social Sector Fellowships'
    ],
    domains: [
      'Teaching & Academics',
      'Educational Leadership',
      'Research & Innovation',
      'Social Impact & Development',
      'Policy & Think Tanks'
    ],
    specializations: [
      { domain: 'Teaching & Academics', roles: ['School Teacher', 'College Lecturer', 'Academic Trainer'] },
      { domain: 'Educational Leadership', roles: ['Principal', 'Academic Coordinator', 'Education Consultant'] },
      { domain: 'Research & Innovation', roles: ['Research Scientist', 'Academic Researcher', 'Policy Research Associate'] },
      { domain: 'Social Impact', roles: ['NGO Program Manager', 'Social Worker', 'Community Development Officer'] },
      { domain: 'Policy & Think Tanks', roles: ['Policy Analyst', 'Development Consultant', 'Impact Evaluation Specialist'] }
    ],
    realLifeAspects: ['Long-term impact focus', 'Lower financial rewards (initially)', 'High societal responsibility'],
    dayInLife: 'Understanding classrooms, field work & research cycles',
    practicalExp: 'Teaching simulation • Research analysis • Community case study',
    reflectionQuestions: [
      'Am I driven by impact over money?',
      'Do I enjoy learning & teaching?',
      'Can I work with patience & purpose?'
    ],
    mentorshipDesc: 'Interaction with educators & social leaders',
    nextActions: [
      'Explore another education or impact role',
      'Choose teaching, research or social work',
      'Create a long-term preparation roadmap'
    ]
  };

  return <CareerDetailTemplate data={data} onBack={onBack} />;
}
