
export const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About <span className="text-emerald-600">EduUpSkills</span>
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              EduUpSkills is a premier educational platform committed to providing high-quality courses 
              that prepare students for real-world challenges and opportunities.
            </p>
            <div className="mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Industry Experts</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Founded by industry experts and experienced educators, we focus on delivering practical, hands-on training.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Quality Education</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Our mission is to make quality education accessible, engaging, and effective, empowering individuals to transform their lives through learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              className="w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Students studying"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
