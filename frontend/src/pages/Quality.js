import React from 'react';
import { Shield, CheckCircle, Award, Target, Microscope, ClipboardCheck, FileCheck, Search } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Link, useLocation } from 'react-router-dom';

const Quality = () => {
  const location = useLocation();

  const tabs = [
    { name: 'Design & Innovation', path: '/design-innovation' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Quality', path: '/quality' },
    { name: 'Technology', path: '/technology' },
  ];

  const qaSystems = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'AQL 4 Point System',
      desc: 'Internationally recognized quality control based on AQL 4 point system, ensuring consistency and reliability in every batch.',
    },
    {
      icon: <Microscope className="w-12 h-12" />,
      title: 'German Testing Labs',
      desc: 'State-of-the-art German testing machines adhering to AATCC standards for accuracy and precision.',
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Traffic Light System',
      desc: 'Internationally acclaimed visual quality indicator at every production stage for immediate issue identification.',
    },
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: 'Pre-Production Planning',
      desc: 'Intensive planning sessions ensuring meticulous coordination of every production aspect.',
    },
  ];

  return (
    <div className="w-full">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-testid="quality-hero"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 via-[#0f172a]/90 to-[#0f172a]/80"></div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
          {/* Capability Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab, index) => (
              <Link
                key={index}
                to={tab.path}
                className={`px-6 py-2 text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                  location.pathname === tab.path
                    ? 'bg-[#ea580c] text-white'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
                data-testid={`tab-${index}`}
              >
                {tab.name}
              </Link>
            ))}
          </div>

          <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-white mb-6 leading-[1.1]">
            Quality Assurance
          </h1>
          
          <p className="font-inter text-lg md:text-xl max-w-3xl mx-auto text-slate-300 leading-relaxed">
            Our unwavering commitment to excellence ensures every garment meets the highest standards.
          </p>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl text-center">
          <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
            Our Promise
          </span>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-8">
            Unwavering Commitment to Quality
          </h2>
          <p className="font-inter text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
            At Texport Overseas, we prioritize excellence in every aspect of our operations, striving to minimize 
            rejections and maximize efficiency. Our rigorous quality control procedures ensure that every garment 
            meets the highest standards of craftsmanship and durability.
          </p>
        </div>
      </section>

      {/* Quality Systems */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Quality Framework
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a]">
              Quality Assurance Systems
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {qaSystems.map((system, index) => (
              <div key={index} className="bg-white p-8 border-l-4 border-[#ea580c] hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="text-[#ea580c] group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {system.icon}
                  </div>
                  <div>
                    <h3 className="font-oswald text-2xl font-semibold uppercase text-[#0f172a] mb-3 tracking-wide">
                      {system.title}
                    </h3>
                    <p className="font-inter text-base text-slate-600 leading-relaxed">
                      {system.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
                Precision Testing
              </span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
                Advanced Testing Labs
              </h2>
              <p className="font-inter text-base leading-relaxed text-slate-600 mb-6">
                We utilize state-of-the-art German testing machines that adhere to AATCC standards, guaranteeing 
                accuracy and precision in our quality testing processes.
              </p>
              <p className="font-inter text-base leading-relaxed text-slate-600">
                These advanced machines enable us to conduct thorough inspections and assessments to identify any 
                potential issues or defects before products are dispatched to our customers.
              </p>
            </div>
            <div className="relative h-[500px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070"
                alt="Testing Lab"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
                alt="Quality Inspection"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div>
              <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
                Final Verification
              </span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
                Comprehensive Final Inspection
              </h2>
              <p className="font-inter text-base leading-relaxed text-slate-600 mb-6">
                Before and after packaging, every garment undergoes a comprehensive final inspection to verify 
                its quality and integrity.
              </p>
              <p className="font-inter text-base leading-relaxed text-slate-600">
                Our trained inspectors meticulously examine each product to ensure that it meets our exacting 
                standards before it is shipped to our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Stats */}
      <section className="py-20 md:py-32 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase mb-6">
              Quality by Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center border border-slate-700 p-8 hover:border-[#ea580c] transition-colors duration-300">
              <Shield className="w-16 h-16 text-[#ea580c] mx-auto mb-4" />
              <div className="font-oswald text-5xl font-bold text-white mb-4">100%</div>
              <p className="font-inter text-base uppercase tracking-widest text-slate-300">Quality Inspected</p>
            </div>

            <div className="text-center border border-slate-700 p-8 hover:border-[#ea580c] transition-colors duration-300">
              <CheckCircle className="w-16 h-16 text-[#ea580c] mx-auto mb-4" />
              <div className="font-oswald text-5xl font-bold text-white mb-4">AQL 4</div>
              <p className="font-inter text-base uppercase tracking-widest text-slate-300">Point System</p>
            </div>

            <div className="text-center border border-slate-700 p-8 hover:border-[#ea580c] transition-colors duration-300">
              <FileCheck className="w-16 h-16 text-[#ea580c] mx-auto mb-4" />
              <div className="font-oswald text-5xl font-bold text-white mb-4">AATCC</div>
              <p className="font-inter text-base uppercase tracking-widest text-slate-300">Standards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;