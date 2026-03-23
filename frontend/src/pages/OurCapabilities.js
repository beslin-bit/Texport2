import React from 'react';
import { ArrowRight, Zap, TrendingUp, Award, Target, Sparkles, Layers } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const OurCapabilities = () => {
  const capabilities = [
    {
      title: 'Excellence in Multi-Category Manufacturing',
      desc: 'At our core, we are defined by versatility and precision. Our shop floor seamlessly produces multi-category products, enabling us to adapt with dexterity from season to season. This agility ensures that we remain ahead of trends while maintaining operational efficiency.',
      image: 'https://images.unsplash.com/photo-1581092918484-8313e1f2524e?q=80&w=2070',
      stat: 'Multi-Category',
    },
    {
      title: 'Proven Track Record',
      desc: 'With a history of consistent delivery and uncompromising quality, our KPIs speak for themselves. Every order reflects our commitment to reliability, making us a trusted partner across global markets.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070',
      stat: 'Global Trust',
    },
    {
      title: 'Balanced Manufacturing Approach',
      desc: 'We strike the perfect balance between long-run core manufacturing and high-fashion boutique orders. Whether it is large-scale production or specialized collections, our processes are designed to deliver excellence across the spectrum.',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2070',
      stat: 'Versatile Scale',
    },
    {
      title: 'Rapid Ramp-Up Capability',
      desc: 'Our short learning curve and high-speed ramp-up are comparable to the best in the region. This allows us to quickly scale operations without compromising on quality, ensuring timely fulfillment even under dynamic demands.',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2074',
      stat: 'Fast Scale',
    },
    {
      title: 'Global Standards in Craftsmanship',
      desc: 'From embroidery and laundry to printing, our facilities meet global benchmarks. Every garment is a testament to meticulous craftsmanship and innovation.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070',
      stat: 'World-Class',
    },
    {
      title: 'Specialists in Complex Garments',
      desc: 'We excel in heavy construction garments, intricate needlework, overdye techniques, and advanced wash processes. This expertise sets us apart in delivering products that combine durability with artistry.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070',
      stat: 'Expert Craft',
    },
  ];

  const detailedCapabilities = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Design & Innovation',
      link: '/design-innovation',
      desc: 'Creative excellence through cutting-edge design and technology',
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Manufacturing',
      link: '/manufacturing',
      desc: 'End-to-end production with precision engineering',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality',
      link: '/quality',
      desc: 'Rigorous quality control meeting global standards',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Technology',
      link: '/technology',
      desc: 'Industry 4.0 systems driving operational excellence',
    },
  ];

  return (
    <div className="w-full">
      <Navigation />

      {/* Hero Section with Split Text */}
      <section className="py-32 md:py-40 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-6">
                What We Do Best
              </span>
              <h1 className="font-oswald text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-[0.9] mb-0">
                Built for
              </h1>
            </div>
            <div className="flex flex-col justify-end">
              <h1 className="font-oswald text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-[0.9] text-[#ea580c]">
                Excellence
              </h1>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092918484-8313e1f2524e?q=80&w=2070"
                alt="Manufacturing Excellence"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div>
              <p className="font-inter text-xl md:text-2xl text-slate-700 leading-relaxed mb-6">
                Our capabilities are powered by precision, innovation, and decades of manufacturing expertise.
              </p>
              <p className="font-inter text-base text-slate-600 leading-relaxed">
                From versatile multi-category production to complex garment construction, we deliver excellence 
                at every scale. Our commitment to quality, speed, and craftsmanship makes us a trusted global partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid - Alternating Layout */}
      {capabilities.map((capability, index) => (
        <section 
          key={index} 
          className={`py-20 md:py-32 ${
            index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
          }`}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="inline-block bg-[#ea580c]/10 text-[#ea580c] px-4 py-2 font-oswald text-xs font-bold tracking-widest uppercase mb-6">
                  {capability.stat}
                </div>
                <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6 leading-tight">
                  {capability.title}
                </h2>
                <p className="font-inter text-lg text-slate-600 leading-relaxed">
                  {capability.desc}
                </p>
              </div>

              {/* Image */}
              <div className={`relative h-[500px] overflow-hidden ${
                index % 2 === 1 ? 'md:order-1' : ''
              }`}>
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay Number */}
                <div className="absolute top-8 right-8 bg-[#ea580c] text-white font-oswald text-4xl font-bold w-20 h-20 flex items-center justify-center">
                  0{index + 1}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Stats Bar */}
      <section className="py-20 md:py-32 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase mb-4">
              Capabilities by Numbers
            </h2>
            <p className="font-inter text-lg text-slate-300">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center border-l-4 border-[#ea580c] pl-6">
              <div className="font-oswald text-5xl md:text-6xl font-bold text-[#ea580c] mb-3">
                18M
              </div>
              <p className="font-inter text-sm uppercase tracking-widest text-slate-300">
                Annual Capacity
              </p>
            </div>

            <div className="text-center border-l-4 border-[#ea580c] pl-6">
              <div className="font-oswald text-5xl md:text-6xl font-bold text-[#ea580c] mb-3">
                08
              </div>
              <p className="font-inter text-sm uppercase tracking-widest text-slate-300">
                Integrated Units
              </p>
            </div>

            <div className="text-center border-l-4 border-[#ea580c] pl-6">
              <div className="font-oswald text-5xl md:text-6xl font-bold text-[#ea580c] mb-3">
                30+
              </div>
              <p className="font-inter text-sm uppercase tracking-widest text-slate-300">
                Years Experience
              </p>
            </div>

            <div className="text-center border-l-4 border-[#ea580c] pl-6">
              <div className="font-oswald text-5xl md:text-6xl font-bold text-[#ea580c] mb-3">
                Global
              </div>
              <p className="font-inter text-sm uppercase tracking-widest text-slate-300">
                Standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Capabilities Links */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Explore More
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
              Dive Deeper Into Our Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detailedCapabilities.map((cap, index) => (
              <Link
                key={index}
                to={cap.link}
                className="group bg-slate-50 p-8 hover:bg-[#0f172a] transition-all duration-300 border-t-4 border-[#ea580c]"
              >
                <div className="text-[#ea580c] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {cap.icon}
                </div>
                <h3 className="font-oswald text-xl font-bold uppercase text-[#0f172a] group-hover:text-white mb-3 tracking-wide transition-colors">
                  {cap.title}
                </h3>
                <p className="font-inter text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed mb-4 transition-colors">
                  {cap.desc}
                </p>
                <div className="flex items-center gap-2 text-[#ea580c] font-inter text-sm font-semibold uppercase tracking-wide">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
            Ready to Experience Our Capabilities?
          </h2>
          <p className="font-inter text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Partner with a manufacturer that combines versatility, precision, and proven excellence. 
            Let's create something exceptional together.
          </p>
          <button className="inline-flex items-center gap-3 bg-[#ea580c] text-white hover:bg-[#c2410c] px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300">
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurCapabilities;