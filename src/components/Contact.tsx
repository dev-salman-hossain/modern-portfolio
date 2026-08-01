import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, MapPin, Phone, Github, Linkedin, Facebook, Send } from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_wwpb83g",
        "template_tp1b6gj",
        form.current,
        "IumMikQm3AU-3iwga"
      )
      .then(
        () => {
          setSending(false);
          form.current?.reset();
          toast.success("I'll get back to you soon.", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          setSending(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "salmanhossain.dev@gmail.com",
      href: "mailto:salmanhossain.dev@gmail.com",
    },
    {
      icon: MapPin,
      label: "Nandail, Mymensingh, Bangladesh",
      href: "#",
    },
    {
      icon: Phone,
      label: "+880 1825328723",
      href: "tel:+8801825328723",
    },
  ];

  const socials = [
    { icon: Github, href: "https://github.com/Salman472" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/salman2025/" },
    { icon: Facebook, href: "https://www.facebook.com/md.sayem.hossain.71778" },
  ];

  return (
    <section id="contact" className="py-20 md:py-28">
      <ToastContainer />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Get in touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Me</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

          {/* ── Left: contact info ── */}
          <div className="space-y-6">
            <p className="text-gray-400">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out!
            </p>

            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#131025] border border-gray-700 group-hover:border-purple-500 transition-all">
                  <item.icon size={18} className="text-purple-400" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </a>
            ))}

            <div className="flex gap-3 pt-4">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#131025] border border-gray-700 hover:border-purple-500 hover:-translate-y-1 transition-all"
                >
                  <s.icon size={18} className="text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: contact form (original logic, zero changes) ── */}
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4"
            >
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#131025] border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#131025] border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#131025] border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#131025] border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
              />

              <button
                type="submit"
                disabled={sending}
                className=" w-full inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg font-medium text-primary-foreground text-center"
                style={{ background: "var(--gradient-primary)" }}
              >
                {sending ? (
                  <>
                    <span
                      className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                      aria-hidden="true"
                    />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;