import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";

import project1 from "@/assets/project1.webp";
import project01 from "@/assets/project01.webp";
import project2 from "@/assets/project2.webp";
import project02 from "@/assets/project02.webp";
import project3 from "@/assets/project3.webp";
import project03 from "@/assets/project03.webp";

import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
const projects = [
  {
    id: 1,
    title: "Ticket Nest",
    category: "E-Commerce",
    image: project1,
    hoverImage: project01,
    tech: [
      // Frontend Core
      "React",
      "React Router",
      "Tailwind CSS",

      // Backend & Database
      "Node.js",
      "Express.js",
      "MongoDB",

      // Authentication & Cloud
      "Firebase Authentication",
      "Firebase Admin",

      // API & Utilities
      "Axios",
      "Dotenv",
      "CORS",

      // Payment / Other
      "Stripe",

      // Optional / New Important Libraries
      "@tanstack/react-query",
    ],
    description:
      "A full-stack analytics dashboard with real-time data visualization, secure authentication, and seamless payment integration.",
    details:
      "Developed a scalable full-stack analytics dashboard using React and Express, featuring real-time data visualization with interactive charts. Implemented secure authentication and user management using Firebase Admin, along with protected API routes. Integrated Stripe for seamless payment processing and subscription handling. Leveraged React Query for efficient data fetching and caching, and optimized performance for large datasets. Built a responsive and modern UI using Tailwind CSS, DaisyUI, and Framer Motion to enhance user experience. Additionally, incorporated geolocation features with React Leaflet and handled form management efficiently using React Hook Form.",
    projectFeatures: [
      "Scalable full-stack analytics dashboard using React and Express",
      "Real-time data visualization with interactive charts",
      "Secure authentication and user management using Firebase Admin",
      "Protected API routes for enhanced security",
      "Stripe integration for payment processing and subscription handling",
      "Efficient data fetching and caching with React Query",
      "Optimized performance for large datasets",
      "Responsive and modern UI with Tailwind CSS, DaisyUI, and Framer Motion",
      "Geolocation features implemented with React Leaflet",
      "Form management and validation using React Hook Form",
      "Role-based authentication for users, vendors, and admins",
      "Secure ticket booking with integrated payment gateway",
      "Interactive dashboards with event countdowns",
      "Dynamic charts for analytics visualization",
      "Streamlined form validation and management",
      "Performance optimization across frontend and backend",
    ],
    problemsSolved: [
      "Optimized large dataset handling and API performance",
      "Implemented secure authentication and protected routes",
      "Integrated Stripe payment system",
      "Handled real-time data updates efficiently",
      "Improved UI responsiveness and performance",
      "Streamlined form validation and management",
    ],
    learnings: [
      "Full-stack MERN development",
      "API optimization and data caching",
      "Authentication and security",
      "Payment integration with Stripe",
      "Responsive UI design",
      "Form handling and validation",
      "Performance optimization",
    ],
    liveUrl: "https://ticket-nest.netlify.app",
    githubUrlClient: "https://github.com/Salman472/my-eticket-client",
    githubUrlServer: "https://github.com/Salman472/my-eticket-server",
  },
  {
    id: 2,
    title: "Book Haven",
    category: "E-Commerce",
    image: project2,
    hoverImage: project02,
    tech: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Firebase Authentication",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
    ],
    description:
      "Book Haven is a full-stack MERN application that allows users to explore, add, and manage books with a clean and intuitive interface. It features secure authentication, smooth browsing, and interactive user engagement through comments.",

    details:
      "Developed a full-stack MERN application for book management and exploration. Users can browse books, view detailed information, and leave comments on individual books. Implemented secure authentication using Firebase and built a responsive, modern UI using Tailwind CSS, DaisyUI, and Flowbite. Backend APIs were developed using Express and MongoDB to handle CRUD operations efficiently.",

    projectFeatures: [
      "User authentication with Firebase",
      "Browse and explore books بسهولة",
      "Add, update, and delete books",
      "Detailed book view with user comments",
      "Responsive and modern UI design",
      "Smooth animations using Framer Motion",
      "Real-time toast notifications and alerts",
      "Secure API integration with Axios",
    ],

    problemsSolved: [
      "Handled secure authentication and protected routes",
      "Managed complex state and API data efficiently",
      "Optimized UI responsiveness across devices",
      "Implemented comment system with proper data relations",
      "Improved user experience with animations and feedback",
      "Ensured smooth CRUD operations with backend integration",
    ],

    learnings: [
      "Deep understanding of MERN stack architecture",
      "Firebase authentication and user management",
      "REST API design and integration",
      "State management and asynchronous data handling",
      "UI/UX improvement using animation libraries",
      "Working with MongoDB for scalable data storage",
    ],

    liveUrl: "https://the-book-baven.netlify.app",
    githubUrlClient: "https://github.com/Salman472/book-haven-client",
    githubUrlServer: "https://github.com/Salman472/book-haven-server",
  },
  // {
  //   id: 3,
  //   title: "Social Connect",
  //   category: "Full Stack",
  //   image: project3,
  //   hoverImage: project03,
  //   tech: ["React", "Firebase", "Redux"],
  //   description: "Real-time social networking app.",
  //   details:
  //     "Implemented a social platform with authentication, live chat, post sharing, and state management using Redux and Firebase.",
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
];

