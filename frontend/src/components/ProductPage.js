import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';

const ProductPage = ({ title, category, products }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

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

      <section
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${products[0]?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 via-[#0f172a]/90 to-[#0f172a]/85"></div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
          <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
            {category}
          </span>
          <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-white mb-6 leading-[1.1]">
            {title}
          </h1>
          <p className="font-inter text-lg md:text-xl max-w-3xl mx-auto text-slate-300 leading-relaxed">
            Discover our premium collection crafted with precision and style for every occasion.
          </p>
        </div>
      </section>

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
              >
                <div className="relative h-96 overflow-hidden bg-slate-100 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0f172a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <ZoomIn className="w-12 h-12 text-white mx-auto mb-2" />
                      <p className="font-inter text-sm text-white uppercase tracking-wide">
                        Click to Zoom
                      </p>
                    </div>
                  </div>
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

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={handleClose}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button onClick={handleClose} className="absolute top-4 right-4 text-white hover:text-[#ea580c] transition-colors z-10">
              <X className="w-10 h-10" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); handlePrevious(); }} className="absolute left-4 text-white hover:text-[#ea580c] transition-colors z-10">
              <ChevronLeft className="w-12 h-12" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="absolute right-4 text-white hover:text-[#ea580c] transition-colors z-10">
              <ChevronRight className="w-12 h-12" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <button onClick={(e) => { e.stopPropagation(); handleZoomOut(); }} className="text-white hover:text-[#ea580c] transition-colors font-bold text-2xl">−</button>
              <span className="text-white font-inter text-sm min-w-[60px] text-center">{Math.round(zoomLevel * 100)}%</span>
              <button onClick={(e) => { e.stopPropagation(); handleZoomIn(); }} className="text-white hover:text-[#ea580c] transition-colors font-bold text-2xl">+</button>
            </div>
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-6 py-3 text-white">
              <h3 className="font-oswald text-xl font-bold uppercase mb-1">{selectedImage.name}</h3>
              <p className="font-inter text-sm text-slate-300">{selectedImage.category}</p>
            </div>
            <div className="max-w-5xl max-h-[80vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage.image} alt={selectedImage.name} className="w-full h-auto transition-transform duration-300" style={{ transform: `scale(${zoomLevel})` }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
