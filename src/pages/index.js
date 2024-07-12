import Head from "next/head";
import { useRef } from 'react';
import SkyratsIcon from "../assets/SkyratsIcon";

export default function Home() {

  const audioRef = useRef();


  const play = () => {
    if (audioRef.current) {

      audioRef.current.play()
    
    } else {
      // Throw error
    }
  }

  return (
    <div className="h-screen flex justify-center align-middle">
      <Head>
        <title>Skyrats</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="my-auto justify-center">
        <h1 className="text-4xl font-bold text-center text-white mb-5">Website em Desenvolvimento</h1>

        <SkyratsIcon className="max-w-md mx-auto" onClick={play} />

        <p className="text-lg mt-5 text-center">Confira nosso instagram: <a style={{color: "grey"}} href="https://instagram.com/skyrats_drones" target="_blank" rel="noreferrer">@skyrats_drones</a></p>
      </div>

      <div>
        <audio ref={audioRef} src="music/Lobby_1hr.mp3" type="audio/mp3" />
      </div>

    </div>
  );
}
