// src/components/VideoSection.tsx
import React from 'react';

const VideoSection = () => {
  return (
    <section className="relative h-[300px] md:h-[400px] lg:h-[500px]">
      <video
        className="w-full h-full object-cover absolute inset-0 z-0"
        src="/video2.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center z-10">
        <p className="text-white text-sm uppercase tracking-widest mb-2">STAY UPDATED</p>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="your@email.com"
            className="px-4 py-2 text-sm bg-white text-black"
          />
          <button type="submit" className="px-4 py-2 bg-red-500 text-white text-sm">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default VideoSection;
