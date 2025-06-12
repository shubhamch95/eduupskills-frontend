
import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { OtpPasswordReset } from './OtpPasswordReset';

interface AdminLoginProps {
  onLogin: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    identifier: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
   const [showOtpReset, setShowOtpReset] = useState(false);
   
  //     const [showForgotPassword, setShowForgotPassword] = useState(false);
  // const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  // const [isResetting, setIsResetting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('adminToken', data.token);
        toast.success('Login successful!');
        onLogin();
      } else {
        toast.error(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Failed to connect to server');
    } finally {
      setIsLoading(false);
    }
  };

  //   const handleForgotPassword = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsResetting(true);

  //   try {
  //     const response = await fetch('http://localhost:5000/api/admin/forgot-password', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ identifier: forgotPasswordEmail })
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       toast.success(data.message);
  //       setShowForgotPassword(false);
  //       setForgotPasswordEmail('');
  //     } else {
  //       toast.error(data.error || 'Password reset failed');
  //     }
  //   } catch (error) {
  //     console.error('Password reset error:', error);
  //     toast.error('Failed to connect to server');
  //   } finally {
  //     setIsResetting(false);
  //   }
  // };

  // if (showForgotPassword) {
  //   return (
  //     <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center p-4">
  //       <Card className="w-full max-w-md">
  //         <CardHeader className="text-center">
  //           <CardTitle className="text-3xl font-bold text-emerald-600">EduUpSkills</CardTitle>
  //           <CardDescription className="text-xl font-semibold">Reset Password</CardDescription>
  //         </CardHeader>
  //         <CardContent>
  //           <form onSubmit={handleForgotPassword} className="space-y-6">
  //             <div className="space-y-2">
  //               <Label htmlFor="forgotEmail" className="flex items-center gap-2">
  //                 <Mail size={16} />
  //                 Username or Email
  //               </Label>
  //               <Input
  //                 type="text"
  //                 id="forgotEmail"
  //                 value={forgotPasswordEmail}
  //                 onChange={(e) => setForgotPasswordEmail(e.target.value)}
  //                 required
  //                 placeholder="Enter username or email"
  //                 disabled={isResetting}
  //               />
  //             </div>

  //             <div className="space-y-3">
  //               <Button
  //                 type="submit"
  //                 disabled={isResetting}
  //                 className="w-full bg-emerald-600 hover:bg-emerald-700"
  //               >
  //                 {isResetting ? 'Sending...' : 'Send Reset Email'}
  //               </Button>

  //               <Button
  //                 type="button"
  //                 variant="outline"
  //                 onClick={() => setShowForgotPassword(false)}
  //                 className="w-full"
  //               >
  //                 Back to Login
  //               </Button>
  //             </div>
  //           </form>

  //           <div className="mt-6 text-center text-sm text-gray-600">
  //             <p>Enter your username or email address and we'll send you a link to reset your password.</p>
  //           </div>
  //         </CardContent>
  //       </Card>
  //     </div>

  if (showOtpReset) {
    return (
      <OtpPasswordReset
        onBack={() => setShowOtpReset(false)}
        onSuccess={() => {
          setShowOtpReset(false);
          toast.success('Password reset successful! Please login with your new password.');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-emerald-600">EduUpSkills</CardTitle>
          <CardDescription className="text-xl font-semibold">Admin Login</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="identifier" className="flex items-center gap-2">
                <User size={16} />
                Username
              </Label>
              <Input
                type="text"
                id="identifier or Email"
                name="identifier"
                value={credentials.identifier}
                onChange={handleInputChange}
                required
                placeholder="Enter username or Email"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center gap-2">
                <Lock size={16} />
                Password
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                required
                placeholder="Enter password"
                disabled={isLoading}
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="button"
                variant="link"
                // onClick={() => setShowForgotPassword(true)}
                onClick={() => setShowOtpReset(true)}
                className="text-sm text-emerald-600 hover:text-emerald-700 p-0 h-auto"
              >
                Forgot Password?
              </Button>
            </div>


            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          {/* <div className="mt-6 text-center text-sm text-gray-600 space-y-1">
                        <p>Demo credentials:</p>
                        <p>Username: <strong></strong> or Email: <strong>admin@eduupskills</strong></p>
                        <p>Password: <strong></strong></p>
                    </div> */}
        </CardContent>
      </Card>
    </div>
  );
};