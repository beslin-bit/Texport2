import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-testid="contact-hero"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 via-[#0f172a]/90 to-[#0f172a]/85"></div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
          <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-white mb-6 leading-[1.1]">
            Get in Touch
          </h1>
          
          <p className="font-inter text-lg md:text-xl max-w-3xl mx-auto text-slate-300 leading-relaxed">
            Let's discuss how we can work together to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Form */}
            <div>
              <span className="inline-block text-[#ea580c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
                Send Us a Message
              </span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-6">
                Let's Start a Conversation
              </h2>
              <p className="font-inter text-base text-slate-600 leading-relaxed mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <label className="block font-inter text-sm font-semibold text-slate-700 mb-2" htmlFor="name">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#ea580c] focus:outline-none transition-colors font-inter"
                    placeholder="John Doe"
                    data-testid="form-name"
                  />
                </div>

                <div>
                  <label className="block font-inter text-sm font-semibold text-slate-700 mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#ea580c] focus:outline-none transition-colors font-inter"
                    placeholder="john@example.com"
                    data-testid="form-email"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-inter text-sm font-semibold text-slate-700 mb-2" htmlFor="company">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#ea580c] focus:outline-none transition-colors font-inter"
                      placeholder="Your Company"
                      data-testid="form-company"
                    />
                  </div>

                  <div>
                    <label className="block font-inter text-sm font-semibold text-slate-700 mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#ea580c] focus:outline-none transition-colors font-inter"
                      placeholder="+91 98765 43210"
                      data-testid="form-phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-inter text-sm font-semibold text-slate-700 mb-2" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#ea580c] focus:outline-none transition-colors font-inter resize-none"
                    placeholder="Tell us about your project..."
                    data-testid="form-message"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-[#ea580c] text-white hover:bg-[#c2410c] px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300 w-full md:w-auto justify-center"
                  data-testid="form-submit"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <div className="bg-slate-50 p-8 md:p-12 h-full">
                <h3 className="font-oswald text-2xl font-bold uppercase text-[#0f172a] mb-8">
                  Contact Information
                </h3>

                <div className="space-y-8">
                  {/* Head Office */}
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <MapPin className="w-6 h-6 text-[#ea580c] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-oswald text-lg font-semibold uppercase text-[#0f172a] mb-2">
                          Head Office
                        </h4>
                        <p className="font-inter text-base text-slate-600 leading-relaxed">
                          Texport Overseas Private Limited<br />
                          No. 86 D/1, II Stage, Industrial Suburb<br />
                          Yeshwantpur, Bangalore<br />
                          Karnataka, India – 560022
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#ea580c] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-oswald text-lg font-semibold uppercase text-[#0f172a] mb-2">
                        Email
                      </h4>
                      <a href="mailto:info@texportoverseas.com" className="font-inter text-base text-slate-600 hover:text-[#ea580c] transition-colors">
                        info@texportoverseas.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#ea580c] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-oswald text-lg font-semibold uppercase text-[#0f172a] mb-2">
                        Phone
                      </h4>
                      <a href="tel:+919876543210" className="font-inter text-base text-slate-600 hover:text-[#ea580c] transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#ea580c] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-oswald text-lg font-semibold uppercase text-[#0f172a] mb-2">
                        Business Hours
                      </h4>
                      <p className="font-inter text-base text-slate-600">
                        Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                        Saturday: 9:00 AM - 1:00 PM IST
                      </p>
                    </div>
                  </div>

                  {/* Export Markets */}
                  <div className="flex items-start gap-4">
                    <Globe className="w-6 h-6 text-[#ea580c] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-oswald text-lg font-semibold uppercase text-[#0f172a] mb-2">
                        Global Reach
                      </h4>
                      <p className="font-inter text-base text-slate-600">
                        Serving clients across North America, Europe, Middle East, and Asia Pacific
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0f172a] mb-4">
              Visit Our Facility
            </h2>
            <p className="font-inter text-lg text-slate-600">
              Schedule a tour of our state-of-the-art manufacturing facilities
            </p>
          </div>
          <div className="relative h-96 bg-slate-200 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2877597936397!2d77.5375!3d13.0294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzQ1LjgiTiA3N8KwMzInMTUuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Texport Overseas Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;