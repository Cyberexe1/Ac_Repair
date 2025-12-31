import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <>
      <a
        href="https://wa.me/919004365819"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-bounce"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      <a
        href="tel:919004365819"
        className="fixed bottom-6 right-6 z-40 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-110"
        aria-label="Call"
      >
        <Phone size={28} />
      </a>
    </>
  );
}
