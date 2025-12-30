const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-700 via-blue-600 to-cyan-500 text-white px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl text-center relative z-10">
        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-white/20 rounded-full tracking-wide">
          Trusted by 10,000+ Students
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Crack Competitive Exams <br />
          <span className="text-yellow-300">With Confidence</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-100 mb-10">
          Pratham Test Prep empowers students with expert mentorship, structured
          learning, and result-driven preparation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="#contact"
            className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1"
          >
            Book Free Demo
          </a>

          <a
            href="#courses"
            className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition transform hover:-translate-y-1"
          >
            Explore Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
