import React from 'react'
import AboutImg from "../../assets/Boy about.webp";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 
    md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
        <h2 className='ext-2xl md:text-4xl font-bold'>About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 ml-[-20px]" src={AboutImg} alt="About img" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Frontend Developer skilled in building responsive and interactive web applications
                  using React.js. Passionate about creating seamless user experiences and writing
                  clean, efficient code.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Database Developer specializing in designing, optimizing, and managing scalable
                  database systems. Proficient in SQL, NoSQL, and performance tuning to ensure efficient
                  data handling and system performance.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Backend Developer specializing in building and maintaining robust server-side applications
                  using backend languages such as Node.js, Python, and Java. Experienced in API development,
                  database management, and optimizing system performance.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About