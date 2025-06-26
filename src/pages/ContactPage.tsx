import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, AlertTriangle, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-lynk-light py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're here to help with any questions or concerns you may have.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">
                For general inquiries and support, email us at:
              </p>
              <a href="mailto:support@lynkapp.com" className="text-lynk-purple hover:underline font-medium">
                support@lynkapp.com
              </a>
            </div>
            
            <div className="card text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">
                For urgent matters, please call our support line:
              </p>
              <a href="tel:+18881234567" className="text-lynk-purple hover:underline font-medium">
                +1 (888) 123-4567
              </a>
              <p className="text-gray-500 text-sm mt-2">
                Available Monday-Friday, 9am-6pm EST
              </p>
            </div>
            
            <div className="card text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                Our headquarters is located at:
              </p>
              <address className="not-italic text-lynk-purple font-medium">
                123 Connection St<br />
                San Francisco, CA 94107
              </address>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-lg mb-6 animate-fade-in">
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <MessageSquare className="mr-2" size={20} />
                    Message Received!
                  </h3>
                  <p>Thank you for reaching out. We've received your message and will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-lynk-purple hover:text-lynk-dark font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lynk-purple focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lynk-purple focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lynk-purple focus:border-transparent"
                      required
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Billing Question">Billing Question</option>
                      <option value="Report an Issue">Report an Issue</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lynk-purple focus:border-transparent"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="card bg-white">
                  <div className="flex items-start">
                    <div className="mr-4 text-lynk-purple">
                      <HelpCircle size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">How do I report an issue with a Lynker?</h3>
                      <p className="text-gray-600">
                        You can report issues directly through the app by visiting the Lynker's profile, 
                        tapping the "..." menu, and selecting "Report". For urgent matters, please contact 
                        our support team immediately.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card bg-white">
                  <div className="flex items-start">
                    <div className="mr-4 text-lynk-purple">
                      <HelpCircle size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">What happens if I need to cancel a booking?</h3>
                      <p className="text-gray-600">
                        You can cancel bookings through the app. Our cancellation policy varies 
                        depending on how close to the scheduled time you cancel. For full details, 
                        please visit our Cancellation Policy page.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card bg-white">
                  <div className="flex items-start">
                    <div className="mr-4 text-lynk-purple">
                      <HelpCircle size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">How are payments processed?</h3>
                      <p className="text-gray-600">
                        All payments are securely processed through our platform. We accept major 
                        credit cards and digital payment methods. Funds are held until your session 
                        is completed, then released to the Lynker.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card bg-white">
                  <div className="flex items-start">
                    <div className="mr-4 text-status-warning">
                      <AlertTriangle size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Emergency Support</h3>
                      <p className="text-gray-600">
                        For urgent safety concerns or emergencies during a Lynk session, 
                        please call our 24/7 emergency line at <span className="font-semibold">+1 (888) 555-SAFE</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#" className="text-lynk-purple hover:text-lynk-dark font-medium flex items-center">
                  <span>View all FAQs</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-lynk-light">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 relative h-96">
              <img 
                src="https://images.pexels.com/photos/2253916/pexels-photo-2253916.png" 
                alt="Map location" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-lynk-purple rounded-full flex items-center justify-center text-white animate-pulse">
                  <MapPin size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Support CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-lynk-purple to-lynk-dark text-white rounded-xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Need Additional Support?</h2>
              <p className="text-lg mb-8">
                Our support team is available to help you with any questions or issues 
                you may have. We're committed to ensuring you have the best possible experience with Lynk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+18881234567" className="btn-primary bg-white text-lynk-purple hover:bg-gray-100">
                  <Phone size={18} className="mr-2" />
                  Call Support
                </a>
                <a href="mailto:support@lynkapp.com" className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:bg-opacity-10">
                  <Mail size={18} className="mr-2" />
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;