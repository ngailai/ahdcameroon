/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {signIn} from 'next-auth/react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React from 'react';
import {toast} from 'sonner';

import FormInput from '@/components/FormInput';

const Signup = () => {
    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
        const email = formData.get('email');
        const password = formData.get('password');
        const response: any = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });
        console.log(response, 'response');

        if (response.status == 200) {
            toast.success('Loggedin successfully');
            router.push('/');
        } else {
            toast.error(response.error);
        }
    };
    return (
        <div className='min-h-screen flex justify-center bg-cyan-50 md:pt-12 pm-0'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-lg md:h-4/5 h-screen'>
                <h2 className='text-2xl font-bold text-center mb-4'>Sign In</h2>
                <form action={handleSubmit}>
                    <FormInput
                        label='Email'
                        id='email'
                        type='email'
                        placeholder='Enter the email'
                    />

                    <FormInput
                        label='Password'
                        id='password'
                        type='password'
                        placeholder='Enter the password'
                    />
                    <button
                        type='submit'
                        className=' mt-5 w-full py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500'
                    >
                        Login
                    </button>
                </form>
                <p>
                    Don&apos;t have an account?{' '}
                    <Link href='/signup'>Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
