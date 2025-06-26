import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Briefcase, 
  MessageCircle, 
  Wind, 
  HeartCrack, 
  MapPin, 
  Zap, 
  Shield, 
  MapPinned, 
  Star, 
  AlertTriangle 
} from 'lucide-react';

interface HomePageProps {
  openAuthModal: (type: 'login' | 'signup', userType: 'user' | 'lynker') => void;
}

const HomePage: React.FC<HomePageProps> = ({ openAuthModal }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lynk-purple to-lynk-dark text-white py-20 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Discover Time Well Spent
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Book genuine human experiences—from career talks to heart-to-hearts. 
                Lynk connects you with people who care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/find-lynker" className="btn-primary bg-white text-lynk-purple hover:bg-gray-100">
                  Find a Lynker
                </Link>
                <button 
                  onClick={() => openAuthModal('signup', 'lynker')} 
                  className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:bg-opacity-10"
                >
                  Become a Lynker
                </button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative aspect-square bg-lynk-purple rounded-full overflow-hidden border-4 border-white">
                <img
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
                  alt="Two people having a meaningful conversation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full overflow-hidden border-4 border-white">
                <img
                  src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg"
                  alt="Business meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Lynk Works</h2>
            <p className="text-gray-600 text-lg">
              We make it easy to connect with people for meaningful experiences.
              Here's how to get started in three simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center group hover:border-lynk-purple transition-all duration-300">
              <div className="w-16 h-16 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-lynk-purple group-hover:text-white transition-all duration-300">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose a Purpose</h3>
              <p className="text-gray-600">
                Select what kind of experience you're looking for, whether it's to talk, learn, or just connect.
              </p>
            </div>
            
            <div className="card text-center group hover:border-lynk-purple transition-all duration-300">
              <div className="w-16 h-16 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-lynk-purple group-hover:text-white transition-all duration-300">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Browse & Book</h3>
              <p className="text-gray-600">
                Explore profiles of Lynkers, check their availability, and book time with someone who matches your needs.
              </p>
            </div>
            
            <div className="card text-center group hover:border-lynk-purple transition-all duration-300">
              <div className="w-16 h-16 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-lynk-purple group-hover:text-white transition-all duration-300">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Meet & Connect</h3>
              <p className="text-gray-600">
                Connect virtually or in person for your scheduled time and enjoy a genuine human connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Use Cases */}
      <section className="py-20 bg-lynk-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Purpose</h2>
            <p className="text-gray-600 text-lg">
              Lynk connects people for all kinds of meaningful experiences. 
              Here are some of the most popular ways people use our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Career Guidance</h3>
              <p className="text-gray-600 text-sm">
                Get advice from professionals in your dream field or industry.
              </p>
            </div>
            
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Romantic Date</h3>
              <p className="text-gray-600 text-sm">
                Meet someone new for a meaningful date without the pressure.
              </p>
            </div>
            
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Emotional Support</h3>
              <p className="text-gray-600 text-sm">
                Talk through challenges with someone who's a great listener.
              </p>
            </div>
            
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Stress Relief</h3>
              <p className="text-gray-600 text-sm">
                Unwind and decompress with someone who understands.
              </p>
            </div>
            
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartCrack size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Breakup Therapy</h3>
              <p className="text-gray-600 text-sm">
                Process your feelings with someone who's been there before.
              </p>
            </div>
            
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Travel Companion</h3>
              <p className="text-gray-600 text-sm">
                Explore a new city with a local who knows all the best spots.
              </p>
            </div>
            
            <div className="card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Confidence Building</h3>
              <p className="text-gray-600 text-sm">
                Work on your social skills with someone supportive and patient.
              </p>
            </div>
            
            <div className="card hover:text-lynk-purple text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <Link to="/find-lynker" className="block h-full flex flex-col items-center justify-center">
                <div className="text-2xl font-bold mb-2">Explore More</div>
                <p className="text-gray-600">Discover all the possibilities</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiences That Matter</h2>
            <p className="text-gray-600 text-lg">
              Hear from people who have found meaningful connections through Lynk.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:border-lynk-purple">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                    alt="Anjali S." 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Anjali S.</h3>
                  <p className="text-gray-500 text-sm">Product Designer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I found the best mentor for my startup journey on Lynk. The advice I received was practical, actionable, and life-changing!"
              </p>
              <div className="flex mt-4 text-lynk-orange">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
            </div>
            
            <div className="card hover:border-lynk-purple">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" 
                    alt="Mark T." 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Mark T.</h3>
                  <p className="text-gray-500 text-sm">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "After a difficult breakup, I needed someone to talk to. My Lynker was compassionate, understanding, and helped me process my emotions in a healthy way."
              </p>
              <div className="flex mt-4 text-lynk-orange">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
            </div>
            
            <div className="card hover:border-lynk-purple">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg" 
                    alt="Sarah K." 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Sarah K.</h3>
                  <p className="text-gray-500 text-sm">Marketing Specialist</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I was visiting Tokyo and booked time with a local through Lynk. Not only did I see the best hidden spots, but I made a friend who I still keep in touch with!"
              </p>
              <div className="flex mt-4 text-lynk-orange">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Trust */}
      <section className="py-20 bg-lynk-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Safety First, Always</h2>
            <p className="text-gray-600 text-lg">
              Your wellbeing is our top priority. We've built multiple layers of protection into every Lynk experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="w-14 h-14 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Identity Verification</h3>
              <p className="text-gray-600 text-sm">
                All Lynkers undergo thorough identity verification before joining our platform.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-14 h-14 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinned size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Live Location Sharing</h3>
              <p className="text-gray-600 text-sm">
                Optional location sharing during meet-ups for added peace of mind.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-14 h-14 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ratings & Reviews</h3>
              <p className="text-gray-600 text-sm">
                Transparent feedback system to ensure high-quality experiences.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-14 h-14 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Block & Report</h3>
              <p className="text-gray-600 text-sm">
                Easy tools to report issues and block users if needed.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/safety" className="btn-primary">
              Learn More About Safety
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-lynk-purple to-lynk-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make Meaningful Connections?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Join Lynk today and discover the value of time well spent with people who care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => openAuthModal('signup', 'user')} 
                className="btn-primary bg-white text-lynk-purple hover:bg-gray-100"
              >
                Sign Up to Find Lynkers
              </button>
              <button 
                onClick={() => openAuthModal('signup', 'lynker')} 
                className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:bg-opacity-10"
              >
                Become a Lynker
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;