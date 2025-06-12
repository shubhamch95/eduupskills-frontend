
import { Facebook, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">EduUpSkills</h3>
            <p className="text-gray-300 mb-4">
              Empowering individuals to transform their lives through quality education and practical training.
            </p>
           <div className="flex space-x-4">
  <a
    href="https://www.facebook.com/share/14tZh1aRTU/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-emerald-400 hover:text-emerald-300 transition-colors"
  >
    <Facebook className="h-5 w-5" />
  </a>
  <a
    href="#"
    className="text-emerald-400 hover:text-emerald-300 transition-colors"
  >
    <Linkedin className="h-5 w-5" />
  </a>
  <a
    href="https://www.instagram.com/EDU_UPSKILLS"
    target="_blank"
    rel="noopener noreferrer"
    className="text-emerald-400 hover:text-emerald-300 transition-colors"
  >
    <Instagram className="h-5 w-5" />
  </a>
</div>

          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="home" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="about" className="text-gray-300 hover:text-emerald-400 transition-colors">About</a></li>
              <li><a href="courses" className="text-gray-300 hover:text-emerald-400 transition-colors">Courses</a></li>
              <li><a href="contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">LLB</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">BA LLB</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">BCA</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">MCA</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">BBA</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">MBA</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">B.COM LLB</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-emerald-400" />
                <span className="text-gray-300">support@eduupskills.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-emerald-400" />
                <span className="text-gray-300">9690055115</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 EduUpSkills. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
