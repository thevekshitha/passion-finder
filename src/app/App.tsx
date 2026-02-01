import { useState, useEffect } from 'react';
import { HeroPage } from '@/app/components/passion-finder/HeroPage';
import { CategorySelection } from '@/app/components/passion-finder/CategorySelection';
import { MentorCallModal } from '@/app/components/passion-finder/MentorCallModal';

// IT & Technology Flow Pages
import { ITEducationPaths } from '@/app/components/passion-finder/it-technology/ITEducationPaths';
import { ITDomains } from '@/app/components/passion-finder/it-technology/ITDomains';
import { ITSpecializations } from '@/app/components/passion-finder/it-technology/ITSpecializations';
import { ITRealLifeExposure } from '@/app/components/passion-finder/it-technology/ITRealLifeExposure';
import { ITDayInLife } from '@/app/components/passion-finder/it-technology/ITDayInLife';
import { ITPracticalExperience } from '@/app/components/passion-finder/it-technology/ITPracticalExperience';
import { ITSelfReflection } from '@/app/components/passion-finder/it-technology/ITSelfReflection';
import { ITPassionConfidence } from '@/app/components/passion-finder/it-technology/ITPassionConfidence';
import { ITNextActions } from '@/app/components/passion-finder/it-technology/ITNextActions';

// Core Engineering Explorer
import { CoreEngineeringExplorer } from '@/app/components/career-details/CoreEngineeringExplorer';

// Other Category Placeholder Pages
import { CategoryFlow } from '@/app/components/passion-finder/CategoryFlow';

export default function App() {
  const [currentPage, setCurrentPage] = useState('hero');
  const [showMentorModal, setShowMentorModal] = useState(false);
  const [flowState, setFlowState] = useState<any>({
    category: null,
    education: null,
    domain: null,
    specialization: null,
    confidence: null,
  });

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  // Navigation handler
  const navigate = (page: string, state?: any) => {
    if (state) {
      setFlowState({ ...flowState, ...state });
    }
    setCurrentPage(page);
  };

  // Reset flow
  const resetFlow = () => {
    setFlowState({
      category: null,
      education: null,
      domain: null,
      specialization: null,
      confidence: null,
    });
    setCurrentPage('hero');
  };

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case 'hero':
        return (
          <HeroPage
            onStartExploring={() => navigate('categories')}
            onTalkToMentor={() => setShowMentorModal(true)}
          />
        );

      case 'categories':
        return (
          <CategorySelection
            onSelectCategory={(category: string) => {
              setFlowState({ ...flowState, category });
              // Route Core Engineering to the detailed explorer
              if (category === 'core-engineering') {
                navigate('core-engineering-explorer');
              } else {
                navigate(`${category}-education`);
              }
            }}
            onBack={() => navigate('hero')}
            onTalkToMentor={() => setShowMentorModal(true)}
          />
        );

      // IT & Technology Flow
      case 'it-technology-education':
        return (
          <ITEducationPaths
            onSelect={(education: string) => navigate('it-technology-domains', { education })}
            onBack={() => navigate('categories')}
            onTalkToMentor={() => setShowMentorModal(true)}
          />
        );

      case 'it-technology-domains':
        return (
          <ITDomains
            onSelect={(domain: string) => navigate('it-technology-specializations', { domain })}
            onBack={() => navigate('it-technology-education')}
            onTalkToMentor={() => setShowMentorModal(true)}
          />
        );

      case 'it-technology-specializations':
        return (
          <ITSpecializations
            domain={flowState.domain}
            onSelect={(specialization: string) => navigate('it-technology-exposure', { specialization })}
            onBack={() => navigate('it-technology-domains')}
            onTalkToMentor={() => setShowMentorModal(true)}
          />
        );

      case 'it-technology-exposure':
        return (
          <ITRealLifeExposure
            specialization={flowState.specialization}
            onContinue={() => navigate('it-technology-dayinlife')}
            onBack={() => navigate('it-technology-specializations')}
            onTalkToMentor={() => setShowMentorModal(true)}
          />
        );

      case 'it-technology-dayinlife':
        return (
          <ITDayInLife
            specialization={flowState.specialization}
            onContinue={() => navigate('it-technology-practical')}
            onBack={() => navigate('it-technology-exposure')}
            onTalkToMentor={() => setShowMentorModal(true)}
          />
        );

      case 'it-technology-practical':
        return (
          <ITPracticalExperience
            specialization={flowState.specialization}
            onContinue={() => navigate('it-technology-reflection')}
            onBack={() => navigate('it-technology-dayinlife')}
            onTalkToMentor={() => setShowMentorModal(true)}
          />
        );

      case 'it-technology-reflection':
        return (
          <ITSelfReflection
            onContinue={() => navigate('it-technology-confidence')}
            onBack={() => navigate('it-technology-practical')}
            onTalkToMentor={() => setShowMentorModal(true)}
          />
        );

      case 'it-technology-confidence':
        return (
          <ITPassionConfidence
            onSelect={(confidence: string) => navigate('it-technology-next', { confidence })}
            onBack={() => navigate('it-technology-reflection')}
            onTalkToMentor={() => setShowMentorModal(true)}
          />
        );

      case 'it-technology-next':
        return (
          <ITNextActions
            confidence={flowState.confidence}
            onTryAnother={() => navigate('it-technology-specializations')}
            onExploreDomain={() => navigate('it-technology-domains')}
            onGetRoadmap={() => setShowMentorModal(true)}
            onStartOver={() => resetFlow()}
            onTalkToMentor={() => setShowMentorModal(true)}
          />
        );

      // Core Engineering Explorer
      case 'core-engineering-explorer':
        return (
          <CoreEngineeringExplorer
            onBack={() => navigate('categories')}
            onTalkToMentor={() => setShowMentorModal(true)}
          />
        );

      // Other Categories (Placeholder Flow)
      case 'core-engineering-education':
      case 'healthcare-education':
      case 'government-education':
      case 'business-education':
      case 'creative-education':
      case 'education-research-education':
        return (
          <CategoryFlow
            category={flowState.category}
            onBack={() => navigate('categories')}
            onTalkToMentor={() => setShowMentorModal(true)}
            onComplete={() => resetFlow()}
          />
        );

      default:
        return (
          <HeroPage
            onStartExploring={() => navigate('categories')}
            onTalkToMentor={() => setShowMentorModal(true)}
          />
        );
    }
  };

  return (
    <>
      {renderPage()}
      <MentorCallModal
        open={showMentorModal}
        onClose={() => setShowMentorModal(false)}
      />
    </>
  );
}