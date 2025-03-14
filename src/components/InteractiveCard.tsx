'use client';

import { ReactNode, useState } from 'react';

interface InteractiveCardProps {
  children: ReactNode;
}

export default function InteractiveCard({ children }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-4 rounded-lg bg-white transition-all duration-300 ${
        isHovered ? 'shadow-2xl bg-neutral-200' : 'shadow-lg'
      }`}
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => setIsHovered(true)}
      onMouseLeave={(event: React.MouseEvent<HTMLDivElement>) => setIsHovered(false)}
    >
      {children}
    </div>
  );
}
