import React from 'react';

export interface RatioImageProps {
  widthRatio: number;
  heightRatio: number;
  src: string;
  alt?: string;
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
      <img
        src={src}
        alt={alt}
        className="absolute left-0 top-0 block h-full w-full rounded-xl object-cover"
      />
    </div>
  );
};

export default RatioImage;
