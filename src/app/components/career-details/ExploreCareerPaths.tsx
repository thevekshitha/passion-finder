import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/app/components/ui/breadcrumb';
import { ArrowLeft, GraduationCap, BookOpen, Laptop, ArrowRight, Target, Briefcase, Heart, Wrench, Palette, Building, BookMarked } from 'lucide-react';
import { categories } from '@/app/data/categories';

interface ExploreCareerPathsProps {
  categoryId?: string;
  onBack: () => void;
  onSelectDomain?: (domainName: string) => void;
}

export function ExploreCareerPaths({ categoryId = 'tech-it', onBack, onSelectDomain }: ExploreCareerPathsProps) {
  const category = categories.find(c => c.id === categoryId);
  
  if (!category) {
    return null;
  }

  // Get unique icon for each category
  const getCategoryIcon = (id: string) => {
    const iconMap: { [key: string]: any } = {
      'tech-it': Laptop,
      'healthcare': Heart,
      'core-engineering': Wrench,
      'business': Briefcase,
      'creative-media': Palette,
      'government': Building,
      'education': BookMarked,
    };
    return iconMap[id] || GraduationCap;
  };

  const CategoryIcon = getCategoryIcon(categoryId);

  // Get unique education paths for each category
  const getEducationPaths = (id: string) => {
    const pathsMap: { [key: string]: any[] } = {
      'tech-it': [
        {
          id: 'btech',
          title: 'B.Tech / B.E (CSE / IT / AI & DS)',
          description: 'Traditional 4-year engineering degree with comprehensive technical foundation',
          icon: GraduationCap,
          duration: '4 years',
          type: 'Formal Degree',
          color: 'from-green-500 to-green-600'
        },
        {
          id: 'bca-mca',
          title: 'BCA / MCA',
          description: 'Bachelor/Master of Computer Applications for focused computer science education',
          icon: BookOpen,
          duration: '3-5 years',
          type: 'Formal Degree',
          color: 'from-green-500 to-green-600'
        },
        {
          id: 'integrated',
          title: 'Integrated Computer Science Programs',
          description: '5-year integrated programs combining undergraduate and postgraduate studies',
          icon: GraduationCap,
          duration: '5 years',
          type: 'Integrated Degree',
          color: 'from-green-500 to-green-600'
        },
        {
          id: 'self-learning',
          title: 'Self-Learning & Online Tech Pathways',
          description: 'Flexible learning through online courses, bootcamps, and self-study',
          icon: Laptop,
          duration: 'Flexible',
          type: 'Alternative Path',
          color: 'from-green-500 to-green-600'
        }
      ],
      'healthcare': [
        {
          id: 'mbbs',
          title: 'MBBS / BDS / BAMS / BHMS',
          description: 'Medical degree programs for clinical practice in various medical systems',
          icon: Heart,
          duration: '5.5-6 years',
          type: 'Professional Degree',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          id: 'nursing',
          title: 'B.Sc / GNM Nursing',
          description: 'Comprehensive nursing education for patient care and healthcare management',
          icon: Heart,
          duration: '3-4 years',
          type: 'Professional Degree',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          id: 'allied-health',
          title: 'Allied Health Programs (Physiotherapy, Lab Tech, Radiology)',
          description: 'Specialized healthcare programs for diagnostic and therapeutic services',
          icon: BookOpen,
          duration: '3-4 years',
          type: 'Professional Degree',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          id: 'pharmacy',
          title: 'B.Pharm / D.Pharm',
          description: 'Pharmaceutical education for drug science and clinical pharmacy',
          icon: GraduationCap,
          duration: '2-4 years',
          type: 'Professional Degree',
          color: 'from-yellow-500 to-orange-500'
        }
      ],
      'core-engineering': [
        {
          id: 'civil-eng',
          title: 'B.Tech / B.E Civil Engineering',
          description: 'Foundation in construction, infrastructure, and structural design',
          icon: Wrench,
          duration: '4 years',
          type: 'Engineering Degree',
          color: 'from-orange-500 to-red-500'
        },
        {
          id: 'mechanical-eng',
          title: 'B.Tech / B.E Mechanical Engineering',
          description: 'Core mechanical systems, manufacturing, and design engineering',
          icon: Wrench,
          duration: '4 years',
          type: 'Engineering Degree',
          color: 'from-orange-500 to-red-500'
        },
        {
          id: 'electrical-eng',
          title: 'B.Tech / B.E Electrical Engineering',
          description: 'Power systems, electrical networks, and control systems engineering',
          icon: Wrench,
          duration: '4 years',
          type: 'Engineering Degree',
          color: 'from-orange-500 to-red-500'
        },
        {
          id: 'diploma',
          title: 'Polytechnic Diploma Programs',
          description: 'Practical engineering education with hands-on training',
          icon: BookOpen,
          duration: '3 years',
          type: 'Diploma',
          color: 'from-orange-500 to-red-500'
        }
      ],
      'business': [
        {
          id: 'bba-mba',
          title: 'BBA / MBA',
          description: 'Comprehensive business administration and management education',
          icon: Briefcase,
          duration: '3-5 years',
          type: 'Management Degree',
          color: 'from-amber-500 to-yellow-600'
        },
        {
          id: 'bcom',
          title: 'B.Com / M.Com',
          description: 'Commerce education with focus on accounting, finance, and economics',
          icon: BookOpen,
          duration: '3-5 years',
          type: 'Commerce Degree',
          color: 'from-amber-500 to-yellow-600'
        },
        {
          id: 'specialized',
          title: 'Specialized Business Programs (Marketing, HR, Finance)',
          description: 'Domain-specific business education for specialized careers',
          icon: Target,
          duration: '2-3 years',
          type: 'Specialized Degree',
          color: 'from-amber-500 to-yellow-600'
        },
        {
          id: 'entrepreneurship',
          title: 'Entrepreneurship & Startup Programs',
          description: 'Practical business skills for starting and running your own venture',
          icon: Laptop,
          duration: 'Flexible',
          type: 'Alternative Path',
          color: 'from-amber-500 to-yellow-600'
        }
      ],
      'creative-media': [
        {
          id: 'design',
          title: 'Design Programs (Graphic, UI/UX, Visual)',
          description: 'Creative design education for digital and print media',
          icon: Palette,
          duration: '3-4 years',
          type: 'Design Degree',
          color: 'from-purple-500 to-pink-600'
        },
        {
          id: 'media-comm',
          title: 'Mass Communication & Journalism',
          description: 'Media, journalism, and communication studies',
          icon: BookOpen,
          duration: '3 years',
          type: 'Media Degree',
          color: 'from-purple-500 to-pink-600'
        },
        {
          id: 'film-video',
          title: 'Film & Video Production',
          description: 'Comprehensive filmmaking and video production education',
          icon: GraduationCap,
          duration: '3-4 years',
          type: 'Professional Degree',
          color: 'from-purple-500 to-pink-600'
        },
        {
          id: 'online-courses',
          title: 'Online Creative Courses & Portfolios',
          description: 'Flexible learning with portfolio-based career entry',
          icon: Laptop,
          duration: 'Flexible',
          type: 'Alternative Path',
          color: 'from-purple-500 to-pink-600'
        }
      ],
      'government': [
        {
          id: 'graduation',
          title: 'Any Graduation (BA / B.Sc / B.Com)',
          description: 'Basic qualification for most government competitive exams',
          icon: GraduationCap,
          duration: '3 years',
          type: 'Basic Degree',
          color: 'from-red-500 to-rose-600'
        },
        {
          id: 'law',
          title: 'LLB / Integrated Law Programs',
          description: 'Legal education for judicial and legal services',
          icon: BookOpen,
          duration: '3-5 years',
          type: 'Professional Degree',
          color: 'from-red-500 to-rose-600'
        },
        {
          id: 'engineering',
          title: 'Engineering Degrees (for Technical Services)',
          description: 'Engineering education for technical government positions',
          icon: Wrench,
          duration: '4 years',
          type: 'Engineering Degree',
          color: 'from-red-500 to-rose-600'
        },
        {
          id: 'competitive-prep',
          title: 'Government Exam Preparation Programs',
          description: 'Focused preparation for UPSC, SSC, Banking, and other exams',
          icon: Target,
          duration: '1-2 years',
          type: 'Exam Preparation',
          color: 'from-red-500 to-rose-600'
        }
      ],
      'education': [
        {
          id: 'bed',
          title: 'B.Ed / D.El.Ed',
          description: 'Teaching certification for school education',
          icon: BookMarked,
          duration: '2 years',
          type: 'Teaching Degree',
          color: 'from-amber-700 to-stone-600'
        },
        {
          id: 'subject-masters',
          title: 'Subject-Specific Masters (M.A / M.Sc / M.Com)',
          description: 'Advanced subject knowledge for college teaching and research',
          icon: GraduationCap,
          duration: '2 years',
          type: 'Masters Degree',
          color: 'from-amber-700 to-stone-600'
        },
        {
          id: 'phd',
          title: 'Ph.D / Research Programs',
          description: 'Doctoral research for academic and research careers',
          icon: BookOpen,
          duration: '3-5 years',
          type: 'Research Degree',
          color: 'from-amber-700 to-stone-600'
        },
        {
          id: 'social-work',
          title: 'Social Work & Development Studies',
          description: 'Education for social impact and community development careers',
          icon: Heart,
          duration: '2-3 years',
          type: 'Professional Degree',
          color: 'from-amber-700 to-stone-600'
        }
      ]
    };

    return pathsMap[id] || [];
  };

  const educationPaths = getEducationPaths(categoryId);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${category.gradient === 'from-green-500 to-emerald-600' ? 'from-green-50 via-white to-emerald-50' : category.gradient === 'from-yellow-500 to-orange-500' ? 'from-yellow-50 via-white to-orange-50' : category.gradient === 'from-orange-500 to-red-500' ? 'from-orange-50 via-white to-red-50' : category.gradient === 'from-amber-500 to-yellow-600' ? 'from-amber-50 via-white to-yellow-50' : category.gradient === 'from-purple-500 to-pink-600' ? 'from-purple-50 via-white to-pink-50' : category.gradient === 'from-red-500 to-rose-600' ? 'from-red-50 via-white to-rose-50' : 'from-amber-50 via-white to-stone-50'} py-8 px-4`}>
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Button onClick={onBack} variant="ghost" className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Categories
        </Button>

        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className={`${category.gradient === 'from-green-500 to-emerald-600' ? 'text-green-600 hover:text-green-700' : category.gradient === 'from-yellow-500 to-orange-500' ? 'text-yellow-600 hover:text-yellow-700' : category.gradient === 'from-orange-500 to-red-500' ? 'text-orange-600 hover:text-orange-700' : category.gradient === 'from-amber-500 to-yellow-600' ? 'text-amber-600 hover:text-amber-700' : category.gradient === 'from-purple-500 to-pink-600' ? 'text-purple-600 hover:text-purple-700' : category.gradient === 'from-red-500 to-rose-600' ? 'text-red-600 hover:text-red-700' : 'text-amber-700 hover:text-amber-800'}`}>
                  {category.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-700 font-medium">
                  Explore Career Paths
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.gradient} mb-6 shadow-lg`}>
            <CategoryIcon className="h-12 w-12 text-white" />
          </div>
          <Badge className={`mb-4 bg-gradient-to-r ${category.gradient} text-white text-lg px-6 py-2`}>
            EXPLORE CAREER PATHS
          </Badge>
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
            {category.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover educational pathways and specialized domains in {category.name.toLowerCase()}
          </p>
        </div>

        {/* Education Paths Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Educational Pathways</h2>
            <p className="text-gray-600">Choose the educational foundation that aligns with your goals</p>
          </div>
          
          <div className="space-y-6">
            {educationPaths.map((path, index) => {
              const Icon = path.icon;
              return (
                <Card 
                  key={path.id}
                  className={`border-2 ${category.gradient === 'from-green-500 to-emerald-600' ? 'border-green-200 hover:border-green-400' : category.gradient === 'from-yellow-500 to-orange-500' ? 'border-yellow-200 hover:border-yellow-400' : category.gradient === 'from-orange-500 to-red-500' ? 'border-orange-200 hover:border-orange-400' : category.gradient === 'from-amber-500 to-yellow-600' ? 'border-amber-200 hover:border-amber-400' : category.gradient === 'from-purple-500 to-pink-600' ? 'border-purple-200 hover:border-purple-400' : category.gradient === 'from-red-500 to-rose-600' ? 'border-red-200 hover:border-red-400' : 'border-amber-200 hover:border-amber-400'} hover:shadow-xl transition-all duration-300 cursor-pointer group`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      {/* Number & Icon */}
                      <div className="flex-shrink-0">
                        <div className={`relative w-20 h-20 bg-gradient-to-br ${path.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Icon className="h-10 w-10 text-white" />
                          <div className={`absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold border-2 ${category.gradient === 'from-green-500 to-emerald-600' ? 'text-green-600 border-green-500' : category.gradient === 'from-yellow-500 to-orange-500' ? 'text-yellow-600 border-yellow-500' : category.gradient === 'from-orange-500 to-red-500' ? 'text-orange-600 border-orange-500' : category.gradient === 'from-amber-500 to-yellow-600' ? 'text-amber-600 border-amber-500' : category.gradient === 'from-purple-500 to-pink-600' ? 'text-purple-600 border-purple-500' : category.gradient === 'from-red-500 to-rose-600' ? 'text-red-600 border-red-500' : 'text-amber-700 border-amber-700'}`}>
                            {index + 1}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className={`text-2xl font-semibold text-gray-800 ${category.gradient === 'from-green-500 to-emerald-600' ? 'group-hover:text-green-600' : category.gradient === 'from-yellow-500 to-orange-500' ? 'group-hover:text-yellow-600' : category.gradient === 'from-orange-500 to-red-500' ? 'group-hover:text-orange-600' : category.gradient === 'from-amber-500 to-yellow-600' ? 'group-hover:text-amber-600' : category.gradient === 'from-purple-500 to-pink-600' ? 'group-hover:text-purple-600' : category.gradient === 'from-red-500 to-rose-600' ? 'group-hover:text-red-600' : 'group-hover:text-amber-700'} transition-colors`}>
                            {path.title}
                          </h3>
                          <ArrowRight className={`h-6 w-6 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${category.gradient === 'from-green-500 to-emerald-600' ? 'text-green-600' : category.gradient === 'from-yellow-500 to-orange-500' ? 'text-yellow-600' : category.gradient === 'from-orange-500 to-red-500' ? 'text-orange-600' : category.gradient === 'from-amber-500 to-yellow-600' ? 'text-amber-600' : category.gradient === 'from-purple-500 to-pink-600' ? 'text-purple-600' : category.gradient === 'from-red-500 to-rose-600' ? 'text-red-600' : 'text-amber-700'}`} />
                        </div>
                        <p className="text-gray-600 mb-4">{path.description}</p>
                        
                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-3">
                          <Badge variant="outline" className={`${category.gradient === 'from-green-500 to-emerald-600' ? 'border-green-300 text-green-700 bg-green-50' : category.gradient === 'from-yellow-500 to-orange-500' ? 'border-yellow-300 text-yellow-700 bg-yellow-50' : category.gradient === 'from-orange-500 to-red-500' ? 'border-orange-300 text-orange-700 bg-orange-50' : category.gradient === 'from-amber-500 to-yellow-600' ? 'border-amber-300 text-amber-700 bg-amber-50' : category.gradient === 'from-purple-500 to-pink-600' ? 'border-purple-300 text-purple-700 bg-purple-50' : category.gradient === 'from-red-500 to-rose-600' ? 'border-red-300 text-red-700 bg-red-50' : 'border-amber-300 text-amber-800 bg-amber-50'}`}>
                            {path.duration}
                          </Badge>
                          <Badge variant="outline" className="border-blue-300 text-blue-700 bg-blue-50">
                            {path.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Domains Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Specialized Domains</h2>
            <p className="text-gray-600">Explore {category.subDomains.length} specialized domains with {category.subDomains.reduce((sum, sd) => sum + sd.specializations.length, 0)} unique career paths</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.subDomains.map((domain, index) => (
              <Card 
                key={index}
                className={`border-2 ${category.gradient === 'from-green-500 to-emerald-600' ? 'border-green-200 hover:border-green-400' : category.gradient === 'from-yellow-500 to-orange-500' ? 'border-yellow-200 hover:border-yellow-400' : category.gradient === 'from-orange-500 to-red-500' ? 'border-orange-200 hover:border-orange-400' : category.gradient === 'from-amber-500 to-yellow-600' ? 'border-amber-200 hover:border-amber-400' : category.gradient === 'from-purple-500 to-pink-600' ? 'border-purple-200 hover:border-purple-400' : category.gradient === 'from-red-500 to-rose-600' ? 'border-red-200 hover:border-red-400' : 'border-amber-200 hover:border-amber-400'} hover:shadow-xl transition-all duration-300 cursor-pointer group`}
                onClick={() => onSelectDomain && onSelectDomain(domain.name)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient}`}>
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary">{domain.specializations.length} Paths</Badge>
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${category.gradient === 'from-green-500 to-emerald-600' ? 'group-hover:text-green-600' : category.gradient === 'from-yellow-500 to-orange-500' ? 'group-hover:text-yellow-600' : category.gradient === 'from-orange-500 to-red-500' ? 'group-hover:text-orange-600' : category.gradient === 'from-amber-500 to-yellow-600' ? 'group-hover:text-amber-600' : category.gradient === 'from-purple-500 to-pink-600' ? 'group-hover:text-purple-600' : category.gradient === 'from-red-500 to-rose-600' ? 'group-hover:text-red-600' : 'group-hover:text-amber-700'} transition-colors`}>
                    {domain.name}
                  </h3>
                  <div className="space-y-2">
                    {domain.specializations.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`} />
                        <span>{spec.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className={`border-2 ${category.gradient === 'from-green-500 to-emerald-600' ? 'border-green-200 bg-gradient-to-r from-green-50 to-emerald-50' : category.gradient === 'from-yellow-500 to-orange-500' ? 'border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50' : category.gradient === 'from-orange-500 to-red-500' ? 'border-orange-200 bg-gradient-to-r from-orange-50 to-red-50' : category.gradient === 'from-amber-500 to-yellow-600' ? 'border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50' : category.gradient === 'from-purple-500 to-pink-600' ? 'border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50' : category.gradient === 'from-red-500 to-rose-600' ? 'border-red-200 bg-gradient-to-r from-red-50 to-rose-50' : 'border-amber-200 bg-gradient-to-r from-amber-50 to-stone-50'}`}>
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Select a domain above to explore detailed career specializations, required skills, and personalized learning roadmaps
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  variant="outline"
                  className={`${category.gradient === 'from-green-500 to-emerald-600' ? 'border-green-500 text-green-700 hover:bg-green-50' : category.gradient === 'from-yellow-500 to-orange-500' ? 'border-yellow-500 text-yellow-700 hover:bg-yellow-50' : category.gradient === 'from-orange-500 to-red-500' ? 'border-orange-500 text-orange-700 hover:bg-orange-50' : category.gradient === 'from-amber-500 to-yellow-600' ? 'border-amber-500 text-amber-700 hover:bg-amber-50' : category.gradient === 'from-purple-500 to-pink-600' ? 'border-purple-500 text-purple-700 hover:bg-purple-50' : category.gradient === 'from-red-500 to-rose-600' ? 'border-red-500 text-red-700 hover:bg-red-50' : 'border-amber-700 text-amber-800 hover:bg-amber-50'} border-2`}
                >
                  Compare Education Paths
                </Button>
                <Button 
                  className={`bg-gradient-to-r ${category.gradient} hover:opacity-90 text-white`}
                >
                  Get Personalized Guidance
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}