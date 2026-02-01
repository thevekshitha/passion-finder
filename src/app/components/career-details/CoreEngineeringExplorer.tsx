import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { 
  ArrowLeft, 
  Phone, 
  ChevronDown, 
  ChevronUp, 
  Building2,
  Settings,
  Zap,
  Cpu,
  TestTube2,
  Factory,
  Plane,
  Hammer,
  Leaf,
  Briefcase,
  GraduationCap,
  TrendingUp,
  AlertCircle,
  Target,
  BookOpen,
  Award,
  Users,
  User,
} from 'lucide-react';
import { coreEngineeringSubDomains, type CoreEngineeringSubDomain } from '@/app/data/coreEngineeringData';

interface CoreEngineeringExplorerProps {
  onBack: () => void;
  onTalkToMentor: () => void;
}

const iconMap: Record<string, any> = {
  Building2,
  Settings,
  Zap,
  Cpu,
  TestTube2,
  Factory,
  Plane,
  Hammer,
  Leaf,
};

export function CoreEngineeringExplorer({ onBack, onTalkToMentor }: CoreEngineeringExplorerProps) {
  const [selectedSubDomain, setSelectedSubDomain] = useState<CoreEngineeringSubDomain | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (selectedSubDomain) {
    const Icon = iconMap[selectedSubDomain.icon] || Building2;

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button 
              onClick={() => setSelectedSubDomain(null)} 
              variant="ghost" 
              className="text-gray-600"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Sub-Domains
            </Button>

            <Button
              onClick={onTalkToMentor}
              variant="outline"
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50"
            >
              <Phone className="h-4 w-4 mr-2" />
              Talk to a Mentor
            </Button>
          </div>

          {/* Title Section */}
          <div className="text-center mb-8">
            <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${selectedSubDomain.color} mb-4`}>
              <Icon className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {selectedSubDomain.name}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {selectedSubDomain.overview}
            </p>
          </div>

          {/* Navigation Pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {[
              { id: 'overview', label: 'Overview', icon: Target },
              { id: 'roles', label: 'Career Roles', icon: Briefcase },
              { id: 'skills', label: 'Skills Required', icon: Award },
              { id: 'education', label: 'Education Path', icon: GraduationCap },
              { id: 'opportunities', label: 'Opportunities', icon: Users },
              { id: 'growth', label: 'Career Growth', icon: TrendingUp },
              { id: 'reality', label: 'Reality Check', icon: AlertCircle },
              { id: 'higher-studies', label: 'Higher Studies', icon: BookOpen },
            ].map(({ id, label, icon: NavIcon }) => (
              <button
                key={id}
                onClick={() => toggleSection(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  expandedSection === id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <NavIcon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            {/* Overview Section */}
            {expandedSection === 'overview' && (
              <Card className="shadow-lg animate-in fade-in slide-in-from-top-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-orange-600" />
                    Overview & Work Areas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Work Areas</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedSubDomain.workAreas.map((area, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-2 bg-orange-50 rounded">
                          <span className="text-orange-600 mt-1">•</span>
                          <span className="text-gray-700">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Industries</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSubDomain.industries.map((industry, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white border border-orange-200 rounded-full text-sm text-gray-700"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Career Roles Section */}
            {expandedSection === 'roles' && (
              <Card className="shadow-lg animate-in fade-in slide-in-from-top-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-6 w-6 text-orange-600" />
                    Career Roles & Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedSubDomain.roles.map((role, idx) => (
                      <Card key={idx} className="bg-gradient-to-br from-white to-orange-50 border-orange-200">
                        <CardContent className="p-4">
                          <h4 className="font-bold text-gray-900 mb-2">{role.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{role.description}</p>
                          
                          <div className="space-y-2">
                            <div>
                              <p className="text-xs font-semibold text-gray-700 mb-1">Key Skills:</p>
                              <div className="flex flex-wrap gap-1">
                                {role.skills.slice(0, 3).map((skill, sidx) => (
                                  <span
                                    key={sidx}
                                    className="text-xs px-2 py-0.5 bg-orange-100 text-orange-800 rounded"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <p className="text-xs font-semibold text-gray-700 mb-1">Tools:</p>
                              <div className="flex flex-wrap gap-1">
                                {role.tools.slice(0, 3).map((tool, tidx) => (
                                  <span
                                    key={tidx}
                                    className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Skills Section */}
            {expandedSection === 'skills' && (
              <Card className="shadow-lg animate-in fade-in slide-in-from-top-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-orange-600" />
                    Skills Required
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Core Engineering Skills</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {selectedSubDomain.coreSkills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-center"
                        >
                          <span className="text-sm font-medium text-blue-900">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technical Skills</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {selectedSubDomain.technicalSkills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-purple-50 border border-purple-200 rounded-lg text-center"
                        >
                          <span className="text-sm font-medium text-purple-900">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Soft Skills</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {selectedSubDomain.softSkills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-green-50 border border-green-200 rounded-lg text-center"
                        >
                          <span className="text-sm font-medium text-green-900">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Education Path Section */}
            {expandedSection === 'education' && (
              <Card className="shadow-lg animate-in fade-in slide-in-from-top-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-orange-600" />
                    Education Path
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Undergraduate Programs</h4>
                    <ul className="space-y-2">
                      {selectedSubDomain.educationPath.undergraduate.map((program, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">✓</span>
                          <span className="text-gray-700">{program}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Postgraduate Programs</h4>
                    <ul className="space-y-2">
                      {selectedSubDomain.educationPath.postgraduate.map((program, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">✓</span>
                          <span className="text-gray-700">{program}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Industry Certifications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedSubDomain.educationPath.certifications.map((cert, idx) => (
                        <div
                          key={idx}
                          className="p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center gap-2"
                        >
                          <Award className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Additional Qualifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSubDomain.educationPath.additionalQualifications.map((qual, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {qual}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Opportunities Section */}
            {expandedSection === 'opportunities' && (
              <Card className="shadow-lg animate-in fade-in slide-in-from-top-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-orange-600" />
                    Career Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Government Sector */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-lg text-gray-900">Government & PSU Sector</h4>
                    
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Public Sector Undertakings (PSUs)</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedSubDomain.governmentOpportunities.psu.map((psu, idx) => (
                          <div key={idx} className="p-2 bg-blue-50 rounded border border-blue-200">
                            <span className="text-sm text-gray-700">{psu}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Civil Services</p>
                      <div className="space-y-1">
                        {selectedSubDomain.governmentOpportunities.civilServices.map((service, idx) => (
                          <div key={idx} className="p-2 bg-green-50 rounded border border-green-200">
                            <span className="text-sm text-gray-700">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800 mb-2">State Government</p>
                      <div className="space-y-1">
                        {selectedSubDomain.governmentOpportunities.stateGovt.map((dept, idx) => (
                          <div key={idx} className="p-2 bg-yellow-50 rounded border border-yellow-200">
                            <span className="text-sm text-gray-700">{dept}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Research Organizations</p>
                      <div className="space-y-1">
                        {selectedSubDomain.governmentOpportunities.researchOrgs.map((org, idx) => (
                          <div key={idx} className="p-2 bg-purple-50 rounded border border-purple-200">
                            <span className="text-sm text-gray-700">{org}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Private Sector */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-lg text-gray-900">Private Sector</h4>
                    
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">MNCs & Large Corporations</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedSubDomain.privateSectorOpportunities.mncs.map((company, idx) => (
                          <div key={idx} className="p-2 bg-red-50 rounded border border-red-200">
                            <span className="text-sm text-gray-700">{company}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Indian Companies</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedSubDomain.privateSectorOpportunities.indianCompanies.map((company, idx) => (
                          <div key={idx} className="p-2 bg-orange-50 rounded border border-orange-200">
                            <span className="text-sm text-gray-700">{company}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Startups & Emerging Companies</p>
                      <div className="space-y-1">
                        {selectedSubDomain.privateSectorOpportunities.startups.map((startup, idx) => (
                          <div key={idx} className="p-2 bg-teal-50 rounded border border-teal-200">
                            <span className="text-sm text-gray-700">{startup}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Consulting Firms</p>
                      <div className="space-y-1">
                        {selectedSubDomain.privateSectorOpportunities.consulting.map((firm, idx) => (
                          <div key={idx} className="p-2 bg-pink-50 rounded border border-pink-200">
                            <span className="text-sm text-gray-700">{firm}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Career Growth Section */}
            {expandedSection === 'growth' && (
              <Card className="shadow-lg animate-in fade-in slide-in-from-top-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                    Career Growth Path
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Entry Level */}
                    <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-300">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-bold text-lg text-green-900">Entry Level</h4>
                          <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">
                            {selectedSubDomain.careerGrowth.entry.experience}
                          </span>
                        </div>
                        <div className="mb-3">
                          <p className="text-sm font-semibold text-green-800 mb-1">Typical Roles:</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedSubDomain.careerGrowth.entry.roles.map((role, idx) => (
                              <span key={idx} className="px-2 py-1 bg-white rounded text-sm text-gray-700">
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-green-900">
                          <strong>Expected Salary:</strong> {selectedSubDomain.careerGrowth.entry.salary}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Mid Level */}
                    <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-300">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-bold text-lg text-blue-900">Mid Level</h4>
                          <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                            {selectedSubDomain.careerGrowth.mid.experience}
                          </span>
                        </div>
                        <div className="mb-3">
                          <p className="text-sm font-semibold text-blue-800 mb-1">Typical Roles:</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedSubDomain.careerGrowth.mid.roles.map((role, idx) => (
                              <span key={idx} className="px-2 py-1 bg-white rounded text-sm text-gray-700">
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-blue-900">
                          <strong>Expected Salary:</strong> {selectedSubDomain.careerGrowth.mid.salary}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Senior Level */}
                    <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-300">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-bold text-lg text-purple-900">Senior Level</h4>
                          <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">
                            {selectedSubDomain.careerGrowth.senior.experience}
                          </span>
                        </div>
                        <div className="mb-3">
                          <p className="text-sm font-semibold text-purple-800 mb-1">Typical Roles:</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedSubDomain.careerGrowth.senior.roles.map((role, idx) => (
                              <span key={idx} className="px-2 py-1 bg-white rounded text-sm text-gray-700">
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-purple-900">
                          <strong>Expected Salary:</strong> {selectedSubDomain.careerGrowth.senior.salary}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Reality Check Section */}
            {expandedSection === 'reality' && (
              <Card className="shadow-lg animate-in fade-in slide-in-from-top-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-6 w-6 text-orange-600" />
                    Reality Check
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                      <CardContent className="p-4">
                        <h5 className="font-bold text-red-900 mb-2">Work Pressure</h5>
                        <p className="text-sm text-gray-700">{selectedSubDomain.realityCheck.workPressure}</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                      <CardContent className="p-4">
                        <h5 className="font-bold text-yellow-900 mb-2">Learning Curve</h5>
                        <p className="text-sm text-gray-700">{selectedSubDomain.realityCheck.learningCurve}</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                      <CardContent className="p-4">
                        <h5 className="font-bold text-green-900 mb-2">Job Stability</h5>
                        <p className="text-sm text-gray-700">{selectedSubDomain.realityCheck.jobStability}</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                      <CardContent className="p-4">
                        <h5 className="font-bold text-blue-900 mb-2">Work-Life Balance</h5>
                        <p className="text-sm text-gray-700">{selectedSubDomain.realityCheck.workLifeBalance}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
                    <CardContent className="p-4">
                      <h5 className="font-bold text-purple-900 mb-2">Future Outlook</h5>
                      <p className="text-gray-700">{selectedSubDomain.realityCheck.futureOutlook}</p>
                    </CardContent>
                  </Card>

                  <div className="mt-6">
                    <h5 className="font-bold text-gray-900 mb-3">Alternative Career Transitions</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedSubDomain.alternativeTransitions.map((transition, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-lg"
                        >
                          <span className="text-sm text-gray-700">{transition}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Higher Studies Section */}
            {expandedSection === 'higher-studies' && (
              <Card className="shadow-lg animate-in fade-in slide-in-from-top-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-orange-600" />
                    Higher Studies & Research
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">M.Tech Specializations</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedSubDomain.higherStudies.mTech.map((spec, idx) => (
                        <div key={idx} className="p-2 bg-blue-50 rounded border border-blue-200">
                          <span className="text-sm text-gray-700">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">MS Programs (Abroad)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedSubDomain.higherStudies.ms.map((program, idx) => (
                        <div key={idx} className="p-2 bg-green-50 rounded border border-green-200">
                          <span className="text-sm text-gray-700">{program}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">MBA Options</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedSubDomain.higherStudies.mba.map((program, idx) => (
                        <div key={idx} className="p-2 bg-yellow-50 rounded border border-yellow-200">
                          <span className="text-sm text-gray-700">{program}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">PhD & Research Areas</h4>
                    <div className="space-y-2">
                      {selectedSubDomain.higherStudies.phd.map((program, idx) => (
                        <div key={idx} className="p-2 bg-purple-50 rounded border border-purple-200">
                          <span className="text-sm text-gray-700">{program}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Emerging Research Areas</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedSubDomain.higherStudies.researchAreas.map((area, idx) => (
                        <div key={idx} className="p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                          <span className="text-sm font-medium text-gray-700">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-white/90 mb-6">
              Talk to a mentor who has real-world experience in {selectedSubDomain.name}
            </p>
            <Button
              onClick={onTalkToMentor}
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              <Phone className="h-5 w-5 mr-2" />
              Schedule a Mentor Call
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Sub-Domain Selection View
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button onClick={onBack} variant="ghost" className="text-gray-600">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </Button>

          <Button
            onClick={onTalkToMentor}
            variant="outline"
            className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50"
          >
            <Phone className="h-4 w-4 mr-2" />
            Talk to a Mentor
          </Button>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Core Engineering Domains
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore 9 specialized engineering fields. Click on any domain to dive deep into career opportunities, skills required, and growth paths.
          </p>
        </div>

        {/* Sub-Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreEngineeringSubDomains.map((subDomain) => {
            const Icon = iconMap[subDomain.icon] || Building2;
            return (
              <Card
                key={subDomain.id}
                className="hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-orange-500 group"
                onClick={() => setSelectedSubDomain(subDomain)}
              >
                <CardContent className="p-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${subDomain.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {subDomain.name}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {subDomain.overview}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{subDomain.roles.length} Career Roles</span>
                    <span>{subDomain.industries.length} Industries</span>
                  </div>

                  <div className="flex items-center text-orange-600 font-medium group-hover:gap-2 transition-all">
                    <span>Explore in Detail</span>
                    <ChevronDown className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Help Text */}
        <div className="text-center mt-12 p-6 bg-white rounded-xl shadow-lg">
          <p className="text-gray-600 mb-4">
            Can't decide which engineering field is right for you? Our mentors have real-world experience and can guide you.
          </p>
          <Button
            onClick={onTalkToMentor}
            variant="outline"
            className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50"
          >
            <Phone className="h-4 w-4 mr-2" />
            Talk to an Engineering Mentor
          </Button>
        </div>
      </div>
    </div>
  );
}