const filters = [
  "All",
  "E-Commerce",
  "Corporate",
  "Educational",
  "Portfolio",
  "Non-Profit",
];
const ITEMS_PER_PAGE = 3;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const currentProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredProjects]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="My Projects"
          subtitle="A selection of my recent work showcasing full-stack and frontend expertise"
        />

        {/* Filters */}
        <ScrollReveal>
          <div className="flex justify-center gap-3 mb-12 flex-wrap ">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${
                  activeFilter === filter
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <AnimatePresence>
            {currentProjects.length > 0 ? (
              currentProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-background border
                hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-110"
                    />
                    <img
                      src={project.hoverImage}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-md bg-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    {/* links */}
                    <div className="flex items-center gap-2 mt-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg"
                      >
                        <ExternalLink size={16} /> Live
                      </a>

                      <a
                        href={project.githubUrlClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg"
                      >
                        <Github size={16} /> Client
                      </a>

                      <a
                        href={project.githubUrlServer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg"
                      >
                        <Github size={16} /> Server
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
  className="col-span-full flex flex-col items-center justify-center py-24 text-center "
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 20 }}
  transition={{ duration: 0.5 }}
>
  {/* Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-20 w-20 text-primary mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 14l6-6m0 0l-6-6m6 6H3"
    />
  </svg>

  {/* Main message */}
  <h3 className="text-2xl font-semibold mb-2 text-muted-foreground">
    No projects found
  </h3>

  {/* Sub guidance / professional tip */}
  <p className="text-sm text-muted-foreground max-w-xs mb-4">
    We couldn't find any projects under this category. 
    You can try selecting another filter or check back later as I regularly update my portfolio with new projects.
  </p>

  {/* Optional button to reset filter */}
  <button
    onClick={() => setActiveFilter("All")}
    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
  >
    View All Projects
  </button>
</motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-muted rounded-lg disabled:opacity-40"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === page ? "bg-primary text-white" : "bg-muted"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-muted rounded-lg disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-background rounded-xl max-w-2xl w-full p-6 relative max-h-[90vh] flex flex-col"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4"
              >
                <X size={22} />
              </button>

              {/* Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-lg mb-4 object-cover max-h-60"
              />

              {/* Scrollable content */}
              <div
                className="overflow-y-auto pr-2"
                style={{ maxHeight: "calc(90vh - 200px)" }}
              >
                <h2 className="text-xl font-bold mb-2">
                  {selectedProject.title}
                </h2>

                <h1 className="font-semibold mb-2">Project Overview:</h1>
                <p className="text-muted-foreground mb-4">
                  {selectedProject.details}
                </p>

                {/* Features */}
                {selectedProject.projectFeatures && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Project Features:</h3>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {selectedProject.problemsSolved.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Problems Solved */}
                {selectedProject.problemsSolved && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Problems Solved:</h3>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {selectedProject.problemsSolved.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Learnings */}
                {selectedProject.learnings && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Learnings:</h3>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {selectedProject.learnings.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
