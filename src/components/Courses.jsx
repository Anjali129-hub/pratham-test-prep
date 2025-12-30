import { FaBookOpen, FaGraduationCap, FaBalanceScale } from "react-icons/fa";

const Courses = () => {
  const courses = [
    {
      title: "IPMAT",
      description:
        "Comprehensive IPMAT preparation with expert mentorship, concept clarity, and regular mock tests.",
      cta: "Enroll Now",
      icon: <FaGraduationCap />,
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "CUET",
      description:
        "Structured CUET coaching covering fundamentals, practice sessions, and performance analysis.",
      cta: "Join Today",
      icon: <FaBookOpen />,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "CLAT",
      description:
        "Focused CLAT training with legal aptitude, reasoning skills, and exam-oriented strategies.",
      cta: "Get Started",
      icon: <FaBalanceScale />,
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section
      id="courses"
      className="py-24 px-6 bg-linear-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Courses
        </h2>
        <p className="text-gray-500 mb-14 max-w-2xl mx-auto">
          Carefully designed programs to help you succeed in competitive exams
        </p>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              {/* Icon Circle */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full bg-linear-to-r ${course.gradient} text-white text-2xl mb-6 mx-auto`}
              >
                {course.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {course.title}
              </h3>

              <p className="text-gray-600 mb-8">
                {course.description}
              </p>

              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                {course.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
