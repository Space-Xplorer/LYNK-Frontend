import React from 'react';
import { Calendar, DollarSign, Clock, Users, CheckCircle2 } from 'lucide-react';

interface BecomeLynkerProps {
  openAuthModal: (type: 'login' | 'signup', userType: 'user' | 'lynker') => void;
}

const BecomeLynker: React.FC<BecomeLynkerProps> = ({ openAuthModal }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lynk-purple to-lynk-dark text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Share Your Time,<br />Make a Difference
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Join a community of people offering meaningful human connections. 
                Earn money while helping others through conversation, advice, and companionship.
              </p>
              <button 
                onClick={() => openAuthModal('signup', 'lynker')} 
                className="btn-primary bg-white text-lynk-purple hover:bg-gray-100"
              >
                Apply to be a Lynker
              </button>
            </div>
            <div className="relative hidden md:block">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg"
                  alt="Person sharing knowledge"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-1/4 -right-8 bg-lynk-orange rounded-xl p-6 text-white shadow-lg transform rotate-3 z-20">
                <div className="text-3xl font-bold mb-1">$25-45</div>
                <div className="text-sm">Average hourly rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Become a Lynker?</h2>
            <p className="text-gray-600 text-lg">
              Lynk offers a unique opportunity to monetize your time while making meaningful connections 
              and helping others.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Earn Money</h3>
              <p className="text-gray-600">
                Set your own rates and earn money for your time. Many Lynkers earn $25-45 per hour,
                depending on their expertise and services.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Schedule</h3>
              <p className="text-gray-600">
                You control your availability. Work as much or as little as you want, 
                and choose hours that fit your lifestyle.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Help Others</h3>
              <p className="text-gray-600">
                Make a positive impact in someone's life through conversation, advice, 
                companionship, or expertise in your field.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 bg-lynk-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Become a Lynker</h2>
            <p className="text-gray-600 text-lg">
              Join our platform in four simple steps and start sharing your time with people who value it.
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-32 left-1/2 w-4/5 h-1 bg-lynk-purple transform -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="card text-center bg-white">
                  <div className="w-12 h-12 bg-lynk-purple text-white rounded-full flex items-center justify-center mx-auto -mt-10 mb-4 relative z-10 border-4 border-white">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Sign Up</h3>
                  <p className="text-gray-600 text-sm">
                    Create your account and complete your basic profile information.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="card text-center bg-white">
                  <div className="w-12 h-12 bg-lynk-purple text-white rounded-full flex items-center justify-center mx-auto -mt-10 mb-4 relative z-10 border-4 border-white">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Verify Identity</h3>
                  <p className="text-gray-600 text-sm">
                    Complete our verification process to ensure safety and trust.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="card text-center bg-white">
                  <div className="w-12 h-12 bg-lynk-purple text-white rounded-full flex items-center justify-center mx-auto -mt-10 mb-4 relative z-10 border-4 border-white">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Create Profile</h3>
                  <p className="text-gray-600 text-sm">
                    Build your detailed profile, set your rates, and define your availability.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="card text-center bg-white">
                  <div className="w-12 h-12 bg-lynk-purple text-white rounded-full flex items-center justify-center mx-auto -mt-10 mb-4 relative z-10 border-4 border-white">
                    <span className="text-lg font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Start Bookings</h3>
                  <p className="text-gray-600 text-sm">
                    Get notified of booking requests and start connecting with users.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => openAuthModal('signup', 'lynker')}
              className="btn-primary"
            >
              Start Your Application
            </button>
          </div>
        </div>
      </section>
      
      {/* What You Can Offer */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Can You Offer?</h2>
              <p className="text-lg text-gray-600 mb-8">
                People come to Lynk for various reasons. Here are some of the popular ways 
                our Lynkers help others:
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 text-lynk-purple">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Career Guidance</h3>
                    <p className="text-gray-600">
                      Offer mentorship, resume reviews, or interview preparation in your field of expertise.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-lynk-purple">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Emotional Support</h3>
                    <p className="text-gray-600">
                      Be a compassionate listener for those going through difficult times or needing to talk.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-lynk-purple">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Local Experiences</h3>
                    <p className="text-gray-600">
                      Show visitors around your city, taking them to local spots tourists rarely discover.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-lynk-purple">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Skill Sharing</h3>
                    <p className="text-gray-600">
                      Teach a language, hobby, or skill you're passionate about in a personalized session.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" 
                  alt="Career mentorship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md mt-8">
                <img 
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg" 
                  alt="Emotional support"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md -mt-8">
                <img 
                  src="https://images.pexels.com/photos/2049561/pexels-photo-2049561.jpeg" 
                  alt="Local tour guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg" 
                  alt="Skill sharing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-lynk-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Get answers to the most common questions about becoming a Lynker.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white">
              <h3 className="text-xl font-semibold mb-3">How much can I earn as a Lynker?</h3>
              <p className="text-gray-600">
                You set your own rates, but most Lynkers charge between $25-45 per hour. 
                Your earnings will depend on your expertise, the services you offer, and how many hours you're available.
              </p>
            </div>
            
            <div className="card bg-white">
              <h3 className="text-xl font-semibold mb-3">How do payments work?</h3>
              <p className="text-gray-600">
                Users book and pay through the Lynk platform. We hold the payment until the session is completed, 
                then release the funds to your account minus a 15% service fee.
              </p>
            </div>
            
            <div className="card bg-white">
              <h3 className="text-xl font-semibold mb-3">What if someone cancels a booking?</h3>
              <p className="text-gray-600">
                Our cancellation policy protects you. If a user cancels within 24 hours of the scheduled time, 
                you'll receive 50% of the booking fee. Cancellations with less than 6 hours' notice result in full payment.
              </p>
            </div>
            
            <div className="card bg-white">
              <h3 className="text-xl font-semibold mb-3">How does Lynk ensure safety?</h3>
              <p className="text-gray-600">
                We verify all users, offer optional location sharing during meetups, and maintain a review system. 
                We also have a support team available to assist with any issues that may arise.
              </p>
            </div>
            
            <div className="card bg-white">
              <h3 className="text-xl font-semibold mb-3">Do I need special qualifications?</h3>
              <p className="text-gray-600">
                While specific qualifications aren't required for all categories, you should have genuine expertise 
                or experience in the areas you offer. For some specialized services, we may ask for credentials.
              </p>
            </div>
            
            <div className="card bg-white">
              <h3 className="text-xl font-semibold mb-3">Can I offer services virtually?</h3>
              <p className="text-gray-600">
                Yes! Many Lynkers offer virtual sessions through video calls. You can specify whether your services 
                are available in-person, virtually, or both.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-lynk-purple to-lynk-dark text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Share Your Time?</h2>
            <p className="text-xl mb-8">
              Join our community of Lynkers today and start making meaningful connections while earning money.
            </p>
            <button 
              onClick={() => openAuthModal('signup', 'lynker')}
              className="btn-primary bg-white text-lynk-purple hover:bg-gray-100"
            >
              Apply to be a Lynker
            </button>
            <p className="mt-4 text-sm text-gray-200">
              Applications are typically reviewed within 2-3 business days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeLynker;