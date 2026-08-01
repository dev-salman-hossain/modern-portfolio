import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorText, setCursorText] = useState("");
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 250, damping: 20 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkDevice = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024;
      setIsVisible(!isTouch);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("has-custom-cursor");
    } else {
      document.body.classList.remove("has-custom-cursor");
    }
    return () => {
      document.body.classList.remove("has-custom-cursor");
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) {
        setCursorVariant("default");
        setCursorText("");
        return;
      }

      const cursorTarget = target.closest("[data-cursor]");
      const linkTarget = target.closest("a");
      const buttonTarget = target.closest("button");

      if (cursorTarget) {
        setCursorVariant("hover");
        setCursorText(cursorTarget.getAttribute("data-cursor") || "");
      } else if (linkTarget) {
        setCursorVariant("hover");
        setCursorText("Link");
      } else if (buttonTarget) {
        setCursorVariant("hover");
        setCursorText("Click");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant("default");
      setCursorText("");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  // animation variants
  const variants = {
    default: {
      scale: 1,
    },
    hover: {
      scale: 1.15,
    },
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[999] pointer-events-none flex items-center justify-center"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div
          className={`relative flex items-center justify-center transition-all duration-300 ${
            isClicking ? "scale-90" : ""
          }`}
        >
          <div
            className={`relative rounded-full transition-all duration-300 ease-out overflow-hidden ${
              cursorVariant === "default"
                ? "w-14 h-14 border border-white/15 bg-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.06)]"
                : "w-18 h-18 border border-primary/40 bg-primary/10 shadow-[0_0_32px_rgba(59,130,246,0.18)]"
            }`}
          >
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]" />
            <div className="absolute inset-0 rounded-full border border-primary/15" />
            <div
              className={`absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                cursorVariant === "default"
                  ? "w-3 h-3 bg-primary shadow-[0_0_16px_rgba(59,130,246,0.2)]"
                  : "w-4 h-4 bg-white shadow-[0_0_18px_rgba(255,255,255,0.45)]"
              }`}
            />
            {cursorText && (
              <span className="absolute top-full mt-3 rounded-full border border-white/10 bg-background/95 px-2.5 py-1 text-[9px] uppercase tracking-[0.25em] text-primary shadow-[0_4px_24px_rgba(0,0,0,0.18)]">
                {cursorText}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Small trailing spark */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9998] bg-gradient-to-r from-primary to-secondary shadow-[0_0_16px_rgba(59,130,246,0.25)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />

      {/* Click ripple */}
      {isClicking && (
        <motion.div
          className="fixed pointer-events-none z-[9997] rounded-full border border-white/60"
          initial={{
            x: mouseX.get() - 24,
            y: mouseY.get() - 24,
            scale: 0,
            opacity: 1,
          }}
          animate={{
            scale: 2.2,
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
          style={{
            width: "48px",
            height: "48px",
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
