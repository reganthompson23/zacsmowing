import { Phone, MapPin, ChevronRight, MessageSquare } from 'lucide-react';
import { useEffect } from 'react';

export const ServiceAreas = () => {
  useEffect(() => {
    document.title = 'Service Areas | Kingaroy, Wondai, Murgon, Moffatdale - Zac\'s Mowing';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Zac\'s Mowing services Kingaroy, Wondai, Murgon, Moffatdale, Wooroolin, Tingoora, Wattle Camp and Booie. Local lawn mowing and property maintenance across the South Burnett.');
    }
  }, []);
  const areas = [
    {
      name: "Kingaroy",
      description: "As the largest town in the South Burnett region and the peanut capital of Australia, Kingaroy is our primary service area. We provide comprehensive lawn and property maintenance throughout Kingaroy's residential areas, acreages, and commercial properties.",
      features: ["Urban residential properties", "Rural acreages", "Commercial grounds", "Peanut farm surrounds"]
    },
    {
      name: "Wondai",
      description: "Home to our base of operations, we service all of Wondai and surrounding properties. Known for its timber heritage and local wineries, Wondai's diverse properties require specialized lawn care and maintenance services.",
      features: ["Heritage area properties", "Vineyard surrounds", "Timber country acreages", "Town residential blocks"]
    },
    {
      name: "Murgon",
      description: "Servicing Murgon and the surrounding Barambah area, we maintain properties throughout this historic beef cattle region. From town blocks to larger rural properties, we handle the unique maintenance needs of this northern town.",
      features: ["Town properties", "Rural acreages", "Cattle property surrounds", "Community facilities"]
    },
    {
      name: "Moffatdale",
      description: "Near the scenic Bjelke-Petersen Dam and surrounded by local vineyards, Moffatdale properties often feature larger blocks and unique landscaping. We provide specialized maintenance for this picturesque wine country area.",
      features: ["Vineyard properties", "Dam-side acreages", "Rural residential blocks", "Wine country estates"]
    },
    {
      name: "Wooroolin",
      description: "This small rural community north of Kingaroy features predominantly larger blocks and acreages. We provide reliable property maintenance services including block slashing and brushcutting for Wooroolin's rural properties.",
      features: ["Rural acreages", "Large residential blocks", "Farm property surrounds", "Block slashing services"]
    },
    {
      name: "Tingoora",
      description: "Situated between Wooroolin and Wondai, Tingoora is a quiet rural community with a mix of residential and agricultural properties. We service all property types in this area with reliable maintenance solutions.",
      features: ["Rural residential properties", "Agricultural surrounds", "Mixed acreages", "Local community facilities"]
    },
    {
      name: "Wattle Camp",
      description: "This rural-residential area southeast of Kingaroy features peaceful acreage properties. We provide comprehensive lawn and property maintenance services suited to Wattle Camp's semi-rural lifestyle blocks.",
      features: ["Rural-residential acreages", "Lifestyle properties", "Semi-rural blocks", "Peaceful country settings"]
    },
    {
      name: "Booie",
      description: "Known for its hilly terrain and acreage properties just east of Kingaroy, Booie requires experienced operators for safe and effective property maintenance on sloped and challenging blocks.",
      features: ["Hilly acreages", "Challenging terrain", "Sloped properties", "Rural residential blocks"]
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Servicing Moffatdale to Kingaroy
            </h1>
            <p className="text-xl mb-6">Based in Wondai, proudly serving the South Burnett region</p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <MapPin className="h-6 w-6" />
              <span>Local knowledge. Professional service. Reliable results.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We know the South Burnett. From the hilly acreages of Booie to the vineyard country of Moffatdale, 
              we understand the unique property maintenance needs of each area we service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{area.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  </div>
                </div>
                
                <div className="mt-4 pl-9">
                  <h4 className="font-semibold text-gray-900 mb-2">We service:</h4>
                  <ul className="space-y-1">
                    {area.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-xl font-semibold mb-2">Lawn Maintenance</h3>
                <p className="text-gray-600">Regular mowing and lawn care services for residential and commercial properties across all service areas.</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-xl font-semibold mb-2">Block Slashing & Brushcutting</h3>
                <p className="text-gray-600">Large area clearing and maintenance for acreages, rural blocks, and overgrown properties throughout the region.</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-xl font-semibold mb-2">Hedging & Tree Pruning</h3>
                <p className="text-gray-600">Expert trimming and shaping services to keep your hedges and trees healthy and looking their best.</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-xl font-semibold mb-2">Property Clean-ups</h3>
                <p className="text-gray-600">Comprehensive tidy-ups for property sales, bond claims, or general maintenance across the South Burnett.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today for a free quote on your property maintenance needs anywhere in the South Burnett region.
            </p>
            
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
    </div>
  );
};

