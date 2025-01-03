import Image from 'next/image';
import React from 'react';

const Volunteer = () => {
    return (
        <div className=' bg-cyan-100 flex items-center py-8 relative overflow-hidden'>
            <div className='md:w-4/5 w-full mx-auto px-4 lg:px-0'>
                <div className='flex md:flex-row flex-col-reverse gap-10 items-center'>
                    {/* Form Section */}
                    <div className='w-full md:w-1/2 bg-white relative p-8 rounded-lg group shadow-xl overflow-hidden'>
                        <div className='group-hover:opacity-100 opacity-0 duration-700 delay-500'>
                            <div className='absolute  w-12  h-20 bg-cyan-600 rounded-full -left-6  -top-5'></div>
                            <div className='absolute  w-12  h-20 bg-green-500 rounded-full -right-5  -bottom-6'></div>
                            <div className='absolute  w-12  h-20 bg-cyan-600 rounded-full -right-6  -top-5'></div>
                            <div className='absolute  w-12  h-20 bg-green-500 rounded-full -left-5  -bottom-6'></div>
                        </div>
                        <h1 className='text-3xl font-bold mb-4 text-center text-cyan-900'>
                            Become a volunteer today
                        </h1>
                        <form className='space-y-4'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    className='w-full p-2 bg-cyan-50 outline-none rounded-md '
                                />
                                <input
                                    type='email'
                                    placeholder='Email@gmail.com'
                                    className='w-full p-2 bg-cyan-50 outline-none rounded-md '
                                />
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <input
                                    type='text'
                                    placeholder='Subject'
                                    className='w-full p-2 bg-cyan-50 outline-none rounded-md '
                                />
                                <input
                                    type='file'
                                    className='w-full p-2 bg-cyan-50 outline-none rounded-md '
                                />
                            </div>
                            <textarea
                                placeholder='Comment (Optional)'
                                className='w-full p-2 bg-cyan-50 outline-none h-36 rounded-md '
                            />
                            <button
                                type='submit'
                                className='w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-600/90'
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* About Volunteering Section */}
                    <div className='w-full md:w-1/2 text-center'>
                        <Image
                            src='/imgs/charity6.jpg'
                            alt='Volunteer'
                            width={300}
                            height={300}
                            className='rounded-[100%] h-64 mx-auto object-cover '
                        />
                        <h2 className='text-2xl font-bold mt-6 text-green-500'>
                            Volunteering
                        </h2>
                        <p className='mt-4 w-3/5 m-auto text-sm text-slate-400'>
                            Volunteering is a great way to give back to the
                            community and make a difference in the lives of
                            those in need.It is viewed as an act of worship and
                            a means of demonstrating one&apos;s faith through
                            action.
                        </p>
                    </div>
                </div>
            </div>
            <div className='absolute md:w-56 w-16 md:h-56 h-16 bg-green-400 rounded-full   scale-105 md:-bottom-12 -bottom-6 -right-6'></div>
        </div>
    );
};

export default Volunteer;
