
import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { GooeyCell } from './GooeyCell';

interface ThreeCanvasProps {
  className?: string;
}

const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ className }) => {
  const [canRenderWebGL, setCanRenderWebGL] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Check if WebGL is supported
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setCanRenderWebGL(!!gl);
    } catch (e) {
      setCanRenderWebGL(false);
      console.error('WebGL not supported', e);
    }
  }, []);

  // Fallback if WebGL is not supported
  const renderFallback = () => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Create a more vibrant gradient as fallback
    const gradient = ctx.createRadialGradient(
      width / 2, height / 2, 0,
      width / 2, height / 2, width * 0.4
    );
    
    gradient.addColorStop(0, '#9b87f5');  // Brighter purple
    gradient.addColorStop(1, '#D946EF');  // Vibrant magenta
    
    // Draw a larger circle with the gradient
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, width * 0.3, 0, Math.PI * 2);
    ctx.fill();
  };
  
  useEffect(() => {
    if (!canRenderWebGL && canvasRef.current) {
      renderFallback();
      
      // Add a simple animation to the fallback
      const animate = () => {
        if (canvasRef.current) {
          renderFallback();
        }
        requestAnimationFrame(animate);
      };
      
      animate();
    }
  }, [canRenderWebGL]);
  
  return (
    <>
      {canRenderWebGL ? (
        <Canvas className={className}>
          <GooeyCell />
        </Canvas>
      ) : (
        <canvas 
          ref={canvasRef} 
          className={className}
          width={800}
          height={600}
        />
      )}
    </>
  );
};

export default ThreeCanvas;
