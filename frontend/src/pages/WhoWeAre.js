import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Lightbulb, Shirt, Scissors, Award, Users, Heart, TrendingUp, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isVisible]);

  const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const startValue = 0;
      const endValue = typeof end === 'string' ? parseInt(end.replace(/\D/g, '')) : end;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * endValue);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <span>{count}{suffix}</span>;
  };
  const metrics = [
    { label: 'Annual Turnover', value: '$110M+' },
    { label: 'Annual Capacity', value: '18M Units' },
    { label: 'Manufacturing Units', value: '08' },
    { label: 'Established', value: '1995' },
  ];

  const strengths = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: 'Creativity & Design',
      desc: 'Innovation at the core of every pattern.',
    },
    {
      icon: <Shirt className="w-10 h-10" />,
      title: 'Multi-Product Capability',
      desc: 'From woven to knits, we cover it all.',
    },
    {
      icon: <Scissors className="w-10 h-10" />,
      title: 'Technical Excellence',
      desc: 'State-of-the-art machinery and processes.',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Global Compliance',
      desc: 'Meeting the highest international standards.',
    },
  ];

  const herPrograms = [
    { name: 'HERhealth', desc: 'Workplace health education and awareness' },
    { name: 'HERfinance', desc: 'Financial literacy and savings programs' },
    { name: 'HERrespect', desc: 'Gender equality and workplace dignity' },
    { name: 'HERessential', desc: 'Essential support and well-being initiatives' },
  ];

  return (
    <div className="w-full">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1741275269921-3c562cdb9176?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHxnYXJtZW50JTIwbWFudWZhY3R1cmluZyUyMHNld2luZyUyMGZhY3RvcnklMjBoaWdoJTIwdGVjaHxlbnwwfHx8fDE3NzM5MjE1MTl8MA&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 via-[#0f172a]/85 to-[#0f172a]/75"></div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
          <div className="mb-6 opacity-0 animate-fade-in-up">
            <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase" data-testid="hero-label">
              Texport Overseas
            </span>
          </div>
          
          <h1 
            className="font-oswald text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase text-white mb-8 leading-[1.1] opacity-0 animate-fade-in-up delay-100"
            data-testid="hero-headline"
          >
            Crafting Excellence<br />In Every Stitch
          </h1>
          
          <p 
            className="font-inter text-lg md:text-xl max-w-3xl mx-auto text-slate-300 leading-relaxed mb-12 opacity-0 animate-fade-in-up delay-200"
            data-testid="hero-subheadline"
          >
            Three decades of vision, commitment, and global recognition.<br />We are Texport Overseas.
          </p>
          
          <button 
            className="inline-flex items-center gap-3 bg-[#ea580c] text-white hover:bg-[#c2410c] px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300 opacity-0 animate-fade-in-up delay-300"
            data-testid="hero-cta-button"
            onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Journey
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 md:py-32" data-testid="story-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left: Story Text */}
            <div>
              <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
                Our Story
              </span>
              <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-[#0f172a] mb-6 leading-tight">
                Three Decades of Commitment
              </h2>
              <div className="font-inter text-base leading-relaxed text-slate-600 mb-8">
                <p>
                  Established in <strong>1995</strong>, we are a privately owned apparel manufacturing and export 
                  company with an annual turnover of <strong>USD 110 million</strong>. Recognized as one of India's 
                  leading woven garment exporters, we operate eight fully integrated manufacturing units with a 
                  combined annual capacity of <strong>18 million units</strong>. We specialize in delivering high-quality, 
                  competitively priced garments that meet international standards for compliance, consistency, and 
                  performance, supporting our partners across the entire value chain.
                </p>
              </div>

              {/* Visual Stats */}
              <div ref={statsRef} className="grid grid-cols-2 gap-6" data-testid="visual-stats">
                <div className="border-l-4 border-[#ea580c] pl-4">
                  <div className="font-oswald text-4xl md:text-5xl font-bold text-[#0f172a] mb-2">
                    {isVisible ? <AnimatedCounter end={110} suffix="M+" /> : '$110M+'}
                  </div>
                  <div className="font-inter text-sm uppercase tracking-widest text-slate-500">
                    Annual Turnover
                  </div>
                </div>

                <div className="border-l-4 border-[#ea580c] pl-4">
                  <div className="font-oswald text-4xl md:text-5xl font-bold text-[#0f172a] mb-2">
                    {isVisible ? <AnimatedCounter end={18} suffix="M" /> : '18M'}
                  </div>
                  <div className="font-inter text-sm uppercase tracking-widest text-slate-500">
                    Units Capacity
                  </div>
                </div>

                <div className="border-l-4 border-[#ea580c] pl-4">
                  <div className="font-oswald text-4xl md:text-5xl font-bold text-[#0f172a] mb-2">
                    {isVisible ? <AnimatedCounter end={8} suffix="" /> : '08'}
                  </div>
                  <div className="font-inter text-sm uppercase tracking-widest text-slate-500">
                    Manufacturing Units
                  </div>
                </div>

                <div className="border-l-4 border-[#ea580c] pl-4">
                  <div className="font-oswald text-4xl md:text-5xl font-bold text-[#0f172a] mb-2">
                    {isVisible ? <AnimatedCounter end={1995} suffix="" /> : '1995'}
                  </div>
                  <div className="font-inter text-sm uppercase tracking-widest text-slate-500">
                    Established
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-[600px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1772351721253-1008627c8c50?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxnYXJtZW50JTIwbWFudWZhY3R1cmluZyUyMHNld2luZyUyMGZhY3RvcnklMjBoaWdoJTIwdGVjaHxlbnwwfHx8fDE3NzM5MjE1MTl8MA&ixlib=rb-4.1.0&q=85"
                alt="Manufacturing Excellence"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                data-testid="story-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-20 md:py-32 bg-slate-50" data-testid="strengths-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-[#0f172a]">
              Strength of the Company
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 hover:border-[#ea580c]/50 transition-colors duration-300 p-8 group"
                data-testid={`strength-card-${index}`}
              >
                <div className="text-[#ea580c] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {strength.icon}
                </div>
                <h3 className="font-oswald text-xl font-semibold uppercase text-[#0f172a] mb-3 tracking-wide">
                  {strength.title}
                </h3>
                <p className="font-inter text-sm text-slate-600 leading-relaxed">
                  {strength.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People Section */}
      <section className="py-20 md:py-32 bg-[#0f172a] text-white" data-testid="people-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative h-[500px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBkaXZlcnNlJTIwdGVhbSUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NzM5MjE1MjJ8MA&ixlib=rb-4.1.0&q=85"
                alt="Our Team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                data-testid="people-image"
              />
            </div>
            <div>
              <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
                Our People
              </span>
              <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase mb-6 leading-tight">
                Meet Our Team
              </h2>
              <p className="font-inter text-base leading-relaxed text-slate-300 mb-6">
                We firmly believe that a satisfied, motivated, and well-informed workforce is crucial to 
                transforming a company into a thriving organization. Our commitment to corporate social 
                responsibility and sustainability is deeply intertwined with our business model, reflecting 
                our dedication to giving back to society.
              </p>
              <p className="font-inter text-base leading-relaxed text-slate-300 mb-6">
                To Texport Overseas, employees are not just part of the company—they are its driving force. 
                We recognize that a capable and content workforce is essential for maintaining a healthy and 
                prosperous business.
              </p>
              <p className="font-inter text-base leading-relaxed text-slate-300">
                Our employees' well-being, professional growth, and satisfaction are our top priorities, as 
                we understand that their happiness directly impacts our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Women Empowerment Section */}
      <section className="py-20 md:py-32" data-testid="empowerment-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Social Responsibility
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
              Empowering Our People
            </h2>
            <p className="font-inter text-lg md:text-xl max-w-3xl mx-auto text-slate-600 leading-relaxed">
              We believe a motivated workforce is the heart of our success. Our HER initiatives focus on 
              holistic well-being and women's empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {herPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-slate-50 border-l-4 border-[#ea580c] p-8"
                data-testid={`her-program-${index}`}
              >
                <div className="flex items-start gap-4">
                  <Heart className="w-8 h-8 text-[#ea580c] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-oswald text-2xl font-semibold uppercase text-[#0f172a] mb-3 tracking-wide">
                      {program.name}
                    </h3>
                    <p className="font-inter text-base text-slate-600 leading-relaxed">
                      {program.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-[400px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1742203100607-535a15b7f6c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21lbiUyMGdhcm1lbnQlMjB3b3JrZXJzJTIwc21pbGluZyUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NzM5MjE1MjF8MA&ixlib=rb-4.1.0&q=85"
              alt="Women Empowerment"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              data-testid="empowerment-image"
            />
          </div>

          <div className="mt-12 bg-[#0f172a] text-white p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-[#ea580c] flex-shrink-0" />
                <div>
                  <h4 className="font-oswald text-lg font-semibold uppercase mb-2 tracking-wide">Gender Equality</h4>
                  <p className="font-inter text-sm text-slate-300">Comprehensive programs fostering equality</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-[#ea580c] flex-shrink-0" />
                <div>
                  <h4 className="font-oswald text-lg font-semibold uppercase mb-2 tracking-wide">Leadership Development</h4>
                  <p className="font-inter text-sm text-slate-300">Nurturing future leaders from within</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-[#ea580c] flex-shrink-0" />
                <div>
                  <h4 className="font-oswald text-lg font-semibold uppercase mb-2 tracking-wide">Inclusive Environment</h4>
                  <p className="font-inter text-sm text-slate-300">Supportive workplace for all employees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 md:py-32 bg-slate-50 text-center" data-testid="footer-cta">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
            Partner With Excellence
          </h2>
          <p className="font-inter text-lg text-slate-600 leading-relaxed mb-8">
            Ready to work with a trusted manufacturing partner? Let's create something exceptional together.
          </p>
          <button 
            className="inline-flex items-center gap-3 bg-[#ea580c] text-white hover:bg-[#c2410c] px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300"
            data-testid="footer-cta-button"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;