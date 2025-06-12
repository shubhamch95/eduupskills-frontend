import { useState } from 'react';
import { ChevronDown, Clock, Users, Award } from 'lucide-react';
import { toast } from 'sonner';
import { EnrollmentForm } from './EnrollmentForm';
import { Badge } from './ui/badge';

const courses = [
  {
    id: 1,
    title: "LLB",
    description: "Comprehensive law degree program",
    duration: "3 Years",
    students: "500+",
    specializations: ["Criminal Law", "Civil Law", "Constitutional Law"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    mode: "Offline"
  },
  {
    id: 2,
    title: "BA LLB",
    description: "Integrated law and arts program",
    duration: "5 Years",
    students: "300+",
    specializations: ["International Law", "Human Rights Law"],
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    mode: "Offline"
  },
  {
    id: 3,
    title: "BCA",
    description: "Computer applications and programming",
    duration: "3 Years",
    students: "400+",
    specializations: ["AI & Machine Learning", "Cyber Security"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    mode: "Both"
  },
  {
    id: 4,
    title: "MCA",
    description: "Master of Computer Applications",
    duration: "3 Years",
    students: "200+",
    specializations: ["Cloud Computing", "AI & ML", "Full Stack Development", "Cyber Security", "Data Science"],
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    mode: "Both"
  },
  {
    id: 5,
    title: "BBA",
    description: "Business administration fundamentals",
    duration: "3 Years",
    students: "600+",
    specializations: ["Finance", "Marketing", "HR Management"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    mode: "Both"
  },
  {
    id: 6,
    title: "MBA",
    description: "Advanced business management",
    duration: "2 Years",
    students: "350+",
    specializations: ["Finance", "Marketing", "HR", "Agri-Business", "Pharma Management", "Logistics & SCM"],
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    mode: "Both"
  },
  {
    id: 7,
    title: "B.Com LLB",
    description: "Commerce and law integrated program",
    duration: "5 Years",
    students: "250+",
    specializations: ["Corporate Law", "Taxation Law"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    mode: "Offline"
  },
];

export const CoursesSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [enrollmentFormOpen, setEnrollmentFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('');

  const toggleCard = (courseId: number) => {
    setExpandedCard(expandedCard === courseId ? null : courseId);
  };

  const handleEnrollment = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setEnrollmentFormOpen(true);
    console.log(`Opening enrollment form for: ${courseTitle}`);
  };

  const closeEnrollmentForm = () => {
    setEnrollmentFormOpen(false);
    setSelectedCourse('');
  };

  return (
    <>
      <section id="courses" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our <span className="text-emerald-600">Courses</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Choose from our comprehensive range of courses designed to elevate your career
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
                <div className="absolute top-3 right-3 z-10">
                  <Badge
                   variant={course.mode === "online" ? "default" : course.mode === "Offline" ? "destructive" : "secondary"}
                    className={`text-xs font-medium ${course.mode === "Online"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                         : course.mode === "Offline"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-green-600 text-white hover:bg-green-700"
                      }`}
                  >
                     {course.mode === "online" ? "Online" : course.mode === "Offline" ? "Offline" : "Online & Offline"}
                  </Badge>
                </div>
                <img
                  className="h-48 w-full object-cover"
                  src={course.image}
                  alt={course.title}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleCard(course.id)}
                    className="w-full flex items-center justify-between text-emerald-600 font-medium py-2 border-t border-gray-200"
                  >
                    <span>View Specializations</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${expandedCard === course.id ? 'rotate-180' : ''
                        }`}
                    />
                  </button>

                  {expandedCard === course.id && (
                    <div className="mt-3 space-y-2">
                      {course.specializations.map((spec, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Award className="h-3 w-3 mr-2 text-emerald-500" />
                          <span>{spec}</span>
                        </div>
                      ))}
                      <button
                        onClick={() => handleEnrollment(course.title)}
                        className="w-full mt-4 bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors"
                      >
                        Enquiry Now
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnrollmentForm
        isOpen={enrollmentFormOpen}
        onClose={closeEnrollmentForm}
        courseTitle={selectedCourse}
      />
    </>
  );
};