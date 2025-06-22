export const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-emerald-50 to-green-100 py-20 overflow-hidden">

      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/7945680/7945680-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />

          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Students celebrating graduation"
            className="w-full h-full object-cover"
          />
        </video>

      </div>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-lg">
              <span className="block">Transform Your</span>
              <span className="block text-emerald-400">Career Journey</span>
            </h1>
            <p className="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl drop-shadow-md">
              Join EduUpSkills and unlock your potential with industry-leading courses designed by experts.
              From law to technology, we provide the skills you need to succeed in today's competitive world.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#courses"
                  className="bg-emerald-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-emerald-700 transition-colors"
                >
                  Explore Courses
                </a>
                <a
                  href="#about"
                  className="text-emerald-300 border border-emerald-300 px-8 py-3 rounded-md text-lg font-medium hover:bg-emerald-50 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 border border-white border-opacity-20 shadow-xl">
                <div className="text-center">
                  <h3 className="text-white text-xl font-semibold mb-4">Join Our Community</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-2xl font-bold text-emerald-400">11000+</p>
                      <p className="text-white text-sm">Students</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-emerald-400">7</p>
                      <p className="text-white text-sm">Programs</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-emerald-400">95%</p>
                      <p className="text-white text-sm">Success Rate</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-emerald-400">24/7</p>
                      <p className="text-white text-sm">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};