'use client';

import Link from 'next/link';
import { useTheme } from '../lib/context/ThemeContext';

export default function GetStartedSection() {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  return (
    <section className={`py-12 sm:py-16 md:py-20 lg:py-24 ${
      isDark ? 'bg-[#1E293B]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Get Started
          </h2>
          <p className={`text-lg sm:text-xl mb-8 sm:mb-10 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            At The Elite Coders, we provide world-class developers who don't just join your team — they 
            become the driving force behind your success, pushing boundaries, fueling innovation, 
            and delivering extraordinary results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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
                w-full sm:w-auto
              `}
            >
              Schedule a Call
            </Link>
            <div className={`text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Looking for a job?{' '}
              <Link
                href="/apply"
                className={`
                  font-semibold no-underline
                  ${isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}
                `}
              >
                Apply here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 