import React from 'react';
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import featureImg from '../assets/images/feature-img.png'
import faqImg from '../assets/images/faq-img.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import { BsArrowRight } from 'react-icons/bs'

import Services from '../components/Navbar/Services/Services';

import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/appointment');
  };

  

  return (
      <>
        <div className="p-8 2xl:h-[800px]">
         
          <div className="container">
            <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

              <div>
                <div className="flex-col justify-between items-start p-6 lg:w-[570px] ">

                  <h1 className='text-7xl sm:text-4xl '>
                    We empower <span className='text-yellow-500 font-bold italic'>The Elders</span> to enjoy their golden years.
                  </h1>

                  <p className='m-6 text-xl'>With out network of <span className='text-bold'>World's Top Professional Doctors & Medical Firms</span>, We aim to help out our Elder Folks With everything we can...<br/>So They can have it <span>Easy</span>
                  </p>

                  <button className='btn btn-outline m-6' onClick={handleClick}> Make an Appointment</button>

                </div>

              
                <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row      lg:items-center gap-5 lg:gap-[30px] '>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor '>30+
                    </h2>
                    <span className='w-24 h-2 bg-green-500 rounded-full block mt-3 animate-text-in'></span>
                    <p className='text__para '> Years of Experience</p>
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor '>15+
                    </h2>
                    <span className='w-24 h-2 bg-purple-500 rounded-full block mt-3 animate-text-in'></span>
                    <p className='text__para '> Clinic Locations</p>
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor '>100%
                    </h2>
                    <span className='w-24 h-2 bg-blue-500 rounded-full block mt-3 animate-text-in'></span>
                    <p className='text__para '>Customer Satisfaction</p>
                  </div>

                </div>
              </div>
            

              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="w-full " src={heroImg01} alt="" />
                </div>
                <div className="mt-[30px] ">
                  <img className='w-full mb-[30px] ' src={heroImg02} alt="" />
                  <img className='w-full ' src={heroImg03} alt="" />
                </div>
              </div>
            </div>
            
          </div>
        </div>

         {/* Services Section */}
         <Services/>
      </>
  );
};

export default Home;
