import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#101827] text-white">

      {/* Main Footer */}
      <div className="border-t border-b border-[#273142]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Brand / Contact */}
            <div>
              <h2 className="text-[#ef233c] text-2xl font-bold mb-3">
                Techora
              </h2>

              <p className="text-[16px] text-gray-300 mb-5">
                Powering Your World with the Best in Electronics.
              </p>

              <p className="text-[13px] text-gray-300 my-2 ">
                123 Electronics St, Style City, NY 10001<br/>
                Email: support@Zaptro.com<br/>
                Phone: (123) 456-7890
              </p>
              
            </div>

            {/* Customer Service */}
            <div>
                <h3 className="text-lg font-bold text-gray-100 mb-2">
                  Customer Service
                </h3>
  
                <ul className="space-y-1">
                    <li>
                      <a className="text-[13px] text-gray-300 hover:text-white transition-colors duration-200" >
                        Contact Us
                      </a>
                    </li>
    
                    <li>
                      <a className="text-[13px] text-gray-300 hover:text-white transition-colors duration-200" >
                        Shipping & Returns
                      </a>
                    </li>
    
                    <li>
                      <a className="text-[13px] text-gray-300 hover:text-white transition-colors duration-200" >
                        FAQs
                      </a>
                    </li>
    
                    <li>
                      <a className="text-[13px] text-gray-300 hover:text-white transition-colors duration-200" >
                        Order Tracking
                      </a>
                    </li>
    
                    <li>
                      <a className="text-[13px] text-gray-300 hover:text-white transition-colors duration-200" >
                        Size Guide
                      </a>
                    </li>
                  
                </ul>
            </div>

            {/* Social Media */}
            <div>
                <h3 className="text-lg pl-1 font-bold text-gray-100 mb-3">
                  Follow Us
                </h3>

                <div className="flex items-center gap-4">

                    <a href="#" aria-label="Facebook"
                     className="text-gray-300 hover:text-white transition-colors duration-200">
                        <FaFacebookF size={16} />
                    </a>
    
                    <a href="#" aria-label="Instagram"
                     className="text-gray-300 hover:text-white transition-colors duration-200">
                        <FaInstagram size={16} />
                    </a>
    
                    <a href="#" aria-label="Twitter"
                     className="text-gray-300 hover:text-white transition-colors duration-200" >
                        <FaTwitter size={16} />
                    </a>
    
                    <a href="#" aria-label="Pinterest"
                     className="text-gray-300 hover:text-white transition-colors duration-200" >
                        <FaPinterestP size={16} />
                    </a>

                </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold text-gray-100 mb-3">
                Stay in the Loop
              </h3>

              <p className="text-sm text-gray-300 mb-5">
                Subscribe to get special offers, free giveaways, and more
              </p>

              <div className="flex items-center gap-1 w-full max-w-[255px]">

                <input type="email" placeholder="Your email address"
                  className="w-full h-8 bg-transparent border-none outline-none text-[13px] text-white placeholder:text-gray-500 px-2"
                />

                <button type="button"
                 className="h-8 px-2 bg-[#ef233c] hover:bg-[#d91f35] text-white rounded-md text-[13px] font-semibold transition-colors duration-200 cursor-pointer shrink-0">
                    Subscribe
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="h-[60px] flex items-center justify-center">
        <p className="text-md text-gray-300">
          © 2025{" "}
          <span className="text-[#ef233c] font-medium">
            Techora.
          </span>{"  "}
          All rights reserved
        </p>
      </div>

    </footer>
  );
};

export default Footer;