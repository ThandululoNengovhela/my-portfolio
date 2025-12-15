"use client";

import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "neon-cursor";
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div data-theme="black" className="min-h-screen">
      {/* Neon cursor */}
      <style jsx global>{`
        body {
          cursor: none;
        }
        .neon-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 14px;
          height: 14px;
          border-radius: 9999px;
          pointer-events: none;
          z-index: 9999;
          background: rgba(99, 102, 241, 0.9);
          box-shadow:
            0 0 10px rgba(99, 102, 241, 0.9),
            0 0 20px rgba(99, 102, 241, 0.7),
            0 0 40px rgba(99, 102, 241, 0.5);
          transform: translate(-50%, -50%);
          transition: transform 0.05s linear;
        }
      `}</style>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-14">
          
          {/* LEFT COLUMN */}
          <div className="flex-1 text-center md:text-left">
            <div className="avatar flex justify-center md:justify-start mb-6">
              <div className="ring-primary ring-offset-indigo-500 w-24 rounded-full ring-2 ring-offset-2">
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </div>
            </div>

            <span className="btn btn-dash text-indigo-500 btn-xs rounded-xl">
              Available for work
            </span>

            <p className="text-neutral-400 mt-2">
              Based in South Africa
            </p>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-tight">
              Hi, I&apos;m Thandululo
            </h1>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold">
              Nengovhela
            </h2>

            <p className="mt-4 text-xl md:text-2xl font-bold text-sky-600">
              Full Stack Developer
            </p>

            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-sm md:text-base text-muted-foreground leading-relaxed font-semibold">
              I&apos;m a Web developer building clean, responsive, high-performance applications.
              I use React and Next.js, turning designs into scalable code.
              With 4 years experience of delivering scalable solutions at a young age.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-1 w-full max-w-xl">
            <div className="rounded-xl border border-border bg-card/30 p-4">
              <a
                href="https://github.com/ThandululoNengovhela"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold block"
              >
                @Thandululo-N
                <span className="ml-2 font-light font-mono text-neutral-500 text-sm">
                  • GitHub
                </span>
              </a>

              <img
                src="https://ghchart.rshah.org/7c3aed/ThandululoNengovhela"
                alt="GitHub Contribution Graph"
                className="mt-4 w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
