import React from 'react';
import { MapPin, Mail, Phone, ShoppingCart, ChevronDown } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#1b192e]">

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="bg-[#2f2b44] w-full max-w-[900px] rounded-2xl p-10 shadow-2xl">
          <h1 className="text-4xl font-bold text-center text-white mb-10">
            Get in Touch with <span className="text-[#f04e53]">Techora</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="text-white space-y-8 mt-2">
              <div>
                <h2 className="text-xl font-bold mb-1">Contact Info</h2>
                <p className="text-gray-300 text-md pr-1">
                  Have a question or need support? We're here to help you with your electronics journey.
                </p>
              </div>

              <div className="space-y-4 text-md">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-[#d9487c]" />
                  <p>
                    <span className="font-bold text-gray-100">Address:</span>{' '}
                    <span className="text-gray-300">C-37 Ibrahimpur, Burari, New Delhi</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-[#5b87db]" />
                  <p>
                    <span className="font-bold text-gray-100">Email:</span>{' '}
                    <span className="text-gray-300">support@Techora.com</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-[#d64747]" />
                  <p>
                    <span className="font-bold text-gray-100">Phone:</span>{' '}
                    <span className="text-gray-300">+91 99584 25482</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-200 text-md mb-1.5 font-medium">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Anthony Rahim Sharma" 
                  className="w-full bg-white text-gray-900 placeholder-gray-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#b34ed4]"
                />
              </div>
              <div>
                <label className="block text-gray-200 text-md mb-1.5 font-medium">Email Address</label>
                <input 
                  type="email" 
                  placeholder="anthony@zoho.in" 
                  className="w-full bg-white text-gray-900 placeholder-gray-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#b34ed4]"
                />
              </div>
              <div>
                <label className="block text-gray-200 text-md mb-1.5 font-medium">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Type your message..." 
                  className="w-full bg-[#464161] text-white placeholder-gray-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#b34ed4] resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-[#f04e53] to-[#b34ed4] hover:opacity-90 text-white font-semibold py-3 mt-2 rounded-lg transition-all flex justify-center items-center shadow-md cursor-pointer">
                Send Message 🚀
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;