import { FileDown } from "lucide-react";
import aboutImg from "@/assets/about.webp";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import CountUp from "react-countup";

const stats = [
  { label: "Month Hands On Experience", value: 8 },
  { label: "Projects Completed", value: 20 },
  { label: "Technologies", value: 17 },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Image */}
          <ScrollReveal className="flex-1 flex justify-center w-full">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 cursor-pointer lg:h-96 rounded-2xl overflow-hidden gradient-border">
              <img
                src={aboutImg}
                alt="Salman working"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal className="flex-1 w-full" delay={0.2}>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
              I am a passionate{" "}
              <span className="gradient-text font-bold">
                Front-End Developer
              </span>{" "}
              and
              <span className="gradient-text font-bold">
                {" "}
                MERN Stack Developer
              </span>{" "}
              focused on building modern, scalable, and high-performance web
              applications. I specialize in creating clean, maintainable code
              and crafting intuitive user experiences that blend functionality
              with elegant design. With strong expertise in
              <span className="gradient-text font-bold"> JavaScript,</span>{" "}
              <span className="gradient-text font-bold"> React,</span>{" "}
              <span className="gradient-text font-bold"> Next.js,</span> and the{" "}
              <span className="gradient-text font-bold"> MERN stack</span> I
              enjoy turning complex problems into simple, efficient solutions.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed text-sm sm:text-base">
              I am continuously learning and adapting to new technologies to
              stay ahead in the fast-evolving web ecosystem. My goal is to
              deliver reliable digital products that not only work flawlessly
              but also provide meaningful value to users and businesses.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-8 cursor-pointer">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 sm:p-4 rounded-xl glass"
                >
                  <div className="text-xl sm:text-2xl font-bold gradient-text">
                    <CountUp
                      start={1}
                      end={stat.value}
                      duration={3}
                      enableScrollSpy
                      scrollSpyDelay={200}
                    />+
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              Download Resume <FileDown size={16} />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
