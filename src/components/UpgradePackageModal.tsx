'use client'

import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useToast,
} from '@chakra-ui/react'
import { ImSpinner8 } from 'react-icons/im';
import { useAccount, useWriteContract } from 'wagmi';
import {abi as SpaceLiskABI} from "@/artifacts/contracts/SpaceLisk.sol/SpaceLisk.json"
import {spacelisk as SpaceLiskContractAddress} from "@/deployments/lisk_sepolia/output.json"
import { parseEther } from 'viem';

function UpgradePackageModal({
    children
}: {
    children: React.ReactNode
}) {

    const {address} = useAccount(); 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast();

    const [pkg, setPkg] = useState<string>("66434b00cf7ed11146aebb18");
    // const [isFetching, setIsFetching] = useState(false);

    const { writeContract, isPending, isSuccess } = useWriteContract();

    async function fundAccount() {
        if ((pkg.length < 1 && pkg.length <= 15) || !address ) return false;
        writeContract({ 
            abi: SpaceLiskABI,
            address: (SpaceLiskContractAddress as `0x${string}`),
            functionName: 'purchaseSubscription',
            args: [
                "66434b00cf7ed11146aebb18",
                "0xc80B282Cc68BF8ee6f70fEc96d1D9f7ab5dc3b3c"
            ],
            value: parseEther('0.001')
         })
    } 

    useEffect(() => {
        if(isSuccess) {
            onClose();
            toast({
                description: "Paymanet sent",
                duration: 10000,
                status: "success",
                title: "Success",
                position: "top-right"
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess])

    return (
        <>
            <div onClick={onOpen} className='inline-block cursor-pointer'>{children}</div>

            <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} size={{ base: 'sm', md: 'lg' }} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader className={"bg-neutral-900 text-neutral-100"}>Upgrade package</ModalHeader>
                    <ModalCloseButton className={'bg-neutral-900 text-neutral-100'} />

                    <ModalBody className={'bg-neutral-900 text-neutral-100'}>

                        <div className='mb-3'>
                            {/* <div className='inline-block border-b-2 border-purple-800 pb-[3px] mb-5 text-sm font-bold'>{currencyFormat(data.available_balance)}</div> */}

                            <div className='mb-5'>
                                <div className='text-xs font-bold text-neutral-500 mb-[2px]'>Smart account address</div>
                                <select value={pkg} onChange={(e) => setPkg(e.target.value)} className='px-3 py-3 text-xs w-full border-2 bg-transparent border-neutral-600 dark:bg-neutral-700 outline-none' disabled={isPending}>
                                    <option value="66434b00cf7ed11146aebb18">Free - 50 calls/month - 0 ETH</option>
                                    <option value="66435729cf7ed11146aebb1e">Pro - 1000 calls/month - 0.001 ETH</option>
                                </select>
                            </div>

                            <button className='px-10 py-2 bg-purple-800 text-sm text-neutral-100 disabled:bg-opacity-50 flex justify-center' onClick={() => fundAccount()}>
                                {
                                    isPending ? <ImSpinner8 className='animate-spin w-5 h-5' /> : <span>Submit</span>
                                }
                            </button>
                        </div>
                    </ModalBody>

                    <ModalFooter className={'bg-neutral-900 text-neutral-100'}>
                        <button onClick={onClose}>Close</button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default UpgradePackageModal