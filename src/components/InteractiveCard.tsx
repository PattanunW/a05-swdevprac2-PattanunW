'use client';

import { ReactNode } from 'react';

interface InteractiveCardProps {
  children: ReactNode;
}

export default function InteractiveCard({ children }: InteractiveCardProps) {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white transition-all duration-300 hover:shadow-2xl hover:bg-neutral-200">
      {children}
    </div>
  );
}