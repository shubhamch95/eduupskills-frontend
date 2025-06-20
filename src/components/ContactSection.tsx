
import { useState } from 'react';
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseInterested: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('https://eduupskills.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response data:', result);

      if (response.ok && result.success) {
        toast({
          title: "Success!",
          description: result.message || "Your message has been sent. We'll get back to you soon!",
        });
        
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          courseInterested: '',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Get In <span className="text-emerald-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600">
            We'd love to hear from you! Drop us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-emerald-600 mb-6">Send Us A Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your Name *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <select
                name="courseInterested"
                value={formData.courseInterested}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Course Interested In</option>
                <option value=" LLB "> LLB </option>
                <option value=" BA LLB "> BA LLB </option>
                <option value=" BCA "> BCA </option>
                <option value=" MCA "> MCA </option>
                <option value=" BBA "> BBA </option>
                  <option value=" MBA "> MBA </option>
                <option value=" B.Com LLB "> B.Com LLB </option>
                
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={7}
                placeholder="Your Message *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">You're welcome to contact us through any of the methods listed below. Our support team is ready to assist you Monday to Friday, from 9 AM until 6 PM.</p>
            </div>
            
            {/* <div className="flex items-start space-x-4">
              <MapPin className="text-emerald-600 w-6 h-6 mt-1" />
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">123 Learning Lane, Knowledge City, India</p>
              </div> */}

            <div className="flex items-start space-x-4">
              <Phone className="text-emerald-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="text-emerald-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">support@eduupskills.com</p>
              </div>
            </div>

            <div className="pt-6">
              <div className="bg-emerald-600 text-white p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between border-b border-emerald-500 pb-2">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-emerald-500 pb-2">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
