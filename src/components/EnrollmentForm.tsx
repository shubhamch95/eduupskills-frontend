import React, { useState } from 'react';
import { X, User, Mail, Phone, GraduationCap } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface EnrollmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
}

export const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ isOpen, onClose, courseTitle }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Submitting enrollment data:', { ...formData, course: courseTitle });
      
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     fullName: formData.fullName,
      //     email: formData.email,
      //     phone: formData.phone,
      //     courseInterested: courseTitle,
      //     message: `I am interested in enrolling for ${courseTitle}. Please provide me with detailed information about the course.`
      //   }),
      // });

        const response = await fetch('https://eduupskills.com/api/contact', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
       },
        body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        courseInterested: courseTitle,
        message: `I am interested in enrolling for ${courseTitle}. Please provide me with detailed information about the course.`
  }),
});

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success('Your enquiry has been submitted successfully!', {
          description: 'Our team will reach out to you within 24 hours with detailed course information.'
        });
        
        setFormData({
          fullName: '',
          email: '',
          phone: ''
        });
        
        onClose();
      } else {
        toast.error(data.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting enrollment:', error);
      toast.error('Failed to submit enquiry. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-emerald-600 flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Get Information About {courseTitle}
          </DialogTitle>
          <p className="text-sm text-gray-600 mt-2">
            Fill out the form below, and our team will reach out to provide you with detailed information about this course.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="flex items-center gap-1">
              <User className="h-4 w-4" />
              Full Name *
            </Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              Phone Number *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              maxLength={10}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-emerald-600 hover:bg-emerald-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
