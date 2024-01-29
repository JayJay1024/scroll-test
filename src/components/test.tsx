"use client";

import { useState } from "react";

const array = new Array(20).fill(0);

export default function Test() {
  const [scrollData, setScrollData] = useState({ scrollWidth: 0, clientWidth: 0, scrollLeft: 0 });

  const percent =
    scrollData.clientWidth < scrollData.scrollWidth
      ? (scrollData.scrollLeft * 100) / (scrollData.scrollWidth - scrollData.clientWidth)
      : 0;

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-10 p-5">
      <div className="w-[80vw] h-[40vh] overflow-auto p-5 border border-fuchsia-500 flex items-center custom-scrollbar-1">
        {array.map((_, index) => (
          <div
            key={index}
            className={`shrink-0 flex items-center justify-center w-[10vw] ${
              index % 2 ? "h-[60vh] bg-red-500" : "h-[20vh] bg-green-500"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div
        className="w-[80vw] h-[40vh] overflow-y-hidden overflow-x-scroll p-5 border border-amber-500 flex items-center"
        style={{ scrollbarWidth: "none" }}
        onWheel={(e) => {
          const delta = Math.sign(e.deltaY);
          e.currentTarget.scrollLeft += delta * 10;
          e.preventDefault();
        }}
        onScroll={(e) => {
          const container = e.currentTarget;
          const { scrollWidth, clientWidth, scrollLeft } = container;
          setScrollData({ scrollWidth, clientWidth, scrollLeft });
        }}
      >
        {array.map((_, index) => (
          <div
            key={index}
            className={`shrink-0 flex items-center justify-center w-[10vw] ${
              index % 2 ? "h-[20vh] bg-green-500" : "h-[60vh] bg-red-500"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-5">
        <div className="relative h-2 w-screen bg-green-500">
          <div className="absolute z-10 h-2 top-0 left-0 bg-red-500 w-0 transition-[width]" style={{ width: `${percent}vw` }} />
        </div>
        <span>
          {scrollData.scrollWidth}, {scrollData.clientWidth}, {scrollData.scrollLeft}
        </span>
        <span>{percent.toFixed(2)}%</span>
      </div>
    </main>
  );
}
