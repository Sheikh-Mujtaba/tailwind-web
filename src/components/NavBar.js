import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function NavBar() {

  const [showMenu,setShowMenu]=useState(false);

  const handleClick=()=>{
    setShowMenu(!showMenu);
  }

  return (
    <div className='px-[6vw] xl:px-[14vw] py-[6vh] '>
        <div className=' flex justify-between cursor-pointer items-center'>
          
            <div className='text-3xl flex font-mono'>Logo</div>

            <div className='hidden lg:flex gap-[3rem] items-center border pl-[2rem] pr-[1rem] py-[0.2rem] rounded-full bg-gray-200'>
              <p>About</p>
              <p>Process</p>
              <p>Work</p>
              <p>Pricing</p>
              <button className='bg-blue-500 text-white px-[1rem] py-[0.5rem] rounded-full'>Get Started </button>
            </div>
            
            {showMenu && (<div className='flex flex-col items-center gap-[2rem] lg:hidden border absolute  bg-gray-200 top-[13%] left-[6%] p-[1.4rem] w-[90%] '>
            <p>About</p>
              <p>Process</p>
              <p>Work</p>
              <p>Pricing</p>
              <button className='bg-blue-500 text-white px-[1rem] py-[0.5rem] rounded-full'>Get Started </button>
            </div>)}

            

            <div onClick={handleClick} className='text-xl flex lg:hidden'>
              {showMenu ?    <ImCross/> : <GiHamburgerMenu/> }
            </div>

            

        </div>
        
    </div>
  )
}

export default NavBar;
