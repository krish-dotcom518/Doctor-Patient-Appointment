import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/images/logo.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';

const socialLinks = [
  {
    path: "https://www.linkedin.com/in/krishika-v-7092b8335",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://github.com/krish-dotcom518",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />,
  },
];

const quickLinks01 = [
  { path: '/home', display: "Home" },
  { path: '/', display: "About Us" },
  { path: '/services', display: "Services" },
  { path: '/', display: "Blog" },
];

const quickLinks02 = [
  { path: '/find-a-doctor', display: "Find a Doctor" },
  { path: '/', display: "Request an Appointment" },
  { path: '/', display: "Find a Location" },
  { path: '/', display: "Get an Opinion" },
];

const quickLinks03 = [
  { path: '/', display: "Donate" },
  { path: '/contact', display: "Contact Us" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='pb-16 pt-10 bg-gray-100'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          
          {/* Logo & Social Links */}
          <div>
            <img src={logo} alt="Logo" className='w-24' />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
              Copyright © {year} developed by Krishika Venkatesan. All rights reserved.
            </p>

            {/* Social Icons - Side by Side */}
            <div className='flex gap-4 mt-4'>
              {socialLinks.map((link, index) => (
                <Link 
                  to={link.path} 
                  key={index} 
                  className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className='grid grid-cols-3 gap-[20px]'>
            {/* Column 1 */}
            <ul>
              {quickLinks01.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className='text-[16px] font-[500] text-textColor hover:text-primaryColor'>{link.display}</Link>
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul>
              {quickLinks02.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className='text-[16px] font-[500] text-textColor hover:text-primaryColor'>{link.display}</Link>
                </li>
              ))}
            </ul>

            {/* Column 3 */}
            <ul>
              {quickLinks03.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className='text-[16px] font-[500] text-textColor hover:text-primaryColor'>{link.display}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
