import { CareerDetailTemplate } from './CareerDetailTemplate';

interface BusinessPageProps {
  onBack: () => void;
}

export function BusinessPage({ onBack }: BusinessPageProps) {
  const data = {
    title: 'BUSINESS, MANAGEMENT & ENTREPRENEURSHIP',
    gradient: 'from-amber-500 to-yellow-600',
    borderColor: 'border-amber-200',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-700',
    iconColor: 'text-amber-600',
    educationPaths: [
      'BBA / B.Com / BBM',
      'MBA / PGDM',
      'Professional Certifications',
      'Startup & Self-Business Routes'
    ],
    domains: [
      'Marketing & Sales',
      'Human Resources',
      'Finance & Accounting',
      'Operations & Supply Chain',
      'Business Analytics & Strategy',
      'Entrepreneurship & Startups',
      'Consulting & Corporate Leadership'
    ],
    specializations: [
      { domain: 'Marketing & Sales', roles: ['Digital Marketer', 'Brand Manager', 'Sales Manager', 'Growth Strategist'] },
      { domain: 'Human Resources', roles: ['HR Executive', 'Talent Acquisition Specialist', 'Learning & Development Manager'] },
      { domain: 'Finance & Accounting', roles: ['Financial Analyst', 'Chartered Accountant', 'Investment Analyst', 'Risk & Compliance Officer'] },
      { domain: 'Operations & Supply Chain', roles: ['Operations Manager', 'Logistics & Supply Chain Analyst', 'Quality Manager'] },
      { domain: 'Business Analytics & Strategy', roles: ['Business Analyst', 'Strategy Consultant', 'Product Strategy Analyst'] },
      { domain: 'Entrepreneurship', roles: ['Startup Founder', 'Small Business Owner', 'Social Entrepreneur'] }
    ],
    realLifeAspects: ['Targets & performance pressure', 'People & stakeholder management', 'Financial risk & responsibility'],
    dayInLife: 'Understanding meetings, decisions & execution',
    practicalExp: 'Case studies • Market simulations • Business problem-solving',
    reflectionQuestions: [
      'Am I comfortable with risk & accountability?',
      'Do I enjoy decision-making & leadership?',
      'Can I handle uncertainty?'
    ],
    mentorshipDesc: 'Interaction with founders & managers',
    nextActions: [
      'Explore another business function',
      'Choose corporate or entrepreneurial path',
      'Get a skill & learning roadmap'
    ]
  };

  return <CareerDetailTemplate data={data} onBack={onBack} />;
}
