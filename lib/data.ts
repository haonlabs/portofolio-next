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
    description: "Project Movie menggunakan API dari TMDB",
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
    description: "Aplikasi Chatting",
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
    title: "PT TELEMATIKA ENERGI NUSANTARA",
    location: "Mobile Developer - Full-time",
    description:
      "● Developed and maintained the comprehensive finance ecosystem, ship unloading container, including the registration portal, user dashboard, and payment gateway, tracking system. (Flutter, GCP , Firebase)\n ● Overhauled the frontend incident management process by integrating Firebase Crashlytics alerts with the app, implementing SOPs for issue resolution, resulting in improved response times, enhanced system reliability. (Firebase Crashlytics & Analytics)\n ● Implemented and enforced standardized coding styles across the frontend team, improving code readability and maintainability. (Flutter Linter)\n ●  Implemented Machine Learning system to detect vehicle license plates and read the numbers. (TensorFlow Lite)",
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
