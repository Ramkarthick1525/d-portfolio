import React from 'react';
import html from '../assets/HTML.png';
import css from '../assets/CSS3_logo.svg.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/REACT.png';
import tailwind from '../assets/TAILWIND.png';
import github from '../assets/GITHUB.png';

const Skills = () => {
  const images = [
    {
      id: 1,
      src: "https://images.edrawsoft.com/images2020/Amazon-EC2.jpg",
      title: 'Ec2',

      style: 'shadow-orange-500',
    },
    {
      id: 2,

      src: "https://tse3.mm.bing.net/th/id/OIP.A2VFVkHRkAlCodVmYTnpawHaJK?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: 'S3',
      style: 'shadow-red-500',
    },
    {
      id: 3,
      src: "https://images.edrawsoft.com/images2020/icon/aws-lambda.jpg",
      title: 'Lambda',

      style: 'shadow-yellow-500',
    },
    {
      id: 4,

      src: "https://thfvnext.bing.com/th/id/OIP.MYxy8_mzUocvapusPwmmKAAAAA?w=142&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
      title: 'RDS',

      style: 'shadow-blue-500',
    },
    {
      id: 5,

      src: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      title: 'Git',
      style: 'shadow-orange-500',
    },
    {
      id: 6,
      src: "https://cdn.worldvectorlogo.com/logos/docker.svg",
      title: 'Docker',
      style: 'shadow-sky-500',
    },
    {
      id: 7,
      src: "https://www.liblogo.com/img-logo/je8057fcc9-jenkins-logo-file-jenkins-logo-svg-wikimedia-commons.png",
      title: 'Jenkins',
      style: 'shadow-gray-400',
    },
    {
      id: 8,
      src: "https://techcommunity.microsoft.com/t5/s/gxcuf89792/images/bS0zMzU3NjUzLTM3MDgxMGlCRjVFN0U0NURDRTgxMzc3?revision=11",
      title: 'Terraform',
      style: 'shadow-purple-400',
    },

  ];

  return (
    <div
      name='skills'

      className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen'

    >
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
            Skills
          </p>

          <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
          {images.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style} flex flex-col items-center`}
            >
              <img
                src={src}
                alt={title}
                className='w-20 h-20 object-contain'
              />

              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
