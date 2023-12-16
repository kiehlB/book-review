import Image from 'next/image';
import React from 'react';

export interface RatioImageProps {
  widthRatio: number;
  heightRatio: number;
  src: string;
  alt: string;
  className?: string;
}

const RatioImage: React.FC<RatioImageProps> = ({
  widthRatio,
  heightRatio,
  src,
  alt,
  className,
}) => {
  const paddingTop = `${(heightRatio / widthRatio) * 100}%`;

  return (
    <div
      style={{
        paddingTop,
      }}
      className={`${className} relative w-full`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="absolute left-0 top-0 block h-full w-full rounded-xl object-cover"
        sizes="(max-width: 768px) 100vw ,(max-width: 1024px) 50vw, (max-width: 1280px) 30vw, 320px"
      />
    </div>
  );
};

export default RatioImage;
