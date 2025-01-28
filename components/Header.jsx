'use client';

import { useState, useRef } from 'react';
import { Button, IconButton } from '@mui/material';
import Link from 'next/link';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '../lib/context/ThemeContext';

export default function Header() {
  const [talentOpen, setTalentOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { mode, toggleTheme } = useTheme();
  
  // Add refs to track hover state
  const talentMenuRef = useRef(null);
  const productsMenuRef = useRef(null);

  const isDark = mode === 'dark';

  const handleMouseEnter = (setter) => {
    setter(true);
  };

  const handleMouseLeave = (event, menuRef, setter) => {
    // Check if mouse is moving to the dropdown or menu item
    const relatedTarget = event.relatedTarget;
    if (!menuRef.current?.contains(relatedTarget)) {
      setter(false);
    }
  };

  return (
    <>
      <header className={`border-b relative ${isDark ? 'border-gray-700 bg-[#1E293B]' : 'border-gray-200 bg-white'} 
        shadow-[0_4px_12px_rgba(0,0,0,0.1)] sticky top-0 z-[60]`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className={`text-xl font-bold ${isDark ? 'text-white' : 'text-primary'}`}>
                Logo
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div 
                ref={talentMenuRef}
                className="relative group h-16 flex items-center"
              >
                <span
                  className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-primary hover:text-secondary'} 
                    transition-colors duration-200 cursor-pointer font-medium`}
                  onMouseEnter={() => handleMouseEnter(setTalentOpen)}
                  onMouseLeave={(e) => handleMouseLeave(e, talentMenuRef, setTalentOpen)}
                >
                  For Companies
                </span>
                {talentOpen && (
                  <div 
                    className={`fixed left-0 w-full shadow-xl py-10 z-50 
                      ${isDark ? 
                        'bg-[#151E2E] border-t border-gray-800 shadow-gray-900/20' : 
                        'bg-gray-100 border-t border-gray-200 shadow-gray-200/70'
                      }`}
                    style={{ top: '64px', marginTop: '-1px' }}
                    onMouseLeave={(e) => handleMouseLeave(e, talentMenuRef, setTalentOpen)}
                  >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-3 gap-8">
                        <Link href="/companies/browse-talent" className="block no-underline group/card">
                          <div className={`relative h-full p-7 rounded-xl transition-all duration-300 ease-in-out
                            ${isDark ? 
                              'bg-[#1a2234] hover:bg-[#232d43] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)]' : 
                              'bg-white hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]'
                            } 
                            border ${isDark ? 'border-gray-800/50' : 'border-gray-200'}
                            hover:scale-[1.02] hover:-translate-y-0.5`}
                          >
                            <div className="relative z-10">
                              <h3 className={`text-lg font-semibold mb-3 transition-colors duration-200
                                ${isDark ? 'text-gray-100' : 'text-gray-900'}
                                group-hover/card:text-accent`}>
                                Browse dream talent
                              </h3>
                              <p className={`text-sm leading-relaxed
                                ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Find talent across 30+ top technologies
                              </p>
                            </div>
                            <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 
                              group-hover/card:opacity-100 pointer-events-none
                              ${isDark ? 'bg-gradient-to-tr from-accent/5 to-transparent' : 
                                'bg-gradient-to-tr from-accent/10 to-transparent'}`} 
                            />
                          </div>
                        </Link>

                        <Link href="/companies/case-studies" className="block no-underline group/card">
                          <div className={`relative h-full p-7 rounded-xl transition-all duration-300 ease-in-out
                            ${isDark ? 
                              'bg-[#1a2234] hover:bg-[#232d43] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)]' : 
                              'bg-white hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]'
                            } 
                            border ${isDark ? 'border-gray-800/50' : 'border-gray-200'}
                            hover:scale-[1.02] hover:-translate-y-0.5`}
                          >
                            <div className="relative z-10">
                              <h3 className={`text-lg font-semibold mb-3 transition-colors duration-200
                                ${isDark ? 'text-gray-100' : 'text-gray-900'}
                                group-hover/card:text-accent`}>
                                Case Studies
                              </h3>
                              <p className={`text-sm leading-relaxed
                                ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Testimonials & case studies on how we help clients
                              </p>
                            </div>
                            <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 
                              group-hover/card:opacity-100 pointer-events-none
                              ${isDark ? 'bg-gradient-to-tr from-accent/5 to-transparent' : 
                                'bg-gradient-to-tr from-accent/10 to-transparent'}`} 
                            />
                          </div>
                        </Link>

                        <Link href="/companies/why-flexiple" className="block no-underline group/card">
                          <div className={`relative h-full p-7 rounded-xl transition-all duration-300 ease-in-out
                            ${isDark ? 
                              'bg-[#1a2234] hover:bg-[#232d43] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)]' : 
                              'bg-white hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]'
                            } 
                            border ${isDark ? 'border-gray-800/50' : 'border-gray-200'}
                            hover:scale-[1.02] hover:-translate-y-0.5`}
                          >
                            <div className="relative z-10">
                              <h3 className={`text-lg font-semibold mb-3 transition-colors duration-200
                                ${isDark ? 'text-gray-100' : 'text-gray-900'}
                                group-hover/card:text-accent`}>
                                Why Flexiple?
                              </h3>
                              <p className={`text-sm leading-relaxed
                                ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Learn about Flexiple & find helpful hiring guides
                              </p>
                            </div>
                            <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 
                              group-hover/card:opacity-100 pointer-events-none
                              ${isDark ? 'bg-gradient-to-tr from-accent/5 to-transparent' : 
                                'bg-gradient-to-tr from-accent/10 to-transparent'}`} 
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div 
                ref={productsMenuRef}
                className="relative group h-16 flex items-center"
              >
                <span
                  className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-primary hover:text-secondary'} 
                    transition-colors duration-200 cursor-pointer font-medium`}
                  onMouseEnter={() => handleMouseEnter(setProductsOpen)}
                  onMouseLeave={(e) => handleMouseLeave(e, productsMenuRef, setProductsOpen)}
                >
                  For Talent
                </span>
                {productsOpen && (
                  <div 
                    className={`fixed left-0 w-full shadow-xl py-10 z-50 
                      ${isDark ? 
                        'bg-[#151E2E] border-t border-gray-800 shadow-gray-900/20' : 
                        'bg-gray-100 border-t border-gray-200 shadow-gray-200/70'
                      }`}
                    style={{ top: '64px', marginTop: '-1px' }}
                    onMouseLeave={(e) => handleMouseLeave(e, productsMenuRef, setProductsOpen)}
                  >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-2 gap-8">
                        <Link href="/talent/apply" className="block no-underline group/card">
                          <div className={`relative h-full p-7 rounded-xl transition-all duration-300 ease-in-out
                            ${isDark ? 
                              'bg-[#1a2234] hover:bg-[#232d43] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)]' : 
                              'bg-white hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]'
                            } 
                            border ${isDark ? 'border-gray-800/50' : 'border-gray-200'}
                            hover:scale-[1.02] hover:-translate-y-0.5`}
                          >
                            <div className="relative z-10">
                              <h3 className={`text-lg font-semibold mb-3 transition-colors duration-200
                                ${isDark ? 'text-gray-100' : 'text-gray-900'}
                                group-hover/card:text-accent`}>
                                Apply as talent
                              </h3>
                              <p className={`text-sm leading-relaxed
                                ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Join our network of top developers & designers
                              </p>
                            </div>
                            <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 
                              group-hover/card:opacity-100 pointer-events-none
                              ${isDark ? 'bg-gradient-to-tr from-accent/5 to-transparent' : 
                                'bg-gradient-to-tr from-accent/10 to-transparent'}`} 
                            />
                          </div>
                        </Link>

                        <Link href="/talent/benefits" className="block no-underline group/card">
                          <div className={`relative h-full p-7 rounded-xl transition-all duration-300 ease-in-out
                            ${isDark ? 
                              'bg-[#1a2234] hover:bg-[#232d43] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)]' : 
                              'bg-white hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]'
                            } 
                            border ${isDark ? 'border-gray-800/50' : 'border-gray-200'}
                            hover:scale-[1.02] hover:-translate-y-0.5`}
                          >
                            <div className="relative z-10">
                              <h3 className={`text-lg font-semibold mb-3 transition-colors duration-200
                                ${isDark ? 'text-gray-100' : 'text-gray-900'}
                                group-hover/card:text-accent`}>
                                Why join Flexiple?
                              </h3>
                              <p className={`text-sm leading-relaxed
                                ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Learn about the benefits of joining our network
                              </p>
                            </div>
                            <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 
                              group-hover/card:opacity-100 pointer-events-none
                              ${isDark ? 'bg-gradient-to-tr from-accent/5 to-transparent' : 
                                'bg-gradient-to-tr from-accent/10 to-transparent'}`} 
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <IconButton 
                onClick={toggleTheme}
                className={isDark ? 'text-white' : 'text-primary'}
                size="large"
              >
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              <Button 
                variant="outlined"
                className="font-poppins"
                sx={{
                  borderColor: isDark ? '#CBD5E1' : '#2C3E50',
                  color: isDark ? '#CBD5E1' : '#2C3E50',
                  '&:hover': {
                    borderColor: isDark ? '#F1F5F9' : '#1a252f',
                    color: isDark ? '#F1F5F9' : '#1a252f',
                    backgroundColor: isDark ? 'rgba(241, 245, 249, 0.08)' : 'rgba(44, 62, 80, 0.04)',
                  }
                }}
              >
                Find Jobs
              </Button>
              <Button 
                variant="contained"
                className="font-poppins"
                sx={{
                  backgroundColor: isDark ? '#3B82F6' : '#2C3E50',
                  color: '#FFFFFF',
                  '&:hover': {
                    backgroundColor: isDark ? '#2563EB' : '#1a252f',
                  }
                }}
              >
                Hire Developers
              </Button>
              <Button 
                variant="text"
                className="font-poppins"
                sx={{
                  color: isDark ? '#CBD5E1' : '#2C3E50',
                  '&:hover': {
                    color: isDark ? '#F1F5F9' : '#1a252f',
                    backgroundColor: isDark ? 'rgba(241, 245, 249, 0.08)' : 'rgba(44, 62, 80, 0.04)',
                  }
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
} 