"use client"

import React, { useEffect } from 'react'
import PerformanceChart from '@/components/PerformanceChart';
import { MdContentCopy } from "react-icons/md";

import { useAccount } from 'wagmi';
import { TbDatabasePlus } from 'react-icons/tb';
import UpgradePackageModal from '../UpgradePackageModal';

function OverviewClient() {

  // const { isConnecting, isConnected, chainId } = useAccount();

  // useEffect(() => {
  //   setTimeout(() => {
  //     // if ((!isConnecting && !isConnected) && (!isConnecting && !chainId)) {
  //     //   // window.location.href = "/auth";
  //     //   console.log("isConnecting", isConnecting)
  //     //   console.log("isConnected", isConnected)
  //     //   console.log("chainId", chainId)
  //     // }
  //   }, 2000)
  // }, [isConnected, chainId, isConnecting])

  return (
    <div>
      <div className='flex rounded-lg mb-5'>
        <div className='px-0 py-10 flex-1 flex items-center'>
          <div>
            <div className='font-bold text-2xl mb-5'>Welcome ! <br /> Lets explore Space together</div>
            <div className='text-sm'>Streamline your development workflow on Lisk with Space {"Lisk's"} robust ERC-4337 RPC functionality.
              Our tools seamlessly integrate with existing developer toolchains,
              providing a familiar and efficient way to interact with account abstraction features within the Lisk ecosystem.</div>
          </div>
        </div>
        {/* <div className='flex-1'>
          <div className='bg-no-repeat bg-center h-[300px] w-full' style={{ backgroundImage: "url('/fire.svg')" }}>
          </div>
        </div> */}
      </div>

      <div className='mb-16'>
        <div className='border-b-8 border-b-purple-700 inline-block font-bold mb-5'>API KEY</div>

        <div className='flex items-center gap-3 mb-5'>
          <div className='text-sm'>KEY</div>
          <div className='px-3 py-2 rounded-lg font-bold bg-purple-200 text-black text-sm flex gap-3 items-center'>
            <div>T5hCVBfbxC6CbkcCzgHvTxfeD8AQ7e</div>
            <button><MdContentCopy /></button>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <div className='text-sm'>HTTP</div>
          <div className='px-3 py-2 rounded-lg font-bold bg-purple-200 text-black text-sm flex gap-3 items-center'>
            <div>{process.env.NEXT_PUBLIC_LISK_AA_SEPOLIA_RPC_URL}T5hCVBfbxC6CbkcCzgHvTxfeD8AQ7e</div>
            <button><MdContentCopy /></button>
          </div>
        </div>
      </div>

      <div>
        <div className='border-b-8 border-b-purple-700 inline-block font-bold mb-5'>Usage</div>
        <div className='w-full sm:pr-10 mb-14'>
          <div className="flex justify-between">
            <div className='font-bold text-xl mr-4 mb-4'>RPC performance</div>
            <div className='flex [&>*]:p-1 [&>*]:mr-3 [&>*]:text-xs'>
              <button>D</button>
              <button>W</button>
              <button>M</button>
              <button>Y</button>
              <button className='font-bold border-b-2 border-b-fuchsia-900'>ALL</button>
            </div>
          </div>
          <div className='w-full' style={{ height: '200px' }}>
            <PerformanceChart />
          </div>
        </div>
      </div>

      <div className='mb-16'>

        <div className='flex justify-between items-center'>
          <div className='border-b-8 border-b-purple-700 inline-block font-bold mb-5'>Subscription</div>
          <UpgradePackageModal>
            <button className='flex items-center gap-3 text-sm'>
              <TbDatabasePlus />
              <div>Upgrade package</div>
            </button>
          </UpgradePackageModal>
        </div>


        <div>
          <div>Package: Free</div>
          <div>Limit: 50 calls / month</div>
          <div>Usage: 2/50</div>
        </div>
      </div>
    </div>
  )
}

export default OverviewClient