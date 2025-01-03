/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {SessionProvider} from 'next-auth/react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import {ThemeProviderProps} from 'next-themes/dist/types';
import {useRouter} from 'next/navigation';
import * as React from 'react';

import {NextUIProvider} from '@nextui-org/system';

export function ThemeProvider({children, ...props}: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
export interface ProviderProps {
    children: React.ReactNode;

    themeProps?: any;
}
export function NextUiProvider({children, themeProps}: ProviderProps) {
    const router = useRouter();
    return (
        <SessionProvider>
            <NextUIProvider navigate={router.push}>
                <NextThemesProvider {...themeProps}>
                    {children}
                </NextThemesProvider>
            </NextUIProvider>
        </SessionProvider>
    );
}
