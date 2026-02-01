import { Users, Video, Award, TrendingUp } from 'lucide-react';

export function StatsSection() {
  const stats = [
    { icon: Users, label: 'Active Learners', value: '50K+', color: 'text-purple-600' },
    { icon: Video, label: 'Video Tutorials', value: '2,500+', color: 'text-blue-600' },
    { icon: Award, label: 'Expert Instructors', value: '300+', color: 'text-pink-600' },
    { icon: TrendingUp, label: 'Success Rate', value: '94%', color: 'text-green-600' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group bg-[rgba(0,0,0,0)]">
          <div className="inline-flex p-4 rounded-full bg-white shadow-lg mb-3 transition-transform group-hover:scale-110 duration-300">
            <stat.icon className={`h-8 w-8 ${stat.color}`} />
          </div>
          <div className="text-3xl mb-1 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {stat.value}
          </div>
          <div className="text-gray-600 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
