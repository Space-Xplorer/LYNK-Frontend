import React from 'react';
import { Users, Heart, Lock, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-lynk-light py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-gray-600 mb-8">
              To make meaningful human connection accessible to all.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Lynk was born from a simple observation: in our hyper-connected digital world, 
                genuine human connection has become increasingly rare and valuable.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founder, after moving to a new city, struggled to find meaningful connections 
                beyond superficial interactions. They realized that many people crave authentic 
                human experiences but lack accessible ways to find them.
              </p>
              <p className="text-lg text-gray-600">
                Lynk was created to bridge this gap—connecting people who have time and value 
                to share with those seeking meaningful interactions, guidance, and support.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" 
                alt="Team discussing ideas"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-lynk-purple text-white p-4 rounded-lg shadow-lg">
                <p className="text-lg font-semibold">Founded in 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-lynk-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">
              These principles guide everything we do at Lynk.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-white flex">
              <div className="mr-6">
                <div className="w-16 h-16 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center">
                  <Users size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Authentic Connection</h3>
                <p className="text-gray-600">
                  We believe in the power of genuine human interaction to improve lives. 
                  Our platform is designed to foster real connections, not transactional relationships.
                </p>
              </div>
            </div>
            
            <div className="card bg-white flex">
              <div className="mr-6">
                <div className="w-16 h-16 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center">
                  <Heart size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Empathy</h3>
                <p className="text-gray-600">
                  Understanding others' perspectives is at the heart of meaningful connection. 
                  We cultivate empathy in our community and our company culture.
                </p>
              </div>
            </div>
            
            <div className="card bg-white flex">
              <div className="mr-6">
                <div className="w-16 h-16 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center">
                  <Lock size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Trust & Safety</h3>
                <p className="text-gray-600">
                  We're committed to creating a secure environment where people feel safe 
                  to connect and share. Safety is never an afterthought—it's built into our foundation.
                </p>
              </div>
            </div>
            
            <div className="card bg-white flex">
              <div className="mr-6">
                <div className="w-16 h-16 bg-lynk-light text-lynk-purple rounded-full flex items-center justify-center">
                  <Globe size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Inclusivity</h3>
                <p className="text-gray-600">
                  We believe everyone deserves access to meaningful connections. 
                  Our platform is designed to be accessible and welcoming to people of all backgrounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">
              We're a diverse group of individuals passionate about human connection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-white text-center">
              <div className="mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                    alt="Michael Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
              <p className="text-lynk-purple mb-3">Founder & CEO</p>
              <p className="text-gray-600">
                Former tech executive with a passion for human connection. 
                Michael founded Lynk after experiencing the challenges of building meaningful relationships in a new city.
              </p>
            </div>
            
            <div className="card bg-white text-center">
              <div className="mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                    alt="Sarah Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
              <p className="text-lynk-purple mb-3">Chief Product Officer</p>
              <p className="text-gray-600">
                With a background in psychology and UX design, Sarah leads our product team 
                with a focus on creating intuitive, human-centered experiences.
              </p>
            </div>
            
            <div className="card bg-white text-center">
              <div className="mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                  <img 
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                    alt="James Rodriguez"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">James Rodriguez</h3>
              <p className="text-lynk-purple mb-3">CTO</p>
              <p className="text-gray-600">
                A security expert with over 15 years in tech, James ensures our platform 
                is both innovative and secure, putting user safety first.
              </p>
            </div>
            
            <div className="card bg-white text-center">
              <div className="mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                  <img 
                    src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" 
                    alt="Emily Patel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">Emily Patel</h3>
              <p className="text-lynk-purple mb-3">Head of Community</p>
              <p className="text-gray-600">
                With a background in community building and social work, Emily fosters 
                a supportive, inclusive environment for our growing Lynk community.
              </p>
            </div>
            
            <div className="card bg-white text-center">
              <div className="mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                  <img 
                    src="https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg" 
                    alt="David Kim"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">David Kim</h3>
              <p className="text-lynk-purple mb-3">Trust & Safety Director</p>
              <p className="text-gray-600">
                Former law enforcement professional, David leads our efforts to ensure 
                Lynk remains a safe and trusted platform for all users.
              </p>
            </div>
            
            <div className="card bg-white text-center">
              <div className="mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                  <img 
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                    alt="Sofia Martinez"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">Sofia Martinez</h3>
              <p className="text-lynk-purple mb-3">Marketing Director</p>
              <p className="text-gray-600">
                A storyteller at heart, Sofia helps share Lynk's mission and vision 
                with the world, focusing on authentic communication.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Vision */}
      <section className="py-20 bg-gradient-to-br from-lynk-purple to-lynk-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision for the Future</h2>
            <p className="text-xl mb-8">
              We're redefining digital relationships by giving time real value and 
              creating a world where meaningful human connection is accessible to all.
            </p>
            <p className="text-xl mb-8">
              As we grow, we remain committed to our core mission: facilitating genuine connections 
              that enrich lives, foster understanding, and build stronger communities.
            </p>
            <p className="text-xl">
              Join us as we build a more connected, empathetic world—one conversation at a time.
            </p>
          </div>
        </div>
      </section>
      
      {/* Press Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">In the Press</h2>
            <p className="text-gray-600 text-lg">
              See what others are saying about Lynk.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-white">
              <div className="text-3xl font-bold text-gray-300 mb-4">"</div>
              <p className="text-gray-600 mb-6">
                Lynk is reinventing how we think about human connection in the digital age. 
                Instead of more screens between people, they're using technology to bring us together in person.
              </p>
              <div className="flex items-center">
                <div className="font-semibold">TechCrunch</div>
                <span className="mx-2 text-gray-400">|</span>
                <div className="text-gray-500">June 2023</div>
              </div>
            </div>
            
            <div className="card bg-white">
              <div className="text-3xl font-bold text-gray-300 mb-4">"</div>
              <p className="text-gray-600 mb-6">
                What sets Lynk apart is their focus on safety and trust. In a world of anonymous digital 
                interactions, they've created a platform where authenticity is valued and protected.
              </p>
              <div className="flex items-center">
                <div className="font-semibold">Forbes</div>
                <span className="mx-2 text-gray-400">|</span>
                <div className="text-gray-500">August 2023</div>
              </div>
            </div>
            
            <div className="card bg-white">
              <div className="text-3xl font-bold text-gray-300 mb-4">"</div>
              <p className="text-gray-600 mb-6">
                The genius of Lynk is in recognizing that time is our most valuable resource, and 
                creating a marketplace where it can be shared meaningfully benefits everyone involved.
              </p>
              <div className="flex items-center">
                <div className="font-semibold">Business Insider</div>
                <span className="mx-2 text-gray-400">|</span>
                <div className="text-gray-500">October 2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Our Team CTA */}
      <section className="py-16 bg-lynk-light">
        <div className="container-custom">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-md">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're always looking for passionate individuals who believe in our mission 
                of making meaningful connection accessible to all.
              </p>
              <a href="#" className="btn-primary">
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;