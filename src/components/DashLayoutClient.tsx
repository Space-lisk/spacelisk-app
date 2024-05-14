"use client"

import DashHeader from '@/components/DashHeader';
import React from 'react'

function DashLayoutClient({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className='bg-neutral-950 text-neutral-100 min-h-lvh'>
            <div className="bg-gradient-to-r from-blue-800 via-20% via-purple-500 to-neutral-900  h-3 w-full"></div>
            <DashHeader />
            <div className='px-5 md:px-10 block md:flex justify-center mb-[50px]'>
                <div className='md:w-[60%]'>
                    {children}
                </div>
            </div>
            <div className="flex justify-center px-20 gap-3 items-center text-xs pb-14">
                By <a href="https://github.com/chibuzoraustine" target="_blank" className="underline underline-offset-4">Chibuzor Anurigwo</a>
            </div>
        </div> 
    );
}


export default DashLayoutClient