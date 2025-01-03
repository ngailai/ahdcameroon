import type {Metadata} from 'next';
import './globals.css';

import localFont from 'next/font/local';
import {Toaster} from 'sonner';

import Navbar from '@/components/Navbar';
import {NextUiProvider} from '@/providers/NextUiProvider';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'ASSOCIATION HUMANITAIRE POUR DEVELOPPEMENT',
    description: 'NGO application',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Toaster />
                <NextUiProvider
                    themeProps={{attribute: 'class', defaultTheme: 'light'}}
                >
                    <div className='relative flex flex-col h-screen'>
                        <main className='flex-grow'>
                            <Navbar /> {children}
                        </main>
                    </div>
                </NextUiProvider>
            </body>
        </html>
    );
}
