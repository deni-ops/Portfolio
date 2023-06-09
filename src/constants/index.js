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
    tailwind,
    nodejs,
    postgresql,
    git,
    cPlusPlus,
    vue,
    quasar,
    carrent,
    jobit,
    tripguide,
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
      name: "Vue JS",
      icon: vue,
    },
    {
      name: "Quasar",
      icon: quasar,
    },
    {
      name: "C++",
      icon: cPlusPlus,
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
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "C++ Developer",
      project: "Telemetry extraction from the gauge",
      icon: cPlusPlus,
      iconBg: "#383E56",
      date: "Feb 2021 - June 2021",
      points: [
        "Writing a C++ program to fetch telemetry from the CE102M gauge, e.g. current, voltage, cosf, etc",
        "Adding InfluxDB to store telemetry",
        "Using Chronograf to visualize the produced telemetry",
      ],
    },
    {
      title: "Vue.JS Developer",
      project: "Turing Machine Emulator (SPA)",
      icon: vue,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - June 2022",
      points: [
        "Writing SPA on Vue.JS that emulates Turing Machine with one tape",
        "Parsing the user's input to analyze it for possible syntax errors",
        "Tape visualization, ability to go back and forth to previous and following commands",
        "Implementing responsive design",
      ],
    },
    {
      title: "Quasar (Vue.JS) Developer",
      project: "WeatherApp; Moscow City Hack 2022 (hackathon), AXIOS team; Quasagram",
      icon: quasar,
      iconBg: "#383E56",
      date: "July 2022, Nov 2022, Feb 2022",
      points: [
        "Creating a simple weather SPA, that fetches the data from OpenWeatherApi depending on users' location",
        "Participation in the hackathon: writing a program that visualizes realty for sale, adding export and import of excel file containing such realty",
        "Building Instagram clone called Quasagram with ability to take a photo of yourself, store it in the Firebase Cloud Storage and later view it",
        "Implementing responsive design with cross-browser support for all of these projects",
      ],
    },
    {
      title: "React Developer",
      project: "Portfolio website",
      icon: reactjs,
      iconBg: "#383E56",
      date: "June 2023 - present",
      points: [
        "Creating a portfolio website using React packed with Three.JS, framer-motion and Tailwind",
        "Implementing responsive design and ensuring cross-browser compatibility.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };