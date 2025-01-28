'use client';

import { useTheme } from '../lib/context/ThemeContext';
import { Star } from '@mui/icons-material';

export default function TestimonialsSection() {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      company_logo: "/testimonials/techflow-logo.png",
      image: "/testimonials/sarah.webp",
      content: "The Elite Coders provided us with exceptional React and Node.js developers who seamlessly integrated with our team. Their technical expertise and communication skills are outstanding.",
      rating: 5,
      hired: "Hired 4 developers"
    },
    {
      name: "Michael Rodriguez",
      role: "Engineering Manager at ScaleUp",
      company_logo: "/testimonials/scaleup-logo.png",
      image: "/testimonials/michael.webp",
      content: "Finding skilled Python developers was a challenge until we partnered with The Elite Coders. Their pre-vetted talent pool saved us countless hours in recruitment.",
      rating: 5,
      hired: "Hired 3 developers"
    },
    {
      name: "Emma Thompson",
      role: "Product Director at InnovateLabs",
      company_logo: "/testimonials/innovate-logo.png",
      image: "/testimonials/emma.webp",
      content: "The Java developers we hired through The Elite Coders exceeded our expectations. Their ability to handle complex enterprise applications is remarkable.",
      rating: 5,
      hired: "Hired 5 developers"
    }
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
            Trusted by Industry Leaders
          </h2>
          <p className={`text-lg sm:text-xl 
            ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            See what our clients say about their experience with The Elite Coders
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`
                p-8 rounded-2xl transition-all duration-300
                ${isDark ? 
                  'bg-[#1E293B] hover:bg-[#232d43] border border-gray-800' : 
                  'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg'
                }
              `}
            >
              {/* Company Logo */}
              <img 
                src={testimonial.company_logo}
                alt={`${testimonial.name}'s company`}
                className="h-8 mb-6 opacity-80"
              />

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className={`text-lg mb-6 leading-relaxed
                ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className={`font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {testimonial.role}
                  </p>
                  <p className={`text-sm mt-1 ${
                    isDark ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    {testimonial.hired}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={`
          grid grid-cols-2 md:grid-cols-4 gap-8 
          p-8 rounded-2xl text-center
          ${isDark ? 'bg-[#1E293B] border border-gray-800' : 'bg-gray-50'}
        `}>
          <div>
            <h3 className={`text-3xl font-bold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>98%</h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Client Satisfaction
            </p>
          </div>
          <div>
            <h3 className={`text-3xl font-bold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>350+</h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Successful Placements
            </p>
          </div>
          <div>
            <h3 className={`text-3xl font-bold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>15+</h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Countries
            </p>
          </div>
          <div>
            <h3 className={`text-3xl font-bold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>4.9/5</h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Average Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 