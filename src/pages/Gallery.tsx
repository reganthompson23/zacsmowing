import { Carousel } from '../components/Carousel';
import { useState } from 'react';
import { Phone, MessageSquare, Camera } from 'lucide-react';

const images = Array.from({ length: 12 }, (_, i) => `/images/ZacsCarousel/zaccy${i + 1}.jpg`);

export const Gallery = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    description: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Before and After</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As you browse through our before and after section, you'll see we consistently deliver 
              exceptional results, transforming properties with meticulous care and attention to detail.
            </p>
          </div>
          
          <Carousel images={images} />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Get Your Free Quote</h2>
            <p className="text-center text-gray-600 mb-12">Fill in the details below and we'll call you with a quote as soon as possible.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={4}
                  placeholder="Please summarise in a few words what you're looking for"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Upload photos</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Camera className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-4 text-sm text-gray-600">
                    Drop your images here, or click to upload multiple photos
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  checked={formData.consent}
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
              <a href="tel:+1234567890" className="bg-white hover:bg-gray-100 text-green-600 border-2 border-green-600 px-6 py-2 rounded-lg font-semibold flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
              <a href="sms:+1234567890" className="bg-white hover:bg-gray-100 text-green-600 border-2 border-green-600 px-6 py-2 rounded-lg font-semibold flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                Send Text
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}; 