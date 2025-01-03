import Image from 'next/image';
import {redirect} from 'next/navigation';
import React from 'react';

import {updateDonation} from '@/actions/donation';

const DonationId = async ({params}: {params: Promise<{id: string}>}) => {
    const {id} = await params;
    let isSuccess = false;
    const res = await updateDonation(id);
    if (res.success) {
        isSuccess = true;
        redirect('/');
    }

    return (
        <div className='grid items-center justify-center h-[90vh]'>
            {isSuccess && (
                <div className='flex justify-center items-center gap-10 flex-col'>
                    <Image
                        src='/success.png'
                        className='w-40 h-40'
                        width={100}
                        height={100}
                        alt=''
                    />
                    <h1 className='text-4xl text-green-500'>
                        Successfull payment
                    </h1>
                </div>
            )}
        </div>
    );
};

export default DonationId;
