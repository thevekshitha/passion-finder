import { CareerDetailTemplate } from './CareerDetailTemplate';

interface HealthcarePageProps {
  onBack: () => void;
}

export function HealthcarePage({ onBack }: HealthcarePageProps) {
  const data = {
    title: 'HEALTHCARE & LIFE SCIENCES',
    gradient: 'from-yellow-500 to-orange-500',
    borderColor: 'border-yellow-200',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-700',
    iconColor: 'text-yellow-600',
    educationPaths: [
      'MBBS / BDS / AYUSH',
      'B.Sc / M.Sc (Life Sciences & Allied Health)',
      'Nursing (GNM / B.Sc Nursing)',
      'Pharmacy (D.Pharm / B.Pharm / M.Pharm)',
      'Allied Health & Paramedical Programs',
      'Public Health & Health Administration Programs',
      'Research & Biotechnology Programs'
    ],
    domains: [
      'Clinical Medicine',
      'Nursing & Patient Care',
      'Allied Health & Paramedical Services',
      'Diagnostics & Laboratory Sciences',
      'Pharmacy & Drug Sciences',
      'Public Health & Healthcare Management',
      'Biotechnology & Life Sciences Research',
      'Medical Technology & Healthcare IT',
      'Mental Health & Rehabilitation'
    ],
    specializations: [
      { domain: 'Clinical Medicine', roles: ['General Physician', 'Specialist Doctor', 'Surgeon', 'Community Health Doctor'] },
      { domain: 'Nursing & Patient Care', roles: ['Staff Nurse', 'Critical Care Nurse', 'Community Health Nurse', 'Nurse Educator'] },
      { domain: 'Allied Health & Paramedical', roles: ['Physiotherapist', 'Radiology Technician', 'Operation Theatre Technician', 'Anesthesia Technician', 'Emergency Medical Technician'] },
      { domain: 'Diagnostics & Laboratory', roles: ['Medical Lab Technician', 'Pathology Technician', 'Microbiology Technician', 'Radiology Assistant'] },
      { domain: 'Pharmacy & Drug Sciences', roles: ['Clinical Pharmacist', 'Hospital Pharmacist', 'Pharmaceutical Research Associate', 'Drug Safety & Regulatory Associate'] }
    ],
    realLifeAspects: ['Daily responsibilities', 'Patient interaction level', 'Emotional & physical demands', 'Work environment & shifts', 'Growth & long-term stability'],
    dayInLife: 'Understanding hospital / lab / field routines • Observing real healthcare workflows',
    practicalExp: 'Case-based exposure • Simulated scenarios • Role-specific sample tasks',
    reflectionQuestions: [
      'Can I handle emotional pressure?',
      'Do I enjoy caring / diagnosing / researching?',
      'Is this lifestyle suitable for me?'
    ],
    mentorshipDesc: 'Interaction with healthcare professionals',
    nextActions: [
      'Explore another healthcare role',
      'Try a different healthcare domain',
      'Get a personalized preparation & learning roadmap'
    ]
  };

  return <CareerDetailTemplate data={data} onBack={onBack} />;
}
