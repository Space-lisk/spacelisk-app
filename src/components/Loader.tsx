import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loader() {
    return (
        <>
            <div className='w-full flex h-screen justify-center bg-neutral-900 text-neutral-100'>
                <div className='mt-[300px] lg:mt-[350px]'>
                    <center className=''>
                        <AiOutlineLoading3Quarters className='w-8 h-8 text-purple-700 animate-spin mb-10' />
                        <div className='animate-ping'>
                            SPACE LISK
                        </div>
                    </center>
                </div>
            </div>
        </>
    )
}

export default Loader