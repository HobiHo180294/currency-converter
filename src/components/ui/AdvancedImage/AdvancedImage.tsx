'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import styles from './AdvancedImage.module.scss';

export const AdvancedImage = ({
  alt,
  src,
  height,
  width,
  ...props
}: ImageProps): React.JSX.Element => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setImageLoading(false)}
        className={imageLoading ? styles.blur : styles['remove-blur']}
        {...props}
      />
    </div>
  );
};
