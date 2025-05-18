// Navbar
export const navLinks = [
  { name: "Home", link: "/" },
  { name: "Skills", link: "/#skills" },
  { name: "Works", link: "/#projects" },
  { name: "Contact", link: "/#contact" }
];

// Hero
export const HERO_CONTENT = {
  greeting: "Hello! I’m Muhammad Wasiq.",
  titleLine1: "Crafting seamless",
  titleLine2: "experiences across",
  highlight: "digital platforms",
  description:
    "I'm a software engineer passionate about building intuitive, high-performance applications that deliver real impact. I enjoy turning ideas into reliable and user-centered solutions across mobile, web, and beyond.",
  cta: "Get in Touch",
  downloadCta: "Download CV"
};

// Projects
export const projectsHeading = "Some of my Projects"

// Contact Details
export const CONTACT_DETAILS = {
  email: "wasiq.nisar11@gmail.com",
  phone: "+92 302 4332426",
  location: "Lahore, Pakistan",
  linkedin: "https://www.linkedin.com/in/muhammad-wasiq-nisar-ahmad-a2b908236",
  github: "https://github.com/wasiq-nisar",
};

// SKILLS
import { Smartphone, Globe, Code, Server, Layout, GitBranch, Zap } from "lucide-react"
export const SKILLS = [
  {
    icon: Smartphone,
    title: "iOS Development",
    skills: ["Swift", "SwiftUI", "UIKit", "Core Data", "Realm"]
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: ["MongoDB", "Express", "React", "Node.js", "Redux", "Tailwind CSS"]
  },
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Swift", "Objective-C", "React", "Node", "Express", "JavaScript", "HTML/CSS"]
  },
  {
    icon: Server,
    title: "Backend & APIs",
    skills: ["SQL", "MongoDB", "RESTful APIs", "JSON", "API Integration", "Firebase"]
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    skills: ["UI Implementation", "Responsive Design", "Animation", "User Experience"]
  },
  {
    icon: GitBranch,
    title: "Version Control",
    skills: ["Git", "GitHub", "Trunk Based Development", "CI/CD"]
  },
  {
    icon: Zap,
    title: "Performance",
    skills: ["Debugging", "Performance Optimization", "Memory Management", "Code Review"]
  }
];

// FEATURED_PROJECTS
import projectPlaceholder from "./assets/projectPlaceholder.png"
import JeenyDriverImg from "./assets/JeenyDriver.png";
import JeenyRiderImg from "./assets/JeenyPassenger.png";

export const FEATURED_PROJECTS = [
  {
    title: "Jeeny Driver",
    description:
      "A travel application facilitating earning opportunities for drivers in Saudi Arabia and Jordan.",
    image: JeenyDriverImg,
    technologies: ["Swift", "UIKit", "SwiftUI", "RestAPI"],
  },
  {
    title: "Jeeny - Book Affordable Rides",
    description:
      "A ride-hailing app designed for customers in Saudi Arabia and Jordan to book affordable and convenient rides with ease.",
    image: JeenyRiderImg,
    technologies: ["Swift", "UIKit", "SwiftUI", "RestAPI"],
  }
  ,
  {
    title: "Phone Cleaner: Wipe Master",
    description:
      "A utility app that helps users free up storage space by removing duplicate photos and unwanted files from their iOS devices.",
    image: projectPlaceholder,
    technologies: ["Swift", "UIKit", "Core Data", "File Manager"],
  },
  {
    title: "Photo Vault",
    description:
      "A secure solution for protecting sensitive photos and videos on iOS devices.",
    image: projectPlaceholder,
    technologies: ["Swift", "UIKit", "Core Data", "File Manager"],
  },
];
