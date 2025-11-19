import { useState } from "react";
export default function Navbar() {
  const [like, setLike]=useState(0);
  return (
    <nav>
      
      <div className="bg-[#4C763B] flex justify-between items-center h-12 mb-12 w-screen">
        <div className="px-8 ">
            <a className="navText font-bold " href="">GREENenv.</a>
        </div>
        <div>
          <i onClick={()=> setLike(like+1)} className=" cursor-pointer text-4xl fa-solid fa-heart text-white mx-8 active:text-red-600 hover:animate-pulse active:animate-ping "><span className="text-[#4C763B] relative right-7 bottom-2.5 text-xs">{like}</span></i>
        </div>
        
        <div className="flex justify-evenly flex-wrap">
            <a className="navText" href="">Home</a>
            <a className="navText" href="">About</a>
            <a className="navText" href="https://my-resume-builder-livid.vercel.app/">More</a>
            <a className="navText" href="">Contact</a>
        </div>
        
        
      </div>
    </nav>
  );
}
