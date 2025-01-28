'use client';

import Link from 'next/link';
import { useTheme } from '../lib/context/ThemeContext';
import { useEffect, useRef } from 'react';

export default function SkillsSection() {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  const sliderRef = useRef(null);

  const skills = [
    { name: 'Java', logo: '/skills/java.png' },
    { name: 'Go', logo: '/skills/go.png' },
    { name: 'Swift', logo: '/skills/swift.png' },
    { name: 'Kotlin', logo: '/skills/kotlin.png' },
    { name: 'WordPress', logo: '/skills/wordpress.png' },
    { name: 'Node.js', logo: '/skills/nodejs.png' },
    { name: 'Angular', logo: '/skills/angular.png' },
    { name: 'Laravel', logo: '/skills/laravel.png' },
    { name: 'Python', logo: '/skills/python.png' },
    { name: 'Django', logo: '/skills/django.png' },
    { name: 'React.js', logo: '/skills/react.png' },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      // Clone the skills for infinite scroll effect
      const clonedItems = slider.innerHTML;
      slider.innerHTML = clonedItems + clonedItems;
    }
  }, []);

  return (
    <section className={`py-12 sm:py-16 md:py-20 lg:py-24 ${
      isDark ? 'bg-[#1E293B]' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 
            ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Connect with the Experts
          </h2>
          <p className={`text-lg sm:text-xl 
            ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Access top developers across various technologies and frameworks
          </p>
        </div>

        {/* Skills Slider */}
        <div className="relative w-full overflow-hidden mb-12 md:mb-16">
          <div 
            ref={sliderRef}
            className="flex animate-scroll"
            style={{
              animationDuration: '20s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
            }}
          >
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`
                  flex-none mx-4 p-6 rounded-xl w-40
                  ${isDark ? 
                    'bg-[#0F172A] border border-gray-800' : 
                    'bg-white shadow-md hover:shadow-lg'
                  }
                  flex flex-col items-center justify-center
                  transition-shadow duration-200
                `}
              >
                <img 
                  src={skill.logo} 
                  alt={skill.name}
                  className="w-12 h-12 object-contain mb-3"
                />
                <span className={`text-sm font-medium
                  ${isDark ? 'text-gray-300' : 'text-gray-700'}
                `}>
                  {skill.name}
                </span>
              </div>
            ))}
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