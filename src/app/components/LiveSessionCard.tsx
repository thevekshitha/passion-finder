import { Calendar, Users, Clock, Video } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

interface LiveSessionCardProps {
  id: string;
  title: string;
  instructor: string;
  date: string;
  time: string;
  participants: number;
  maxParticipants: number;
  thumbnail: string;
  isLive?: boolean;
}

export function LiveSessionCard({
  title,
  instructor,
  date,
  time,
  participants,
  maxParticipants,
  thumbnail,
  isLive = false,
}: LiveSessionCardProps) {
  const spotsLeft = maxParticipants - participants;
  const percentageFull = (participants / maxParticipants) * 100;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 duration-300 border-2 border-transparent hover:border-blue-200">
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        {isLive && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="destructive" className="animate-pulse shadow-lg text-sm px-3 py-1">
              <div className="mr-2 h-2.5 w-2.5 rounded-full bg-white animate-ping absolute" />
              <div className="mr-2 h-2.5 w-2.5 rounded-full bg-white" />
              LIVE NOW
            </Badge>
          </div>
        )}
        {spotsLeft <= 10 && spotsLeft > 0 && !isLive && (
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-orange-500 hover:bg-orange-600 text-white">
              Only {spotsLeft} spots left!
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-5">
        <h3 className="mb-4 line-clamp-2 text-lg">{title}</h3>
        <div className="space-y-2.5 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-purple-100">
              <Video className="h-4 w-4 text-purple-600" />
            </div>
            <span className="font-medium text-gray-900">{instructor}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-blue-100">
              <Calendar className="h-4 w-4 text-blue-600" />
            </div>
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-green-100">
              <Clock className="h-4 w-4 text-green-600" />
            </div>
            <span>{time}</span>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
            <div className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              <span>{participants} joined</span>
            </div>
            <span className="font-medium">{percentageFull.toFixed(0)}% full</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${
                percentageFull > 80 ? 'bg-orange-500' : 'bg-gradient-to-r from-purple-500 to-blue-500'
              }`}
              style={{ width: `${percentageFull}%` }}
            />
          </div>
        </div>
        
        <Button className={`w-full ${isLive ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600' : ''}`} variant={isLive ? "default" : "outline"}>
          {isLive ? '🔴 Join Live Session' : 'Reserve Your Spot'}
        </Button>
      </CardContent>
    </Card>
  );
}