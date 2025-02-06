"use client"
import Image from "next/image";
import styles from "./page.module.css";
import cardData from "./data/cards.json";
import { useEffect, useState } from "react";

export default function Home() {
  const [playerPosition, setPlayerPosition] = useState(2);
  const [playerProgress, setPlayerProgress] = useState(0);

  let playerActionable = true;
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if(!playerActionable) {
        return;
      }
      switch (event.key) {
        case 'a':
          playerActionable = false;
          handlePlayerProgress(100);
          setTimeout(() => {
            setPlayerPosition(playerPosition - 1);
            playerActionable = true;
          }, 200);
          break;
        case 'd':
          playerActionable = false;
          handlePlayerProgress(100);
          setTimeout(() => {
            setPlayerPosition(playerPosition + 1);
            playerActionable = true;
          }, 200);
          break;
        case 'q':
          console.log('q'); 
          break;
        case '1':
          console.log('1');
          break;
        case '2':
          console.log('2');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [playerPosition]);

  const handlePlayerProgress = (duration: number) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress+=10;
      setPlayerProgress(progress);
      
      if (progress >= duration) {
        setPlayerProgress(0);
        clearInterval(interval);
        return;
      }
    }, 1);

    return () => clearInterval(interval);
  }


  const player = (
    <div className={styles.player}></div>
  )

  const playerProgressBar = (
    <div className={styles.playerProgressBar}>
      <div style={{width: `${playerProgress}%`}}/>
    </div>
  )

  const mapSize = 9;
  const map = []
  for (let i = 0; i < mapSize; i++) {
    map.push(
      <div className={styles.tiles} key={i}>
        {i === playerPosition && playerProgressBar}
        {i === playerPosition && player}
      </div>
    );
  }
  

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.fightContainer}>
          {map}
        </div>
      </main>
    </div>
  );
}
