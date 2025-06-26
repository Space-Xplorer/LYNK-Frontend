import React from 'react';
import { 
  Shield, 
  Lock, 
  MapPin, 
  Star, 
  AlertTriangle, 
  PhoneCall, 
  CheckCircle2,
  AlertOctagon
} from 'lucide-react';

const SafetyPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-lynk-light py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Safety & Trust</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your safety is our highest priority. We've built multiple layers of protection 
              into the Lynk platform to ensure secure and trusted connections.
            </p>
          </div>
        </div>
      </section>
      
      {/* Core Safety Features */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Safety Features</h2>
            <p className="text-gray-600 text-lg">
              Every feature and policy is designed with your safety in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center hover:border-lynk-purple transition-all duration-300">
              <div className="w-16 h-16 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-lynk-purple group-hover:text-white transition-all duration-300">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Identity Verification</h3>
              <p className="text-gray-600">
                All users must verify their identity with government-issued ID and facial recognition.
              </p>
            </div>
            
            <div className="card text-center hover:border-lynk-purple transition-all duration-300">
              <div className="w-16 h-16 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Location Sharing</h3>
              <p className="text-gray-600">
                Optional real-time location sharing during meetups gives you added peace of mind.
              </p>
            </div>
            
            <div className="card text-center hover:border-lynk-purple transition-all duration-300">
              <div className="w-16 h-16 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ratings & Reviews</h3>
              <p className="text-gray-600">
                Transparent feedback system helps maintain high-quality experiences.
              </p>
            </div>
            
            <div className="card text-center hover:border-lynk-purple transition-all duration-300">
              <div className="w-16 h-16 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Block & Report</h3>
              <p className="text-gray-600">
                Easy to use tools to report issues and block users if needed.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Before, During, After */}
      <section className="py-20 bg-lynk-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Safety at Every Step</h2>
            <p className="text-gray-600 text-lg">
              We've implemented safety measures at every stage of your Lynk experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-lynk-purple text-white rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="text-2xl font-semibold">Before Meeting</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle2 size={20} className="text-status-success mr-3 flex-shrink-0 mt-1" />
                  <span>Review profiles, ratings, and user verification badges</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-status-success mr-3 flex-shrink-0 mt-1" />
                  <span>Chat within the app to discuss details and expectations</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-status-success mr-3 flex-shrink-0 mt-1" />
                  <span>Choose public meeting locations for first-time meetings</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-status-success mr-3 flex-shrink-0 mt-1" />
                  <span>Share your meeting details with a trusted friend</span>
                </li>
              </ul>
            </div>
            
            <div className="card bg-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-lynk-purple text-white rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="text-2xl font-semibold">During Meeting</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle2 size={20} className="text-status-success mr-3 flex-shrink-0 mt-1" />
                  <span>Use optional location sharing for added security</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-status-success mr-3 flex-shrink-0 mt-1" />
                  <span>Access emergency features with one tap</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-status-success mr-3 flex-shrink-0 mt-1" />
                  <span>Set meeting duration expectations clearly</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-status-success mr-3 flex-shrink-0 mt-1" />
                  <span>Trust your instincts and leave if you feel uncomfortable</span>
                </li>
              </ul>
            </div>
            
            <div className="card bg-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-lynk-purple text-white rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="text-2xl font-semibold">After Meeting</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle2 size={20} className="text-status-success mr-3 flex-shrink-0 mt-1" />
                  <span>Leave honest, detailed reviews to help the community</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-status-success mr-3 flex-shrink-0 mt-1" />
                  <span>Report any concerns immediately to our Trust & Safety team</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-status-success mr-3 flex-shrink-0 mt-1" />
                  <span>Block users if you don't wish to connect again</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-status-success mr-3 flex-shrink-0 mt-1" />
                  <span>Participate in our community guidelines enforcement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust & Safety Team */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Trust & Safety Team</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our dedicated team of safety experts works around the clock to:
              </p>
              
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle2 size={24} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Review and verify all user profiles before approval</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={24} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Investigate reported incidents promptly</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={24} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Monitor platform activity for suspicious behavior</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={24} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Continuously improve our safety features and policies</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={24} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Provide 24/7 emergency support</span>
                </li>
              </ul>
              
              <div className="mt-8 p-6 bg-lynk-light rounded-lg flex items-start">
                <PhoneCall size={24} className="text-lynk-purple mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">24/7 Emergency Support</h3>
                  <p className="text-gray-600">
                    Our emergency support line is available 24/7 at <span className="font-semibold">+1 (888) 555-SAFE</span>.
                    We're here whenever you need us.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
                alt="Trust and Safety Team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Safety Tips */}
      <section className="py-20 bg-lynk-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Safety Tips for Users</h2>
            <p className="text-gray-600 text-lg">
              While we take extensive measures to keep our platform safe, we encourage all users to follow 
              these additional safety practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <AlertOctagon size={24} className="text-status-warning mr-2" />
                Meeting in Person
              </h3>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Always meet in public places for first-time meetings</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Tell a friend or family member about your plans</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Keep your personal belongings secure</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Use our location sharing feature</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Avoid sharing personal financial information</span>
                </li>
              </ul>
            </div>
            
            <div className="card bg-white">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <AlertOctagon size={24} className="text-status-warning mr-2" />
                Online Interactions
              </h3>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Keep all communication within the Lynk platform</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Be cautious about sharing personal details too quickly</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Report suspicious behavior immediately</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Never send money or financial information</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Trust your instincts if something feels wrong</span>
                </li>
              </ul>
            </div>
            
            <div className="card bg-white">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <AlertOctagon size={24} className="text-status-warning mr-2" />
                For Lynkers
              </h3>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Set clear boundaries for your services</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Choose safe public meeting locations</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Keep detailed records of all bookings</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Report any uncomfortable situations</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Only accept bookings through the platform</span>
                </li>
              </ul>
            </div>
            
            <div className="card bg-white">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <AlertOctagon size={24} className="text-status-warning mr-2" />
                Red Flags to Watch For
              </h3>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Requests to communicate off-platform</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Requests for financial assistance or transfers</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Inconsistent personal details or behavior</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Uncomfortable pressure about meeting locations</span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-lynk-purple mr-3 flex-shrink-0 mt-1" />
                  <span>Reluctance to verify identity or follow platform rules</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-lynk-purple to-lynk-dark text-white rounded-xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Safety is a Community Effort</h2>
              <p className="text-lg mb-8">
                We're committed to creating the safest platform possible, but we need your help. 
                By following safety guidelines and reporting concerns, you help keep Lynk safe for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#" className="btn-primary bg-white text-lynk-purple hover:bg-gray-100">
                  Report a Concern
                </a>
                <a href="#" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:bg-opacity-10">
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafetyPage;