import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='md:pb-8 '>

          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-20'>

          ⚡ I have completed my B.Sc in Mathematics at NMSS Vellaichamy Nadar College, Madurai, and I am an aspiring Cloud & DevOps Engineer.
          <br />
          <br />
          ⚡ I have hands-on experience with AWS services such as EC2, S3, Lambda, VPC, RDS, CloudFront, and DynamoDB, as well as DevOps tools like Docker, Git, Jenkins, and Terraform.
        </p>
        <br />
        <p className='text-xl'>
         ⚡ My passion lies in building CI/CD pipelines and automating workflows to enhance scalability, efficiency, and reliability in cloud environments. <br />
          <br />
          ⚡ I actively grow my professional presence by sharing insights on LinkedIn every three days, fostering valuable industry connections and expanding my reach.
           <br />
           <br />
           ⚡ I actively grow my professional presence by sharing insights on LinkedIn every three days, fostering valuable industry connections and expanding my reach.

        </p>
      </div>
    </div>
  );
};

export default About;
