import React from 'react';
import { Lightbulb, Palette, Cpu, Sparkles, Users, TrendingUp, Box, Scissors } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Link, useLocation } from 'react-router-dom';

const DesignInnovation = () => {
  const location = useLocation();

  const tabs = [
    { name: 'Design & Innovation', path: '/design-innovation' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Quality', path: '/quality' },
    { name: 'Technology', path: '/technology' },
  ];

  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Trend Forecasting',
      desc: 'In-depth market research and international trend analysis to stay ahead of global fashion movements.',
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Concept Development',
      desc: 'Co-creating forward-thinking designs with clients, transforming ideas into commercially viable collections.',
    },
    {
      icon: <Scissors className="w-12 h-12" />,
      title: 'Pattern Engineering',
      desc: 'Precision pattern development ensuring perfect fit consistency across all sizes and styles.',
    },
    {
      icon: <Box className="w-12 h-12" />,
      title: 'Range Development',
      desc: 'Complete collection planning from sketches to finished garments with brand alignment.',
    },
  ];

  const technologies = [
    {
      title: 'CLO 3D - Virtual Fashion',
      desc: 'Revolutionary 3D technology that reduces sample approval lead times by 60% and minimizes material wastage through virtual prototyping.',
      features: ['Virtual sampling', 'Rapid iterations', 'Cost reduction', 'Sustainability'],
    },
    {
      title: 'Pro-SMV System',
      desc: 'Global leader in Time-Cost manufacturing standards, ensuring optimal costing and manufacturing excellence with scientific precision.',
      features: ['Standardized operations', 'Accurate costing', 'Production planning', 'Line balancing'],
    },
  ];

  return (
    <div className="w-full">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1558769132-cb1aea1847c8?q=80&w=2074)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-testid="design-hero"
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
            Design & Innovation
          </h1>
          
          <p className="font-inter text-lg md:text-xl max-w-3xl mx-auto text-slate-300 leading-relaxed">
            Transforming creative visions into reality through cutting-edge design and innovative solutions.
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
                Creative Excellence
              </span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6 leading-tight">
                Professional Design & Innovation
              </h2>
              <p className="font-inter text-base leading-relaxed text-slate-600 mb-4">
                The Design & PD Team at Texport Overseas is the creative force behind every collection, co-creating 
                forward-thinking designs ahead of each season.
              </p>
              <p className="font-inter text-base leading-relaxed text-slate-600">
                Through in-depth market research, international trend forecasting, fabric innovation exploration, 
                detailed sketching, range development, and precision pattern engineering, we transform concepts into 
                commercially compelling garment collections.
              </p>
            </div>
            <div className="relative h-[500px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea1847c8?q=80&w=2074"
                alt="Design Studio"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Our Expertise
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a]">
              Design Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 border-t-4 border-[#ea580c] hover:shadow-xl transition-shadow duration-300 group">
                <div className="text-[#ea580c] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-oswald text-xl font-semibold uppercase text-[#0f172a] mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="font-inter text-sm text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Powered by Technology
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
              Technology Integration
            </h2>
            <p className="font-playfair text-2xl text-slate-700 italic max-w-3xl mx-auto">
              Technology is at the heart of our design process.
            </p>
          </div>

          <div className="space-y-12">
            {technologies.map((tech, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h3 className="font-oswald text-3xl font-bold uppercase text-[#0f172a] mb-4 tracking-wide">
                    {tech.title}
                  </h3>
                  <p className="font-inter text-base text-slate-600 leading-relaxed mb-6">
                    {tech.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {tech.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#ea580c]"></div>
                        <span className="font-inter text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`relative h-80 overflow-hidden ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img
                    src={index === 0 ? 'https://images.unsplash.com/photo-1633114127765-4eb5be2be47a?q=80&w=2070' : 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070'}
                    alt={tech.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Meet the Creators
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase mb-6">
              Our Creative Team
            </h2>
            <p className="font-inter text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A professionally qualified, creative team led by experienced design professionals. Each client enjoys 
              dedicated attention from specialized teams who transform concepts into extraordinary experiences.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
            Ready to Innovate?
          </h2>
          <p className="font-inter text-lg text-slate-600 leading-relaxed mb-8">
            Join us on this journey as we redefine the future of design, one innovative step at a time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DesignInnovation;