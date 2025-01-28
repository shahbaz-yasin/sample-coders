'use client';

import Link from 'next/link';
import { useTheme } from '../lib/context/ThemeContext';

export default function HowItWorksSection() {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  return (
    <section className={`py-12 sm:py-16 md:py-20 lg:py-24 ${
      isDark ? 'bg-[#1E293B]' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 
            ${isDark ? 'text-white' : 'text-gray-900'}`}>
            How it Works
          </h2>
          <p className={`text-lg sm:text-xl 
            ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Simple process to start working with The Elite Coders
          </p>
        </div>

        {/* Process Image/GIF Container */}
        <div className="max-w-xl sm:max-w-3xl lg:max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className={`rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl ${
            isDark ? 'bg-[#0F172A]' : 'bg-white'
          }`}>
            <img
              src="/process.jpg"
              alt="How The Elite Coders Works"
              className="w-full h-auto"
              width={1200}
              height={600}
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            href="/request-candidates"
            className={`
              inline-flex items-center justify-center 
              px-6 sm:px-8 py-3 sm:py-4
              rounded-lg text-base font-semibold text-white
              bg-[#7C3AED] hover:bg-[#6D28D9] 
              transform transition-all duration-200
              shadow-md hover:shadow-xl hover:scale-[1.02]
              font-poppins no-underline
              border border-purple-500 hover:border-purple-600
              w-full sm:w-auto max-w-xs mx-auto
            `}
          >
            Request Candidates
          </Link>
        </div>
      </div>
    </section>
  );
} 