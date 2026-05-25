import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId: number;
    let lastFrame = 0;
    const FPS = 60;
    const FRAME_TIME = 1000 / FPS;

    const particles = Array.from({ length: 32 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1.5 + Math.random() * 2.5,
      dx: 0.1 + Math.random() * 0.15,
      dy: 0.05 + Math.random() * 0.1,
      glow: 0.5 + Math.random() * 1.5,
    }));

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
    }

    window.addEventListener('resize', resize);
    resize();

    function draw(now = 0) {
      if (now - lastFrame < FRAME_TIME) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      lastFrame = now;
      ctx!.clearRect(0, 0, width, height);

      const grad = ctx!.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#0a1833');
      grad.addColorStop(1, '#101a2b');
      ctx!.fillStyle = grad;
      ctx!.fillRect(0, 0, width, height);

      for (const p of particles) {
        ctx!.save();
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx!.shadowColor = 'rgba(0,180,255,0.7)';
        ctx!.shadowBlur = 16 * p.glow;
        ctx!.fillStyle = 'rgba(0,180,255,0.15)';
        ctx!.fill();
        ctx!.restore();
        p.x += p.dx * p.glow;
        p.y += p.dy * p.glow;
        if (p.x > width + 20) p.x = -20;
        if (p.y > height + 20) p.y = -20;
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'transparent',
        willChange: 'transform',
      }}
    />
  );
}
