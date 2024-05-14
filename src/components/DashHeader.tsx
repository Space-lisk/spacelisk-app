"use client"

import React from 'react'
import Link from 'next/link'
import { FaCircle } from 'react-icons/fa';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function DashHeader() {
    
    return (
        <div className="py-5 mb-10 px-5 md:px-10 flex justify-between items-center shadow-md">
            <div>
                <Link href={"../../"} className="font-extrabold flex gap-2 md:gap-3 items-center cursor-pointer">
                    <div className=" md:text-xl">SPACE</div>
                    <div className="pt-0 md:pt-1"><FaCircle className="text-[8px] md:text-[10px]" /></div>
                    <div className=" md:text-xl">LISK</div>
                </Link>
            </div>
            <div className='flex items-center gap-8 '>
                <div className="flex items-center gap-8 font-bold">
                    <Link href={"/d/overview"}>Overview</Link>
                    <Link href={"/d/paymaster"}>Paymaster</Link>
                    <a href={"https://spacelisk.gitbook.io/space-lisk/"} target="_blank">Docs</a>
                    <Link href={"/d/explorer"}>Explorer</Link>
                    <ConnectButton showBalance={false} />
                </div>
            </div>
        </div>
    )
}

export default DashHeader