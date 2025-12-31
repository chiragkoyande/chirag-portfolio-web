import React, { useEffect, useRef } from 'react';

const BackgroundGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const particles: { x: number, y: number, text: string, speed: number, alpha: number }[] = [];
    const snippets = ['def init():', 'useEffect(() =>', '0x1A4', 'DROP TABLE', 'sudo su', 'npm install', 'console.log', 'import {', 'void main()', 'float32', '=>'];

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        text: snippets[Math.floor(Math.random() * snippets.length)],
        speed: 0.5 + Math.random(),
        alpha: Math.random() * 0.5
      });
    }

    const drawGrid = (offset: number) => {
      ctx.strokeStyle = 'rgba(0, 255, 65, 0.08)'; // Very faint hacker green
      ctx.lineWidth = 1;
      
      // Isometric-ish grid simulation
      const gridSize = 40;
      
      // Vertical moving lines
      for (let x = 0; x <= w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // Horizontal moving lines
      const horizontalOffset = offset % gridSize;
      for (let y = horizontalOffset; y <= h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
    };

    let time = 0;
    const animate = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, w, h);

      time += 0.5;
      drawGrid(time);

      // Draw Code Particles
      ctx.font = '12px "JetBrains Mono"';
      particles.forEach(p => {
        p.y -= p.speed;
        if (p.y < 0) p.y = h;
        
        ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`; // Purple tint
        if (Math.random() > 0.5) ctx.fillStyle = `rgba(74, 222, 128, ${p.alpha})`; // Green tint

        ctx.fillText(p.text, p.x, p.y);
        
        // Random glitch flicker
        if (Math.random() > 0.98) {
           p.text = snippets[Math.floor(Math.random() * snippets.length)];
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-60"
    />
  );
};

export default BackgroundGrid;
