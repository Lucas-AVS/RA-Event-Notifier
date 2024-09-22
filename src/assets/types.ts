import { GameExtended } from "@retroachievements/api";

export interface Achievement {
    id: number;
    title: string;
    description: string;
    points: number;
    trueRatio: number;
    author: string;
    dateCreated: string;
    dateModified: string;
    badgeName: string;
    badgeUrl: string;
  }
  
  export interface Console {
    id: number;
    title: string;
  }
  
  export interface AotWConfig {
    achievement: Achievement;
    console: Console;
    startAt: string;
    game: GameExtended | null;
  }
  