import { Carousel } from '../components/Carousel';
import { Phone, MessageSquare } from 'lucide-react';
import { useEffect } from 'react';

const images = Array.from({ length: 24 }, (_, i) => `/images/ZacsCarousel/zaccy${i + 1}.jpg`);

export const Gallery = () => {
  useEffect(() => {
    document.title = 'Before & After Gallery | Zac\'s Mowing - Kingaroy, Wondai, South Burnett';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'View our before and after gallery of lawn mowing and property maintenance work across Kingaroy, Wondai, Murgon and the South Burnett region.');
    }
  }, []);

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

      {/* Contact Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Get Your Free Quote</h2>
            <p className="text-gray-600 mb-8">Click below to send us an email with your property details for a free quote.</p>
            
            <a 
              href="mailto:zacsmowingapm@gmail.com?subject=Quote%20Request%20for%20Property%20Maintenance&body=Hi%20Zac%2C%0D%0A%0D%0AI'm%20interested%20in%20getting%20a%20quote%20for%20my%20property.%0D%0A%0D%0AProperty%20Address%3A%0D%0A%0D%0AService(s)%20Required%3A%0D%0A%0D%0AAdditional%20Details%3A%0D%0A%0D%0ABest%20Contact%20Number%3A"
              className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Get Online Estimate
            </a>
            
            <div className="mt-8 flex justify-center gap-4">
              <a 
                href="tel:0487651990" 
                className="inline-flex items-center bg-white border-2 border-green-600 text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
              <a 
                href="sms:0487651990" 
                className="inline-flex items-center bg-white border-2 border-green-600 text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Text Now
              </a>
            </div>
            
            <div className="mt-6 flex flex-col items-center gap-3">
              <a 
                href="tel:0487651990" 
                className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
              >
                0487 651 990
              </a>
              <a 
                href="mailto:zacsmowingapm@gmail.com" 
                className="text-lg text-gray-600 hover:text-green-600 transition-colors"
              >
                zacsmowingapm@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}; 