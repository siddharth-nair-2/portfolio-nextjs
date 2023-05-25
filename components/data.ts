import { arenaImg, autograderImg, footyImg } from '@/public/assets'
import { StaticImageData } from 'next/image'

type jobType = {
  id: number
  title: string
  company: string
  date: string
  points: string[]
}

const jobInfo: jobType[] = [
  {
    id: 1,
    title: 'Freelancer',
    company: 'UserTesting',
    date: 'Aug 2020 - Jan 2023',
    points: [
      'Conducted 175+ usability testing sessions for digital products, analyzing design and user experience aspects to provide clients with valuable insights.',
      'Utilized various tools and techniques to capture real-time user interactions via video and audio recordings, enabling clients to gain firsthand understanding of user behavior.',
      'Delivered comprehensive feedback to clients on usability issues and improvements, contributing to the success of their digital products.',
    ],
  },
  {
    id: 2,
    title: 'Web Developer',
    company: 'FlowUp',
    date: 'May 2022 - Aug 2022',
    points: [
      'Successfully managed the migration of a legacy PHP codebase to React and Node.js, resulting in improved performance and optimization. This boosted agent satisfaction by 43%.',
      'Developed and deployed a full-stack web application utilizing React, Node.js, and MySQL, enabling users to seamlessly manage separate wallets for each cryptocurrency.',
      'Applied advanced matching conditions for empty agents, resulting in reduced waiting times and faster customer response, ultimately optimizing overall service delivery.',
    ],
  },
  {
    id: 3,
    title: 'Staff Member',
    company: 'Dairy Queen',
    date: 'Apr 2021 - Dec 2021',
    points: [
      'Exemplified quick thinking and decision making in a fast-paced environment.',
      'Provided exceptional customer service through effective communication and complaint resolution.',
      'Calculated prices accurately using calculators, cash registers or optical price scanners.',
      'Collaborated effectively with team members to ensure efficient work processes.',
    ],
  },
  {
    id: 4,
    title: 'Graphics Head',
    company: 'National Youth Summit',
    date: 'Mar 2017 - May 2017',
    points: [
      'Managed and directed the graphics division for the National Youth Summit event, leading a team of 4.',
      'Successfully designed over 700 high-quality graphics to tight timelines whilst continually refining designs based on feedback from the organizer.',
      'Achieved a 39% increase in social media engagement as a result of the impactful and effective graphics produced.',
    ],
  },
]

type projectType = {
  id: number
  title: string
  description: string
  techStack: string[]
  github: string
  demo: string
  image: StaticImageData
}

const projectInfo: projectType[] = [
  {
    id: 1,
    title: 'AutoGrader',
    description:
      'AutoGrader is a tool designed to simplify the process of grading programming assignments for instructors, while providing students with a user-friendly in-browser Integrated Development Environment.',
    techStack: [
      'Java',
      'React',
      'Node.js',
      'MongoDB',
      'Spring Boot',
      'Google Cloud',
    ],
    github: 'https://github.com/siddharth-nair-2/AutoGrader-FinalBuild',
    demo: 'https://auto-grader.cyclic.app/',
    image: autograderImg,
  },
  {
    id: 2,
    title: 'Arena Chat App',
    description:
      'Developed a live chat app using React and Express.js, featuring a secure login/signup system, real-time messaging with socket.io, and responsive design for seamless use across browsers.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Axios', 'Heroku'],
    github: 'https://github.com/siddharth-nair-2/Arena-chat-app',
    demo: 'https://temp-arena-chat.herokuapp.com/',
    image: arenaImg,
  },
  {
    id: 3,
    title: 'FootyShop',
    description:
      'A dynamic e-commerce website created with React, Material-UI, Stripe, and Redux for a seamless user experience and secure payment processing, along with with intuitive navigation and responsive design.',
    techStack: ['React', 'Redux', 'Material-UI', 'Stripe', 'Axios', 'Heroku'],
    github: 'https://github.com/siddharth-nair-2/Ecommerce-Project',
    demo: 'https://delightful-cascaron-a4fa91.netlify.app/',
    image: footyImg,
  },
]

export { jobInfo, projectInfo }
