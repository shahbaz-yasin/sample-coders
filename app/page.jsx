'use client';

import { Button } from '@mui/material';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import BenefitsSection from '../components/BenefitsSection';
import SkillsSection from '../components/SkillsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TalentCategoriesSection from '../components/TalentCategoriesSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <SkillsSection />
      <TestimonialsSection />
      <TalentCategoriesSection />
      {/* Other sections */}
    </main>
  );
} 