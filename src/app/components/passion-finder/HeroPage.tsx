import { useState, useRef, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { Sparkles, Phone, User, UserCircle, Bookmark, History, Settings } from 'lucide-react';

interface HeroPageProps {
  onStartExploring: () => void;
  onTalkToMentor: () => void;
}

export function HeroPage({ onStartExploring, onTalkToMentor }: HeroPageProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (item: string) => {
    setIsDropdownOpen(false);
    // Placeholder for menu item actions
    alert(`${item} - Coming soon!`);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isDropdownOpen]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation Bar */}
      <nav className="w-full px-6 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-sm">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">PASSION FINDER</span>
          </div>

          {/* My Account Button with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <Button
              onClick={toggleDropdown}
              variant="outline"
              className="border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
            >
              <User className="h-4 w-4 mr-2" />
              My Account
            </Button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 animate-fadeIn">
                <div className="py-1">
                  <button
                    onClick={() => handleMenuItemClick('My Profile')}
                    className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors duration-150 text-gray-700"
                  >
                    <UserCircle className="h-5 w-5" />
                    <span>My Profile</span>
                  </button>
                  
                  <button
                    onClick={() => handleMenuItemClick('Saved Career Paths')}
                    className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors duration-150 text-gray-700"
                  >
                    <Bookmark className="h-5 w-5" />
                    <span>Saved Career Paths</span>
                  </button>
                  
                  <button
                    onClick={() => handleMenuItemClick('Quiz History / Recommendations')}
                    className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors duration-150 text-gray-700"
                  >
                    <History className="h-5 w-5" />
                    <span>Quiz History / Recommendations</span>
                  </button>
                  
                  <div className="border-t border-gray-100"></div>
                  
                  <button
                    onClick={() => handleMenuItemClick('Settings / Logout')}
                    className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors duration-150 text-gray-700"
                  >
                    <Settings className="h-5 w-5" />
                    <span>Settings / Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Icon */}
          <div className="mb-8 inline-flex">
            <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg">
              <Sparkles className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Big Title */}
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
            PASSION FINDER
          </h1>

          {/* Tagline */}
          <p className="text-3xl md:text-4xl text-gray-700 mb-8 font-light">
            Explore first. Decide later.
          </p>

          {/* Supporting Line */}
          <p className="text-xl md:text-2xl text-gray-500 mb-16 max-w-2xl mx-auto leading-relaxed">
            Discover your passion through real-life exploration
            <br />
            and call-based human mentorship.
          </p>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={onStartExploring}
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-7 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all"
              size="lg"
            >
              Start Exploring Careers
            </Button>

            <Button
              onClick={onTalkToMentor}
              variant="outline"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-12 py-7 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all"
              size="lg"
            >
              <Phone className="h-6 w-6 mr-3" />
              Talk to a Career Mentor
            </Button>
          </div>

          {/* Subtle Footer Note */}
          <p className="mt-16 text-sm text-gray-400">
            No tests. No algorithms. Just real exploration.
          </p>
        </div>
      </div>
    </div>
  );
}