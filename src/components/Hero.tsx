import { Snowflake, Award, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import PageTitle from './PageTitle';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <PageTitle 
        title="Home"
        description="Professional AC repair, installation & maintenance services in Mumbai. Expert technicians, competitive pricing, 24/7 emergency service available."
        path="/"
      />
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 overflow-hidden"
      >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Snowflake size={80} className="text-white" aria-hidden="true" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float-delayed">
          <Snowflake size={100} className="text-white" aria-hidden="true" />
        </div>
        <div className="absolute top-1/2 right-10 animate-float">
          <Snowflake size={60} className="text-white" aria-hidden="true" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Cool Comfort,
            <br />
            <span className="text-cyan-300">Hot Service</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Professional AC Repair, Installation & Maintenance Services in Mumbai
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 md:mb-16 max-w-md mx-auto">
            <button
              onClick={scrollToContact}
              className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Book Service Now
            </button>
            <a
              href="tel:919004365819"
              className="bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Call +91 9004365819
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { icon: Award, title: 'Certified Experts', text: 'Years of Experience' },
              { icon: Clock, title: '24/7 Available', text: 'Emergency Service' },
              { icon: Snowflake, title: 'Best Quality', text: 'Guaranteed Service' },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-md p-6 rounded-2xl transform transition-all duration-1000 delay-${
                  (index + 1) * 200
                } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <item.icon className="mx-auto mb-3 sm:mb-4 text-cyan-300" size={36} />
                <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
    </>
  );
}
