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
      className={`${className} w-full relative`}>
      <img
        src={src}
        alt={alt}
        className="rounded-xl absolute top-0 left-0 w-full h-full block object-cover"
      />
    </div>
  );
};

export default RatioImage;
