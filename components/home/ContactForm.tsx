import {Mail, MapPin, Phone} from 'lucide-react';
// import Image from 'next/image';
import React from 'react';

const ContactForm = () => {
    return (
        <div className='bg-blue-50 py-8'>
            <h1 className='text-4xl font-bold text-center font-serif py-4'>
                Contact Us
            </h1>
            <div className='md:w-4/5 w-full mx-auto px-4 py-12'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8 items-center md:items-start'>
                    <div className=' p-8 rounded-lg'>
                        <h2 className='text-2xl font-semibold mb-4'>
                            Get in touch
                        </h2>
                        <div className='flex items-center mb-6'>
                            {/* <Image
                                src='/imgs/mypic.jpg'
                                alt='Clara Barton'
                                className='w-16 h-16 rounded-full object-cover mr-4'
                                width={100}
                                height={100}
                            /> */}
                            <div>
                                <p className='font-semibold'>AHD Cameroon</p>
                                <p className='text-sm text-gray-600'>
                                    HR & Office Manager
                                </p>
                            </div>
                        </div>

                        <div className='border-t text-gray-600 border-gray-200 pt-4 flex-col flex gap-5'>
                            <h3 className='text-lg font-semibold text-green-600 mb-2'>
                                Contact Information
                            </h3>
                            <p className='flex items-center gap-6 '>
                                <MapPin />
                                Yaounde,Cameroon, Infront of Socrates
                                Restaurant.
                            </p>
                            <p className='flex items-center gap-6 '>
                                <Phone />
                                +237 699820023, +237 691225555
                            </p>
                            <p className='flex items-center gap-6 '>
                                <Mail />
                                ahdcameroon393@gmail.com
                            </p>
                            <button className='bg-gray-700 text-white md:w-1/3 w-4/5 py-2 px-4 rounded-lg hover:bg-gray-800'>
                                Get Direction
                            </button>
                        </div>
                    </div>

                    <div className='bg-cyan-950 p-8 rounded-lg shadow-md text-gray-700'>
                        <h2 className='text-2xl font-semibold mb-4 text-green-500'>
                            Contact form
                        </h2>
                        <p className=' mb-4 text-white text-500 '>
                            Or, you can just send an email:{' '}
                            <a
                                href='mailto:info@charity.org'
                                className='text-red-600'
                            >
                                ahdcameroon393@gmail.com
                            </a>
                        </p>

                        <form>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mb-4'>
                                <input
                                    type='text'
                                    placeholder='First Name'
                                    className='w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none'
                                />
                                <input
                                    type='text'
                                    placeholder='Last Name'
                                    className='w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none'
                                />
                            </div>
                            <div className='mb-4'>
                                <input
                                    type='email'
                                    placeholder='Email Address'
                                    className='w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none'
                                />
                            </div>
                            <div className='mb-4'>
                                <textarea
                                    placeholder='What can we help you?'
                                    className='w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none h-28'
                                ></textarea>
                            </div>
                            <button
                                type='submit'
                                className='w-full bg-green-600 text-white py-2 rounded-lg hover:bg-red-600'
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
