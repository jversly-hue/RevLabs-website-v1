import React, { useEffect, useRef } from 'react';

const TechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 5; // Cover full page height
    };

    const createParticles = () => {
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 25000);
      
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.4 + 0.1
        });
      }
    };

    const drawGrid = () => {
      const gridSize = 60;
      ctx.strokeStyle = 'rgba(167, 139, 250, 0.05)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Intersection dots
      ctx.fillStyle = 'rgba(167, 139, 250, 0.15)';
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const drawCircuitLines = () => {
      ctx.strokeStyle = 'rgba(103, 232, 249, 0.08)';
      ctx.lineWidth = 1.5;

      // Draw some circuit-like paths
      const paths = [
        { start: { x: 0, y: canvas.height * 0.2 }, points: [
          { x: canvas.width * 0.1, y: canvas.height * 0.2 },
          { x: canvas.width * 0.1, y: canvas.height * 0.15 },
          { x: canvas.width * 0.25, y: canvas.height * 0.15 },
        ]},
        { start: { x: canvas.width, y: canvas.height * 0.4 }, points: [
          { x: canvas.width * 0.85, y: canvas.height * 0.4 },
          { x: canvas.width * 0.85, y: canvas.height * 0.35 },
          { x: canvas.width * 0.7, y: canvas.height * 0.35 },
        ]},
        { start: { x: 0, y: canvas.height * 0.6 }, points: [
          { x: canvas.width * 0.15, y: canvas.height * 0.6 },
          { x: canvas.width * 0.15, y: canvas.height * 0.55 },
          { x: canvas.width * 0.3, y: canvas.height * 0.55 },
        ]},
        { start: { x: canvas.width, y: canvas.height * 0.75 }, points: [
          { x: canvas.width * 0.9, y: canvas.height * 0.75 },
          { x: canvas.width * 0.9, y: canvas.height * 0.7 },
          { x: canvas.width * 0.75, y: canvas.height * 0.7 },
        ]},
      ];

      paths.forEach(path => {
        ctx.beginPath();
        ctx.moveTo(path.start.x, path.start.y);
        path.points.forEach(point => {
          ctx.lineTo(point.x, point.y);
        });
        ctx.stroke();

        // Draw node at end
        const lastPoint = path.points[path.points.length - 1];
        ctx.fillStyle = 'rgba(103, 232, 249, 0.2)';
        ctx.beginPath();
        ctx.arc(lastPoint.x, lastPoint.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawGradientOrbs = () => {
      // Purple orb top-left
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.15, canvas.height * 0.1, 0,
        canvas.width * 0.15, canvas.height * 0.1, canvas.width * 0.4
      );
      gradient1.addColorStop(0, 'rgba(167, 139, 250, 0.1)');
      gradient1.addColorStop(0.5, 'rgba(167, 139, 250, 0.03)');
      gradient1.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.4);

      // Cyan orb bottom-right
      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.85, canvas.height * 0.3, 0,
        canvas.width * 0.85, canvas.height * 0.3, canvas.width * 0.35
      );
      gradient2.addColorStop(0, 'rgba(103, 232, 249, 0.08)');
      gradient2.addColorStop(0.5, 'rgba(103, 232, 249, 0.02)');
      gradient2.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient2;
      ctx.fillRect(canvas.width * 0.5, 0, canvas.width * 0.5, canvas.height * 0.5);

      // Purple orb middle
      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.8, canvas.height * 0.5, 0,
        canvas.width * 0.8, canvas.height * 0.5, canvas.width * 0.3
      );
      gradient3.addColorStop(0, 'rgba(167, 139, 250, 0.07)');
      gradient3.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient3;
      ctx.fillRect(canvas.width * 0.5, canvas.height * 0.3, canvas.width * 0.5, canvas.height * 0.4);
    };

    const drawParticles = () => {
      particles.forEach(particle => {
        ctx.fillStyle = `rgba(167, 139, 250, ${particle.opacity * 1.5})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
    };

    const drawConnections = () => {
      ctx.strokeStyle = 'rgba(167, 139, 250, 0.06)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawGradientOrbs();
      drawGrid();
      drawCircuitLines();
      drawParticles();
      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default TechBackground;
