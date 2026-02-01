import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Phone, X, Calendar, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface MentorCallModalProps {
  open: boolean;
  onClose: () => void;
}

export function MentorCallModal({ open, onClose }: MentorCallModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-green-100 rounded-xl">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Talk to a Career Mentor</CardTitle>
          </div>
          <p className="text-gray-600">
            Our mentors will guide you through your career exploration journey.
          </p>
        </CardHeader>

        <CardContent>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-3">
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Request Call Back
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full py-6"
                  onClick={onClose}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat Instead
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>Our mentors are available Mon-Sat, 9 AM - 8 PM</span>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center">
              <div className="inline-flex p-4 bg-green-100 rounded-full mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Request Received!
              </h3>
              <p className="text-gray-600">
                Our mentor will call you within 24 hours.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
