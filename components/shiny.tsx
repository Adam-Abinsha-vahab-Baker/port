import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: `gradient ${animationSpeed}s infinite linear`,
    border: showBorder ? '1px solid' : 'none',
  };

  return (
    <h1 className={className} style={gradientStyle}>
      {children}
    </h1>
  );
}
    
// tailwind.config.js

