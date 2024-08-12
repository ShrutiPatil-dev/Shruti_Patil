import P1 from "./HungryHub.png";
import P2 from "./URL.png";
import P3 from "./TODO.png";
import P4 from "./AK.png";

export const projects = [
  {
    title: "Food Delivery App",
    image: P1,
    description:
      "Hungry Hub is a robust food delivery application built using the MERN stack, offering seamless online ordering with a comprehensive set of features tailored for both customers and administrators.",
    features: [
      "Admin Panel: Efficient management interface for overseeing orders, customers, and menu items.",
      "Functional Cart: Smooth shopping cart experience allowing users to add, remove, and modify their orders.",
      "Authentication and Authorization: Secure login and role-based access control ensuring data privacy and system integrity.",
      "Food Categories: Organized menu with categorized food options for easy navigation.",
      "Integrated Payment Gateway: Seamless payment processing to complete transactions securely online.",
    ],
    tech: ["ReactJS", "Express", "NodeJS", "MongoDB"],
    url: "https://www.github.com/ashkankhan786/Tomato",
  },
  {
    title: "URL Shortener",
    image: P2,
    description:
      "The URL Shortener project represents a robust web application developed using Node.js and Express.js for server-side rendering with EJS templates. This innovative tool enables users to efficiently convert lengthy URLs into concise, shareable short IDs.",
    features: [
      "Efficient URL Shortening: Transforms complex URLs into succinct short IDs for streamlined sharing and management.",
      "Secure MongoDB Integration: Safely stores original URLs and their corresponding short IDs, ensuring data integrity and security.",
      "Comprehensive Analytics: Provides detailed analytics on URL usage, including the number of clicks per short ID, facilitating informed decision-making.",
      "Robust Authentication: Implements robust authentication mechanisms to safeguard user data and manage access control effectively.",
    ],
    tech: ["NodeJS", "Express", "MongoDB", "EJS"],
    url: "https://www.github.com/ashkankhan786/URL-Shortener",
  },
  {
    title: "Todo App",
    image: P3,
    description:
      "The Todo app is a frontend application built with React, leveraging Context API for efficient state management. This lightweight task management tool allows users to add, edit, and delete tasks dynamically within a single-page interface.",
    features: [
      "Task Management: Create, edit, and delete tasks seamlessly.",
      "Context API: Utilizes React's Context API for state management.",
    ],
    tech: ["HTML", "CSS", "Javascript", "ReactJS"],
    url: "https://www.github.com/ashkankhan786/ToDo-App",
  },
  {
    title: "Portfolio Website",
    image: P4,
    description:
      " This portfolio website showcases my skills, projects, and professional journey as a full-stack developer. It is designed to be a central hub where potential clients and employers can learn more about me and my work.",
    features: [
      "Responsive Design: Ensures a seamless experience across all devices.",
      "Interactive Elements: Includes interactive project showcases and skill visualizations.",
      "Animations: Features extensive animations to enhance user engagement and provide a dynamic browsing experience.",
    ],
    tech: ["ReactJS", "TailwindCSS", "Framer Motion"],
    url: "https://www.github.com/ashkankhan786/Portfolio",
  },
];
