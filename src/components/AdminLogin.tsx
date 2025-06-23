import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';
import { Eye, EyeOff } from 'lucide-react';
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
  const [showPassword, setShowPassword] = useState(false);

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
      const response = await fetch('https://eduupskills.com/api/admin/login', {
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

            <div className="space-y-2 relative">
              <Label htmlFor="password" className="flex items-center gap-2">
                <Lock size={16} />
                Password
              </Label>
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                required
                placeholder="Enter password"
                disabled={isLoading}
              />
              <span
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute right-3 top-9 cursor-pointer text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>


            <div className="flex justify-end">
              <Button
                type="button"
                variant="link"
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

        </CardContent>
      </Card>
    </div>
  );
};
