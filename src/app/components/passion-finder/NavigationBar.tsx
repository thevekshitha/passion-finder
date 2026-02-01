import { useState, useRef, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, Phone, User, UserCircle, Bookmark, History, Settings } from 'lucide-react';

interface NavigationBarProps {
  onBack: () => void;
  onTalkToMentor: () => void;
  backLabel?: string;
  mentorButtonColor?: string;
}

export function NavigationBar({ 
  onBack, 
  onTalkToMentor, 
  backLabel = 'Back',
  mentorButtonColor = 'green'
}: NavigationBarProps) {
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
    <div className="flex items-center justify-between mb-8">
      <Button onClick={onBack} variant="ghost" className="text-gray-600">
        <ArrowLeft className="h-5 w-5 mr-2" />
        {backLabel}
      </Button>

      <div className="flex items-center gap-3">
        <Button
          onClick={onTalkToMentor}
          variant="outline"
          className={`border-2 border-${mentorButtonColor}-600 text-${mentorButtonColor}-600 hover:bg-${mentorButtonColor}-50`}
        >
          <Phone className="h-4 w-4 mr-2" />
          Talk to a Mentor
        </Button>

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
                  onClick={() => handleMenuItemClick('Profile')}
                  className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors duration-150 text-gray-700"
                >
                  <UserCircle className="h-5 w-5" />
                  <span>Profile</span>
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
    </div>
  );
}
