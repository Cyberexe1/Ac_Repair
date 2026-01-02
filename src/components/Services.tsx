import { Wrench, Wind, Settings, Filter, Droplets, Package, Zap, Shield } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Services() {
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

  const services = [
    {
      icon: Wrench,
      title: 'AC Repair Service',
      description: 'A/C system maintenance - 4 jet wash service in 1 year',
      price: '₹1,800',
      image: '/repair.png',
    },
    {
      icon: Settings,
      title: 'AC Overhauling',
      description: 'Compressor issues, coolant leaks, service, PCB issues',
      price: 'Contact Us',
      image: '/download.jpg',
    },
    {
      icon: Package,
      title: 'AC Installation',
      description: 'Professional installation with warranty',
      price: '₹1,200',
      image: '/install.png',
    },
    {
      icon: Filter,
      title: 'Filter Replacement',
      description: 'Replace old filters for better air quality',
      price: '₹300',
      image: '/replace.jpg',
    },
    {
      icon: Droplets,
      title: 'Jet Wash Service',
      description: '1 AC jet wash service for deep cleaning',
      price: '₹499',
      image: '/jetwash.png',
    },
    {
      icon: Zap,
      title: 'AC Dismantlement',
      description: 'Safe and efficient AC system dismantling',
      price: '₹499',
      image: '/dismantle.jpg',
    },
    {
      icon: Wind,
      title: 'Vent Cleaning',
      description: 'Complete A/C system vent cleaning service',
      price: '₹499',
      image: '/vent_clean.jpg',
    },
    {
      icon: Shield,
      title: 'Emergency Service',
      description: 'Ductless heating & A/C emergency services',
      price: '₹499',
      image: '/ductless.jpg',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive AC solutions for all your cooling needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white p-3 rounded-full">
                  <service.icon size={24} />
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 min-h-12">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-bold text-blue-600">{service.price}</span>
                  <button className="bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
