import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';

const MensShorts = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const products = [
    {
      id: 1,
      name: 'Classic Chino Shorts',
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070',
      category: 'Casual',
    },
    {
      id: 2,
      name: 'Cargo Shorts',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2070',
      category: 'Utility',
    },
    {
      id: 3,
      name: 'Denim Shorts',
      image: 'https://images.unsplash.com/photo-1591195853725-82d3b6fbdeee?q=80&w=2070',
      category: 'Casual',
    },
    {
      id: 4,
      name: 'Athletic Shorts',
      image: 'https://images.unsplash.com/photo-1591195850194-47fb06b98c83?q=80&w=2070',
      category: 'Sports',
    },
    {
      id: 5,
      name: 'Tailored Shorts',
      image: 'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?q=80&w=2069',
      category: 'Formal',
    },
    {
      id: 6,
      name: 'Bermuda Shorts',
      image: 'https://images.unsplash.com/photo-1591195853902-4674c90670b1?q=80&w=2070',
      category: 'Casual',
    },
    {
      id: 7,
      name: 'Linen Shorts',
      image: 'https://images.unsplash.com/photo-1591195845196-41a5f3c5cd34?q=80&w=2070',
      category: 'Summer',
    },
    {
      id: 8,
      name: 'Performance Shorts',
      image: 'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?q=80&w=2070',
      category: 'Active',
    },
  ];

  const handleImageClick = (product) => {
    setSelectedImage(product);
    setZoomLevel(1);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  const handleNext = () => {
    const currentIndex = products.findIndex((p) => p.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % products.length;
    setSelectedImage(products[nextIndex]);
    setZoomLevel(1);
  };

  const handlePrevious = () => {
    const currentIndex = products.findIndex((p) => p.id === selectedImage.id);
    const previousIndex = (currentIndex - 1 + products.length) % products.length;
    setSelectedImage(products[previousIndex]);
    setZoomLevel(1);
  };

  return (
    <div className="w-full">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-testid="products-hero"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 via-[#0f172a]/90 to-[#0f172a]/85"></div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
          <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
            Men's Collection
          </span>
          <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-white mb-6 leading-[1.1]">
            Men's Shorts
          </h1>
          <p className="font-inter text-lg md:text-xl max-w-3xl mx-auto text-slate-300 leading-relaxed">
            Discover our premium collection of men's shorts, crafted with precision and style for every occasion.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
              Product Collection
            </h2>
            <p className="font-inter text-lg text-slate-600 max-w-3xl mx-auto">
              Click on any product to view in detail with zoom functionality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                onClick={() => handleImageClick(product)}
                data-testid={`product-${product.id}`}
              >
                <div className="relative h-96 overflow-hidden bg-slate-100 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0f172a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <ZoomIn className="w-12 h-12 text-white mx-auto mb-2" />
                      <p className="font-inter text-sm text-white uppercase tracking-wide">
                        Click to Zoom
                      </p>
                    </div>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-[#ea580c] text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                    {product.category}
                  </div>
                </div>
                <h3 className="font-oswald text-xl font-semibold uppercase text-[#0f172a]">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={handleClose}
          data-testid="zoom-modal"
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:text-[#ea580c] transition-colors z-10"
              data-testid="close-modal"
            >
              <X className="w-10 h-10" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 text-white hover:text-[#ea580c] transition-colors z-10"
              data-testid="previous-button"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 text-white hover:text-[#ea580c] transition-colors z-10"
              data-testid="next-button"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            {/* Zoom Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomOut();
                }}
                className="text-white hover:text-[#ea580c] transition-colors font-bold text-2xl"
                data-testid="zoom-out"
              >
                −
              </button>
              <span className="text-white font-inter text-sm min-w-[60px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomIn();
                }}
                className="text-white hover:text-[#ea580c] transition-colors font-bold text-2xl"
                data-testid="zoom-in"
              >
                +
              </button>
            </div>

            {/* Product Info */}
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-6 py-3 text-white">
              <h3 className="font-oswald text-xl font-bold uppercase mb-1">
                {selectedImage.name}
              </h3>
              <p className="font-inter text-sm text-slate-300">
                {selectedImage.category}
              </p>
            </div>

            {/* Image Container */}
            <div
              className="max-w-5xl max-h-[80vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="w-full h-auto transition-transform duration-300"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'center center',
                }}
                data-testid="zoomed-image"
              />
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
            Interested in Our Products?
          </h2>
          <p className="font-inter text-lg text-slate-600 leading-relaxed mb-8">
            Contact us to learn more about our manufacturing capabilities and product customization options.
          </p>
          <button className="inline-flex items-center gap-3 bg-[#ea580c] text-white hover:bg-[#c2410c] px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default MensShorts;
