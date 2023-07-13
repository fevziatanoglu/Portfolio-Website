import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

import { AiFillGithub, AiFillLinkedin, AiOutlineDown } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
export const HeroSection = () => {
    return (
        <section className='flex flex-col' id="home">

            <div className='flex md:flex-row flex-col'>

                {/* img container */}
                <div className='img-container rounded-full flex justify-center items-center overflow-hidden'>
                    <Image src="/me.png" height={300} width={300} alt={'me'} />
                </div>

                <div className="flex flex-col justify-center">
                    <h2 className=' text-lg font-semibold text-center'>Hello I&#39;m <span className='md:text-2xl text-xl font-extrabold'>Fevzi</span> , I&#39;m a</h2>
                    <h1 className='md:text-7xl text-3xl text-center font-extrabold'>Full Stack Developer</h1>

                    <div className='md:px-20 md:my-10 my-5   flex justify-around items-center font-semibold'>
                        <a className='social-link flex flex-row justify-center items-center gap-1' target='_blank' href="https://github.com/fevziatanoglu"><AiFillGithub size={30} /> Github</a>
                        <a className='social-link flex flex-row justify-center items-center gap-1' target='_blank' href=""><AiFillLinkedin size={30} /> Linkedn</a>
                        <a className='social-link flex flex-row justify-center items-center gap-1' target='_blank' href='https://mail.google.com/mail/?view=cm&to=fevziatan2@gmail.com'><BiLogoGmail size={30} /> Gmail</a>
                    </div>
                </div>

            </div>

            <div className=' w-full mt-24 flex  justify-center'>
                {/* className='flex flex-col items-center ' */}
                <a href="#about" className='flex flex-col items-center'>
                    <div className='text-sm'>learn more</div>
                    <AiOutlineDown className='bounce' size={30} />
                </a>
            </div>

        </section>
    )
}
