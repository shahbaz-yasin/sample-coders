'use client';

import Link from 'next/link';
import { useTheme } from '../lib/context/ThemeContext';
import { CheckCircle } from '@mui/icons-material';

export default function BenefitsSection() {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  const benefits = [
    {
        title: "5x Productive",
        description: "Leverage the power of a skilled, multi-disciplinary team to achieve results in a fraction of the time.",
        icon: <CheckCircle className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Pre-Vetted Professionals",
      description: "Access to thoroughly vetted developers who have proven their expertise through our rigorous selection process.",
      icon: <CheckCircle className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Cost Effective",
      description: "Get top-tier talent without the overhead costs. Pay only for the expertise you need, when you need it.",
      icon: <CheckCircle className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Scale Effortlessly",
      description: "Quickly scale your team up or down based on project demands, maintaining flexibility without compromising quality.",
      icon: <CheckCircle className="w-8 h-8 text-purple-500" />
    },
    
  ];

  return (
    <section className={`py-12 sm:py-16 md:py-20 lg:py-24 ${
      isDark ? 'bg-[#0F172A]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 
            ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Why Choose The Elite Coders
          </h2>
          <p className={`text-lg sm:text-xl 
            ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Experience the advantages of working with pre-vetted professionals
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`
                p-8 rounded-2xl transition-all duration-300
                ${isDark ? 
                  'bg-[#1E293B] hover:bg-[#232d43] border border-gray-800' : 
                  'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
                }
                transform hover:scale-[1.02]
              `}
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-3
                ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {benefit.title}
              </h3>
              <p className={`
                ${isDark ? 'text-gray-300' : 'text-gray-600'}
                text-base leading-relaxed
              `}>
                {benefit.description}
              </p>
            </div>
          ))}
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