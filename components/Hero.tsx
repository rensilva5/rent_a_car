// import React from 'react'
'use client'
import Image from 'next/image';
import CustomButtom from './CustomButton';

const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
    }
  return (
    <div className='hero'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Find, rent a car,<br></br>follow your passion
            </h1>
            <p className="hero__subtitle">
                Stramlime your car rental efforless mobile App
            </p>
            <CustomButtom
                title={'Explore Cars'}
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero"
                    fill className='object-contain' />
            </div> 
            {/* <div className="hero__image-overlay"></div> */}
        </div>
    </div>
  )
}

export default Hero