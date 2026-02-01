import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { ArrowLeft, Star, Clock, Users, TrendingUp, PlayCircle, BookOpen, Award, Code, Palette, Music, Camera, Dumbbell, ChefHat, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface PopularLearningPathProps {
  pathId: string;
  onBack: () => void;
}

interface Course {
  id: string;
  title: string;
  instructor: string;
  level: string;
  duration: string;
  students: string;
  rating: number;
  description: string;
  topics: string[];
}

interface LearningPath {
  title: string;
  subtitle: string;
  icon: any;
  gradient: string;
  bgGradient: string;
  courses: Course[];
  skills: string[];
  careerPaths: string[];
}

export function PopularLearningPath({ pathId, onBack }: PopularLearningPathProps) {
  const learningPaths: { [key: string]: LearningPath } = {
    programming: {
      title: 'Programming',
      subtitle: 'Master the art of coding and software development',
      icon: Code,
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 via-white to-indigo-50',
      skills: ['Problem Solving', 'Algorithms', 'Data Structures', 'Version Control', 'Debugging', 'Code Review'],
      careerPaths: ['Software Developer', 'Full Stack Engineer', 'Backend Developer', 'DevOps Engineer', 'Technical Lead'],
      courses: [
        {
          id: '1',
          title: 'Introduction to Python Programming',
          instructor: 'Dr. Sarah Johnson',
          level: 'Beginner',
          duration: '8 weeks',
          students: '45,230',
          rating: 4.8,
          description: 'Learn Python from scratch with hands-on projects and real-world applications',
          topics: ['Python Basics', 'Data Types', 'Control Flow', 'Functions', 'OOP', 'File Handling']
        },
        {
          id: '2',
          title: 'JavaScript: From Zero to Hero',
          instructor: 'Mark Anderson',
          level: 'Beginner',
          duration: '10 weeks',
          students: '38,450',
          rating: 4.9,
          description: 'Complete JavaScript course covering fundamentals to advanced concepts',
          topics: ['ES6+', 'DOM Manipulation', 'Async/Await', 'APIs', 'React Basics', 'Projects']
        },
        {
          id: '3',
          title: 'Data Structures & Algorithms Mastery',
          instructor: 'Prof. Michael Chen',
          level: 'Intermediate',
          duration: '12 weeks',
          students: '29,870',
          rating: 4.7,
          description: 'Master DSA for coding interviews and competitive programming',
          topics: ['Arrays & Strings', 'Trees & Graphs', 'Dynamic Programming', 'Sorting', 'Searching', 'Complexity']
        },
        {
          id: '4',
          title: 'Full Stack Web Development Bootcamp',
          instructor: 'Angela Yu',
          level: 'Advanced',
          duration: '16 weeks',
          students: '52,100',
          rating: 4.9,
          description: 'Build complete web applications from frontend to backend deployment',
          topics: ['HTML/CSS', 'React', 'Node.js', 'MongoDB', 'REST APIs', 'Deployment']
        }
      ]
    },
    design: {
      title: 'Design',
      subtitle: 'Create beautiful and functional user experiences',
      icon: Palette,
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 via-white to-pink-50',
      skills: ['UI Design', 'UX Research', 'Prototyping', 'Typography', 'Color Theory', 'Figma/Adobe XD'],
      careerPaths: ['UI/UX Designer', 'Product Designer', 'Visual Designer', 'Interaction Designer', 'Design System Lead'],
      courses: [
        {
          id: '1',
          title: 'UI/UX Design Fundamentals',
          instructor: 'Emily Parker',
          level: 'Beginner',
          duration: '6 weeks',
          students: '32,450',
          rating: 4.8,
          description: 'Learn the principles of user interface and user experience design',
          topics: ['Design Thinking', 'Wireframing', 'User Research', 'Visual Hierarchy', 'Accessibility', 'Prototyping']
        },
        {
          id: '2',
          title: 'Mastering Figma for UI Design',
          instructor: 'David Martinez',
          level: 'Beginner',
          duration: '5 weeks',
          students: '28,900',
          rating: 4.7,
          description: 'Complete Figma course from basics to advanced design systems',
          topics: ['Figma Basics', 'Components', 'Auto Layout', 'Variants', 'Plugins', 'Collaboration']
        },
        {
          id: '3',
          title: 'Advanced UX Research & Testing',
          instructor: 'Dr. Lisa Wong',
          level: 'Intermediate',
          duration: '8 weeks',
          students: '18,320',
          rating: 4.9,
          description: 'Conduct effective user research and usability testing',
          topics: ['User Interviews', 'A/B Testing', 'Analytics', 'Personas', 'Journey Maps', 'Heuristics']
        },
        {
          id: '4',
          title: 'Mobile App Design with Design Systems',
          instructor: 'Robert Kim',
          level: 'Advanced',
          duration: '10 weeks',
          students: '21,650',
          rating: 4.8,
          description: 'Design beautiful mobile apps with scalable design systems',
          topics: ['iOS/Android', 'Design Tokens', 'Component Libraries', 'Responsive Design', 'Animations', 'Handoff']
        }
      ]
    },
    music: {
      title: 'Music',
      subtitle: 'Discover your musical talent and create amazing sounds',
      icon: Music,
      gradient: 'from-pink-500 to-pink-600',
      bgGradient: 'from-pink-50 via-white to-rose-50',
      skills: ['Music Theory', 'Composition', 'Audio Production', 'Instrument Mastery', 'Mixing & Mastering', 'Performance'],
      careerPaths: ['Music Producer', 'Sound Engineer', 'Composer', 'Session Musician', 'Music Teacher'],
      courses: [
        {
          id: '1',
          title: 'Music Theory for Beginners',
          instructor: 'James Williams',
          level: 'Beginner',
          duration: '8 weeks',
          students: '24,560',
          rating: 4.7,
          description: 'Learn the fundamentals of music theory and notation',
          topics: ['Notes & Scales', 'Chords', 'Rhythm', 'Melody', 'Harmony', 'Ear Training']
        },
        {
          id: '2',
          title: 'Guitar Mastery: Acoustic to Electric',
          instructor: 'Alex Rodriguez',
          level: 'Beginner',
          duration: '12 weeks',
          students: '31,200',
          rating: 4.8,
          description: 'Complete guitar course from basic chords to advanced techniques',
          topics: ['Basic Chords', 'Strumming', 'Fingerpicking', 'Scales', 'Solos', 'Song Writing']
        },
        {
          id: '3',
          title: 'Music Production with Ableton Live',
          instructor: 'Sophie Turner',
          level: 'Intermediate',
          duration: '10 weeks',
          students: '19,870',
          rating: 4.9,
          description: 'Create professional music tracks using Ableton Live',
          topics: ['DAW Basics', 'MIDI', 'Sampling', 'Effects', 'Mixing', 'Mastering']
        },
        {
          id: '4',
          title: 'Electronic Music Production & DJ Skills',
          instructor: 'DJ Marcus Lee',
          level: 'Advanced',
          duration: '14 weeks',
          students: '16,450',
          rating: 4.8,
          description: 'Produce EDM tracks and master DJ performance techniques',
          topics: ['Synthesis', 'Beat Making', 'DJ Mixing', 'Live Performance', 'Sound Design', 'Release Strategy']
        }
      ]
    },
    photography: {
      title: 'Photography',
      subtitle: 'Capture moments and tell stories through your lens',
      icon: Camera,
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 via-white to-emerald-50',
      skills: ['Camera Techniques', 'Composition', 'Lighting', 'Photo Editing', 'Post-Processing', 'Portfolio Building'],
      careerPaths: ['Professional Photographer', 'Photo Editor', 'Wedding Photographer', 'Commercial Photographer', 'Photo Journalist'],
      courses: [
        {
          id: '1',
          title: 'Photography Basics: DSLR & Mirrorless',
          instructor: 'Rachel Green',
          level: 'Beginner',
          duration: '6 weeks',
          students: '27,340',
          rating: 4.8,
          description: 'Master your camera and learn fundamental photography concepts',
          topics: ['Exposure Triangle', 'Focus', 'White Balance', 'Composition', 'Camera Modes', 'Lens Selection']
        },
        {
          id: '2',
          title: 'Portrait Photography Masterclass',
          instructor: 'Thomas Anderson',
          level: 'Intermediate',
          duration: '8 weeks',
          students: '22,190',
          rating: 4.7,
          description: 'Learn to capture stunning portraits with natural and studio lighting',
          topics: ['Posing', 'Studio Lighting', 'Natural Light', 'Retouching', 'Client Management', 'Portfolio']
        },
        {
          id: '3',
          title: 'Adobe Lightroom & Photoshop for Photographers',
          instructor: 'Maria Santos',
          level: 'Intermediate',
          duration: '7 weeks',
          students: '34,670',
          rating: 4.9,
          description: 'Professional photo editing and retouching workflows',
          topics: ['Lightroom Workflow', 'Color Grading', 'Retouching', 'Presets', 'Batch Processing', 'Export Settings']
        },
        {
          id: '4',
          title: 'Commercial & Product Photography',
          instructor: 'Kevin Chen',
          level: 'Advanced',
          duration: '10 weeks',
          students: '15,820',
          rating: 4.8,
          description: 'Create professional product shots and commercial photography',
          topics: ['Product Styling', 'Lighting Setups', 'Focus Stacking', 'Tethering', 'Client Work', 'Pricing']
        }
      ]
    },
    fitness: {
      title: 'Fitness',
      subtitle: 'Transform your body and inspire others to achieve their goals',
      icon: Dumbbell,
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 via-white to-amber-50',
      skills: ['Exercise Science', 'Nutrition', 'Program Design', 'Client Coaching', 'Injury Prevention', 'Motivation'],
      careerPaths: ['Personal Trainer', 'Fitness Coach', 'Nutritionist', 'Yoga Instructor', 'Sports Coach'],
      courses: [
        {
          id: '1',
          title: 'Certified Personal Trainer Preparation',
          instructor: 'Mike Johnson',
          level: 'Beginner',
          duration: '12 weeks',
          students: '18,450',
          rating: 4.7,
          description: 'Prepare for CPT certification and start your fitness career',
          topics: ['Anatomy', 'Exercise Form', 'Program Design', 'Assessment', 'Safety', 'Business Basics']
        },
        {
          id: '2',
          title: 'Nutrition & Meal Planning Essentials',
          instructor: 'Dr. Amanda Foster',
          level: 'Beginner',
          duration: '8 weeks',
          students: '25,670',
          rating: 4.8,
          description: 'Learn evidence-based nutrition for fitness and health',
          topics: ['Macronutrients', 'Meal Planning', 'Supplements', 'Weight Management', 'Sports Nutrition', 'Client Coaching']
        },
        {
          id: '3',
          title: 'Strength Training & Bodybuilding',
          instructor: 'Chris Martinez',
          level: 'Intermediate',
          duration: '10 weeks',
          students: '21,340',
          rating: 4.9,
          description: 'Build muscle and strength with proven training methods',
          topics: ['Progressive Overload', 'Periodization', 'Compound Lifts', 'Split Training', 'Recovery', 'Competition Prep']
        },
        {
          id: '4',
          title: 'Yoga Teacher Training (200-Hour)',
          instructor: 'Priya Sharma',
          level: 'Advanced',
          duration: '20 weeks',
          students: '12,890',
          rating: 4.9,
          description: 'Become a certified yoga instructor with comprehensive training',
          topics: ['Asanas', 'Pranayama', 'Meditation', 'Philosophy', 'Teaching Methods', 'Adjustments']
        }
      ]
    },
    cooking: {
      title: 'Cooking',
      subtitle: 'Master culinary arts and create delicious experiences',
      icon: ChefHat,
      gradient: 'from-red-500 to-red-600',
      bgGradient: 'from-red-50 via-white to-orange-50',
      skills: ['Knife Skills', 'Cooking Techniques', 'Recipe Development', 'Plating', 'Food Safety', 'Kitchen Management'],
      careerPaths: ['Professional Chef', 'Pastry Chef', 'Food Blogger', 'Restaurant Owner', 'Culinary Instructor'],
      courses: [
        {
          id: '1',
          title: 'Culinary Fundamentals for Home Cooks',
          instructor: 'Chef Gordon Lewis',
          level: 'Beginner',
          duration: '8 weeks',
          students: '29,450',
          rating: 4.8,
          description: 'Master essential cooking techniques and build confidence in the kitchen',
          topics: ['Knife Skills', 'Cooking Methods', 'Sauces', 'Seasoning', 'Meal Planning', 'Kitchen Safety']
        },
        {
          id: '2',
          title: 'International Cuisine Mastery',
          instructor: 'Chef Maria Rossi',
          level: 'Intermediate',
          duration: '12 weeks',
          students: '17,890',
          rating: 4.7,
          description: 'Explore cuisines from around the world and expand your repertoire',
          topics: ['Italian', 'French', 'Asian', 'Mexican', 'Mediterranean', 'Fusion Cooking']
        },
        {
          id: '3',
          title: 'Professional Baking & Pastry Arts',
          instructor: 'Chef Pierre Dubois',
          level: 'Intermediate',
          duration: '14 weeks',
          students: '15,230',
          rating: 4.9,
          description: 'Learn professional baking techniques and pastry creations',
          topics: ['Bread Making', 'Pastries', 'Cakes', 'Desserts', 'Chocolate Work', 'Plating']
        },
        {
          id: '4',
          title: 'Restaurant Management & Culinary Business',
          instructor: 'Chef David Kim',
          level: 'Advanced',
          duration: '10 weeks',
          students: '11,670',
          rating: 4.8,
          description: 'Run a successful culinary business from kitchen to management',
          topics: ['Menu Design', 'Cost Control', 'Staff Management', 'Food Safety', 'Marketing', 'Operations']
        }
      ]
    },
    marketing: {
      title: 'Marketing',
      subtitle: 'Build brands and drive business growth through strategic marketing',
      icon: TrendingUp,
      gradient: 'from-cyan-500 to-cyan-600',
      bgGradient: 'from-cyan-50 via-white to-blue-50',
      skills: ['Digital Marketing', 'Content Strategy', 'SEO/SEM', 'Social Media', 'Analytics', 'Brand Management'],
      careerPaths: ['Digital Marketer', 'Content Strategist', 'SEO Specialist', 'Brand Manager', 'Marketing Director'],
      courses: [
        {
          id: '1',
          title: 'Digital Marketing Fundamentals',
          instructor: 'Jennifer Lee',
          level: 'Beginner',
          duration: '8 weeks',
          students: '36,780',
          rating: 4.8,
          description: 'Complete introduction to digital marketing strategies and tools',
          topics: ['Marketing Strategy', 'SEO Basics', 'Social Media', 'Email Marketing', 'Content Marketing', 'Analytics']
        },
        {
          id: '2',
          title: 'Social Media Marketing Mastery',
          instructor: 'Ryan Thompson',
          level: 'Beginner',
          duration: '6 weeks',
          students: '42,190',
          rating: 4.7,
          description: 'Grow your brand on Instagram, Facebook, LinkedIn, and TikTok',
          topics: ['Platform Strategy', 'Content Creation', 'Community Management', 'Ads', 'Influencer Marketing', 'Analytics']
        },
        {
          id: '3',
          title: 'SEO & Content Marketing Strategy',
          instructor: 'Brian Harris',
          level: 'Intermediate',
          duration: '10 weeks',
          students: '28,450',
          rating: 4.9,
          description: 'Drive organic traffic with SEO and content marketing',
          topics: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Content Strategy', 'Technical SEO', 'Reporting']
        },
        {
          id: '4',
          title: 'Growth Marketing & Analytics',
          instructor: 'Sarah Mitchell',
          level: 'Advanced',
          duration: '12 weeks',
          students: '19,320',
          rating: 4.8,
          description: 'Data-driven growth strategies for scaling businesses',
          topics: ['Growth Frameworks', 'A/B Testing', 'Conversion Optimization', 'Funnels', 'Retention', 'Advanced Analytics']
        }
      ]
    },
    business: {
      title: 'Business',
      subtitle: 'Build entrepreneurial skills and launch your successful venture',
      icon: Briefcase,
      gradient: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-50 via-white to-purple-50',
      skills: ['Business Strategy', 'Financial Planning', 'Leadership', 'Project Management', 'Negotiation', 'Operations'],
      careerPaths: ['Entrepreneur', 'Business Consultant', 'Project Manager', 'Business Analyst', 'Operations Manager'],
      courses: [
        {
          id: '1',
          title: 'Starting a Successful Business',
          instructor: 'Robert Davis',
          level: 'Beginner',
          duration: '8 weeks',
          students: '33,450',
          rating: 4.7,
          description: 'Learn how to validate, launch, and grow a successful business',
          topics: ['Business Ideas', 'Market Research', 'Business Plan', 'Funding', 'Legal Basics', 'Launch Strategy']
        },
        {
          id: '2',
          title: 'Financial Management for Entrepreneurs',
          instructor: 'Lisa Chen',
          level: 'Intermediate',
          duration: '6 weeks',
          students: '24,890',
          rating: 4.8,
          description: 'Master business finances, budgeting, and financial planning',
          topics: ['Financial Statements', 'Budgeting', 'Cash Flow', 'Pricing', 'Fundraising', 'Financial Metrics']
        },
        {
          id: '3',
          title: 'Project Management Professional (PMP) Prep',
          instructor: 'Michael Brown',
          level: 'Intermediate',
          duration: '12 weeks',
          students: '27,650',
          rating: 4.9,
          description: 'Prepare for PMP certification and master project management',
          topics: ['Project Lifecycle', 'Agile/Scrum', 'Risk Management', 'Stakeholders', 'Tools', 'Exam Prep']
        },
        {
          id: '4',
          title: 'Business Strategy & Scaling',
          instructor: 'Dr. Amanda Wilson',
          level: 'Advanced',
          duration: '10 weeks',
          students: '18,230',
          rating: 4.8,
          description: 'Strategic planning and scaling strategies for growing businesses',
          topics: ['Strategic Planning', 'Competitive Analysis', 'Market Expansion', 'Team Building', 'Operations', 'Exit Strategy']
        }
      ]
    }
  };

  const pathData = learningPaths[pathId];
  
  if (!pathData) {
    return null;
  }

  const Icon = pathData.icon;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${pathData.bgGradient} py-8 px-4`}>
      <div className="container mx-auto max-w-7xl">
        {/* Back Button */}
        <Button onClick={onBack} variant="ghost" className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${pathData.gradient} mb-6 shadow-lg`}>
            <Icon className="h-12 w-12 text-white" />
          </div>
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${pathData.gradient} bg-clip-text text-transparent`}>
            {pathData.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            {pathData.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge className={`bg-gradient-to-r ${pathData.gradient} text-white px-4 py-2`}>
              {pathData.courses.length} Featured Courses
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              {pathData.courses.reduce((sum, c) => sum + parseInt(c.students.replace(',', '')), 0).toLocaleString()} Students
            </Badge>
          </div>
        </div>

        {/* Skills Section */}
        <Card className="mb-12 border-2">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${pathData.gradient}`}>
                <Award className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Skills You'll Master</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {pathData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 border border-gray-200"
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${pathData.gradient}`} />
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Career Paths Section */}
        <Card className={`mb-12 border-2 bg-gradient-to-r ${pathData.bgGradient}`}>
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${pathData.gradient}`}>
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Career Opportunities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {pathData.careerPaths.map((career, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-all cursor-pointer group">
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br ${pathData.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-semibold text-sm">{career}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Courses Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Featured Courses</h2>
            <p className="text-gray-600">Start your learning journey with our most popular courses</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pathData.courses.map((course) => (
              <Card key={course.id} className="border-2 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${pathData.gradient} flex-shrink-0`}>
                      <PlayCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 group-hover:bg-gradient-to-r group-hover:${pathData.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all`}>
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
                      <p className="text-gray-700 mb-4">{course.description}</p>
                    </div>
                  </div>

                  {/* Course Topics */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Course Meta */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t">
                    <Badge className={`bg-gradient-to-r ${pathData.gradient} text-white`}>
                      {course.level}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold">
                      <Star className={`h-4 w-4 fill-yellow-400 text-yellow-400`} />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Enroll Button */}
                  <Button className={`w-full mt-4 bg-gradient-to-r ${pathData.gradient} hover:opacity-90 text-white`}>
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className={`border-2 bg-gradient-to-r ${pathData.bgGradient}`}>
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of students already learning {pathData.title.toLowerCase()} and take your skills to the next level
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className={`bg-gradient-to-r ${pathData.gradient} hover:opacity-90 text-white px-8 py-6 text-lg`}>
                Browse All {pathData.title} Courses
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-2">
                Get Personalized Learning Path
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
