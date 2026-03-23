import React from 'react';
import { ArrowRight, Factory, Lightbulb, Shield, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { value: '$110M+', label: 'Annual Turnover' },
    { value: '5000+', label: 'Workforce' },
    { value: '08', label: 'Manufacturing Units' },
    { value: '70%', label: 'Female Employees' },
    { value: '500K', label: 'Sq Ft Area' },
    { value: '30+', label: 'Years Experience' },
  ];

  const products = [
    {
      name: 'Mens Outerwear',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070',
      link: '/products/mens-outerwear',
    },
    {
      name: 'Mens Shorts',
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070',
      link: '/products/mens-shorts',
    },
    {
      name: 'Mens Shirts',
      image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=2065',
      link: '/products/mens-shirts',
    },
    {
      name: 'Mens Trousers',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2070',
      link: '/products/mens-trousers',
    },
    {
      name: 'Womens Outerwear',
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=2087',
      link: '/products/womens-outerwear',
    },
    {
      name: 'Womens Shirts',
      image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=2086',
      link: '/products/womens-shirts',
    },
    {
      name: 'Womens Dress',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2083',
      link: '/products/womens-dress',
    },
    {
      name: 'Womens Skirts',
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=2094',
      link: '/products/womens-skirt',
    },
  ];

  const capabilities = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: 'Design',
      desc: 'Bringing imagination to functional reality, shaping a chic tomorrow of comfort and luxury.',
      link: '/design-innovation',
    },
    {
      icon: <Factory className="w-10 h-10" />,
      title: 'Manufacturing',
      desc: 'Transforming runway inspirations into precision-crafted garments through advanced processes.',
      link: '/manufacturing',
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Technology',
      desc: 'Latest technological advancements to streamline our processes and drive innovation.',
      link: '/technology',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Quality',
      desc: 'Quality is not just a standard; it is our commitment to perfection in every stitch.',
      link: '/quality',
    },
  ];

  return (
    <div className="w-full">
      <Navigation />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-oswald text-4xl md:text-5xl font-bold text-[#ea580c] mb-2">
                  {stat.value}
                </div>
                <div className="font-inter text-sm uppercase tracking-widest text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Our Collection
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
              Discover Our Products
            </h2>
            <p className="font-inter text-lg text-slate-600 max-w-3xl mx-auto">
              From timeless classics to modern statements, our collection inspires confidence and individuality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group relative h-96 overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 to-transparent flex items-end p-6">
                  <div className="w-full">
                    <h3 className="font-oswald text-xl font-bold text-white uppercase mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center text-[#ea580c] font-inter text-sm font-semibold uppercase tracking-wide">
                      Explore
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
              How We Do
            </span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
              Our Capabilities
            </h2>
            <p className="font-inter text-lg text-slate-600 max-w-3xl mx-auto">
              High-quality manufacturing capabilities have made us world leaders catering to global brands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-slate-50 p-8 hover:bg-[#0f172a] group transition-all duration-300">
                <div className="text-[#ea580c] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {cap.icon}
                </div>
                <h3 className="font-oswald text-xl font-semibold uppercase text-[#0f172a] group-hover:text-white mb-3 tracking-wide transition-colors">
                  {cap.title}
                </h3>
                <p className="font-inter text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed mb-4 transition-colors">
                  {cap.desc}
                </p>
                <Link
                  to={cap.link}
                  className="inline-flex items-center text-[#ea580c] group-hover:text-[#ea580c] font-inter text-sm font-semibold uppercase tracking-wide"
                >
                  Know More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
                Who We Are
              </span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
                Three Decades of Excellence
              </h2>
              <p className="font-inter text-base text-slate-600 leading-relaxed mb-6">
                Established in 1995, we are a privately owned apparel manufacturing and export company with an annual 
                turnover of USD 110 million. Recognized as one of India's leading woven garment exporters, we operate 
                eight fully integrated manufacturing units with a combined annual capacity of 18 million units.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-3 bg-[#ea580c] text-white hover:bg-[#c2410c] px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-[500px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092918484-8313e1f2524e?q=80&w=2070"
                alt="Texport Overseas"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="font-inter text-lg text-slate-300 leading-relaxed mb-8">
            Let's create something exceptional together. Contact us to discuss your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#ea580c] text-white hover:bg-[#c2410c] px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
