import React from 'react';
import { Factory, Zap, Shield, Layers, Scissors, Palette, Hammer, Droplets, Package, QrCode, ArrowRight, Check } from 'lucide-react';

const Manufacturing = () => {
  const pillars = [
    {
      icon: <Factory className="w-12 h-12" />,
      title: 'Process Engineering & Fashion Agility',
      desc: 'Operational excellence that adapts seamlessly to seasonal trends and collections shifts.',
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Technology Empowering Trend Responsiveness',
      desc: 'Smart systems that accelerate concept-to-collection timelines.',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Quality Engineered for Global Fashion Brands',
      desc: 'Rigorous governance delivering flawless craftmanship and trusted reliability.',
    },
  ];

  const processes = [
    {
      number: '01',
      icon: <Layers className="w-10 h-10" />,
      title: 'Fabric & Pre-Production',
      desc: 'Our Fabric & Pre-Production Excellence framework eliminates production risks before sewing begins through scientific fabric relaxation, 100% quality inspection, and validated shrinkage testing to ensure dimensional stability. ERP-integrated digital tracking provides real-time fabric visibility, FIFO control, and accurate consumption monitoring across stages.',
      image: 'https://images.unsplash.com/photo-1741275269921-3c562cdb9176?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHxnYXJtZW50JTIwbWFudWZhY3R1cmluZyUyMHNld2luZyUyMGZhY3RvcnklMjBoaWdoJTIwdGVjaHxlbnwwfHx8fDE3NzM5MjE1MTl8MA&ixlib=rb-4.1.0&q=85',
      highlights: ['Scientific fabric relaxation', '100% quality inspection', 'ERP-integrated tracking'],
    },
    {
      number: '02',
      icon: <Scissors className="w-10 h-10" />,
      title: 'Pattern Engineering & Cutting',
      desc: 'Ensures precision from design translation to bulk execution through data-driven pattern development and digital grading systems. Advanced CAD marker planning maximizes fabric utilization while maintaining dimensional accuracy and fit consistency across all sizes. Automated cutting technologies and QR-based bundle tracking enable high precision, traceability, and minimal manual errors.',
      image: 'https://images.unsplash.com/photo-1764737740462-2a310c7b2c39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduJTIwc3R1ZGlvJTIwc2tldGNoZXMlMjBmYWJyaWMlMjBzd2F0Y2hlc3xlbnwwfHx8fDE3NzM5MjE1MjB8MA&ixlib=rb-4.1.0&q=85',
      highlights: ['CAD marker planning', 'Automated cutting', 'QR-based tracking'],
    },
    {
      number: '03',
      icon: <Palette className="w-10 h-10" />,
      title: 'Embroidery & Printing',
      desc: 'Integrates precision-driven normal embroidery and specialized chenille embroidery to deliver superior surface aesthetics and dimensional texture. Digitally controlled multi-head embroidery systems ensure stitch accuracy, thread optimization, and consistent design replication across bulk production. Our in-house printing capabilities include water-based, non-PVC, khadi, crack, embossed, and HD printing techniques.',
      image: 'https://images.unsplash.com/photo-1753164597585-6d42636ea099?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwzfHxmYXNoaW9uJTIwZGVzaWduJTIwc3R1ZGlvJTIwc2tldGNoZXMlMjBmYWJyaWMlMjBzd2F0Y2hlc3xlbnwwfHx8fDE3NzM5MjE1MjB8MA&ixlib=rb-4.1.0&q=85',
      highlights: ['Multi-head embroidery systems', 'Water-based printing', 'HD printing techniques'],
    },
    {
      number: '04',
      icon: <Hammer className="w-10 h-10" />,
      title: 'Sewing & Construction',
      desc: 'Integrates advanced automated and semi-automated machinery to deliver precision, consistency, and high-volume productivity with minimal manual variation. Specialized attachments, programmable stitch control, and automation-driven processes improve seam strength, stitch uniformity, and overall garment durability. Supported by real-time production tracking, inline quality governance, and defect-prevention systems.',
      image: 'https://images.unsplash.com/photo-1772351721253-1008627c8c50?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxnYXJtZW50JTIwbWFudWZhY3R1cmluZyUyMHNld2luZyUyMGZhY3RvcnklMjBoaWdoJTIwdGVjaHxlbnwwfHx8fDE3NzM5MjE1MTl8MA&ixlib=rb-4.1.0&q=85',
      highlights: ['Automated machinery', 'Programmable stitch control', 'Real-time tracking'],
    },
    {
      number: '05',
      icon: <Droplets className="w-10 h-10" />,
      title: 'Washing & Dyeing',
      desc: 'Driven by advanced automated washing systems and specialized expertise in mineral dyeing, delivering distinctive earthy tones and premium surface character. Through controlled mineral dye processes, we achieve rich depth, natural tonal variation, and superior color fastness while maintaining dimensional stability. Precision-managed wash parameters, optimized water usage, and responsible chemical control ensure consistent bulk reproducibility.',
      image: 'https://images.unsplash.com/photo-1742203100607-535a15b7f6c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21lbiUyMGdhcm1lbnQlMjB3b3JrZXJzJTIwc21pbGluZyUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NzM5MjE1MjF8MA&ixlib=rb-4.1.0&q=85',
      highlights: ['Mineral dyeing expertise', 'Automated washing systems', 'Optimized water usage'],
    },
    {
      number: '06',
      icon: <Package className="w-10 h-10" />,
      title: 'Finishing & Packing',
      desc: 'Ensures every garment undergoes meticulous final inspection, precision pressing, and measurement verification before dispatch. Advanced finishing equipment and standardized work methods enhance garment presentation, dimensional accuracy, and premium hand feel. With structured final AQL audits and compliance-driven packing standards, we deliver market-ready products that meet global quality and buyer specifications.',
      image: 'https://images.unsplash.com/photo-1742203105834-1113a50e6d5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjB3b21lbiUyMGdhcm1lbnQlMjB3b3JrZXJzJTIwc21pbGluZyUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NzM5MjE1MjF8MA&ixlib=rb-4.1.0&q=85',
      highlights: ['Final AQL audits', 'Precision pressing', 'Compliance-driven packing'],
    },
    {
      number: '07',
      icon: <QrCode className="w-10 h-10" />,
      title: 'Digital Tracking System',
      desc: 'Powered by a fully integrated QR code–based traceability system, enabling seamless visibility from cutting to final packing. Each bundle is uniquely identified and digitally monitored at every production stage, ensuring accurate WIP control, operation-level accountability, and real-time status updates. Integrated ERP dashboards transform live production data into actionable insights on efficiency, bottlenecks, and performance optimization.',
      image: 'https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBkaXZlcnNlJTIwdGVhbSUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NzM5MjE1MjJ8MA&ixlib=rb-4.1.0&q=85',
      highlights: ['QR-based traceability', 'Real-time status updates', 'ERP dashboard integration'],
    },
  ];

  const tabs = [
    { name: 'Design & Innovation', active: false },
    { name: 'Manufacturing', active: true },
    { name: 'Quality', active: false },
    { name: 'Technology', active: false },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1741275269921-3c562cdb9176?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHxnYXJtZW50JTIwbWFudWZhY3R1cmluZyUyMHNld2luZyUyMGZhY3RvcnklMjBoaWdoJTIwdGVjaHxlbnwwfHx8fDE3NzM5MjE1MTl8MA&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-testid="manufacturing-hero"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 via-[#0f172a]/90 to-[#0f172a]/80"></div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-6 py-2 text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                  tab.active
                    ? 'bg-[#ea580c] text-white'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
                data-testid={`tab-${index}`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <h1 
            className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-white mb-6 leading-[1.1]"
            data-testid="hero-headline"
          >
            Engineering Fashion.<br />Delivering Global Trends.
          </h1>
          
          <p 
            className="font-inter text-lg md:text-xl max-w-3xl mx-auto text-slate-300 leading-relaxed"
            data-testid="hero-subheadline"
          >
            Transforming runway inspirations into precision-crafted garments through <strong>advanced manufacturing</strong> and <strong>agile production systems</strong>.
          </p>
        </div>
      </section>

      {/* Manufacturing Philosophy */}
      <section className="py-20 md:py-32 bg-white" data-testid="philosophy-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
          <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
            Our Manufacturing Philosophy
          </span>
          <p className="font-inter text-xl md:text-2xl text-slate-700 leading-relaxed">
            We approach garment manufacturing as <strong>engineered craftsmanship</strong> — integrating process discipline, 
            technological innovation, and quality precision to deliver globally <strong>trusted fashion excellence</strong>.
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 md:py-32 bg-slate-50" data-testid="pillars-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-[#0f172a] mb-4">
              Three Pillars of Manufacturing
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white border-t-4 border-[#ea580c] p-8 group hover:shadow-xl transition-shadow duration-300"
                data-testid={`pillar-${index}`}
              >
                <div className="text-[#ea580c] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="font-oswald text-xl font-semibold text-[#0f172a] mb-4 leading-tight">
                  {pillar.title}
                </h3>
                <p className="font-inter text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-End Process Flow */}
      <section className="py-20 md:py-32" data-testid="process-flow-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-20">
            <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Complete Production Journey
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
              End-to-End Process Flow
            </h2>
            <p className="font-inter text-lg max-w-3xl mx-auto text-slate-600 leading-relaxed">
              We ensure seamless oversight across every stage – transforming global concepts into retail-ready garments 
              with precision and agility.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-24">
            {processes.map((process, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                data-testid={`process-${index}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="font-oswald text-6xl font-bold text-[#ea580c]/20">
                      {process.number}
                    </div>
                    <div className="text-[#ea580c]">
                      {process.icon}
                    </div>
                  </div>
                  
                  <h3 className="font-oswald text-3xl md:text-4xl font-bold tracking-tight uppercase text-[#0f172a] mb-4">
                    {process.title}
                  </h3>
                  
                  <p className="font-inter text-base leading-relaxed text-slate-600 mb-6">
                    {process.desc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {process.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#ea580c] flex-shrink-0 mt-0.5" />
                        <span className="font-inter text-sm text-slate-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`relative h-[400px] overflow-hidden ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Number Overlay */}
                  <div className="absolute top-6 right-6 bg-[#ea580c] text-white font-oswald text-2xl font-bold w-16 h-16 flex items-center justify-center">
                    {process.number}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[#0f172a] text-white" data-testid="cta-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase mb-6">
            Experience Manufacturing Excellence
          </h2>
          <p className="font-inter text-lg text-slate-300 leading-relaxed mb-8">
            Ready to partner with a manufacturer that combines precision engineering with fashion expertise?
          </p>
          <button 
            className="inline-flex items-center gap-3 bg-[#ea580c] text-white hover:bg-[#c2410c] px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300"
            data-testid="cta-button"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
