'use client';

/***************************  IMAGE - BACKGROUND  ***************************/

export default function Background() {
  return (
    <img
      src={require('./overlay9.jpg')}
      alt="Background"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      loading="lazy"
    />
  );
}
