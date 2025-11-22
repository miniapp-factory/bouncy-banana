"use client";
import { description, title } from "@/lib/metadata";
import Game from "@/components/game";
import { useState, useEffect } from "react";
import { generateMetadata } from "@/lib/farcaster-embed";


export default function Home() {
  const [choice, setChoice] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '1') setChoice('start');
      else if (e.key === '2') setChoice('level');
      else if (e.key === '3') setChoice('exit');
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);
  // NEVER write anything here, only use this page to import components
  return (
    <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
      <span className="text-2xl">{title}</span>
      <span className="text-muted-foreground">{description}</span>
      {choice === null && (
        <div className="mt-6 text-center">
          <p>Press a key to choose:</p>
          <p>[1] Start</p>
          <p>[2] Level</p>
          <p>[3] Exit</p>
        </div>
      )}
      {choice === 'start' && <Game />}
      {choice === 'level' && <p className="mt-4">Choose level...</p>}
      {choice === 'exit' && <p className="mt-4">Exiting...</p>}
    </main>
  );
}
