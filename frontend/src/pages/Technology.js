import React from 'react';
import { Cpu, Zap, Server, Code, Database, Cloud, Monitor, Settings } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Link, useLocation } from 'react-router-dom';

const Technology = () => {
  const location = useLocation();

  const tabs = [
    { name: 'Design & Innovation', path: '/design-innovation' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Quality', path: '/quality' },
    { name: 'Technology', path: '/technology' },
  ];

  const technologies = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: 'Smart Manufacturing',
      desc: 'AI-powered systems optimize production efficiency and minimize waste through intelligent automation.',
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'ERP Integration',
      desc: 'Enterprise resource planning systems providing real-time visibility across all operations.',
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: 'Digital Monitoring',
      desc: 'Real-time tracking and monitoring systems ensure complete production transparency and control.',
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Infrastructure',
      desc: 'Secure cloud-based systems enable seamless collaboration and data accessibility.',
    },
  ];

  const features = [
    { title: 'IoT Integration', desc: 'Connected machinery for real-time performance monitoring' },
    { title: 'Predictive Analytics', desc: 'Data-driven insights for proactive maintenance' },
    { title: 'Automated Workflows', desc: 'Streamlined processes reducing manual intervention' },
    { title: 'Digital Twin Technology', desc: 'Virtual replicas for process optimization' },
  ];

  return (
    <div className="w-full">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-testid="technology-hero"
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
            Technology & Automation
          </h1>
          
          <p className="font-inter text-lg md:text-xl max-w-3xl mx-auto text-slate-300 leading-relaxed">
            Leveraging cutting-edge technology to drive efficiency, precision, and innovation in garment manufacturing.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl text-center">
          <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
            Digital Transformation
          </span>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-8">
            Technology-Driven Manufacturing
          </h2>
          <p className="font-inter text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
            At Texport Overseas, we embrace Industry 4.0 technologies to revolutionize garment manufacturing. 
            Our investment in advanced automation, AI-powered systems, and digital infrastructure ensures we stay 
            at the forefront of manufacturing excellence.
          </p>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Our Tech Stack
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a]">
              Core Technologies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-8 border-t-4 border-[#ea580c] hover:shadow-xl transition-shadow duration-300 group">
                <div className="text-[#ea580c] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-oswald text-xl font-semibold uppercase text-[#0f172a] mb-3 tracking-wide">
                  {tech.title}
                </h3>
                <p className="font-inter text-sm text-slate-600 leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Features */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
                Advanced Automation
              </span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
                Industry 4.0 Integration
              </h2>
              <p className="font-inter text-base leading-relaxed text-slate-600 mb-8">
                Our facilities are equipped with state-of-the-art automated systems that seamlessly integrate 
                hardware and software to create a connected manufacturing ecosystem.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-[#ea580c] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-oswald text-lg font-semibold text-[#0f172a] mb-1">{feature.title}</h4>
                      <p className="font-inter text-sm text-slate-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070"
                alt="Automation"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase mb-6">
              Technology Benefits
            </h2>
            <p className="font-inter text-lg text-slate-300 max-w-3xl mx-auto">
              Our technology investments deliver measurable improvements across all operations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-oswald text-5xl font-bold text-[#ea580c] mb-4">45%</div>
              <p className="font-inter text-sm uppercase tracking-widest text-slate-300">Efficiency Gain</p>
            </div>
            <div className="text-center">
              <div className="font-oswald text-5xl font-bold text-[#ea580c] mb-4">60%</div>
              <p className="font-inter text-sm uppercase tracking-widest text-slate-300">Faster Lead Time</p>
            </div>
            <div className="text-center">
              <div className="font-oswald text-5xl font-bold text-[#ea580c] mb-4">99%</div>
              <p className="font-inter text-sm uppercase tracking-widest text-slate-300">Accuracy Rate</p>
            </div>
            <div className="text-center">
              <div className="font-oswald text-5xl font-bold text-[#ea580c] mb-4">24/7</div>
              <p className="font-inter text-sm uppercase tracking-widest text-slate-300">Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
          <Settings className="w-20 h-20 text-[#ea580c] mx-auto mb-6" />
          <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
            Continuous Innovation
          </h2>
          <p className="font-inter text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We remain committed to investing in emerging technologies that enhance our manufacturing capabilities, 
            improve sustainability, and deliver greater value to our partners.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Technology;