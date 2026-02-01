import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { ChevronRight, Heart, Brain, Clock } from 'lucide-react';
import { useState } from 'react';
import { NavigationBar } from '@/app/components/passion-finder/NavigationBar';

interface ITSelfReflectionProps {
  onContinue: () => void;
  onBack: () => void;
  onTalkToMentor: () => void;
}

export function ITSelfReflection({ onContinue, onBack, onTalkToMentor }: ITSelfReflectionProps) {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const questions = [
    {
      id: 'enjoyment',
      icon: Heart,
      question: 'Did I enjoy this work?',
      options: [
        'Yes, I found it exciting and engaging',
        'It was okay, not too boring',
        'Not really, felt tedious',
        'No, I didn\'t enjoy it at all'
      ],
      color: 'from-red-500 to-red-600',
    },
    {
      id: 'curiosity',
      icon: Brain,
      question: 'Was I curious or stressed?',
      options: [
        'Very curious, wanted to learn more',
        'Curious but also a bit stressed',
        'More stressed than curious',
        'Completely stressed, no curiosity'
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 'longterm',
      icon: Clock,
      question: 'Can I see myself doing this long-term?',
      options: [
        'Absolutely, I can picture my future here',
        'Maybe, with more exploration',
        'Probably not, doesn\'t feel right',
        'Definitely not, not for me'
      ],
      color: 'from-blue-500 to-blue-600',
    },
  ];

  const allAnswered = questions.every(q => answers[q.id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <NavigationBar 
          onBack={onBack} 
          onTalkToMentor={onTalkToMentor}
          mentorButtonColor="green"
        />

        {/* Breadcrumb */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            IT & Technology <ChevronRight className="inline h-4 w-4 mx-1" /> ... <ChevronRight className="inline h-4 w-4 mx-1" /> Self-Reflection
          </p>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Self-Reflection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This is the most important step. Be honest with yourself.
          </p>
        </div>

        {/* Important Note */}
        <Card className="border-2 border-yellow-400 bg-yellow-50 mb-8">
          <CardContent className="p-6">
            <p className="text-gray-800 text-center font-medium">
              ⚠️ There are no right or wrong answers. This is about discovering what feels right for YOU.
            </p>
          </CardContent>
        </Card>

        {/* Reflection Questions */}
        <div className="space-y-8 mb-12">
          {questions.map((q) => {
            const Icon = q.icon;
            return (
              <Card key={q.id} className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 bg-gradient-to-br ${q.color} rounded-xl`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 flex-1">
                      {q.question}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {q.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => setAnswers({ ...answers, [q.id]: option })}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          answers[q.id] === option
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            answers[q.id] === option
                              ? 'border-green-500 bg-green-500'
                              : 'border-gray-300'
                          }`}>
                            {answers[q.id] === option && (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </div>
                          <span className="text-gray-700">{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Thoughts */}
        <Card className="border-2 mb-8">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Additional Thoughts (Optional)
            </h3>
            <textarea
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
              rows={4}
              placeholder="What surprised you? What concerns do you have? What excited you the most?"
            />
          </CardContent>
        </Card>

        {/* Continue Button */}
        <div className="text-center">
          {allAnswered ? (
            <Button
              onClick={onContinue}
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-lg"
            >
              Continue to Passion Confidence
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          ) : (
            <p className="text-gray-500">
              Please answer all reflection questions to continue
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
