
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

interface GooeyCellProps {
  color1?: string;
  color2?: string;
  followMouse?: boolean;
}

export const GooeyCell: React.FC<GooeyCellProps> = ({
  color1 = "#9b87f5", // Brighter purple color
  color2 = "#D946EF", // Vibrant magenta color
  followMouse = true,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const targetPosition = useRef<{ x: number, y: number }>({ x: 0, y: 0 });
  const currentPosition = useRef<{ x: number, y: number }>({ x: 0, y: 0 });

  // Custom shader for the gooey effect
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec2 mousePos;
    uniform float time;
    varying vec2 vUv;

    // Simple noise function
    float noise(vec2 p) {
      return sin(p.x * 10.0) * sin(p.y * 10.0) * 0.5 + 0.5;
    }

    void main() {
      // Calculate distance from center
      vec2 center = vec2(0.5, 0.5);
      float dist = distance(vUv, center);
      
      // Calculate distance from mouse position (normalized to [0,1])
      float mouseDist = distance(vUv, mousePos);
      
      // Create a gooey blob shape with increased size
      float radius = 0.5; // Increased radius
      float edge = 0.08; // Thicker edge for more visibility
      float strength = smoothstep(radius + edge, radius - edge, dist);
      
      // Add stronger mouse influence
      float mouseInfluence = smoothstep(0.4, 0.0, mouseDist) * 0.4; // Increased influence
      strength += mouseInfluence;
      
      // Add some noise and time-based animation with more pronounced effect
      float noiseValue = noise(vUv + vec2(sin(time * 0.3), cos(time * 0.3)));
      strength += noiseValue * 0.15; // Increased noise contribution
      
      // Create smooth gradient between colors with more vibrant blending
      vec3 finalColor = mix(color1, color2, vUv.x * vUv.y + sin(time * 0.5) * 0.3);
      
      // Apply alpha for smooth edges but with higher minimum opacity
      gl_FragColor = vec4(finalColor, max(strength, 0.1)); // Ensure some minimal visibility
    }
  `;

  // Convert hex colors to THREE.Color
  const parseColor = (hexColor: string) => {
    const color = new THREE.Color(hexColor);
    return [color.r, color.g, color.b];
  };

  // Update shader uniforms on each frame
  useFrame((state) => {
    if (!materialRef.current) return;

    // Smooth follow for mouse position
    if (followMouse) {
      currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * 0.05;
      currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * 0.05;
    } else {
      // Gentle autonomous motion if not following mouse
      const time = state.clock.getElapsedTime();
      currentPosition.current.x = Math.sin(time * 0.3) * 0.2 + 0.5;
      currentPosition.current.y = Math.cos(time * 0.2) * 0.2 + 0.5;
    }

    // Update shader uniforms
    materialRef.current.uniforms.time.value = state.clock.getElapsedTime();
    materialRef.current.uniforms.mousePos.value = new THREE.Vector2(
      currentPosition.current.x,
      currentPosition.current.y
    );

    // Add a more pronounced pulsing effect
    if (meshRef.current) {
      meshRef.current.scale.x = 1.8 + Math.sin(state.clock.getElapsedTime() * 0.8) * 0.1;
      meshRef.current.scale.y = 1.8 + Math.sin(state.clock.getElapsedTime() * 0.7) * 0.1;
    }
  });

  // Set up mouse event listeners
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!followMouse) return;
      
      // Convert mouse coordinates to normalized [0,1] range
      targetPosition.current = {
        x: event.clientX / window.innerWidth,
        y: 1.0 - event.clientY / window.innerHeight, // Invert Y for WebGL coordinates
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [followMouse]);

  return (
    <mesh ref={meshRef} scale={[2.0, 2.0, 1]}> {/* Increased scale for larger effect */}
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        uniforms={{
          color1: { value: parseColor(color1) },
          color2: { value: parseColor(color2) },
          mousePos: { value: new THREE.Vector2(0.5, 0.5) },
          time: { value: 0 }
        }}
      />
    </mesh>
  );
};

export default GooeyCell;
