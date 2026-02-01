import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Sparkles, Mail, Lock, User, Phone, Calendar, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';

interface AuthPageProps {
  onAuthenticated: (user: any) => void;
  onBack: () => void;
}

export function AuthPage({ onAuthenticated, onBack }: AuthPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Sign Up State
  const [signUpData, setSignUpData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
  });

  // Sign In State
  const [signInData, setSignInData] = useState({
    username: '',
    password: '',
  });

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!signUpData.fullName || !signUpData.email || !signUpData.phoneNumber || 
        !signUpData.dateOfBirth || !signUpData.password || !signUpData.confirmPassword) {
      toast.error('All fields are required!');
      return;
    }

    if (signUpData.password !== signUpData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    if (signUpData.password.length < 6) {
      toast.error('Password must be at least 6 characters long!');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signUpData.email)) {
      toast.error('Please enter a valid email address!');
      return;
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(signUpData.phoneNumber.replace(/[^0-9]/g, ''))) {
      toast.error('Please enter a valid 10-digit phone number!');
      return;
    }

    // Save to localStorage
    const users = JSON.parse(localStorage.getItem('passionlearn_users') || '[]');
    
    // Check if user already exists
    if (users.some((u: any) => u.email === signUpData.email)) {
      toast.error('An account with this email already exists!');
      return;
    }

    const newUser = {
      name: signUpData.fullName,
      email: signUpData.email,
      phoneNumber: signUpData.phoneNumber,
      dateOfBirth: signUpData.dateOfBirth,
      password: signUpData.password,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem('passionlearn_users', JSON.stringify(users));

    toast.success('Account created successfully! Welcome to PassionLearn!');
    onAuthenticated(newUser);
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    if (!signInData.username || !signInData.password) {
      toast.error('Please enter both username and password!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('passionlearn_users') || '[]');
    const user = users.find(
      (u: any) => (u.email === signInData.username || u.name === signInData.username) && 
                  u.password === signInData.password
    );

    if (user) {
      toast.success(`Welcome back, ${user.name}!`);
      onAuthenticated(user);
    } else {
      toast.error('Invalid username or password!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-4xl relative z-10">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 hover:bg-white/50"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <Card className="shadow-2xl border-2">
          <CardHeader className="text-center pb-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Sparkles className="h-8 w-8" />
              </div>
              <CardTitle className="text-4xl">PassionLearn</CardTitle>
            </div>
            <CardDescription className="text-white/90 text-lg">
              Join thousands of learners pursuing their passions
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <Tabs defaultValue="signup" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 p-1 bg-gray-100">
                <TabsTrigger 
                  value="signup"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                >
                  Sign Up
                </TabsTrigger>
                <TabsTrigger 
                  value="signin"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                >
                  Sign In
                </TabsTrigger>
              </TabsList>

              {/* Sign Up Form */}
              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        value={signUpData.fullName}
                        onChange={(e) => setSignUpData({ ...signUpData, fullName: e.target.value })}
                        className="border-gray-300 focus:border-purple-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={signUpData.email}
                        onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                        className="border-gray-300 focus:border-purple-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        placeholder="1234567890"
                        value={signUpData.phoneNumber}
                        onChange={(e) => setSignUpData({ ...signUpData, phoneNumber: e.target.value })}
                        className="border-gray-300 focus:border-purple-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Date of Birth <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={signUpData.dateOfBirth}
                        onChange={(e) => setSignUpData({ ...signUpData, dateOfBirth: e.target.value })}
                        className="border-gray-300 focus:border-purple-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        Password <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Min. 6 characters"
                          value={signUpData.password}
                          onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                          className="border-gray-300 focus:border-purple-500 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        Confirm Password <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Re-enter password"
                          value={signUpData.confirmPassword}
                          onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })}
                          className="border-gray-300 focus:border-purple-500 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-6"
                  >
                    Create Account
                  </Button>

                  <p className="text-center text-sm text-gray-500">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              </TabsContent>

              {/* Sign In Form */}
              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Username or Email
                    </Label>
                    <Input
                      id="username"
                      placeholder="Enter your username or email"
                      value={signInData.username}
                      onChange={(e) => setSignInData({ ...signInData, username: e.target.value })}
                      className="border-gray-300 focus:border-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signin-password" className="flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="signin-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={signInData.password}
                        onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                        className="border-gray-300 focus:border-purple-500 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                      Forgot Password?
                    </a>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-6"
                  >
                    Sign In
                  </Button>

                  <p className="text-center text-sm text-gray-500">
                    Don't have an account? Switch to Sign Up tab
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
