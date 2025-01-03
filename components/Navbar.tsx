/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
    Facebook,
    Instagram,
    Layout,
    Linkedin,
    LogIn,
    LogOut,
    X,
    Youtube,
} from 'lucide-react';
import {signOut, useSession} from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React from 'react';

import {navlinks} from '@/lib/data';
// import {Avatar} from '@nextui-org/avatar';
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from '@nextui-org/dropdown';
import {User} from '@nextui-org/user';

const Navbar = () => {
    const router = useRouter();
    const session: any = useSession();
    const user = session?.data?.user;

    return (
        <header>
            <div className='bg-cyan-950 hidden md:flex justify-between items-center text-white text-sm p-2'>
                <div className='mb-2 md:mb-0'>
                    <span className='mr-4'>
                        Yaounde,Cameroon, Infront of Socrates Restaurant.
                    </span>
                    <span>Tel: +237 691225555, +237 699820023</span>
                    <span> Email: ahdcameroon393@gmail.com</span>
                </div>
                <div>
                    <span> Mon - Thurs: 08:00 - 17:00</span>
                </div>
                <div className='flex space-x-4'>
                    <Linkedin size={25} />
                    <Facebook size={25} />
                    <Instagram size={25} />
                    <Youtube size={25} />
                    <X size={25} />
                </div>
            </div>
            <nav className='bg-white container mx-auto flex justify-between items-center py-1 px-4'>
                <Link href='/' className='flex items-center gap-2'>
                    <Image
                        src='/imgs/logo1.jpg'
                        className='w-20 h-20'
                        alt='NGO app'
                        width={150}
                        height={150}
                    />
                    <span className='text-cyan-950 text-xl md:block hidden font-semibold'>
                        ASSOCIATION HUMANITAIRE POUR DEVELOPPEMENT
                    </span>
                </Link>
                <div className='hidden md:flex items-center gap-5'>
                    {navlinks?.map((item, index) => (
                        <div key={index}>
                            <Link href={item.link}>{item.text}</Link>
                        </div>
                    ))}
                    <Dropdown>
                        <DropdownTrigger>
                            <Image
                                width={50}
                                height={50}
                                alt=''
                                className='cursor-pointer'
                                src='/imgs/mypic.jpg'
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label='Static Actions'>
                            {user?.id ? (
                                <>
                                    <DropdownItem key='user'>
                                        <User
                                            name={user?.name}
                                            description={user?.email}
                                            avatarProps={{
                                                src:
                                                    user?.image ||
                                                    '/imgs/mypic.jpg',
                                            }}
                                        />
                                    </DropdownItem>
                                    <DropdownItem key={'dashboard'}>
                                        <Link
                                            href='/dashboard'
                                            className='flex items-center gap-2'
                                        >
                                            <Layout size={18} /> Dashboard
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem key={'logout'}>
                                        <div
                                            className='flex items-center gap-2'
                                            onClick={() => {
                                                signOut({redirect: false}).then(
                                                    () => {
                                                        router.push('/login');
                                                    },
                                                );
                                            }}
                                        >
                                            <LogOut size={18} /> Logout
                                        </div>
                                    </DropdownItem>
                                </>
                            ) : (
                                <>
                                    <DropdownItem key={'login'}>
                                        <Link
                                            href='/login'
                                            className='flex items-center gap-2'
                                        >
                                            <LogIn size={18} /> Login
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem key={'register'}>
                                        <Link
                                            href='/signup'
                                            className='flex items-center gap-2'
                                        >
                                            <LogIn size={18} /> Register
                                        </Link>
                                    </DropdownItem>
                                </>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
