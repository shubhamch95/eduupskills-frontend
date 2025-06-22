import React, { useState } from 'react';
import { Lock, Mail, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";

interface OtpPasswordResetProps {
    onBack: () => void;
    onSuccess: () => void;
}

export const OtpPasswordReset: React.FC<OtpPasswordResetProps> = ({ onBack, onSuccess }) => {
    const [step, setStep] = useState<'email' | 'otp'>('email');
    const [formData, setFormData] = useState({
        identifier: '',
        email: '',
        otp: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);

            // const response = await fetch('/api/admin/forgot-password', {
            const response = await fetch('https://eduupskills.com/api/admin/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ identifier: formData.identifier }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);
            const data = await response.json();

            if (response.ok) {
                toast.success('OTP sent successfully! Please check your email.');
                
                setFormData(prev => ({
                    ...prev,
                    email: formData.identifier.includes('@') ? formData.identifier : 'support@eduupskills.com'
                }));
                setStep('otp');
            } else {
                toast.error(data.error || 'Failed to send OTP');
            }
        } catch (error) {
            console.error('Send OTP error:', error);
            if (error.name === 'AbortError') {
                toast.error('Request timed out. Please try again.');
            } else {
                toast.error('Failed to send OTP');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.newPassword !== formData.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        if (formData.newPassword.length < 6) {
            toast.error('Password must be at least 6 characters long');
            return;
        }

        if (formData.otp.length !== 6) {
            toast.error('Please enter a valid 6-digit OTP');
            return;
        }

        setIsLoading(true);

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);

           
            const response = await fetch('https://eduupskills.com/api/admin/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    otp: formData.otp,
                    newPassword: formData.newPassword
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);
            const data = await response.json();

            if (response.ok) {
                toast.success('Password reset successfully! You can now login.');
                onSuccess();
            } else {
                toast.error(data.error || 'Password reset failed');
            }
        } catch (error) {
            console.error('Password reset error:', error);
            if (error.name === 'AbortError') {
                toast.error('Request timed out. Please try again.');
            } else {
                toast.error('Failed to reset password');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-emerald-600">EduUpSkills</CardTitle>
                    <CardDescription className="text-xl font-semibold">
                        {step === 'email' ? 'Reset Password - Step 1' : 'Reset Password - Step 2'}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {step === 'email' ? (
                        <form onSubmit={handleSendOtp} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="identifier" className="flex items-center gap-2">
                                    <Mail size={16} />
                                    Username or Email
                                </Label>
                                <Input
                                    type="text"
                                    id="identifier"
                                    name="identifier"
                                    value={formData.identifier}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter username or email"
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="space-y-3">
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                                >
                                    {isLoading ? 'Sending OTP...' : 'Send OTP'}
                                </Button>

                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={onBack}
                                    className="w-full"
                                >
                                    Back to Login
                                </Button>
                            </div>

                            <div className="text-center text-sm text-gray-600">
                                <p>Enter your username or email address and we'll send you a 6-digit OTP to reset your password.</p>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleResetPassword} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="otp" className="flex items-center gap-2">
                                    <Key size={16} />
                                    Enter 6-digit OTP
                                </Label>
                                <div className="flex justify-center">
                                    <InputOTP
                                        maxLength={6}
                                        value={formData.otp}
                                        onChange={(value) => setFormData(prev => ({ ...prev, otp: value }))}
                                        disabled={isLoading}
                                    >
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                            <InputOTPSlot index={3} />
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="newPassword" className="flex items-center gap-2">
                                    <Lock size={16} />
                                    New Password
                                </Label>
                                <Input
                                    type="password"
                                    id="newPassword"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter new password"
                                    disabled={isLoading}
                                    minLength={6}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                                    <Lock size={16} />
                                    Confirm Password
                                </Label>
                                <Input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Confirm new password"
                                    disabled={isLoading}
                                    minLength={6}
                                />
                            </div>

                            <div className="space-y-3">
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                                >
                                    {isLoading ? 'Resetting...' : 'Reset Password'}
                                </Button>

                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setStep('email')}
                                    className="w-full"
                                >
                                    Back to Step 1
                                </Button>
                            </div>

                            <div className="text-center text-sm text-gray-600">
                                <p>Check your email for the 6-digit OTP. The OTP is valid for 5 minutes.</p>
                            </div>
                        </form>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};
