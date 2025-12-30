import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rohit Sharma",
      role: "IPMAT Aspirant",
      feedback:
        "Pratham Test Prep helped me build confidence and crack my entrance exam with ease. The mentorship and mock tests were excellent.",
    },
    {
      name: "Ananya Verma",
      role: "CLAT Aspirant",
      feedback:
        "The mentors and structured study plans made a huge difference in my preparation. Highly recommended!",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-linear-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Students Say
        </h2>
        <p className="text-gray-500 mb-14 max-w-2xl mx-auto">
          Real experiences from students who trusted Pratham Test Prep
        </p>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-left"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-blue-600 text-3xl mb-6" />

              <p className="text-gray-600 italic mb-6 leading-relaxed">
                “{item.feedback}”
              </p>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800">
                  {item.name}
                </h4>
                <span className="text-sm text-gray-500">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
