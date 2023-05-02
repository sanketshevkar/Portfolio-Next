import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  indeed,
  hackerrank,
  gsoc,
  zetahacks,
  hackrx,
  mlh,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/sanketshevkar/",
  },
  {
    id: "gitHub",
    title: "GitHub",
    url: "https://github.com/sanketshevkar",
  },
  {
    id: "resume",
    title: "Resume",
    url: "https://drive.google.com/file/d/1xV17nKiSNpi7Zs9pGnJAuGpeuklaQbfe/view?usp=sharing",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate UX Developer",
    company_name: "Indeed",
    icon: indeed,
    iconBg: "#383E56",
    date: "July 2022 - March 2023",
    points: [
      "Led frontend development of a new product enabling employers to track and manage jobseekers’ phone calls.",
      "Co-ordinated with UX designers and PM to ensure seamless product delivery and seamless UX.",
      "Launched a WhatsApp chatbot for the Indian market with 19,000 users in 30 days. Drove Product and GTM.",
      "Conducted user research and participated in design thinking sessions to inform development decisions.",
      "Recruited from Indeed’s University program as the first UX Developer hired in India.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "HackerRank",
    icon: hackerrank,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - June 2022",
    points: [
      "Developed Reports product for recruitment tests, which helps employers judge the quality of candidates.",
      "Developed a code diff generator to help employers check for plagiarism.",
      "Selected among 20 interns out of 25,000 applicants.",
    ],
  },
  {
    title: "Student Developer at Accord Project",
    company_name: "Google Summer of Code",
    icon: gsoc,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Implementing digital cryptography signatures on Smart Legal Contracts and Templates.",
      "Contributing to Cicero package of the Accord Project Stack which is a NodeJS based module used to implement Smart Legal Contracts/Templates.",
      "The signing process is implemented using Node-Forge and NodeJS's Crypto module. Tests for the methods are being implemented using Chai-Mocha.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Zeta Hacks Winner",
    description:
      "1st out of 6500 teams. Led a team of 4 devs. Developed a money saver app using React Native and Spring Boot",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "spring boot",
        color: "pink-text-gradient",
      },
    ],
    image: zetahacks,
    source_code_link: "https://github.com/sanketshevkar/zh2hackathon_tier-4",
  },
  {
    name: "HackRx Runner Up",
    description:
      "2nd out of 2500 teams. Led a team of 5 devs. Used React Native and worked behind the bridge to develop document scannner.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
    ],
    image: hackrx,
    source_code_link: "https://github.com/sanketshevkar/ps7_tier-4/",
  },
  {
    name: "MLH HackOn RunnerUp",
    description:
      "3rd out of 800 teams. Led a team of 4 devs. Used React, WebRTC and real-time voice analyzer to rate WebRTC call.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "webRTC",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: mlh,
    source_code_link: "https://github.com/sanketshevkar/Debately",
  },
];

export { services, technologies, experiences, testimonials, projects };
