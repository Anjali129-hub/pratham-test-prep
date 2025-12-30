import {
  FaUserGraduate,
  FaChartLine,
  FaClipboardCheck,
  FaChalkboardTeacher,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Mentorship",
      desc: "Learn from highly experienced faculty with personalized guidance.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: <FaChartLine />,
      title: "Proven Results",
      desc: "Consistent success stories with students clearing top exams.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Regular Mock Tests",
      desc: "Exam-level mock tests with in-depth performance analysis.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: <FaUserGraduate />,
      title: "Student-Centric Approach",
      desc: "Focused attention on individual learning goals and progress.",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-24 px-6 bg-linear-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-14">
          What makes Pratham Test Prep the right choice for your success
        </p>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-linear-to-r ${item.gradient} text-white text-2xl`}
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
