import React from "react";

interface IconProps {
  icon: {
    path: string;
    hex: string;
    title: string;
  };
  size?: number;
  color?: string;
}

const SimpleIcon: React.FC<IconProps> = ({ icon, size = 24, color }) => {
  if (!icon) return null;
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color || `#${icon.hex}`}
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
};

export default SimpleIcon;
