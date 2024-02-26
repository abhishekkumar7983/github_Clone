import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            About me
                        </h2>
                        <p className="mt-6 text-gray-600">
                        I'm a third-year <span className='font-bold text-red-500' >B.Tech</span> student at <span className='font-bold text-black' >NIT KKR </span>, concurrently
                         working as a <span className='font-bold text-red-500'> React JS Developer </span > at <span className='font-bold text-black'>Competisun </span>. Proficient
                          in React JS, I design responsive interfaces and 
                          collaborate with cross-functional teams for seamless 
                          integration. My academic background at NIT KKR hones 
                          my problem-solving skills, while professional 
                          experience sharpens my analytical thinking.
                        </p>
                        <p className="mt-4 text-gray-600">
                        I thrive in team collaborations, contributing to project success.
                         Adaptable and committed to continuous learning, 
                         I approach challenges with a growth mindset, reflecting a 
                        dedication to excellence in both academic and professional spheres.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}