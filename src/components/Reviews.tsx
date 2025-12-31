import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const reviews = [
    {
      name: 'Fiza Shah',
      text: 'Good services at great price. He is a very reliable, trustworthy and honest professional.',
      rating: 5,
    },
    {
      name: 'Shami Shah',
      text: 'Very good service, technician was knowledgeable and very friendly. Very economical as compared to others. Good experience.',
      rating: 5,
    },
    {
      name: 'Vikas Tiwari',
      text: 'Nice AC service. Now my AC running smoothly. The service was quite good and they did it at an affordable price.',
      rating: 5,
    },
    {
      name: 'Abdul Kalam',
      text: 'Excellent service! The technician was knowledgeable, efficient, and friendly. My AC is running smoothly again.',
      rating: 5,
    },
  ];

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Customer <span className="text-blue-600">Reviews</span>
          </h2>
          <p className="text-xl text-gray-600">What our clients say about us</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 overflow-hidden">
            <div className="relative min-h-64">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 transform ${
                    index === currentSlide
                      ? 'translate-x-0 opacity-100'
                      : index < currentSlide
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="fill-yellow-400 text-yellow-400" size={28} />
                      ))}
                    </div>

                    <p className="text-xl text-gray-700 mb-8 leading-relaxed italic">
                      "{review.text}"
                    </p>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mb-6"></div>

                    <p className="text-lg font-semibold text-gray-900">{review.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-8 mt-8">
              <button
                onClick={prevSlide}
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                aria-label="Previous review"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                aria-label="Next review"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
