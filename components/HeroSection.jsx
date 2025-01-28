'use client';

import Link from 'next/link';
import { useTheme } from '../lib/context/ThemeContext';

export default function HeroSection() {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  return (
    <section className={`py-12 sm:py-16 md:py-20 lg:py-24 ${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text and CTAs */}
          <div className="max-w-xl lg:max-w-2xl">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 sm:mb-8 
              ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Elite, Vetted Developers on Demand
            </h1>
            <p className={`text-lg sm:text-xl mb-8 sm:mb-10 leading-relaxed 
              ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Connect with top software developers from around the globe, meticulously vetted by 
              The Elite Coders experts for the skills, reliability and innovation your projects need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link 
                href="/request-candidates"
                className={`
                  inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4
                  rounded-lg text-base font-semibold text-white
                  bg-[#7C3AED] hover:bg-[#6D28D9] 
                  transform transition-all duration-200
                  shadow-md hover:shadow-xl hover:scale-[1.02]
                  font-poppins no-underline w-full sm:w-auto
                  border border-purple-500 hover:border-purple-600
                `}
              >
                Request Candidates
              </Link>
              <Link 
                href="/book-call"
                className={`
                  inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4
                  rounded-lg text-base font-semibold w-full sm:w-auto
                  ${isDark ? 
                    'text-white/90 hover:text-white bg-white/5 hover:bg-white/10' : 
                    'text-gray-900 hover:text-purple-700 bg-gray-50 hover:bg-purple-50'
                  }
                  border ${isDark ? 'border-white/10' : 'border-gray-200'}
                  transform transition-all duration-200
                  hover:scale-[1.02] hover:shadow-md
                  font-poppins no-underline
                `}
              >
                Book a Quick Call
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-8 lg:mt-0 lg:ml-auto">
            <div className="relative w-full">
              <img
                src="/hero-image.webp"
                alt="Developer Network Illustration"
                className="w-full h-auto rounded-xl sm:rounded-2xl"
                width={700}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 