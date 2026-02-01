import { Sparkles, BookOpen, PlayCircle, Calendar, Users, Award, Menu, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { useState } from 'react';

interface HeaderProps {
  currentUser: any;
  onAuthClick: () => void;
  onAccountCenterClick: () => void;
  onSignOut: () => void;
  onNavigate: (section: string) => void;
}

export function Header({ currentUser, onAuthClick, onAccountCenterClick, onSignOut, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'View Courses', icon: BookOpen, section: 'courses' },
    { label: 'Live Sessions', icon: PlayCircle, section: 'live-sessions' },
    { label: 'Career Paths', icon: Award, section: 'career-paths' },
    { label: 'About', icon: Users, section: 'about' },
  ];

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg">
              <Sparkles className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                PassionLearn
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Your Journey to Excellence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <button
                key={item.section}
                onClick={() => onNavigate(item.section)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            {/* My Account Button */}
            <button
              onClick={onAccountCenterClick}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 font-medium"
            >
              My Account
            </button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {currentUser ? (
              <div className="hidden lg:flex items-center gap-3">
                <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
                  <Award className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                  <span>Premium</span>
                </Badge>
                <button
                  onClick={onAccountCenterClick}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                    {currentUser.name.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{currentUser.name}</span>
                </button>
              </div>
            ) : (
              <Button 
                onClick={onAuthClick} 
                className="hidden lg:flex bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-md"
              >
                Sign Up / Login
              </Button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-all"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => {
                    onNavigate(item.section);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all text-left"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              
              <div className="border-t pt-3 mt-2">
                {currentUser ? (
                  <>
                    <button
                      onClick={() => {
                        onAccountCenterClick();
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all w-full text-left"
                    >
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                        {currentUser.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{currentUser.name}</p>
                        <p className="text-xs text-gray-500">View Profile</p>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        onSignOut();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full mt-2 px-4 py-2 text-left text-red-600 hover:bg-red-50 rounded-lg transition-all"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Button 
                    onClick={() => {
                      onAuthClick();
                      setMobileMenuOpen(false);
                    }} 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Sign Up / Login
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}