import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {causeData} from '@/lib/data';

const Couses = () => {
    return (
        <>
            <h1 className='text-4xl font-serif w-1/2 text-center m-auto pt-5'>
                Causes
            </h1>
            <div className='grid md:grid-cols-3 grid-cols-1 w-full max-w-6xl m-auto gap-4 px-2 text-center py-8'>
                {causeData?.map((item, index: number) => (
                    <div
                        key={index}
                        className='group flex flex-col gap-2 rounded-md cursor-pointer shadow-xl overflow-hidden hover:shadow-slate-300 duration-500'
                    >
                        <Image
                            src={item.image}
                            className='w-full h-72 rounded-t-md object-cover group-hover:scale-105 duration-400 '
                            alt=''
                            width={500}
                            height={500}
                        />
                        <span className='font-bold bg-cyan-250 text-xl'>
                            {item.title}
                        </span>
                        <span>
                            <Link href='/donation'>
                                <button className='bg-green-950 text-white p-2 rounded-b-md w-full '>
                                    Kingly Donate
                                </button>
                            </Link>
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Couses;
