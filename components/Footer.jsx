'use client';

import Link from 'next/link';
import { useTheme } from '../lib/context/ThemeContext';
import {
  LinkedIn,
  Twitter,
  GitHub,
  Instagram,
  LocationOn,
  Email,
  Phone,
  ArrowForward
} from '@mui/icons-material';

export default function Footer() {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  const socialLinks = [
    { icon: <LinkedIn />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter />, href: '#', label: 'Twitter' },
    { icon: <GitHub />, href: '#', label: 'GitHub' },
    { icon: <Instagram />, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className={`${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <img 
                src="/logo.png" 
                alt="The Elite Coders" 
                className="h-10 w-auto"
              />
            </Link>
            <p className={`text-base mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Connecting businesses with elite software developers. Our platform ensures 
              you find the perfect match for your technical needs.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-2 rounded-full transition-colors ${
                    isDark ? 
                    'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' : 
                    'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <LocationOn className={`mt-1 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                <p className={`ml-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  123 Tech Hub Street<br />
                  Silicon Valley, CA 94025
                </p>
              </div>
              <div className="flex items-center">
                <Email className={isDark ? 'text-purple-400' : 'text-purple-600'} />
                <a 
                  href="mailto:contact@elitecoders.com"
                  className={`ml-3 no-underline ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  contact@elitecoders.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Can be used for newsletter or other content */}
          <div className="flex items-center justify-center">
            <div className="max-w-sm w-full">
              <h3 className={`text-xl text-center font-semibold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Ready to get started?
              </h3>
              <Link 
                href="/request-candidates"
                className={`
                  inline-flex items-center justify-center 
                  px-6 py-3 w-full
                  rounded-lg text-base font-semibold text-white
                  bg-[#7C3AED] hover:bg-[#6D28D9] 
                  transform transition-all duration-200
                  shadow-md hover:shadow-xl hover:scale-[1.02]
                  font-poppins no-underline
                  border border-purple-500 hover:border-purple-600
                  mb-4
                `}
              >
                Request Candidates
              </Link>
              <div className="text-center">
                <span className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
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
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className={`h-px ${isDark ? 'bg-gradient-to-r from-transparent via-gray-700 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-200 to-transparent'}`}></div>

      {/* Bottom Bar */}
      <div className={`${isDark ? 'bg-[#0F172A]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              © {new Date().getFullYear()} The Elite Coders. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link 
                href="/privacy"
                className={`text-sm ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className={`text-sm ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookies"
                className={`text-sm ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 