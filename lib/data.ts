import React from "react";
import { CgWorkAlt } from "react-icons/cg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Sistem Informasi Logistik CGN",
    description:
      "The CGN Logistics Information System is a digital platform that integrates inventory management, inventory control, delivery monitoring, and logistics performance analysis to maximize the efficiency of CGN's logistics operations. The system also provides high security and an intuitive user interface.",
    screenshots: [
      "images/project/cekresi/1.png",
      "images/project/cekresi/3.png",
      "images/project/cekresi/4.png",
      "images/project/cekresi/2.png",
      "images/project/cekresi/6.png",
    ],
    image: "images/project/cekresi/1.png",
    tech: [
      "/images/icon/bootstrap.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
      "/images/icon/jquery-vertical.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Inventory Management: Tracks, organizes, and optimizes stock levels for efficient resource allocation.",
      "Inventory Control: Empowers precise oversight with real-time updates on stock movements for accurate decision-making.",
      "Delivery Monitoring: Offers real-time visibility into logistics, enabling proactive responses to ensure timely deliveries.",
      "Performance Analysis: Utilizes powerful analytics to gain insights, identify improvements, and enhance operational efficiency.",
    ],
    languages: ["Laravel 10", "Bootstrap 5", "MYSQL 8.0", "Jquery"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "Bootstrap",
  "Codeigneter",
  "Laravel",
  "React",
  "MYSQL",
  "Git",
  // "Framer Motion",
] as const;

export const skilss = [
  {
    id: 2,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    id: 3,
    imgUrl: "/images/icon/bootstrap.svg",
  },
  {
    id: 8,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  },
  {
    id: 4,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
  {
    id: 5,
    imgUrl: "/images/icon/codeigniter.svg",
  },
  {
    id: 7,
    imgUrl: "/images/icon/mysql.svg",
  },

  {
    id: 9,
    imgUrl: "/images/icon/typescript.svg",
  },
  {
    id: 10,
    imgUrl: "/images/icon/javascript.svg",
  },
  {
    id: 1,
    imgUrl: "/images/icon/jquery-vertical.svg",
  },
  {
    id: 6,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  // {
  //   id: 10,
  //   imgUrl:
  //     "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
  // },
] as const;

export const experiencesData = [
  {
    title: "PT TELEMATIKA ENERGI NUSANTARA",
    location: "Mobile Developer - Full-time",
    description:
      "● Developed and maintained the comprehensive finance ecosystem, ship unloading container, including the registration portal, user dashboard, and payment gateway, tracking system. (Flutter, GCP , Firebase)\n ● Overhauled the frontend incident management process by integrating Firebase Crashlytics alerts with the app, implementing SOPs for issue resolution, resulting in improved response times, enhanced system reliability. (Firebase Crashlytics & Analytics)\n ● Implemented and enforced standardized coding styles across the frontend team, improving code readability and maintainability. (Flutter Linter)\n ● Implemented Machine Learning system to detect vehicle license plates and read the numbers. (TensorFlow Lite)",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2023 – Present",
  },
  {
    title: "PROGRAM KAMPUS MERDEKA (MBKM)",
    location: "Mobile Developer - Student Activity",
    description:
      "● Responsible for brainstorming, developing, testing, collaborating, code reviewing, debugging, and deploying frontend features. (GitHub,CI/CD, Unit Test) \n ● Ensure the technical feasibility of UI/UX design and define tasks to delegate to other engineers. \n ● Developed a e-commerce with Getx State Management to improve performance and memory leaks (Flutter, Getx State Management) \n ● Implemented front-end engineering best practices and patterns and presented them to other engineers. \n ● Configure a reporting and monitoring system for the front end to monitor and improve the website quality. (Firebase Analytics) \n ● Created and set up a linter and formatter for the existing frontend codebase to improve consistency. (Flutter Linter, Prettier)",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2022 – Dec 2022",
  },
  {
    title: "IDCAMP SCHOLARSHIP 2022",
    location: "Mobile Developer - Scholarship",
    description:
      "● Responsible for brainstorming, developing, testing, collaborating, code reviewing, debugging, and deploying frontend features. (GitHub,CI/CD, Unit Test) \n ● Developed an app with BLoc State Management to improve performance and memory leaks. (Flutter, BLoC State Management) \n ● Implemented front-end engineering best practices and patterns and presented them to other engineers.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 – Nov 2022",
  },
  {
    title: "TEKNOLOKA",
    location: "Mobile Developer - Part-time",
    description:
      "● Responsible for brainstorming, developing, testing, collaborating, code reviewing, debugging, and deploying frontend features. (GitHub,CI/CD, Unit Test) \n ● Developed and maintained the finance ecosystem and education ecosystem, including the registration portal, user dashboard, and payment gateway, tracking system. (Flutter, GCP , Firebase) \n ● Implemented and enforced standardized coding styles across the frontend team, improving code readability and maintainability. (Flutter Linter)",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 – Aug 2022",
  },
  {
    title: "PT BLITARIS GLOBAL TEKNOLOGI",
    location: "Frontend Engineer - Internship",
    description:
      "● Learned and practiced frontend engineering with attention to code quality and web performance \n ● Developed and maintained the education ecosystem, including the landing page and admin dashboard.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2022 – Apr 2022",
  },
] as const;
