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
    title: "Google Play Developer Page",
    description:
      "Our apps combine intuitive design with powerful functionality. We prioritize user privacy and follow best development practices to ensure secure and reliable performance. Join and discover how our apps can enhance your productivity and make your daily life easier.",
    screenshots: ["images/project/google_play/google_play_store_page.png"],
    image: "images/project/google_play/google_play_store_page.png",
    demoUrl: null,
    features: ["AR technology", "3D model", "Machine Learning"],
    languages: ["Google Play Store"],
  },
  {
    title: "CATS",
    description:
      "A comprehensive app to assist debt collectors in managing their daily collection activities. The app integrates real-time location tracking, chatting features and machine learning (object detection and text recognition) to streamline the debt collection process.",
    screenshots: [
      "images/project/cats/cats_0.png",
      "images/project/cats/cats_1.png",
      "images/project/cats/cats_2.png",
      "images/project/cats/cats_3.png",
      "images/project/cats/cats_4.png",
      "images/project/cats/cats_5.png",
      "images/project/cats/cats_6.png",
      "images/project/cats/cats_7.png",
    ],
    image: "images/project/cats/cats_thumbnail.png",
    demoUrl: null,
    features: [
      "Using Getx State Management",
      "Using MVVM Design Pattern",
      "Features Google Maps Location",
      "Features Chat functionality",
      "Features Machine Learning",
      "Implemented Security with Appsuit",
    ],
    languages: [
      "Flutter",
      "Firebase",
      "TFlite",
      "Google Cloud Platform",
      "Appsuit Security",
    ],
  },
  {
    title: "HIONEPEDIA",
    description:
      "Hionepedia is a rare animal learning application specifically for elementary school children using Augmented Reality technology.",
    screenshots: ["images/project/hionepedia/hionepedia_detail.png"],
    image: "images/project/hionepedia/hionepedia_thumbnail.png",
    demoUrl: null,
    features: [
      "Using Provider State Management",
      "Using MVVM Design Pattern",
      "Using Hive Storage",
      "Features 3D Models",
      "Features Augmented Reality",
      "Features Animal Sounds",
    ],
    languages: ["Flutter", "Codeigneter 4"],
  },
  {
    title: "LINKMEUP",
    description:
      "LinkMeUp is an online video meeting application that offers unlimited time.",
    screenshots: ["images/project/linkmeup/linkmeup_detail.png"],
    image: "images/project/linkmeup/linkmeup_thumbnail.png",
    demoUrl: null,
    features: ["Firebase Auth", "Firebase Storage", "Cloud Firestore"],
    languages: ["Flutter", "Firebase"],
  },
  {
    title: "MAAWNONTON",
    description: "Maawnonton is an app to search for movies and tv shows",
    screenshots: ["images/project/maawnonton/maawnonton_detail.png"],
    image: "images/project/maawnonton/maawnonton_thumbnail.png",
    demoUrl: null,
    features: [
      "Implementing Provider state management",
      "Implementing MVVM design pattern",
      "Includes search feature",
    ],
    languages: ["Flutter"],
  },
  {
    title: "CONVEYENCE",
    description: "Simple chatting application with firebase",
    screenshots: [
      "images/project/conveyence/conveyence_1.png",
      "images/project/conveyence/conveyence_2.gif",
    ],
    image: "images/project/conveyence/conveyence_thumbnail.png",
    demoUrl: null,
    features: [
      "Using Getx State Management",
      "Using Getx Design Pattern",
      "Using GetStorage",
      "Features chat functionality",
      "Firebase Auth",
      "Firebase Storage",
      "Cloud Firestore",
    ],
    languages: ["Flutter", "Firebase"],
  },
  {
    title: "TIKTOK UI",
    description: "Social Media App Slicing UI",
    screenshots: ["images/project/tiktok_ui/tiktok_ui_detail.png"],
    image: "images/project/tiktok_ui/tiktok_ui_thumbnail.png",
    demoUrl: null,
    features: ["Slicing ui from figma"],
    languages: ["Flutter"],
  },
] as const;

export const skilss = [
  {
    id: 1,
    imgUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/kotlin-colored.svg",
  },
  {
    id: 2,
    imgUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flutter-colored.svg",
  },
  {
    id: 3,
    imgUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase-colored.svg",
  },
  {
    id: 4,
    imgUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg",
  },
  {
    id: 5,
    imgUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg",
  },
  {
    id: 6,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    id: 7,
    imgUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
  },
  {
    id: 8,
    imgUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
  },
  {
    id: 9,
    imgUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
  },
  {
    id: 10,
    imgUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
  },
] as const;

export const experiencesData = [
  {
    title: "IDCAMP SCHOLARSHIP 2024",
    location: "Android Developer - Scholarship ",
    description:
      "● Responsible for brainstorming, developing, testing, collaborating, code reviewing, debugging, and deploying frontend features. \n ● Developed an app with native (kotlin) with xml and jetpack compose ui. \n ● Implemented front-end engineering best practices and patterns and presented them to mentors.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2024 – Present",
  },
  {
    title: "PT TELEMATIKA ENERGI NUSANTARA",
    location: "Mobile Developer - Full-time",
    description:
      "● Developed and maintained the comprehensive finance ecosystem, ship unloading container, including the registration portal, user dashboard, and payment gateway, tracking system. \n ● Overhauled the frontend incident management process by integrating Firebase Crashlytics alerts with the app, implementing SOPs for issue resolution, resulting in improved response times, enhanced system reliability. \n ● Implemented and enforced standardized coding styles across the frontend team, improving code readability and maintainability. \n ●  Implemented Machine Learning system to detect vehicle license plates and read the numbers.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2023 – Dec 2024",
  },
  {
    title: "PROGRAM KAMPUS MERDEKA (MBKM)",
    location: "Mobile Developer - Student Activity",
    description:
      "● Responsible for brainstorming, developing, testing, collaborating, code reviewing, debugging, and deploying frontend features. \n ● Ensure the technical feasibility of UI/UX design and define tasks to delegate to others. \n ● Developed a e-commerce with Getx State Management to improve performance and memory leaks. \n ● Implemented front-end engineering best practices and patterns and presented them to mentors. \n ● Configure a reporting and monitoring system for the front end to monitor and improve the app quality. \n ● Created and set up a linter and formatter for the existing frontend codebase to improve consistency.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2022 – Dec 2022",
  },
  {
    title: "IDCAMP SCHOLARSHIP 2022",
    location: "Multiplatform App Developer - Scholarship",
    description:
      "● Responsible for brainstorming, developing, testing, collaborating, code reviewing, debugging, and deploying frontend features. \n ● Developed an app with BLoc State Management to improve performance and memory leaks. \n ● Implemented front-end engineering best practices and patterns and presented them to mentors.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 – Nov 2022",
  },
  {
    title: "TEKNOLOKA",
    location: "Mobile Developer - Part-time",
    description:
      "● Responsible for brainstorming, developing, testing, collaborating, code reviewing, debugging, and deploying frontend features. \n ● Developed and maintained the finance ecosystem and education ecosystem, including the registration portal, user dashboard, and payment gateway, tracking system. \n ● Implemented and enforced standardized coding styles across the frontend team, improving code readability and maintainability.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 – Dec 2022",
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
