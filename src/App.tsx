import React, { useState } from 'react';
import { Phone, MessageSquare, Upload, ChevronRight, Camera, Menu, X } from 'lucide-react';
import { Gallery } from './pages/Gallery';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    description: '',
    consent: false
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(filesArray);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    try {
      const formData = new FormData(form);
      
      const response = await fetch("/", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          description: '',
          consent: false
        });
        setSelectedFiles([]);
        alert('Thank you for your submission! We will get back to you soon.');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Sorry, there was an error submitting your form. Please try again.');
    }
  };

  const services = [
    {
      title: "Lawn Maintenance Services",
      description: "Keep your lawn looking pristine with our reliable lawn mowing and maintenance services. Our experienced team ensures your grass is always well-manicured and healthy.",
      image: "/images/homepageservices/lawn.webp"
    },
    {
      title: "Block Slashing & Brushcutting",
      description: "Tackle overgrown areas with our efficient block slashing and brushcutting services. Ideal for large or small properties, we clear thick grass and brush.",
      image: "/images/homepageservices/block.webp"
    },
    {
      title: "Hedging and Tree Pruning",
      description: "Enhance the beauty and health of your hedges and trees with our expert trimming and pruning services. Our skilled professionals meticulously shape and maintain your landscape.",
      image: "/images/homepageservices/brush.webp"
    },
    {
      title: "Landscape Maintenance and Cleanup",
      description: "Prepare your property for sale, bond claims, or simply give it a fresh start with our comprehensive clean-up services. We manage everything from light tree work to complete tidy-ups.",
      image: "/images/homepageservices/land.webp"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Wait for home page to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Empty div for mobile layout balance */}
            <div className="w-6 md:hidden"></div>

            {/* Logo - Centered on mobile */}
            <div className="flex-1 flex justify-center md:justify-start">
              <button 
                onClick={() => {
                  if (currentPage === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    setCurrentPage('home');
                  }
                }}
                className="focus:outline-none"
              >
                <img 
                  src="/images/homepageservices/logo.png" 
                  alt="Zac's Mowing" 
                  className="h-12 w-auto cursor-pointer"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => {
                if (currentPage === 'home') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  setCurrentPage('home');
                }
              }} className="text-gray-600 hover:text-green-600 font-medium">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-green-600 font-medium">Services</button>
              <button onClick={() => setCurrentPage('gallery')} className="text-gray-600 hover:text-green-600 font-medium">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-green-600 font-medium">Contact</button>
              <a href="tel:0487651990" className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </nav>

            {/* Mobile Menu Button - Right */}
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t">
              <nav className="flex flex-col space-y-6">
                <button onClick={() => {
                  if (currentPage === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    setCurrentPage('home');
                  }
                  setIsMenuOpen(false);
                }} className="text-center text-gray-800 hover:text-green-600 font-semibold text-2xl tracking-wide uppercase">Home</button>
                <button onClick={() => { scrollToSection('services'); setIsMenuOpen(false); }} className="text-center text-gray-800 hover:text-green-600 font-semibold text-2xl tracking-wide uppercase">Services</button>
                <button onClick={() => { setCurrentPage('gallery'); setIsMenuOpen(false); }} className="text-center text-gray-800 hover:text-green-600 font-semibold text-2xl tracking-wide uppercase">Gallery</button>
                <button onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} className="text-center text-gray-800 hover:text-green-600 font-semibold text-2xl tracking-wide uppercase">Contact</button>
                <div className="flex flex-col space-y-3 pt-6 px-4">
                  <button onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center">Get Quote</button>
                  <a href="tel:0487651990" className="w-full bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 py-4 rounded-lg font-bold text-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-20">
        {/* Location Banner */}
        <div className="bg-green-50 text-green-800 py-2 px-4 text-center font-medium border-b border-green-100">
          <span className="inline-block leading-snug">
            Servicing Moffatdale to Kingaroy,<br className="sm:hidden" /> based out of Wondai
          </span>
        </div>

        {currentPage === 'gallery' ? (
          <>
            <Gallery />
            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/images/homepageservices/logo.png" 
                      alt="Zac's Mowing" 
                      className="h-10 w-auto brightness-0 invert"
                    />
                    <span className="text-sm">© 2024 Zac's Mowing</span>
                  </div>
                  <a 
                    href="https://www.reganthompson.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Website by Regan Thompson
                  </a>
                </div>
              </div>
            </footer>
          </>
        ) : (
          <>
            {/* Hero Section */}
            <div 
              className="relative h-screen bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/homepageservices/hero.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50">
                <div className="container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-3xl text-white">
                    <h1 className="text-5xl font-bold mb-6">Transform Your Outdoors with Expert Lawn and Property Care</h1>
                    <p className="text-xl mb-8">Experience reliable and professional services for all your lawn and property maintenance needs.</p>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => scrollToSection('contact')} 
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center"
                      >
                        Get Online Estimate <ChevronRight className="ml-2" />
                      </button>
                      <button 
                        onClick={() => scrollToSection('services')}
                        className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50"
                      >
                        Our Services
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div id="services" className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <div key={index} className="relative h-[400px] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* Gradient overlay only on bottom half */}
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/95 to-transparent"></div>
                      
                      {/* Content container */}
                      <div className="relative h-full p-6 flex flex-col justify-end">
                        <h3 className="text-2xl font-semibold mb-4 text-white text-shadow-lg">{service.title}</h3>
                        <p className="text-gray-100 mb-4">{service.description}</p>
                        <div className="flex gap-3">
                          <button 
                            onClick={() => scrollToSection('contact')}
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold"
                          >
                            Get Quote
                          </button>
                          <a 
                            href="tel:0487651990" 
                            className="bg-white hover:bg-gray-100 text-green-600 px-6 py-2 rounded-lg font-semibold flex items-center"
                          >
                            <Phone className="h-4 w-4 mr-2" />
                            Call Now
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div id="contact" className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-4">Get Your Free Quote</h2>
                  <p className="text-center text-gray-600 mb-12">Fill in the details below and we'll call you with a quote as soon as possible.</p>
                  
                  <form 
                    name="contact" 
                    method="POST" 
                    action="/"
                    data-netlify="true" 
                    data-netlify-honeypot="bot-field"
                    encType="multipart/form-data"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="hidden">
                      <input name="bot-field" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                        <input
                          type="text"
                          name="address"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Street number, street name, suburb, postcode"
                          value={formData.address}
                          onChange={(e) => setFormData({...formData, address: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Describe your request</label>
                      <textarea
                        name="description"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        rows={4}
                        placeholder="Please summarise in a few words what you're looking for"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">Upload photos (optional)</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center relative">
                        <input
                          type="file"
                          name="photos"
                          multiple
                          accept="image/*"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          onChange={handleFileChange}
                        />
                        <Camera className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-4 text-sm text-gray-600">
                          Drop your images here, or click to upload multiple photos
                        </p>
                        {selectedFiles.length > 0 && (
                          <div className="mt-4">
                            <p className="text-sm font-medium text-green-600">
                              {selectedFiles.length} {selectedFiles.length === 1 ? 'photo' : 'photos'} selected
                            </p>
                            <ul className="mt-2 text-sm text-gray-500">
                              {selectedFiles.map((file, index) => (
                                <li key={index}>{file.name}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        name="consent"
                        className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        checked={formData.consent}
                        required
                        onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                      />
                      <label className="ml-2 text-sm text-gray-600">
                        I consent to receive texts, calls and emails from Zac's Mowing in regards to my requested service as well as occasional marketing and follow up info.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
                    >
                      Request Online Estimate
                    </button>
                  </form>

                  <div className="mt-12 flex justify-center gap-3">
                    <a href="tel:0487651990" className="bg-white hover:bg-gray-100 text-green-600 border-2 border-green-600 px-6 py-2 rounded-lg font-semibold flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                    <a href="sms:0487651990" className="bg-white hover:bg-gray-100 text-green-600 border-2 border-green-600 px-6 py-2 rounded-lg font-semibold flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Send Text
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/images/homepageservices/logo.png" 
                      alt="Zac's Mowing" 
                      className="h-10 w-auto brightness-0 invert"
                    />
                    <span className="text-sm">© 2024 Zac's Mowing</span>
                  </div>
                  <a 
                    href="https://www.reganthompson.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Website by Regan Thompson
                  </a>
                </div>
              </div>
            </footer>
          </>
        )}
      </div>
    </div>
  );
}

export default App;