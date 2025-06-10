import React, { useEffect, useRef, useState } from 'react';

const images = [
  '/assets/images/graphics/ai/imageticker (1).jpg',
  '/assets/images/graphics/ai/imageticker (2).jpg',
  '/assets/images/graphics/ai/imageticker (3).jpg',
  '/assets/images/graphics/ai/imageticker (4).jpg'
];

export default function TickerImages({ width = 80, height = 80, interval = 2000 }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [index, interval]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: height }}>
      <img
        src={images[index]}
        alt={`ticker-img-${index + 1}`}
        width={width}
        height={height}
        style={{ objectFit: 'contain', transition: 'opacity 0.5s' }}
      />
    </div>
  );
}
