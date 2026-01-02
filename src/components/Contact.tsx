import { Phone, Mail, MapPin, Instagram, Youtube } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Contact() {
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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 9004365819',
      link: 'tel:919004365819',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'modernmechanicalaircondition@gmail.com',
      link: 'mailto:modernmechanicalaircondition@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'OPP. MESCO petrol pump, near Ashish Hotel, Kandivali, Ekta Nagar, W, Mumbai, Maharashtra 400067',
      link: 'https://maps.google.com/?q=Kandivali+West+Mumbai+400067',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to book our services? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target={info.icon === MapPin ? '_blank' : undefined}
              rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
              className={`group bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-blue-600 text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <info.icon size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{info.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{info.content}</p>
            </a>
          ))}
        </div>

        <div
          className={`bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Ready to Cool Down?</h3>
          <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8">
            Contact us today for professional AC services at competitive prices
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <a
              href="tel:919004365819"
              className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href="https://wa.me/919004365819"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6">
            <a
              href="https://www.instagram.com/modernmechanicalaircondition1?igsh=cXI2MXo5Nm5jdGh4"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white p-3 sm:p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://youtube.com/@modernmechanicalaircondition?si=9t_wH_7hZcKfZIWB"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white p-3 sm:p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
