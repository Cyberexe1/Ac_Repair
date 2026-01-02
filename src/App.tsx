import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Modern Mechanical A.C. Repair - Professional AC Services in Mumbai</title>
        <meta name="description" content="Professional AC repair, installation & maintenance services in Mumbai. Expert technicians, competitive pricing, 24/7 emergency service available." />
        <meta name="keywords" content="AC repair, AC service, air conditioning repair, Mumbai, AC installation, AC maintenance, cooling service, emergency AC repair" />
        <link rel="canonical" href="https://modernmechanicalac.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://modernmechanicalac.com/" />
        <meta property="og:title" content="Modern Mechanical A.C. Repair - Professional AC Services in Mumbai" />
        <meta property="og:description" content="Professional AC repair, installation & maintenance services in Mumbai. Expert technicians, competitive pricing, 24/7 emergency service available." />
        <meta property="og:image" content="/repair.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://modernmechanicalac.com/" />
        <meta property="twitter:title" content="Modern Mechanical A.C. Repair - Professional AC Services in Mumbai" />
        <meta property="twitter:description" content="Professional AC repair, installation & maintenance services in Mumbai. Expert technicians, competitive pricing, 24/7 emergency service available." />
        <meta property="twitter:image" content="/repair.png" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Modern Mechanical A.C. Repair",
            "image": "/repair.png",
            "@id": "https://modernmechanicalac.com",
            "url": "https://modernmechanicalac.com",
            "telephone": "+91 9004365819",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "OPP. MESCO petrol pump, near Ashish Hotel, Kandivali, Ekta Nagar, W",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400067",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.2183,
              "longitude": 72.8522
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              }
            ],
            "priceRange": "$$",
            "areaServed": {
              "@type": "City",
              "name": "Mumbai"
            },
            "serviceType": ["AC Repair", "AC Installation", "AC Maintenance", "AC Duct Cleaning"],
            "description": "Professional AC repair, installation & maintenance services in Mumbai with expert technicians and 24/7 emergency service available.",
            "brand": "Modern Mechanical",
            "founder": {
              "@type": "Person",
              "name": "Modern Mechanical"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "4"
            },
            "servesCurrencies": ["INR"]
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navigation scrolled={scrolled} />
        <FloatingButtons />
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
