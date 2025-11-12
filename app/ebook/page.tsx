'use client';

import { useEffect } from 'react';

export default function EbookPage() {
  useEffect(() => {
    window.location.href = 'https://qua.bandoxaynha.vn/';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to ebook...</p>
    </div>
  );
}

