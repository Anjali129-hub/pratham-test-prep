const About = () => {
  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Pratham Test Prep
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Your trusted partner in competitive exam preparation
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Left Text */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <span className="font-semibold text-gray-800">
                Pratham Test Prep
              </span>{" "}
              is a results-driven coaching platform dedicated to helping students
              succeed in highly competitive entrance examinations. We believe
              that success comes from the right balance of knowledge, practice,
              and mentorship.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our structured learning programs are designed to simplify complex
              concepts, strengthen fundamentals, and build exam confidence
              through continuous practice and feedback.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              With experienced faculty, personalized guidance, and regular mock
              assessments, we ensure that every student gets the support they
              need to achieve their academic goals.
            </p>
          </div>

          {/* Right Highlights */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <ul className="space-y-5 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✔</span>
                Concept-driven learning with real exam focus
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✔</span>
                Expert mentors with proven teaching experience
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✔</span>
                Personalized study plans for every student
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✔</span>
                Continuous assessment and performance tracking
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
