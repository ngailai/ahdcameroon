'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

import { registerUser } from '@/actions/user';
import FormInput from '@/components/FormInput';

const Signup = () => {
    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
        // const name = formData.get('name') ;
        // const email = formData.get('email') ;
        // const password = formData.get('password') ;
        const response = await registerUser(formData);
        if (response.success) {
            toast.success(response.message);
            router.push('/login');
        } else {
            toast.error(response.error);
        }
    };
    return (
        <div className='min-h-screen flex justify-center bg-green-50 md:pt-12 pm-0'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-lg md:h-4/5 h-screen'>
                <h2 className='text-2xl font-bold text-center mb-4'>Sign up</h2>
                <form action={handleSubmit}>
                    <FormInput
                        label='Name'
                        id='name'
                        type='text'
                        placeholder='Enter your name'
                    />

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

                    <FormInput
                        label='Confirm Password'
                        id='confirmPassword'
                        type='password'
                        placeholder='Confirm Password'
                    />
                    <button
                        type='submit'
                        className=' mt-5 w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
                    >
                        Sign up
                    </button>
                </form>
                <p>
                    Already have an account? <Link href='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
