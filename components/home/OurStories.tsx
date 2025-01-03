import {Facebook, Instagram} from 'lucide-react';
import React from 'react';

import {Image} from '@nextui-org/react';

const OurStories = () => {
    return (
        <>
            <div className='bg-cyan-100'>
                <div className='md:w-4/5 w-full mx-auto py-10 px-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center group'>
                        {/* left side  */}
                        <Image
                            src='/imgs/baner-1a.jpg'
                            width={'100%'}
                            height={400}
                            alt='Team photo'
                            className='rounded-lg h-[600px] object-cover px-1 md:px-0'
                        />
                        {/* right side  */}
                        <div className='flex flex-col gap-6 items-center text-slate-400 text-sm'>
                            <div className='bg-white p-5 rounded-lg group-hover:scale-105 duration-500 shadow-lg'>
                                <h2 className='text-4xl font-bold text-green-950'>
                                    Our Story
                                </h2>
                                <h3 className='text-lg text-cyan-950 font-semibold'>
                                    AHD, Non-Profit Organization
                                </h3>
                                <p className='text-cyan-950 text-justify '>
                                    AHD provides humanitarian aid and
                                    development assistance to people in need
                                    around the world. Their work is guided by
                                    Islamic principles and focuses on
                                    alleviating poverty, hunger, and suffering.
                                </p>
                            </div>

                            <div className='grid sm:grid-cols-2 grid-cols-1 gap-3 group-hover:scale-105 duration-700 delay-300'>
                                <div className='p-6 shadow-md rounded-lg bg-white'>
                                    <h4 className='text-xl font-semibold text-green-950'>
                                        Our Mission
                                    </h4>
                                    <p className='text-md text-cyan-950 text-justify'>
                                        To empower individuals and communities
                                        in the developing world to overcome
                                        poverty and build a better future
                                    </p>
                                    <ul className='list-inside list-disc text-cyan-950'>
                                        <li>Team Work</li>
                                        <li>Humanitarian Aid</li>
                                    </ul>
                                </div>

                                {/* stats section  */}
                                <div className='bg-white p-6 shadow-lg '>
                                    <div>
                                        <span className='text-1xl font-bold text-cyan-950'>
                                            2017
                                        </span>
                                        <p>Founded</p>
                                    </div>
                                    <div>
                                        <span className='text-2xl font-bold  mt-1 text-cyan-500'>
                                            multiple
                                        </span>
                                        <p>Donations</p>
                                    </div>
                                </div>
                            </div>

                            {/* <div className='bg-white p-5 rounded-lg group-hover:scale-105 duration-500 shadow-lg'>
                                <h2 className='text-4xl font-bold text-black'>
                                    Our story
                                </h2>
                                <h3 className='text-xl text-cyan-950 font-semibold '>
                                    AHD, Non-Profit Organization
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eni
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 w-3/5 m-auto gap-2 items-center py-5'>
                <Image
                    src='/imgs/social.jpeg'
                    className='rounded-xl w-80 m-auto object-cover'
                    alt=''
                />
                <div className='text-sm text-slate-400'>
                    <h1 className='text-4xl text-black font-bold'>
                        Social handles
                    </h1>
                    <h2 className='text-sm'>follow us</h2>
                    <p className='my-2'>
                        Like our page for updates, photos, and videos
                    </p>
                    <p className=''>
                        Don&apos;t miss out! Follow us for the latest news and
                        offers.
                    </p>
                    <div className='text-white flex items-center gap-2 my-2'>
                        <Facebook
                            size={32}
                            className='bg-gray-700 rounded-full p-2 '
                        />
                        {/* <Twitter
                            size={32}
                            className='bg-gray-700 rounded-full p-2 '
                        /> */}
                        <Instagram
                            size={32}
                            className='bg-gray-700 rounded-full p-2 '
                        />
                    </div>
                </div>
            </div>

            <div className='bg-cyan-100 py-10  relative overflow-hidden'>
                <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
                    {/* Left Section - Text */}
                    <div className='mb-6 md:mb-0'>
                        <h2 className='md:text-3xl text-xl font-bold text-gray-800'>
                            Make an impact. <br />
                            Save lives.
                        </h2>
                    </div>

                    {/* Right Section - Buttons */}
                    <div className='flex space-x-4 '>
                        <a
                            href='#donation'
                            className='text-gray-500 hover:text-gray-700 underline'
                        >
                            Make a donation
                        </a>
                        <button className='bg-gray-700 text-white md:p-3 p-1 rounded-full hover:bg-gray-800 transition duration-300'>
                            Become a volunteer
                        </button>
                    </div>
                    <div className='absolute md:w-32 w-16 md:h-32 h-16 bg-cyan-600 rounded-full border-b-8 border-gray-500  skew-x-6 md:-top-12 -top-6 right-1/2'></div>
                    <div className='absolute md:w-32 w-16 md:h-32 h-16 bg-green-300 rounded-full border-t-8 border-cyan-600 md:-bottom-20 -bottom-8 skew-x-12 right-0'></div>
                </div>
            </div>
        </>
    );
};

export default OurStories;
