'use client';
import { Flashcard } from "@/components/component/flashcard";
import { ChooseLang } from "@/components/component/chooseLang";
import { Sidebar } from "@/components/component/sidebar";
import { useEffect, useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [lang, setLang] = useState("");


  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full max-w-3xl mx-auto ">
      {!isPlaying ? <ChooseLang setLang={setLang} setIsPlaying={setIsPlaying}></ChooseLang> : <Flashcard language={lang}>
      </Flashcard>}

      <Sidebar setIsPlaying={setIsPlaying} language={lang}></Sidebar>
    </main>
  );
}
