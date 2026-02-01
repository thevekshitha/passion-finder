import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAuthenticated: (user: any) => void;
}

export function AuthDialog({ open, onOpenChange, onAuthenticated }: AuthDialogProps) {
  const [signUpData, setSignUpData] = useState({ 
    name: '', 
    email: '', 
    password: '',
    phone: '',
    dateOfBirth: ''
  });
  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate password strength
    if (signUpData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('passionlearn_users') || '[]');
    if (users.find((u: any) => u.email === signUpData.email)) {
      setError('An account with this email already exists');
      return;
    }

    // Store complete user data
    const newUser = {
      name: signUpData.name,
      email: signUpData.email,
      password: signUpData.password,
      phone: signUpData.phone,
      dateOfBirth: signUpData.dateOfBirth,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('passionlearn_users', JSON.stringify(users));
    
    onAuthenticated(newUser);
    onOpenChange(false);
    setSignUpData({ name: '', email: '', password: '', phone: '', dateOfBirth: '' });
    toast.success('Account created successfully! Welcome to PassionLearn 🎉');
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Frontend-only: Check localStorage
    const users = JSON.parse(localStorage.getItem('passionlearn_users') || '[]');
    const user = users.find((u: any) => u.email === signInData.email && u.password === signInData.password);
    
    if (user) {
      onAuthenticated(user);
      onOpenChange(false);
      setSignInData({ email: '', password: '' });
      toast.success(`Welcome back, ${user.name}! 👋`);
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center justify-center mb-2">
            <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center">Welcome to PassionLearn</DialogTitle>
          <DialogDescription className="text-center">
            Create an account or sign in to access personalized learning
          </DialogDescription>
        </DialogHeader>
        
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <Tabs defaultValue="signup" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="signin">Sign In</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signup" className="space-y-4 mt-4">
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="John Doe"
                  value={signUpData.name}
                  onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="john@example.com"
                  value={signUpData.email}
                  onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-phone">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="signup-phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={signUpData.phone}
                  onChange={(e) => setSignUpData({ ...signUpData, phone: e.target.value })}
                  required
                />
                <p className="text-xs text-gray-500">Required for account verification</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-dob">
                  Date of Birth <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="signup-dob"
                  type="date"
                  value={signUpData.dateOfBirth}
                  onChange={(e) => setSignUpData({ ...signUpData, dateOfBirth: e.target.value })}
                  required
                />
                <p className="text-xs text-gray-500">Must be 13 years or older</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">
                  Password <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  value={signUpData.password}
                  onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                  required
                  minLength={8}
                />
                <p className="text-xs text-gray-500">Minimum 8 characters</p>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Create Account
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="signin" className="space-y-4 mt-4">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signin-email">Email Address</Label>
                <Input
                  id="signin-email"
                  type="email"
                  placeholder="john@example.com"
                  value={signInData.email}
                  onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signin-password">Password</Label>
                <Input
                  id="signin-password"
                  type="password"
                  placeholder="••••••••"
                  value={signInData.password}
                  onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                  required
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <button type="button" className="text-purple-600 hover:underline">
                  Forgot password?
                </button>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Sign In
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
