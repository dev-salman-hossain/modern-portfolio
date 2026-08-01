import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import { lazy, Suspense } from "react";
import profileImg from "@/assets/profile.webp";
import ExpertAnimatedRole from "./ui/ExpertAnimatedRole";
import cvFile from "@/assets/salman as a mern stack developer.pdf";

const ThreeBackground = lazy(() => import("./ThreeBackground"));
const techIcons = [
  { name: "React", color: "#61DAFB", pos: "top-0 left-0" },
  { name: "JS", color: "#F7DF1E", pos: "top-0 right-0" },
  { name: "Node", color: "#339933", pos: "bottom-0 left-0" },
  { name: "Next", color: "#FFFFFF", pos: "bottom-0 right-0" },
  { name: "MongoDB", color: "#47A248", pos: "top-1/2 -left-6" },
  { name: "Express", color: "#FFFFFF", pos: "top-1/2 -right-6" },
  { name: "GitHub", color: "#FFFFFF", pos: "-top-6 left-1/2" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <Suspense
        fallback={
          <div className="absolute inset-0 bg-gradient-to-br from-background to-muted" />
        }
      >
        <ThreeBackground />
      </Suspense>
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24 lg:pt-0">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-2"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              MD Salman <span className="gradient-text">Hossain</span>
            </motion.h1>

            <ExpertAnimatedRole />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8"
            >
              Building modern, scalable web applications with cutting-edge
              technologies. Passionate about clean code and beautiful user
              experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                Hire Me <ArrowDown size={16} />
              </a>

              <a
                href={cvFile}
                download="Md-Salman-Hossain-Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border border-border text-foreground hover:border-primary transition-colors glass"
              >
                Download Resume <FileDown size={16} />
              </a>
            </motion.div>
          </div>

          {/* Right - Profile with floating icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  background: "var(--gradient-primary)",
                  filter: "blur(40px)",
                }}
              />

              {/* Profile image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border gradient-border">
                <img
                  src={profileImg}
                  alt="MD Salman Hossain"
                  className="h-full w-full rounded-full object-cover animate-float  cursor-pointer"
                  loading="eager"
                />
              </div>

              {/* Floating tech icons */}
              {techIcons.map((icon, i) => (
                <motion.div
                  key={icon.name}
                  className={`absolute ${icon.pos} flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass text-xs font-bold animate-bounce-icon`}
                  style={{
                    color: icon.color,
                    animationDelay: `${i * 0.3}s`,
                    border: `1px solid ${icon.color}30`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  {icon.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
