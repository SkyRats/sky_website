'use client'

import Head from "next/head";
import { useRef } from 'react';
import SkyratsIcon from "./svg_js_exports/SkyratsIcon";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const play = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error("Audio playback error:", error);
      }
    } else {
      console.error("Audio element ref is not available.");
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <Head>
        <title>Skyrats</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="my-auto justify-center">
        <h1 className="text-4xl font-bold text-center text-white mb-5">Website em Desenvolvimento</h1>
        <SkyratsIcon className="max-w-md mx-5" onClick={play} />
        <p className="text-lg mt-5 text-center">Confira nosso instagram: <a style={{color: "grey"}} href="https://instagram.com/skyrats_drones" target="_blank" rel="noreferrer">@skyrats_drones</a></p>
      </div>

      <div>
        {/* Remove the 'type' prop. 
          It's not a valid prop on the <audio> element in React's types.
          The browser will infer the type from the 'src' file extension (.mp3).
        */}
        <audio ref={audioRef} src="lobby_1hr.mp3" />
      </div>

    </div>
  );
}