import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {News} from '@prisma/client';

const SingleNews = ({item}: {item: News}) => {
    return (
        <Link
            href={`/news/${item?.id}`}
            className='flex flex-col gap-2 group rounded-md cursor-pointer shadow-xl overflow-hidden hover:shadow-slate-300 duration-500'
        >
            <Image
                src={item?.image || ''}
                alt={item?.title}
                className='w-full h-72 rounded-t-md object-cover group-hover:scale-105 duration-400'
                width={100}
                height={100}
            />
            <div className='p-2'>
                <p className='font-bol text-cyan-950 text-xl truncate'>
                    {item?.title}
                </p>
                <p className='py-2 text-sm text-slate-400 truncate'>
                    {item?.description}
                </p>
            </div>
        </Link>
    );
};

export default SingleNews;
