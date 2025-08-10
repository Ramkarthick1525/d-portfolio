import React from 'react';
import { jsProjectData, reactProject } from '../constant/projectData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div

      name='projects'
      className='bg-gradient-to-b from-black to-gray-800  w-full text-white pt-52 md:py-0 md:h-screen'

    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>

            Projects

          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>


        <div className='grid mb-7 sm:grid-cols-2 md:ml-96 sm:px-0 '>

          {reactProject.map(({ id, src, url, code }) => (
            <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
              <img
                src={src}
                alt='project'


                className='rounded-lg duration-200 hover:scale-105'
              />
              <div className='flex items-center justify-center'>
                <a
                  className=' px-6 py-3 m-4 duration-200 hover:scale-105 '

                  href={url}
                  target='_blank'
                  rel='noreferrer'
                >
                  Article

                </a>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Portfolio;
