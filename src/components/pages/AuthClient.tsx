"use client"

import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaCircle } from 'react-icons/fa'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

function AuthClient() {

    const { isConnecting, isConnected, chainId } = useAccount();

    useEffect(() => {
        if ((!isConnecting && isConnected) || (!isConnecting && chainId)) {
           window.location.href = "/d/overview";
        }

        // console.log("isConnecting", isConnecting)
        // console.log("isConnected", isConnected)
        // console.log("chainId", chainId)
    }, [isConnected, chainId, isConnecting])


    return (
        <div className='bg-black text-neutral-100 min-h-lvh'>
            <div className="py-5 mb-10 px-5 md:px-10 flex justify-between items-center shadow-md">
                <div>
                    <Link href={"../"} className="font-extrabold flex gap-2 md:gap-3 items-center cursor-pointer">
                        <div className=" md:text-xl">SPACE</div>
                        <div className="pt-0 md:pt-1"><FaCircle className="text-[8px] md:text-[10px]" /></div>
                        <div className=" md:text-xl">LISK</div>
                    </Link>
                </div>
                {/* <div className='flex items-center gap-8 '>
                <div className="flex items-center gap-8 font-bold">
                    <Link href={"/d/overview"}>Overview</Link>
                    <Link href={"/d/paymaster"}>Paymaster</Link>
                    <Link href={""}>Docs</Link>
                    <Link href={"/d/explorer"}>Explorer</Link>
                </div>
            </div> */}
            </div>

            <div className='flex items-center px-10 h-lvh'>
                <div className='flex-1'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex justify-center items-center mb-[100px]'>
                            <div>
                                <div className='font-bold text-4xl mb-3'>Connect wallet</div>
                                <div className='flex justify-center items-center'>
                                    <ConnectButton />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex w-full md:pl-10 md:pr-10 pr-3 ">
                                <div className="w-full bg-blue-900 h-[500px] rounded-xl" >
                                    <div className="bg-no-repeat bg-cover w-full bg-neutral-900 h-[500px] -mt-4 ml-3 rounded-xl bg-fixed " style={{ backgroundImage: "url('./Astronaut suit-pana.svg')" }} >

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-[40px]'></div>
        </div>
    )
}

export default AuthClient