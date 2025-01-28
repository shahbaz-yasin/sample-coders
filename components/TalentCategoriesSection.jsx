'use client';

import { useTheme } from '../lib/context/ThemeContext';
import { ArrowForward, Code, Palette, Campaign, Analytics, 
         TaskAlt, Edit, Support, AccountBalance } from '@mui/icons-material';
import { useState } from 'react';

export default function TalentCategoriesSection() {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      title: "Software Development",
      description: "From front-end to back-end developers, full-stack engineers, and mobile app experts, our developers build scalable solutions tailored to your business.",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Design & Creative",
      description: "UI/UX designers, graphic artists, and brand strategists who turn ideas into visually stunning, user-friendly designs.",
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Digital Marketing",
      description: "SEO specialists, social media marketers, and content strategists to help you grow your online presence and reach your target audience.",
      icon: <Campaign className="w-6 h-6" />,
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Data Science & Analytics",
      description: "Data analysts, machine learning engineers, and AI experts to help you unlock insights and make data-driven decisions.",
      icon: <Analytics className="w-6 h-6" />,
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      title: "Project Management",
      description: "Project managers and Scrum Masters to ensure your projects are delivered on time and exceed expectations.",
      icon: <TaskAlt className="w-6 h-6" />,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Writing & Content Creation",
      description: "Skilled copywriters, content marketers, and technical writers who bring your ideas to life through compelling content.",
      icon: <Edit className="w-6 h-6" />,
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Sales & Customer Support",
      description: "Sales experts and customer support professionals to enhance client relationships and boost conversions.",
      icon: <Support className="w-6 h-6" />,
      color: "from-indigo-500/20 to-purple-500/20"
    },
    {
      title: "Finance & Accounting",
      description: "Certified accountants, financial analysts, and auditors to help you manage your finances effectively.",
      icon: <AccountBalance className="w-6 h-6" />,
      color: "from-emerald-500/20 to-green-500/20"
    }
  ];

  return (
    <section className={`py-12 sm:py-16 md:py-20 lg:py-24 ${
      isDark ? 'bg-[#1E293B]' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 
            ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Talent Categories
          </h2>
          <p className={`text-lg sm:text-xl 
            ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Access top professionals across various domains
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`
                relative p-6 rounded-2xl cursor-pointer
                transition-all duration-300 group
                ${isDark ? 
                  'hover:bg-[#232d43] border border-gray-800' : 
                  'hover:bg-white hover:shadow-lg'
                }
                ${activeCategory === index ? 
                  (isDark ? 'bg-[#232d43]' : 'bg-white shadow-lg') : 
                  'bg-transparent'
                }
              `}
              onClick={() => setActiveCategory(index)}
            >
              {/* Gradient Background */}
              <div className={`
                absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color}
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                ${activeCategory === index ? 'opacity-100' : ''}
              `} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`
                  p-3 rounded-lg inline-block mb-4
                  ${isDark ? 'text-purple-400' : 'text-purple-600'}
                `}>
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className={`text-xl font-semibold mb-3
                  ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed
                  ${isDark ? 'text-gray-300' : 'text-gray-600'}
                `}>
                  {category.description}
                </p>

                {/* Arrow Icon */}
                <div className={`
                  mt-4 opacity-0 group-hover:opacity-100
                  transform translate-x-0 group-hover:translate-x-2
                  transition-all duration-300
                  ${isDark ? 'text-purple-400' : 'text-purple-600'}
                `}>
                  <ArrowForward className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 