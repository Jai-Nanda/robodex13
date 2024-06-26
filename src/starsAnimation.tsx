// src/starsAnimation.tsx

import { useEffect, useRef } from "react";

const StarsAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = {
      x: 0,
      y: 0,
    };

    function updateCanvasSize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    updateCanvasSize(); // Initial canvas size update

    const stars: { x: number; y: number; radius: number; vx: number; vy: number }[] = [];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const canvasWidth = canvas.width;
    const scaledFPS = canvasWidth / 20; 
    const FPS = 150;
    const x = Math.min(scaledFPS, 60);;

    for (let i = 0; i < x; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 0,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
      });
    }

    function draw() {
      if (!ctx) return;
      if (!canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        ctx.fillStyle = "#1d1d3e";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "#1d1d3e";
        ctx.stroke();
      }

      ctx.beginPath();
      for (let i = 0; i < stars.length; i++) {
        const starI = stars[i];
        ctx.moveTo(starI.x, starI.y);
        if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
        for (let j = 0; j < stars.length; j++) {
          const starII = stars[j];
          if (distance(starI, starII) < 150) {
            ctx.lineTo(starII.x, starII.y);
          }
        }
      }
      ctx.lineWidth = 0.2;
      ctx.strokeStyle = "#1d1d3e";
      ctx.stroke();
    }

    function distance(point1: { x: number; y: number }, point2: { x: number; y: number }) {
      let xs = 0;
      let ys = 0;

      xs = point2.x - point1.x;
      xs = xs * xs;

      ys = point2.y - point1.y;
      ys = ys * ys;

      return Math.sqrt(xs + ys);
    }

    function update() {
      if (!canvas) return;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        s.x += s.vx / FPS;
        s.y += s.vy / FPS;

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
      }
    }

    function handleMouseMove(event: MouseEvent) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }

    canvas.addEventListener("mousemove", handleMouseMove);

    function tick() {
      draw();
      update();
      requestAnimationFrame(tick);
    }

    tick();

    // Add resize event listener to update canvas size on screen resolution change
    window.addEventListener("resize", updateCanvasSize);

    // Cleanup the resize event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "", height: "100%", position: "fixed", top: 0, left: 0, zIndex:-1 }}
    />
  );
};

export default StarsAnimation;
