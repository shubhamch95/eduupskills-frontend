import { Facebook, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCourseClick = (e: React.MouseEvent<HTMLAnchorElement>, courseName: string) => {
    e.preventDefault();
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">About</a>
              </li>
              <li>
                <a href="#courses" onClick={(e) => handleNavClick(e, 'courses')} className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">Courses</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">Contact</a>
              </li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Courses</h4>
            <ul className="space-y-2">
              {['LLB', 'BA LLB', 'BCA', 'MCA', 'BBA', 'MBA', 'B.COM LLB'].map((course) => (
                <li key={course}>
                  <a href="#courses" onClick={(e) => handleCourseClick(e, course)} className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">
                    {course}
                  </a>
                </li>
              ))}
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
          <p className="text-gray-400">© 2025 EduUpSkills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};