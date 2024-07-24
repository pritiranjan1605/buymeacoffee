
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  
  return (
    <>
    <div className="flex justify-center text-white h-[44vh] flex-col items-center">
      <div className="flex justify-center items-center" >
      <div className="font-bold text-5xl">Buy me a Coffee</div><span ><lord-icon
    src="https://cdn.lordicon.com/kcoawjon.json"
    trigger="loop"
    delay="1000"
    colors="primary:#ffffff,secondary:#ffffff"
    style={{width:"80px" ,height:"80px"}}>
</lord-icon></span>
      </div>
      
        <p className="mt-5">
          A crowd funding platform for creators get funded by your fans and
          followers. start now !
        </p>
        <div className="mt-4 gap-4">
        <Link href={'/login'}>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Start Now</button>
        </Link>
        <Link href={'/readmore'}>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Read More</button>
        </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10">
        ss
      </div>

      <div className="py-32 container mx-auto text-white">
        <h1 className="text-2xl font-bold text-center mb-14 ">Your Fans can buy you a Coffee</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img src="/man.gif" alt="" className="bg-slate-400 rounded-full p-2 text-black" width={88}/>
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img src="/coins.gif" alt="" className="bg-slate-400 rounded-full p-2 text-black" width={88}/>
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img src="/fans.gif" alt="" className="bg-slate-400 rounded-full p-2 text-black" width={88}/>
            <p className="font-bold">Fans want to help you</p>
            <p className="text-center">your fans are available for you to help you</p>
          </div>
        </div>
      </div>


       
    
    
    
    
    </>
    
  );
}
