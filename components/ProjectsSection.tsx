import Image from 'next/image'
import React from 'react'

const projects = [
  {
    title: "test",
    decs: "testtes ttesttesttesttest testtesttesttes ttesttesttesttest testtesttest testtesttesttestamk",
    image: "/test",
    github: "test",
    demo: "test",
    tools: ["test", "test"]
  },

  {
    title: "test",
    decs: "test",
    image: "/test",
    github: "test",
    demo: "test",
    tools: ["test", "test"]
  },

]

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <div>
        {/* title */}
        <div className=''>
          <h1 className='text-5xl font-extrabold text-center'>My Projects</h1>
          <hr className='w-10 h-1 mx-auto my-4 bg-teal-500 rounded'></hr>
        </div>

        {/* projects container */}
        <div className='flex flex-col space-y-10'>
          {/* project */}
          {projects.map((project, index) => {
            // project div
            return <div key={index}>
              <div className='flex flex-col md:flex-row project-container rounded shadow-2xl '>
                {/* img div */}

                <div className='md:w-1/2'>
                  <Image src={project.image} width={300} height={300} alt='project-img' />
                </div>

                {/* texts div */}
                <div className='flex flex-col items-center justify-center gap-5 p-2 md:w-1/2 '>
                  <h3 className='text-3xl font-semibold'>{project.title}</h3>
                  <p className='text-sm text-slate-500'>{project.decs}</p>

                  <div className='flex flex-row space-x-10'>
                    <a href={project.github} target='_blank' className='project-link'>Github</a>
                    <a href={project.demo} target='_blank' className='project-link '>Demo</a> </div>
                </div>

              </div>
            </div>
          })}
        </div>

      </div>
    </section>
  )
}
