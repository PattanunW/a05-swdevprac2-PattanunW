import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

interface CardProps {
  imgSrc: string;
  venueName: string;
}

export default function Card({ imgSrc, venueName }: CardProps) {
  return (
    <InteractiveCard Element="div"> 
      <div className="flex flex-col items-center">
        <Image
          src={imgSrc}
          alt={venueName}
          width={300}
          height={200}
          className="rounded-lg"
        />
        <h3 className="mt-2 text-lg font-semibold">{venueName}</h3>
      </div>
    </InteractiveCard>
  );
}
