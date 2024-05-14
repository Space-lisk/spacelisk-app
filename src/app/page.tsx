import Image from "next/image";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-800 via-20% via-purple-500 to-neutral-900  h-3 w-full"></div>
      <div className="w-full h-[800px] bg-no-repeat bg-cover bg-fixed bg-black text-white" style={{ backgroundImage: "url('/Astronaut helmet-cuate.svg')" }}>
        <div className="w-full h-[inherit] bg-purple-800 bg-opacity-0">
          <div className="py-5 mb-10 px-10 flex justify-between">
            <div></div>
            <div className="flex items-center gap-5 font-bold">
              <Link href={"/auth"}>Open App</Link>
              <Link href={"https://spacelisk.gitbook.io/space-lisk/"} target="_blank">Docs</Link>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="font-extrabold flex gap-2 md:gap-3 items-center">
              <div className=" md:text-3xl">SPACE</div>
              <div className="pt-0 md:pt-1"><FaCircle className="text-[8px] md:text-[10px]" /></div>
              <div className=" md:text-3xl">LISK</div>
            </div>
          </div>

          <div className="flex justify-center mb-[370px]">
            <div className="font-extrabold md:flex gap-5 items-center">
              <div className="text-4xl md:text-7xl">{"LET'S"}</div>
              <div className="text-4xl md:text-7xl bg-black mb-3 md:mb-0">
                <div className="px-4 py-3 bg-blue-900 text-neutral-100 ml-2 mt-3">ABSTRACT</div>
              </div>
              <div className="text-4xl md:text-7xl">TOGETHER</div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-full bg-black py-4">
              <Link href="https://spacelisk.gitbook.io/space-lisk/" target="_blank" className="px-10 py-4 bg-purple-700 text-neutral-50 rounded-full font-bold text-xl ml-1 mt-2">Explore docs</Link>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full pb-[100px] bg-orange-50 px-[30px] md:px-[50px] pt-[60px] md:pt-0">
        <div className="px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 mb-[100px]">
          <div className="flex items-center">
            <div className="">
              <div className=" mb-4 text-xl font-bold inline-block ">Unleash the Future <br /> of Transactions with Space Lisk</div>
              <div className="font-light">
                Space Lisk is a revolutionary suite designed to propel account abstraction on the Lisk chain, a powerful Optimism superchain.
                {"We've"} meticulously crafted three groundbreaking tools to simplify and secure your interactions within the Lisk ecosystem.
              </div>
            </div>
          </div>
          <div className="flex md:pl-10 md:pr-10 pr-3 pt-[50px] md:pt-0">
            <div className="w-full bg-gradient-to-r from-purple-800 via-2% via-blue-500 via-30% to-neutral-900 h-[auto] pb-4 rounded-xl" >
              <div className="bg-no-repeat bg-cover w-full bg-neutral-900 h-[auto] -mt-4 ml-3 rounded-xl " >
                <img src={"/code4.jpg"} alt="code" className="w-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-[80px]">
          <div className="flex justify-center font-bold text-xl mb-3">
            <div>Streamlined Transactions with ERC-4337 Bundler</div>
          </div>

          <div className="px-[10px] mb-10">
            <center>
              Experience a frictionless transaction experience with our innovative ERC-4337 bundler.
              This tool eliminates the need for individual user signatures, streamlining the process and boosting transaction efficiency.
              The bundler employs intelligent algorithms to group UserOperations strategically.
              This optimization ensures efficient gas utilization within each bundled transaction, further reducing overall fees and improving network scalability.
            </center>
          </div>

          <div className="flex justify-center">
            <div className="rounded-full bg-black py-4">
              <Link href="https://spacelisk.gitbook.io/space-lisk/" target="_blank" className="px-10 py-4 bg-purple-700 text-neutral-50 rounded-full font-bold text-xl ml-1 mt-2">Explore docs</Link>
            </div>
          </div>
        </div>

        <div className="mb-[100px] md:mb-[150px]">
          <div className="flex md:pl-10 md:pr-10 pr-3 ">
            <div className="w-full bg-blue-900 h-[600px] rounded-xl" >
              <div className="bg-no-repeat bg-cover w-full bg-neutral-900 h-[600px] -mt-4 ml-3 rounded-xl bg-fixed " style={{ backgroundImage: "url('./Solar system-pana.svg')" }} >

              </div>
            </div>
          </div>
        </div>

        <div className="px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 mb-[150px]">
          <div className="flex items-center">
            <div className="">
              <div className=" mb-4 text-xl font-bold inline-block">Effortless Smart Account Management <br /> with Dedicated SDK</div>
              <div className="font-light">
              Introducing our intuitive SDK (Spacelisk-js), your one-stop shop for seamless interaction with smart accounts. 
              This developer-friendly toolkit empowers you to effortlessly manage your smart contracts and unlock a world of possibilities within the Lisk network.
              </div>
            </div>
          </div>
          <div className="flex md:pl-10 md:pr-10 pr-3 pt-[50px] md:mt-0">
            <div className="w-full bg-gradient-to-r from-purple-800 via-2% via-blue-500 via-30% to-neutral-900 h-[auto] pb-4 rounded-xl" >
              <div className="bg-no-repeat bg-cover w-full bg-neutral-900 h-[auto] -mt-4 ml-3 rounded-xl " >
                <img src={"/code2.png"} alt="code" className="w-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-[150px]">
          <div className="flex justify-center font-bold text-xl mb-3">
            <div>Revolutionize Fee Structures and Embrace Gasless Transactions</div>
          </div>

          <div className="px-[10px] mb-10">
            <center>
            Space {"Lisk's"} customizable paymaster contracts empower you to break free from the constraints of traditional gas fee models.  
            Design fee structures that perfectly align with your specific needs, whether {"you're"} a developer building dApps, 
            a business owner facilitating user transactions, or simply a power user seeking more control over your finances.
            The power lies in your hands. Leverage paymaster contracts to establish yourself as a gas benefactor, 
            covering transaction fees for specific users or groups within the Lisk ecosystem. This opens doors for innovative loyalty programs, 
            subscription models, and other creative use cases that enhance user experience and drive adoption.
            </center>
          </div>

          <div className="flex justify-center">
            <div className="rounded-full bg-black py-4">
              <Link href="/auth" className="px-10 py-4 bg-purple-700 text-neutral-50 rounded-full font-bold text-xl ml-1 mt-2">Open app</Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center px-20 gap-3 items-center ">
           By <a href="https://github.com/chibuzoraustine" target="_blank" className="underline underline-offset-4">Chibuzor Anurigwo</a>
        </div>
      </div>
    </div>
  );
}
