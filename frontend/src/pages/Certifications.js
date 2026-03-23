import React from 'react';
import { Award, Shield, Leaf, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Certifications = () => {
  const certifications = [
    {
      category: 'Sustainability Certifications',
      icon: <Leaf className="w-8 h-8" />,
      certs: [
        {
          name: 'BCI',
          fullName: 'Better Cotton Initiative',
          desc: 'Committed to sustainable cotton production and responsible sourcing practices.',
        },
        {
          name: 'OEKO-TEX',
          fullName: 'OEKO-TEX Standard 100',
          desc: 'Certification for textiles tested for harmful substances, ensuring product safety.',
        },
      ],
    },
    {
      category: 'Environmental Management',
      icon: <Shield className="w-8 h-8" />,
      certs: [
        {
          name: 'Higg Index',
          fullName: 'Higg Index Certification',
          desc: 'Measuring and improving sustainability performance across the value chain.',
        },
        {
          name: 'ZDHC',
          fullName: 'Zero Discharge of Hazardous Chemicals',
          desc: 'Eliminating hazardous chemicals from textile and footwear supply chains.',
        },
      ],
    },
    {
      category: 'Compliance & Social Responsibility',
      icon: <Award className="w-8 h-8" />,
      certs: [
        {
          name: 'SEDEX',
          fullName: 'Supplier Ethical Data Exchange',
          desc: 'Ethical supply chain management and responsible business practices.',
        },
        {
          name: 'Social & Labour Convergence',
          fullName: 'SLCP',
          desc: 'Industry-wide approach to assess working conditions in global supply chains.',
        },
        {
          name: 'WRAP',
          fullName: 'Worldwide Responsible Accredited Production',
          desc: 'Independent certification program for safe, lawful, humane, and ethical manufacturing.',
        },
        {
          name: 'GSV',
          fullName: 'Global Security Verification',
          desc: 'Supply chain security and compliance with international standards.',
        },
        {
          name: 'PACE',
          fullName: 'Personal Advancement & Career Enhancement',
          desc: 'Empowering workers with life and workplace skills training.',
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-testid="certifications-hero"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 via-[#0f172a]/90 to-[#0f172a]/85"></div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
          <div className="mb-6">
            <Award className="w-16 h-16 text-[#ea580c] mx-auto mb-4" />
          </div>
          
          <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-white mb-6 leading-[1.1]">
            Certifications
          </h1>
          
          <p className="font-inter text-lg md:text-xl max-w-3xl mx-auto text-slate-300 leading-relaxed">
            Our commitment to quality, sustainability, and ethical practices is validated by 
            industry-leading certifications and compliance standards.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
            Trusted & Verified
          </span>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
            Global Standards, Local Excellence
          </h2>
          <p className="font-inter text-lg text-slate-600 leading-relaxed">
            We maintain the highest standards of manufacturing excellence through rigorous certification 
            processes. Our certifications demonstrate our dedication to environmental responsibility, 
            social compliance, and quality assurance.
          </p>
        </div>
      </section>

      {/* Certifications by Category */}
      {certifications.map((category, catIndex) => (
        <section key={catIndex} className={`py-20 md:py-32 ${
          catIndex % 2 === 0 ? 'bg-slate-50' : 'bg-white'
        }`}>
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center gap-4 mb-12">
              <div className="text-[#ea580c]">
                {category.icon}
              </div>
              <h2 className="font-oswald text-3xl md:text-4xl font-bold tracking-tight uppercase text-[#0f172a]">
                {category.category}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {category.certs.map((cert, certIndex) => (
                <div 
                  key={certIndex} 
                  className="bg-white border-l-4 border-[#ea580c] p-8 hover:shadow-xl transition-shadow duration-300 group"
                  data-testid={`cert-${catIndex}-${certIndex}`}
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#ea580c] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h3 className="font-oswald text-2xl font-bold uppercase text-[#0f172a] mb-2 tracking-wide">
                        {cert.name}
                      </h3>
                      <p className="font-inter text-sm text-[#ea580c] font-semibold mb-3">
                        {cert.fullName}
                      </p>
                      <p className="font-inter text-base text-slate-600 leading-relaxed">
                        {cert.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Commitment Statement */}
      <section className="py-20 md:py-32 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="w-12 h-12 text-[#ea580c] mx-auto mb-4" />
              <h3 className="font-oswald text-xl font-bold uppercase mb-3">Quality Assured</h3>
              <p className="font-inter text-sm text-slate-300">Every certification reflects our commitment to excellence</p>
            </div>
            <div>
              <Leaf className="w-12 h-12 text-[#ea580c] mx-auto mb-4" />
              <h3 className="font-oswald text-xl font-bold uppercase mb-3">Sustainably Focused</h3>
              <p className="font-inter text-sm text-slate-300">Environmental responsibility at our core</p>
            </div>
            <div>
              <Award className="w-12 h-12 text-[#ea580c] mx-auto mb-4" />
              <h3 className="font-oswald text-xl font-bold uppercase mb-3">Ethically Driven</h3>
              <p className="font-inter text-sm text-slate-300">Social compliance and worker welfare prioritized</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
            Partner with a Certified Leader
          </h2>
          <p className="font-inter text-lg text-slate-600 leading-relaxed mb-8">
            Our certifications ensure you're working with a manufacturer that meets the highest 
            global standards for quality, sustainability, and ethical practices.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Certifications;