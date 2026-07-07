"use client";

import FloatingLines from './FloatingLens';

export default function ShaderBackground() {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={8}
        lineDistance={8}
        bendRadius={8}
        bendStrength={-2}
        interactive
        parallax={true}
        animationSpeed={1}
        linesGradient={["#e945f5", "#6f6f6f", "#6a6a6a"]}
      />
    </div>
  );
}