import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import myPhoto from '../assets/my photo.jpeg';

const Home = () => {
  return (
    <div
      name='home'
      className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'
    >
      <div className=' max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Cloud Architect
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Cloud Engineer passionate about building robust Continuous Integration and Continuous Deployment (CI/CD) applications. Skilled in AWS, Git & GitHub, Jenkins, Terraform, and Docker. Known for problem-solving and strong leadership abilities, with a focus on delivering efficient, scalable solutions.
          </p>
          <div>
            <Link
              to='projects'

              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            >

              Projects

              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-1' />
              </span>
            </Link>
          </div>
        </div>

        <div className='w-1/3 hidden md:inline'>
          <img
            //src={myPhoto}
            alt='my profile'
            className='rounded-2xl mx-auto md:w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
