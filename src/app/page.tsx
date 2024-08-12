"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [iframeSize, setIframeSize] = useState({ width: "100%", height: 800 });

  const handleResize = (device: string) => {
    switch (device) {
      case "pc":
        setIframeSize({ width: "100%", height: 800 });
        break;
      case "tab":
        setIframeSize({ width: "768px", height: 1024 });
        break;
      case "mobile":
        setIframeSize({ width: "375px", height: 667 });
        break;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-5">
      <div className="flex items-center justify-center w-full gap-4 p-24">
        <button
          onClick={() => handleResize("pc")}
          className="rounded p-1 bg-green-400"
        >
          pc
        </button>
        <button
          onClick={() => handleResize("tab")}
          className="rounded p-1 bg-green-400"
        >
          tab
        </button>
        <button
          onClick={() => handleResize("mobile")}
          className="rounded p-1 bg-green-400"
        >
          mobile
        </button>
      </div>
      <iframe
        src="https://tailnext.vercel.app/"
        style={{
          width: iframeSize.width,
          height: iframeSize.height,
        }}
      ></iframe>
    </main>
  );
}
