import Image from 'next/image'
import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'

const skills = [
    { skill: "React.js" },
    { skill: "Next.js" },
    { skill: "Angular" },
    { skill: "Node.js" },
    { skill: "Tailwind CSS" },
    { skill: "Bootstrap" },
    { skill: "CSS" },
    { skill: "Javascript" },
    { skill: "HTML" }
]

function AboutSection() {
    return (
        <section id='about' className='flex flex-col justify-between items-center pt-20 md:pt-50'>
            <div className='flex flex-col  justify-center items-stretch  md:space-y-10'>

                {/* title */}
                <div className=''>
                    <h1 className='text-5xl font-extrabold text-center'>About Me</h1>
                    <hr className='w-10 h-1 mx-auto my-4 bg-teal-500 rounded'></hr>
                </div>

                {/* content div */}
                <div className='flex flex-col md:flex-row  justify-between p-5  gap-10 '>

                    {/* about me  */}
                    <div className='light-text md:w-1/2 space-y-5 '>

                        <h1 className='text-3xl font-bold'>Get Know Me!</h1>

                        <p>Hello I&#39;m <span className='font-extrabold'>Fevzi</span>, I &#39;m <span className='font-extrabold'>Computer Engineering</span> student at Bandirma 17 Eylül University.</p>

                        <p>I am  <span className='font-extrabold'>willed</span>, <span className='font-extrabold'>determined</span>  and <span className='font-extrabold'>love to learn</span>. </p>

                        <p>I&#39;m passionate about <span className='font-extrabold'>Web Development</span>. I develop application by mainly using <span className='font-extrabold'>React.js </span>, <span className='font-extrabold'>Next.js</span> and <span className='font-extrabold'>Angular</span>. </p>


                    </div>

                    {/* skilss */}
                    <div className=' md:w-1/2 space-y-5'>
                        <h1 className='text-3xl font-bold'>My Skilss</h1>
                        <div className='skills-container flex  flex-wrap flex-row  justify-start items-center gap-x-3 gap-y-3 text-start '>
                            {skills.map((item, index) => {
                                return <p className='skill-container py-2 px-5' key={index}>{item.skill}</p>
                            })}

                        </div>
                    </div>


                    <div className='hidden md:block'>
                        <Image src="/aboutme.png" width={300} height={300} alt='aboutme' />
                    </div>

                </div>


                <div className=' w-full md:mt-24 flex  justify-center'>
                    {/* className='flex flex-col items-center ' */}
                    <a href="#projects" className='flex flex-col items-center'>
                        <div className='text-sm'>check my project</div>
                        <AiOutlineDown className='bounce' size={30} />
                    </a>
                </div>

            </div>




        </section>
    )
}

export default AboutSection