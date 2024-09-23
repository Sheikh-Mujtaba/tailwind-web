import React from 'react';
import review from '../img/review.webp';
import review2 from '../img/review 2.webp';
import { TiTick } from "react-icons/ti";
import next from '../img/next-black.svg';
import motion from '../img/framer-motion-black.svg';
import radix from '../img/radix-black.svg';
import tailwind from '../img/tailwind-black.svg';
import headless from '../img/headlessui-black.svg';
import { IoRose } from "react-icons/io5";
import { FaHeartBroken } from "react-icons/fa";
import { FaFolderClosed } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa6";
import { IoManSharp } from "react-icons/io5";
import { IoIosFlash } from "react-icons/io";
import foto from '../img/tail.webp';

function Home() {
  return (
    <>
    {/* Hero section start  */}
    <div className='px-[6vw] xl:px-[14vw] py-[6vh] h-[60vh] w-[auto] flex  items-start justify-start '>
        <div className='flex flex-col text-start  gap-[2rem]'>

            <div className='text-blue-600 text-l capitalize'>DESIGN ENGINEERING AS A SERVICE  ///</div>
            <div className='text-4xl lg:text-5xl text-bold font-mono'>Make people fall in love <br/>with your SaaS product</div>

            <div className='mt-[2rem] text-l '>The first-ever <span className='text-bold'>design engineering subscription for SaaS companies.</span>
            <br/> Thoughtfully crafting compelling sites your visitors won't want to leave.</div>
          <div className='flex gap-[3rem]'>
          <button className='bg-blue-500 text-white px-[1rem] py-[0.5rem] rounded-full'>Get Started </button>
          <button className='bg-white-500 border px-[1rem] py-[0.5rem] rounded-full'>Get Started </button>
          </div>

        </div>
        
    </div>
    {/* hero section end */}

    {/* Marquee start */}

    {/* <div class="relative flex overflow-hidden px-[17vw] py-[4vh]">
  <div class="py-12 animate-marquee whitespace-nowrap">
    <span class="text-4xl mx-4">Marquee Item 1</span>
    <span class="text-4xl mx-4">Marquee Item 2</span>
    <span class="text-4xl mx-4">Marquee Item 3</span>
    <span class="text-4xl mx-4">Marquee Item 4</span>
    <span class="text-4xl mx-4">Marquee Item 5</span>
  </div>
</div> */}

{/* Marquee end */}

{/* Three cards start  */}


<div className='px-[6vw] xl:px-[14vw]'>

    {/* For XL screens, use flex, for LG and below, use grid */}
    <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:flex justify-between gap-[2rem]'>

        {/* card 1 */}
        <div className='w-[20rem] h-[10rem] text-start flex flex-col gap-[1rem]'>
            <div className='flex items-center gap-[1rem]'>
                <div className='text-4xl'><IoRose /></div>
                <p className='font-bold text-2xl font-mono'>Struggling to keep<br /> your site up-to-date?</p>
            </div>
            <p className='text-gray-500'>When your product evolves, it can be hard to keep your website up-to-date whilst maintaining the highest design standards.</p>
        </div>
        {/* card 1 end */}

        {/* card 2 */}
        <div className='w-[23rem] h-[10rem] text-start flex flex-col gap-[1rem]'>
            <div className='flex items-center gap-[1rem]'>
                <div className='text-4xl'><FaHeartBroken /></div>
                <p className='font-bold text-2xl font-mono'>Unhappy with your current design?</p>
            </div>
            <p className='text-gray-500'>When your product evolves, it can be hard to keep your website up-to-date whilst maintaining the highest design standards.</p>
        </div>
        {/* card 2 end */}

        {/* card 3 */}
        <div className='w-[20rem] h-[10rem] text-start flex flex-col gap-[1rem]'>
            <div className='flex items-center gap-[1rem]'>
                <div className='text-4xl'><FaFolderClosed /></div>
                <p className='font-bold text-2xl font-mono'>No budget for an<br /> entire in-house team?</p>
            </div>
            <p className='text-gray-500'>When your product evolves, it can be hard to keep your website up-to-date whilst maintaining the highest design standards.</p>
        </div>
        {/* card 3 end */}

    </div>
</div>

{/* Three cards end */}

 {/* Focus Product + Photo start */}

            <div className='px-[6vw] xl:px-[14vw] py-[20vh]   '>

                <div className='flex justify-between items-center text-start'>
                    
                <div className=' flex flex-col gap-[2rem]'>
                    <p className='text-3xl text-bold font-mono'>Focus on your product – <br/>let us handle your website</p>
                    <p className='text-l'>  We'll take care of designing your top-tier website including graphics,<br/> animations and docs pages. And we'll build it out using the latest <br/> <span className='text-bold'>frontend technologies.</span> </p>


                </div>

                <img src={foto} className='w-[50%] hidden md:block '/>

                </div>


            </div> 
 {/* Focus Product + Photo end*/}
 

     {/* Three cards start  PART 2 */}


<div className='px-[6vw] xl:px-[14vw]'>

{/* For XL screens, use flex, for LG and below, use grid */}
<div className='grid md:grid-cols-2 lg:grid-cols-2 xl:flex justify-between gap-[2rem]'>

    {/* card 1 */}
    <div className='w-[20rem] h-[10rem] text-start flex flex-col gap-[1rem]'>
        <div className='flex items-center gap-[1rem]'>
            <div className='text-4xl'><FaRocket /></div>
            <p className='font-bold text-2xl font-mono'>Put your product ahead of your competition</p>
        </div>
        <p className='text-gray-500'>When your product evolves, it can be hard to keep your website up-to-date whilst maintaining the highest design standards.</p>
    </div>
    {/* card 1 end */}

    {/* card 2 */}
    <div className='w-[23rem] h-[10rem] text-start flex flex-col gap-[1rem]'>
        <div className='flex items-center gap-[1rem]'>
            <div className='text-4xl'><IoManSharp /></div>
            <p className='font-bold text-2xl font-mono'>Generate more users or waitlist signups</p>
        </div>
        <p className='text-gray-500'>When your product evolves, it can be hard to keep your website up-to-date whilst maintaining the highest design standards.</p>
    </div>
    {/* card 2 end */}

    {/* card 3 */}
    <div className='w-[20rem] h-[10rem] text-start flex flex-col gap-[1rem]'>
        <div className='flex items-center gap-[1rem]'>
            <div className='text-4xl'><IoIosFlash /></div>
            <p className='font-bold text-2xl font-mono'>Let your site  grow with your product</p>
        </div>
        <p className='text-gray-500'>When your product evolves, it can be hard to keep your website up-to-date whilst maintaining the highest design standards.</p>
    </div>
    {/* card 3 end */}

</div>
</div>

{/* Three cards end PART 2*/}

{/* no Framer start  */}

  <div className='px-[6vw] xl:px-[14vw] py-[20vh]   '>
    <div className='flex flex-col text-start gap-[2rem]'>

        <p className='text-4xl text-bold font-mono '>No Webflow, no Framer, <br/>but real Next.js development</p>

        <p>Yep. Low code website builders might be great for getting a landing page up quickly.<br/>
         But we believe that <span className='text-bold'>in the long run, nothing beats a modern frontend stack.</span> It <br/>
         allows full control over design and animations, as well as providing a solid base to <br/>
          fully integrate services like payments, content, search, booking and many more.</p>

          <div className='flex flex-col lg:flex-row gap-[2rem] justify-between items-start mt-[3rem]'>
            <img src={next} className='w-[8rem]' />
            <img src={radix} className='w-[8rem]' />
            <img src={motion} className='w-[8rem]' />
            <img src={tailwind} className='w-[12rem]' />
            <img src={headless} className='w-[10rem]' />
          </div>


    </div>


    </div>
{/* No framer end */}

{/* recent work pics  */}

        <div className='px-[6vw] xl:px-[14vw]    '>

            <div className='flex flex-col lg:flex-row justify-between gap-[3rem]'>

            <img src={review} className='w-[35%] hidden lg:block'/>

            <div className='flex flex-col gap-[2rem] justify-center text-start items-start'>
                <p className='text-5xl text-bold font-mono'>Recent <br/> work</p>
                <p>This is some of our latest design <br/>and/or development work.</p>
                <button className='bg-blue-500 text-white px-[1rem] py-[0.5rem] rounded-full'>See More </button>
            </div>

            
            <img src={review2} className='w-[80%] lg:w-[35%]'/>
            
            </div>
            
        </div>
{/* recent work ends */}

{/* pricing section start */}

        <div className='px-[6vw] xl:px-[14vw] mt-[5rem] mb-[4rem] '>
            <div className='flex justify-between flex-col lg:flex-row gap-[3rem]'>
                {/* pricing 1 */}
                <div className='border flex flex-col items-start gap-[1.4rem] text-start border rounded-3xl w-[25rem] h-auto py-[2rem] px-[3rem]'>

                <p className='text-4xl text-bold font-mono'>Design <br/> Only</p>
                <p className='text-gray-500'>Get everything you need for a Next- <br/>Level SaaS Website.</p>
                <p className='text-bold text-4xl font-medium'> € 2995 <span className='text-sm font-light'>per month</span></p>

                <div className='flex flex-col gap-[1rem] text-gray-500'>
                    <p className='flex items-center gap-[0.5rem]'><TiTick />Unlimited design requests</p>
                    <p className='flex items-center gap-[0.5rem]'><TiTick />One active request</p>
                    <p className='flex items-center gap-[0.5rem]'><TiTick />48h average return time</p>
                    <p className='flex items-center gap-[0.5rem]'><TiTick />Unlimited team members</p>
                    <p className='flex items-center gap-[0.5rem]'><TiTick />Easy credit card payments</p>
                </div>
                <button className='border px-[1rem] py-[0.5rem] rounded-full'>See More </button>

                </div>
                {/* pricing 1 end */}

                {/* pricing 2 */}
                <div className=' border-y-4 border-blue-500 flex flex-col items-start gap-[1.4rem] text-start border rounded-3xl w-[25rem] h-auto py-[2rem] px-[3rem]'>

                <p className='text-4xl text-bold font-mono'>Design & <br/> Development</p>
                <p className='text-gray-500'>Get everything you need for a Next- <br/>Level SaaS Website.</p>
                <p className='text-bold text-4xl font-medium'> € 4995 <span className='text-sm font-light'>per month</span></p>

                <div className='flex flex-col gap-[1rem] text-gray-500'>
                    <p className='flex items-center gap-[0.5rem] '><TiTick />Unlimited design requests</p>
                    <p className='flex items-center gap-[0.5rem]'><TiTick />One active request</p>
                    <p className='flex items-center gap-[0.5rem]'><TiTick />48h average return time</p>
                    <p className='flex items-center gap-[0.5rem]'><TiTick />Unlimited team members</p>
                    <p className='flex items-center gap-[0.5rem]'><TiTick />Easy credit card payments</p>
                </div>
                <button className='border px-[1rem] py-[0.5rem] rounded-full bg-blue-500 text-white'>See More </button>

                </div>
                {/* pricing 2 end */}

                 {/* pricing 3 */}
                <div className=' border flex flex-col items-start gap-[1.4rem] text-start border rounded-3xl w-[25rem] h-auto py-[2rem] px-[3rem]'>

                <p className='text-4xl text-bold font-mono'>Not sure if this is  right for you?</p>
                <p className='text-gray-500'>We offer premium services that aren't affordable for everyone. If you're not sure wether our service is the right fit for your company or product, feel free to schedule a call with our founder Lukas.</p>
            
                <button className='border px-[1rem] py-[0.5rem] rounded-full'>Schedule a Call </button>

                </div>
                {/* pricing 3 end */}

            </div>

        </div>


    </>

  )
}

export default Home;
