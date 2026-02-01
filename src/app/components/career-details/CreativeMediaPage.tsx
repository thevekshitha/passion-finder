import { CareerDetailTemplate } from './CareerDetailTemplate';

interface CreativeMediaPageProps {
  onBack: () => void;
}

export function CreativeMediaPage({ onBack }: CreativeMediaPageProps) {
  const data = {
    title: 'CREATIVE, MEDIA & DIGITAL CAREERS',
    gradient: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-200',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-700',
    iconColor: 'text-purple-600',
    educationPaths: [
      'Formal Education',
      'Online Learning & Courses',
      'Self-Taught & Portfolio-Based Entry',
      'Freelancing & Independent Work'
    ],
    domains: [
      'Design & Visual Arts',
      'Content & Writing',
      'Media & Film',
      'Digital Marketing & Social Media',
      'Animation, Gaming & AR/VR',
      'Performing & Applied Arts'
    ],
    specializations: [
      { domain: 'Design & Visual Arts', roles: ['Graphic Designer', 'UI / UX Designer', 'Visual Communication Designer'] },
      { domain: 'Content & Writing', roles: ['Content Writer', 'Copywriter', 'Technical Writer'] },
      { domain: 'Media & Film', roles: ['Video Editor', 'Cinematographer', 'Media Producer'] },
      { domain: 'Digital Marketing', roles: ['Social Media Manager', 'SEO / Performance Marketer', 'Content Strategist'] },
      { domain: 'Animation & Gaming', roles: ['Animator', 'Game Artist', 'AR / VR Designer'] }
    ],
    realLifeAspects: ['Income instability', 'Creative pressure', 'Client & deadline management', 'Portfolio dependency'],
    dayInLife: 'Understanding creative workflows • Client feedback & revisions',
    practicalExp: 'Creative mini-project • Portfolio review • Skill-based task',
    reflectionQuestions: [
      'Do I enjoy continuous creation?',
      'Can I handle feedback & rejection?',
      'Am I disciplined without structure?'
    ],
    mentorshipDesc: 'Interaction with working creatives',
    nextActions: [
      'Explore another creative path',
      'Strengthen portfolio',
      'Create a skill-growth roadmap'
    ]
  };

  return <CareerDetailTemplate data={data} onBack={onBack} />;
}
