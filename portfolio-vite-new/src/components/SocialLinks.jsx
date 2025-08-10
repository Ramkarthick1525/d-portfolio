import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/dhanush-raj-anandan/',

      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/dj2802',

    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=dhanushraj28022007@gmail.com',

    },
    {
      id: 1,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),

      href: 'https://drive.google.com/file/d/1-siDYf4qK9e3vi6bdblHAuQQztr5JSH7/view?usp=drive_link',

      style: 'rounded-br-md',
      download: true,
      rel: 'noreferrer',
    },
  ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300 ' +
              '' +
              style
            }
          >
            <a
              href={href}
              className='flex justify-between items-center w-full text-white'
              download={download}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
