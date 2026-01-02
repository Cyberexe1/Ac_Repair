export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm sm:text-base text-gray-400">
            &copy; {new Date().getFullYear()} Modern Mechanical A.C. Repair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
