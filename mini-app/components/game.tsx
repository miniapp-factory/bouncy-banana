"use client";
import { useEffect, useRef } from "react";

export default function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // placeholder: fill canvas with light blue
    ctx.fillStyle = "#a0e7e5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return (
    <canvas ref={canvasRef} className="w-full h-full" />
  );
}
