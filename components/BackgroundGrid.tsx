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

    // Detect mobile and reduce particles for performance
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 12 : 35;

    const particles: { x: number, y: number, text: string, speed: number, alpha: number, size: number }[] = [];
    const snippets = [
      'def init():',
      'useEffect(() =>',
      '0x1A4F2B',
      'SELECT * FROM',
      'sudo rm -rf',
      'npm install',
      'console.log()',
      'import React',
      'void main()',
      'async/await',
      '=> {}',
      'git push',
      'docker run',
      'kubectl apply',
      'python3',
      'localhost:3000'
    ];

    // Subtle particles for background effect
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        text: snippets[Math.floor(Math.random() * snippets.length)],
        speed: isMobile ? 0.2 + Math.random() * 0.3 : 0.3 + Math.random() * 0.6,
        alpha: isMobile ? 0.05 + Math.random() * 0.08 : 0.08 + Math.random() * 0.15,
        size: isMobile ? 10 : 11 + Math.random() * 3
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

      // Draw Code Particles with enhanced visibility
      particles.forEach(p => {
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = h;
          p.x = Math.random() * w; // Randomize x position on reset
        }

        // Use variable font size
        ctx.font = `${Math.floor(p.size)}px "JetBrains Mono", monospace`;

        // Alternate between green and cyan for better visibility
        const isGreen = Math.random() > 0.4;
        if (isGreen) {
          ctx.fillStyle = `rgba(74, 222, 128, ${p.alpha})`; // Bright green
        } else {
          ctx.fillStyle = `rgba(34, 211, 238, ${p.alpha})`; // Cyan
        }

        // Draw text with subtle shadow
        ctx.shadowColor = isGreen ? 'rgba(74, 222, 128, 0.3)' : 'rgba(34, 211, 238, 0.3)';
        ctx.shadowBlur = 4;
        ctx.fillText(p.text, p.x, p.y);
        ctx.shadowBlur = 0; // Reset shadow

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
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40 md:opacity-65 will-change-transform"
    />
  );
};

export default BackgroundGrid;
