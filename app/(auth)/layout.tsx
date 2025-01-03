import {redirect} from 'next/navigation';
import React from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
import {getAuthSession} from '@/lib/auth';

const AuthLayout = async ({children}: {children: React.ReactNode}) => {
    const session: any = await getAuthSession();
    if (session?.user) {
        redirect('/');
    }

    return <div>{children}</div>;
};

export default AuthLayout;
