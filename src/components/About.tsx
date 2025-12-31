import { CheckCircle } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    'Years of Professional Experience',
    'Certified & Trained Technicians',
    'Competitive & Transparent Pricing',
    'Customer Satisfaction Guaranteed',
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Modern Mechanical</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Modern Mechanical A.C. Repair is a trusted provider of professional air conditioning
              services. With years of experience, we specialize in A/C installation, repair,
              maintenance, and cleaning. Our team of experts ensures your A/C system operates
              efficiently and reliably, delivering comfort to your home or business.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 transform transition-all duration-700 delay-${
                    (index + 1) * 100
                  } ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                >
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/repair.png"
                alt="AC Repair Service"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
