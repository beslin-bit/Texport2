import React from 'react';
import { Droplets, Leaf, Zap, Recycle, Heart, Users, Award, TreePine } from 'lucide-react';
import Navigation from '@/components/Navigation';

const WeCare = () => {
  const initiatives = [
    {
      icon: <Droplets className="w-12 h-12" />,
      title: 'Optimal Water Utilization',
      desc: 'High recycling rate of effluent water using our state-of-the-art ETP in both laundries.',
      stats: 'High recycling rate',
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Chemical Management',
      desc: 'Achieved zero hazard in both our laundries. Eco-friendly chemicals used extensively to conserve water by reducing cycle time.',
      stats: 'Zero hazard',
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Sustainable Energy & Emission Control',
      desc: 'Purchase of renewable certified energy to the tune of 40% of overall power needs. Our factories are coal-free and use briquettes for steam generation.',
      stats: '40% renewable energy',
    },
    {
      icon: <Recycle className="w-12 h-12" />,
      title: 'Waste Reduction and Circularity',
      desc: 'Use of AI software for efficient fabric yields to minimize wastage. Manufacturing end bits reused and recycled.',
      stats: 'AI-optimized waste reduction',
    },
  ];

  const commitments = [
    { icon: <TreePine className="w-8 h-8" />, text: 'Carbon footprint reduction' },
    { icon: <Users className="w-8 h-8" />, text: 'Community empowerment programs' },
    { icon: <Award className="w-8 h-8" />, text: 'Global sustainability certifications' },
    { icon: <Heart className="w-8 h-8" />, text: 'Ethical sourcing & fair trade' },
  ];

  return (
    <div className="w-full">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-testid="we-care-hero"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 via-[#0f172a]/85 to-[#0f172a]/80"></div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
          <div className="mb-6">
            <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase">
              Sustainability & CSR
            </span>
          </div>
          
          <h1 
            className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-white mb-8 leading-[1.1]"
            data-testid="hero-headline"
          >
            Our Commitment to<br />Corporate Social Responsibility
          </h1>
          
          <p 
            className="font-inter text-lg md:text-xl max-w-3xl mx-auto text-slate-300 leading-relaxed"
            data-testid="hero-subheadline"
          >
            At Texport Overseas, we believe in more than just business success. We're dedicated to making a 
            positive impact on society and the environment through sustainable practices and community support.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 md:py-32 bg-white" data-testid="mission-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
                Our Philosophy
              </span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6 leading-tight">
                Sustainable Growth for a Better Tomorrow
              </h2>
              <p className="font-inter text-base leading-relaxed text-slate-600 mb-4">
                Our commitment to corporate social responsibility (CSR) and sustainability is deeply ingrained in 
                our business model. We recognize that by giving back to the community and supporting those in need, 
                we can create a more equitable and sustainable world for all.
              </p>
              <p className="font-inter text-base leading-relaxed text-slate-600">
                Every garment we produce reflects our dedication to environmental stewardship, ethical practices, 
                and social responsibility. We're not just manufacturing clothes—we're building a sustainable future.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {commitments.map((item, index) => (
                <div 
                  key={index}
                  className="bg-slate-50 p-6 border-l-4 border-[#ea580c] hover:shadow-lg transition-shadow duration-300"
                  data-testid={`commitment-${index}`}
                >
                  <div className="text-[#ea580c] mb-3">
                    {item.icon}
                  </div>
                  <p className="font-inter text-sm text-slate-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Sustainability Initiatives */}
      <section className="py-20 md:py-32 bg-slate-50" data-testid="initiatives-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Our Actions
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-[#0f172a]">
              Key Sustainability Initiatives
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-white p-8 border-t-4 border-[#ea580c] hover:shadow-xl transition-shadow duration-300 group"
                data-testid={`initiative-${index}`}
              >
                <div className="flex items-start gap-6">
                  <div className="text-[#ea580c] group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {initiative.icon}
                  </div>
                  <div>
                    <h3 className="font-oswald text-2xl font-semibold uppercase text-[#0f172a] mb-3 tracking-wide">
                      {initiative.title}
                    </h3>
                    <p className="font-inter text-base text-slate-600 leading-relaxed mb-4">
                      {initiative.desc}
                    </p>
                    <div className="inline-block bg-[#ea580c]/10 text-[#ea580c] px-4 py-2 font-inter text-sm font-semibold">
                      {initiative.stats}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 md:py-32 bg-[#0f172a] text-white" data-testid="impact-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Making a Difference
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase mb-6">
              Our Environmental Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center border border-slate-700 p-8 hover:border-[#ea580c] transition-colors duration-300">
              <div className="font-oswald text-5xl md:text-6xl font-bold text-[#ea580c] mb-4">
                40%
              </div>
              <p className="font-inter text-base uppercase tracking-widest text-slate-300">
                Renewable Energy
              </p>
            </div>

            <div className="text-center border border-slate-700 p-8 hover:border-[#ea580c] transition-colors duration-300">
              <div className="font-oswald text-5xl md:text-6xl font-bold text-[#ea580c] mb-4">
                100%
              </div>
              <p className="font-inter text-base uppercase tracking-widest text-slate-300">
                Coal-Free Factories
              </p>
            </div>

            <div className="text-center border border-slate-700 p-8 hover:border-[#ea580c] transition-colors duration-300">
              <div className="font-oswald text-5xl md:text-6xl font-bold text-[#ea580c] mb-4">
                Zero
              </div>
              <p className="font-inter text-base uppercase tracking-widest text-slate-300">
                Hazardous Chemicals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* People & Community */}
      <section className="py-20 md:py-32" data-testid="community-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Beyond Manufacturing
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
              People & Community Impact
            </h2>
            <p className="font-inter text-lg max-w-3xl mx-auto text-slate-600 leading-relaxed">
              We invest in our communities through education, health programs, and economic development initiatives 
              that create lasting positive change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-80 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070"
                alt="Community Education"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-oswald text-xl font-bold text-white mb-2 uppercase">Education Programs</h3>
                  <p className="font-inter text-sm text-slate-300">Supporting local schools and skill development</p>
                </div>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070"
                alt="Healthcare Initiatives"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-oswald text-xl font-bold text-white mb-2 uppercase">Healthcare Access</h3>
                  <p className="font-inter text-sm text-slate-300">Health camps and wellness programs for workers</p>
                </div>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=2070"
                alt="Women Empowerment"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-oswald text-xl font-bold text-white mb-2 uppercase">Women Empowerment</h3>
                  <p className="font-inter text-sm text-slate-300">HER programs for financial and social independence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-slate-50" data-testid="cta-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
            Partner with Purpose
          </h2>
          <p className="font-inter text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Join us in creating a sustainable future. Work with a manufacturer that shares your values and 
            commitment to environmental and social responsibility.
          </p>
          <button 
            className="inline-flex items-center gap-3 bg-[#ea580c] text-white hover:bg-[#c2410c] px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300"
            data-testid="cta-button"
          >
            View Our Certifications
          </button>
        </div>
      </section>
    </div>
  );
};

export default WeCare;
