import { clsx } from 'clsx';
import * as React from 'react';
import Image from 'next/image';

const isServer = typeof document === 'undefined';

export interface BlurrableImageProps {
  img: JSX.Element & React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>;
  blurDataUrl?: string;
  widthRatio: number;
  heightRatio: number;
  src: string;
  alt: string;
  className?: string;
}

function BlurrableImage({
  img,
  blurDataUrl,
  widthRatio,
  heightRatio,
  src,
  alt,
  ...rest
}: BlurrableImageProps) {
  const id = React.useId();
  const [visible, setVisible] = React.useState(() => {
    if (isServer) return false;

    const el = document.getElementById(id);
    return el instanceof HTMLImageElement && !el.classList.contains('opacity-0');
  });
  const jsImgElRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (!jsImgElRef.current) return;
    if (jsImgElRef.current.complete) {
      setVisible(true);
      return;
    }

    let current = true;
    jsImgElRef.current.addEventListener('load', () => {
      if (!jsImgElRef.current || !current) return;
      setTimeout(() => {
        setVisible(true);
      }, 0);
    });

    return () => {
      current = false;
    };
  }, []);

  const jsImgEl = React.cloneElement(img, {
    ref: jsImgElRef,
    id,

    suppressHydrationWarning: true,
    'data-evt-onload': isServer ? "this.classList.remove('opacity-0')" : undefined,
    className: clsx(img.props.className, 'transition-opacity', {
      'opacity-0': !visible,
    }),
  });

  return (
    <div
      className={`relative w-full aspect-h-${heightRatio} aspect-w-${widthRatio}`}
      {...rest}>
      {blurDataUrl ? (
        <>
          <Image
            src={src}
            alt={alt}
            width={widthRatio}
            height={heightRatio}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
          <div className={clsx(img.props.className, 'backdrop-blur-xl')} />
        </>
      ) : null}
      {jsImgEl}
      <noscript>{img}</noscript>
    </div>
  );
}

export { BlurrableImage };
