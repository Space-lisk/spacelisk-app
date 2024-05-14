import DashHeader from '@/components/DashHeader';
import DashLayoutClient from '@/components/DashLayoutClient';
import React from 'react'

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <DashLayoutClient>
            {children}
        </DashLayoutClient>
    );
}


export default layout