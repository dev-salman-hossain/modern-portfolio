import { Briefcase, GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const timeline = [
  {
    type: "learning",
    title: "Complete Web Development Course Batch-12",
    org: "Programming Hero",
    period: "June-2025",
    description: "Completed an intensive full-stack web development program at Programming Hero, focusing on building scalable applications with React and Node.js, and gaining hands-on experience with modern development workflows."
  },
  {
    type: "education",
    title: "Diploma in Engineering",
    org: "Kishoreganj Polytechnic Institute",
    period: "2024 - 2027",
    description: "Diploma in Engineering at Kishoreganj Polytechnic Institute, focusing on MERN stack projects like e-commerce platforms, dashboards, and SaaS applications."
  },
  {
    type: "education",
    title: "SSC-22",
    org: "Haji Sayed Ali Khan High School",
    period: "2016 - 2022",
    description: "Completed Secondary School Certificate (SSC) from Haji Sayed Ali Khan High School, building a strong foundation in science, mathematics, and computer fundamentals."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="My Experience" subtitle="My professional journey" />

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px " />

          {timeline.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className={`relative flex items-start gap-6 mb-10 md:mb-12 ${i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""} cursor-pointer`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full -translate-x-1.5 mt-2" style={{ background: "var(--gradient-primary)" }} />

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8 md:text-left"}`}>
                  <div className="p-5 rounded-xl glass hover:glow transition-shadow duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      {item.type === "work" ? (
                        <Briefcase size={16} className="text-primary" />
                      ) : (
                        <GraduationCap size={16} className="text-secondary" />
                      )}
                      <span className="text-xs text-muted-foreground">{item.period}</span>
                    </div>
                    <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-primary mb-2">{item.org}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
