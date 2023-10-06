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
    chakra,
    MUI,
    git,
    figma,
    meta,
    starbucks,
    carhub,
    shopify,
    Gym,
    weather,
    threejs,
    udemy,
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
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
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
      name: "MUI",
      icon: MUI,
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
      name: "chakra",
      icon: chakra,
    },
  ];
  
  const experiences = [
    {
      title: "JavaScript Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using PlainJS and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Freelance Developer",
      company_name: "Udemy",
      icon: udemy,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Working on the development and upkeep of web applications utilizing React.js and associated technologies.",
        "Engaging with interdisciplinary teams, such as designers, product managers, and fellow developers, to craft top-tier products.",
        "Executing responsive design and verifying compatibility across different browsers.",
        "Taking part in code evaluations and offering valuable input to fellow developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Engaging in the development and upkeep of web applications utilizing React.js and associated technologies.",
        "Working closely with diverse teams encompassing designers, product managers, and fellow developers to craft top-notch products.",
        "Enforcing responsive design and verifying compatibility across various browsers.",
        "Taking part in code reviews and offering valuable feedback to fellow developers, fostering an environment of constructive collaboration.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Creating and sustaining web applications utilizing React.js and associated technologies.",
        "Engaging with interdisciplinary teams, such as designers, product managers, and fellow developers, to produce top-tier products.",
        "Executing adaptive design and verifying compatibility across various browsers.",
        "Engaging in code evaluations and offering valuable input to fellow developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Igor proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Igor does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Igor optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Hub",
      description:
        "Develop a web-based solution enabling users to easily search, book, and oversee car rentals from diverse providers, streamlining transportation arrangements for their needs.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carhub,
      source_code_link: "https://github.com/igorkukric/Car_Showcase-NEXTjs",
    },
    {
      name: "Gym Exercises",
      description:
        "Online platform empowering users to search for diverse and engaging gym exercises, fostering a cycle of motivation, achievement, and joy in their fitness journey.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "MUI",
          color: "pink-text-gradient",
        },
      ],
      image: Gym,
      source_code_link: "https://github.com/igorkukric/Gym-Exercises-APP-REACT",
    },
    {
      name: "Weather APP",
      description:
        "Weather app offers 5-day forecasts for various cities, complete with precise time and dynamically changing images to reflect morning, day, evening, and night conditions.",
      tags: [
        {
          name: "plainJS",
          color: "blue-text-gradient",
        },
        {
          name: "openweather",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/igorkukric/Weather-APP-Five-Days",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };