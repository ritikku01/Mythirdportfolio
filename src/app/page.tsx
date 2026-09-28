"use client";

import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Prevent scroll when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <main className="bg-[#121212] min-h-screen text-white">
      <h1 className="sr-only">Ritik Kashyap - Full Stack Software Developer, AI & ML Expert</h1>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader
            progress={progress}
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      <Navbar />
      <ScrollyCanvas
        onProgress={setProgress}
        onLoaded={() => setProgress(100)}
      />
      <section aria-label="Portfolio Projects">
        <Projects />
      </section>
      <footer className="p-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Ritik Kashyap. All rights reserved.</p>
        <nav aria-label="Legal Links">
            <a href="/privacy" className="mx-2">Privacy Policy</a>
            <a href="/terms" className="mx-2">Terms of Service</a>
        </nav>
      </footer>
    </main>
  );
}