import { Search } from 'lucide-react';
import { Input } from '@/app/components/ui/input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = "Search for tutorials..." }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 pr-4 py-6 text-lg rounded-full border-2 focus:border-primary"
      />
    </div>
  );
}
