"use client";

import React, { useEffect, useRef } from "react";

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();

    const dotSpacing = 32;
    const dotRadius = 1;
    const maxDistance = 150;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const rows = Math.ceil(height / dotSpacing);
      const cols = Math.ceil(width / dotSpacing);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * dotSpacing;
          const y = i * dotSpacing;

          const dx = x - mouseRef.current.x;
          const dy = y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let opacity = 0.1;
          let scale = 1;

          if (distance < maxDistance) {
            const factor = 1 - distance / maxDistance;
            opacity = 0.1 + factor * 0.5;
            scale = 1 + factor * 1.5;
          }

          ctx.beginPath();
          ctx.arc(x, y, dotRadius * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34, 211, 238, ${opacity})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}
