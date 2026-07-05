import { useEffect, useRef } from "react";

const GlowCursor = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: 0, my: 0, dx: 0, dy: 0 });

  useEffect(() => {
    // Check if device supports hover
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (!hasHover) return;

    const handleMouseMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };

    let rafId: number;
    const trail = () => {
      const p = pos.current;
      p.dx += (p.mx - p.dx) * 0.18;
      p.dy += (p.my - p.dy) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.left = p.dx + "px";
        dotRef.current.style.top = p.dy + "px";
      }
      rafId = requestAnimationFrame(trail);
    };

    window.addEventListener("mousemove", handleMouseMove);
    trail();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Glow cursor */}
      <div
        ref={glowRef}
        className="fixed z-[1] pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(124,92,255,0.15) 0%, rgba(53,230,196,0.12) 40%, transparent 70%)",
        }}
      />
      {/* Trailing dot */}
      <div
        ref={dotRef}
        className="fixed z-[9998] pointer-events-none hidden hover-device:block"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#35e6c4",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 12px #35e6c4",
        }}
      />
    </>
  );
};

export default GlowCursor;
