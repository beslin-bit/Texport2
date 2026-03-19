import React from 'react';
import { ArrowRight, Lightbulb, Shirt, Scissors, Award, Users, Heart, TrendingUp, CheckCircle } from 'lucide-react';

const WhoWeAre = () => {
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

      {/* Metrics Bar */}
      <section className="bg-[#0f172a] py-16 md:py-20" data-testid="metrics-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center" data-testid={`metric-${index}`}>
                <div className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-[#ea580c] mb-3">
                  {metric.value}
                </div>
                <div className="font-inter text-sm md:text-base uppercase tracking-widest text-slate-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 md:py-32" data-testid="story-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
                Our Story
              </span>
              <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-[#0f172a] mb-6 leading-tight">
                Three Decades of Commitment
              </h2>
              <div className="space-y-4 font-inter text-base leading-relaxed text-slate-600">
                <p>
                  Established in <strong>1995</strong>, we are a privately owned apparel manufacturing and export 
                  company with an annual turnover of <strong>USD 110 million</strong>. Recognized as one of India's 
                  leading woven garment exporters, we operate eight fully integrated manufacturing units with a 
                  combined annual capacity of <strong>18 million units</strong>.
                </p>
                <p>
                  Our product range includes: Men's bottoms, shirts, and outerwear, Women's tops, skirts, 
                  bottoms, and outerwear. We specialize in delivering high-quality, competitively priced 
                  garments that meet international standards for compliance, consistency, and performance.
                </p>
                <p>
                  With strong multi-product capabilities and a proven global track record, we support our 
                  partners across the entire value chain — from product development and sourcing to production 
                  planning, quality control, and on-time delivery.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden">
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

      {/* Divisions Section */}
      <section className="py-20 md:py-32" data-testid="divisions-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Our Expertise
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
              Divisions
            </h2>
            <p className="font-playfair text-2xl md:text-3xl text-slate-700 italic max-w-3xl mx-auto">
              Crafting comfort, style, and quality in each stitch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Woven Division */}
            <div className="group" data-testid="division-woven">
              <div className="relative h-80 overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1764737740462-2a310c7b2c39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduJTIwc3R1ZGlvJTIwc2tldGNoZXMlMjBmYWJyaWMlMjBzd2F0Y2hlc3xlbnwwfHx8fDE3NzM5MjE1MjB8MA&ixlib=rb-4.1.0&q=85"
                  alt="Woven Division"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-oswald text-2xl md:text-3xl font-semibold uppercase text-[#0f172a] mb-4 tracking-wide">
                Woven
              </h3>
              <p className="font-inter text-base leading-relaxed text-slate-600 mb-4">
                State-of-the-art technology powers our Wovens range of sophisticated wear for men, women and children.
              </p>
              <p className="font-inter text-sm leading-relaxed text-slate-600">
                The woven division of Texport Overseas is equipped with state-of-the-art technology. By leveraging 
                its technical superiority and the expertise of its professionals, this division has achieved remarkable 
                in-house annual production capacity. A skilled workforce experienced in Computer Aided Design and 
                manufacturing systems is carrying out its responsibilities with passion and dedication.
              </p>
            </div>

            {/* Knits Division */}
            <div className="group" data-testid="division-knits">
              <div className="relative h-80 overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1753164597585-6d42636ea099?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwzfHxmYXNoaW9uJTIwZGVzaWduJTIwc3R1ZGlvJTIwc2tldGNoZXMlMjBmYWJyaWMlMjBzd2F0Y2hlc3xlbnwwfHx8fDE3NzM5MjE1MjB8MA&ixlib=rb-4.1.0&q=85"
                  alt="Knits Division"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-oswald text-2xl md:text-3xl font-semibold uppercase text-[#0f172a] mb-4 tracking-wide">
                Knits
              </h3>
              <p className="font-inter text-base leading-relaxed text-slate-600 mb-4">
                Advanced knitting technology delivers comfortable, stylish wear with exceptional quality and finish.
              </p>
              <p className="font-inter text-sm leading-relaxed text-slate-600">
                Our knits division combines cutting-edge machinery with skilled craftsmanship to produce a diverse 
                range of knitted garments. From basic tees to complex structured knits, we maintain the highest 
                standards of quality control and production efficiency, meeting global demand with precision and care.
              </p>
            </div>
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