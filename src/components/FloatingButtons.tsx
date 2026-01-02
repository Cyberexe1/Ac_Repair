import { Phone } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <>
      <a
        href="https://wa.me/919004365819"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 sm:right-6 z-40 transition-all duration-300 hover:scale-110 "
        aria-label="WhatsApp"
      >
        <img src="/whatsappp.png" alt="" className="w-20 h-20" />
      </a>

      <a
        href="tel:919004365819"
        className="fixed bottom-6 right-4 sm:right-6 z-40 bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-110"
        aria-label="Call"
      >
        <Phone size={28} />
      </a>
    </>
  );
}
