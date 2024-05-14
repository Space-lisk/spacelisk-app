"use client"

import React, { useState } from 'react'
import { MdContentCopy } from 'react-icons/md'
import { TbDatabasePlus } from "react-icons/tb";
import FundAccountModal from '../FundAccountModal';
import { abi as SpaceLiskABI } from "@/artifacts/contracts/SpaceLisk.sol/SpaceLisk.json"
import {spacelisk as SpaceLiskContractAddress} from "@/deployments/lisk_sepolia/output.json"
import { useReadContract } from 'wagmi'
import { formatEther } from 'viem';

function PaymasterClient() {

    const [balAddress, setBalAddress] = useState("");
    const [userBal, setUserBal] = useState("");

    const {data, isFetching, isFetched} = useReadContract({
        abi: SpaceLiskABI,
        address: (SpaceLiskContractAddress as `0x${string}`),
        functionName: 'getUserBalance',
        args: [balAddress]
    })

    async function fetchBalance() {
        if (balAddress.length > 0) {
            setTimeout(() => {data && setUserBal(`${data}`);}, 3000)
        }
    }

    return (
        <div>
            <div className='flex rounded-lg mb-5'>
                <div className='px-0 py-10 flex-1 flex items-center'>
                    <div>
                        <div className='font-bold text-2xl mb-5'>Unleash Gasless Transactions <br /> and Flexible Fee Management with Space Lisk Paymaster Contract</div>
                        <div className='text-sm'>Space {"Lisk's"} customizable paymaster contract empower you to break free from the constraints of traditional gas fee models.</div>
                    </div>
                </div>
            </div>

            <div className='mb-20'>
                <div className='flex justify-between items-center'>
                    <div className='border-b-8 border-b-purple-700 inline-block font-bold mb-5'>Paymaster</div>
                    <FundAccountModal>
                        <button className='flex items-center gap-3 text-sm'>
                            <TbDatabasePlus />
                            <div>Fund an account</div>
                        </button>
                    </FundAccountModal>
                </div>

                <div className='flex items-center gap-3 mb-5'>
                    {/* <div className='text-sm'>KEY</div> */}
                    <div className='px-3 py-2 rounded-lg font-bold bg-purple-200 text-black text-sm flex gap-3 items-center'>
                        <div>{[process.env.NEXT_PUBLIC_PAYMASTER_ADDRESS]}</div>
                        <button><MdContentCopy /></button>
                    </div>
                </div>
            </div>

            <div className='mb-24'>
                <div className='flex justify-between items-center mb-5'>
                    <div className='border-b-8 border-b-purple-700 inline-block font-bold mb-5'>Check address paymaster balance</div>
                </div>

                <div>
                    <div className='mb-3'>Enter address</div>
                    <div className='mb-5'>
                        <input value={balAddress} onChange={(e) => {setUserBal(""); setBalAddress(e.target.value);}} type="text" placeholder='0x' className='px-5 py-3 w-[300px] md:w-[400px] bg-neutral-700 bg-opacity-65 ' />
                    </div>
                    { userBal && userBal.length > 0 && !isFetching && isFetched &&
                    <div className='mb-3 text-green-500'>Balance: {formatEther(BigInt(userBal))} ETH</div> 
                    }
                    <div className='flex'>
                        <div className="rounded-full bg-black inline-block  ">
                            <button className="px-10 py-4 bg-purple-700 text-neutral-50 rounded-full font-bold text-md ml-1 mt-2 disabled:opacity-25" onClick={fetchBalance} disabled={isFetching}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymasterClient