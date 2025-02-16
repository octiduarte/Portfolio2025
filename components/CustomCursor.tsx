"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState("normal");

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setCursorType("pointer");
    const handleMouseLeave = () => setCursorType("normal");

    window.addEventListener("mousemove", moveCursor);

    document.querySelectorAll("button, a").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("button, a").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y + 5, 
        left: position.x + 5, 
        width: "19px",
        height: "19px",
        background: cursorType === "normal"
          ? "url('/cursor-nuevo.png') center/cover no-repeat"
          : "url('/cursor-pointer.png') center/cover no-repeat",
        pointerEvents: "none",
        transform: "translate(0%, 0%)",
        zIndex: 9999,
      }}
    />
  );
}
