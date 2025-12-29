'use client';

import Image from 'next/image';

const partnerAvatars = [
  '/p1.webp',
  '/p2.webp',
  '/p3.webp',
  '/p4.webp',
  '/p1.webp',
  '/p2.webp',
];

export default function TrustSection() {
  return (
    <div className="pt-0 sm:pt-0 mt-0">
      <div className="inline-flex flex-col items-center gap-4 bg-white/20 backdrop-blur-lg rounded-2xl px-4 py-4 shadow-sm border border-white/50 mx-auto lg:mx-0 w-full max-w-xs">
        <div className="w-full flex justify-between items-center gap-6">
          <p className="text-2xl sm:text-3xl font-bold" style={{color: '#395674'}}>500+</p>
          <p className="text-xs sm:text-sm" style={{color: '#395674'}}>Trusted partners<br />worldwide</p>
        </div>

        <div className="flex -space-x-2 sm:-space-x-3 bg-white rounded-full px-2 py-1">
          {partnerAvatars.map((avatar, index) => (
            <div
              key={index}
              className="relative w-8 h-8 sm:w-10 sm:h-11 rounded-full shadow-md overflow-hidden"
            >
              <Image
                src={avatar}
                alt={`Partner ${index + 1}`}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
