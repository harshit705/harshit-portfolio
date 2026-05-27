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
    const FPS = 24; // Capped for ultra-low CPU footprint
    const FRAME_TIME = 1000 / FPS;

    // Sparse, slow, tiny floating nodes
    const particles = Array.from({ length: 12 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1 + Math.random() * 1.5,
      dx: 0.05 + Math.random() * 0.08,
      dy: 0.03 + Math.random() * 0.05,
      glow: 0.3 + Math.random() * 0.7,
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

      // Deep background base gradient
      const grad = ctx!.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#030712'); // Deep slate black
      grad.addColorStop(1, '#0a1833'); // Soft blue shadow
      ctx!.fillStyle = grad;
      ctx!.fillRect(0, 0, width, height);

      // Subtle, premium blueprint grid layer
      ctx!.strokeStyle = 'rgba(0, 180, 255, 0.015)';
      ctx!.lineWidth = 0.5;
      const gridSize = 64;
      for (let x = 0; x < width; x += gridSize) {
        ctx!.beginPath();
        ctx!.moveTo(x, 0);
        ctx!.lineTo(x, height);
        ctx!.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx!.beginPath();
        ctx!.moveTo(0, y);
        ctx!.lineTo(width, y);
        ctx!.stroke();
      }

      // Draw minimal floating nodes
      for (const p of particles) {
        ctx!.save();
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx!.shadowColor = 'rgba(0,180,255,0.4)';
        ctx!.shadowBlur = 8 * p.glow;
        ctx!.fillStyle = `rgba(0,180,255,${0.08 * p.glow})`;
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
    <>
      <style>{`
        @keyframes drift-glow-1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(30px, -45px) scale(1.06); }
        }
        @keyframes drift-glow-2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-40px, 30px) scale(0.94); }
        }
        .animate-drift-1 {
          animation: drift-glow-1 24s ease-in-out infinite;
        }
        .animate-drift-2 {
          animation: drift-glow-2 30s ease-in-out infinite;
        }
      `}</style>

      {/* Base Canvas: Background gradient + Grid lines + Tiny floating nodes */}
      <canvas
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

      {/* Layer 2: Soft Drifting Radial Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute top-[8%] left-[15%] w-[350px] h-[350px] md:w-[550px] md:h-[550px] bg-blue-500/4 rounded-full filter blur-[80px] md:blur-[130px] animate-drift-1" />
        <div className="absolute bottom-[15%] right-[10%] w-[300px] h-[300px] md:w-[480px] md:h-[480px] bg-cyan-500/3 rounded-full filter blur-[80px] md:blur-[130px] animate-drift-2" />
      </div>

      {/* Layer 3: Rotating AI Blueprint / Neural Processing Grid SVG */}
      <div className="fixed top-0 left-0 w-full h-[100vh] flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
        <svg 
          viewBox="0 0 800 800" 
          className="w-[480px] h-[480px] md:w-[720px] md:h-[720px] opacity-[0.035] text-cyan-400 select-none pointer-events-none animate-[spin_80s_linear_infinite] filter blur-[0.4px] transform-gpu"
        >
          {/* Concentric dashed orbital paths */}
          <circle cx="400" cy="400" r="370" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 8" fill="none" />
          <circle cx="400" cy="400" r="310" stroke="currentColor" strokeWidth="1" strokeDasharray="36 6" fill="none" opacity="0.6" />
          <circle cx="400" cy="400" r="250" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="400" cy="400" r="190" stroke="currentColor" strokeWidth="0.75" strokeDasharray="8 6" fill="none" opacity="0.8" />
          <circle cx="400" cy="400" r="130" stroke="currentColor" strokeWidth="1.25" fill="none" />
          <circle cx="400" cy="400" r="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" fill="none" />

          {/* Radial blueprint grid lines */}
          <line x1="400" y1="30" x2="400" y2="770" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <line x1="30" y1="400" x2="770" y2="400" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <line x1="138" y1="138" x2="662" y2="662" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
          <line x1="138" y1="662" x2="662" y2="138" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />

          {/* Technical tick marks & angles */}
          <path d="M 400 30 L 405 30 M 400 70 L 405 70 M 400 130 L 408 130" stroke="currentColor" strokeWidth="0.75" />
          
          {/* Neural node accents */}
          <circle cx="400" cy="70" r="2.5" fill="currentColor" />
          <circle cx="138" cy="138" r="3" fill="currentColor" />
          <circle cx="662" cy="662" r="1.5" fill="currentColor" />
          <circle cx="400" cy="250" r="2" fill="currentColor" />
          <circle cx="530" cy="400" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {/* Layer 4: Cinematic Grain/Noise Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none select-none opacity-[0.012] z-[1] will-change-auto" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
}
