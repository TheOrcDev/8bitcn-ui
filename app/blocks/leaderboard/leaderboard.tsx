"use client";

import { useState } from "react";

import {
  Leaderboard,
  LeaderboardPlayer,
} from "@/components/ui/8bit/leaderboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Sample leaderboard data with fantasy characters
const samplePlayers: LeaderboardPlayer[] = [
  {
    id: "1",
    name: "OrcDev",
    score: 125000,
    isCurrentPlayer: false,
    avatar: "/avatars/orcdev.jpeg",
    avatarFallback: "OD",
  },
  {
    id: "2",
    name: "ShadowMage",
    score: 98500,
    isCurrentPlayer: false,
    avatarFallback: "S",
  },
  {
    id: "3",
    name: "DragonSlayer",
    score: 87500,
    isCurrentPlayer: false,
    avatarFallback: "D",
  },
  {
    id: "4",
    name: "FireWizard",
    score: 76500,
    isCurrentPlayer: false,
    avatarFallback: "F",
  },
  {
    id: "5",
    name: "IceQueen",
    score: 68500,
    isCurrentPlayer: false,
    avatarFallback: "I",
  },
  {
    id: "6",
    name: "You",
    score: 59500,
    isCurrentPlayer: true,
    avatarFallback: "Y",
  },
  {
    id: "7",
    name: "StormKnight",
    score: 55000,
    isCurrentPlayer: false,
    avatarFallback: "S",
  },
  {
    id: "8",
    name: "MoonElf",
    score: 50500,
    isCurrentPlayer: false,
    avatarFallback: "M",
  },
  {
    id: "9",
    name: "ThunderBolt",
    score: 46500,
    isCurrentPlayer: false,
    avatarFallback: "T",
  },
  {
    id: "10",
    name: "CrystalMage",
    score: 42500,
    isCurrentPlayer: false,
    avatarFallback: "C",
  },
  {
    id: "11",
    name: "WindWalker",
    score: 38500,
    isCurrentPlayer: false,
    avatarFallback: "W",
  },
  {
    id: "12",
    name: "EarthGuardian",
    score: 34500,
    isCurrentPlayer: false,
    avatarFallback: "E",
  },
];

export default function LeaderboardBlock() {
  const [maxPlayers, setMaxPlayers] = useState(10);
  const [showRank, setShowRank] = useState(true);
  const [showAvatar, setShowAvatar] = useState(true);

  const toggleMaxPlayers = () => {
    setMaxPlayers(maxPlayers === 10 ? 5 : 10);
  };

  const toggleShowRank = () => {
    setShowRank(!showRank);
  };

  const toggleShowAvatar = () => {
    setShowAvatar(!showAvatar);
  };

  return (
    <div className="space-y-8">
      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Leaderboard Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button onClick={toggleMaxPlayers} variant="outline">
              Max Players: {maxPlayers}
            </Button>
            <Button onClick={toggleShowRank} variant="outline">
              Show Rank: {showRank ? "Yes" : "No"}
            </Button>
            <Button onClick={toggleShowAvatar} variant="outline">
              Show Avatar: {showAvatar ? "Yes" : "No"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Leaderboard Examples</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Leaderboard
            players={samplePlayers}
            maxPlayers={maxPlayers}
            showRank={showRank}
            showAvatar={showAvatar}
            title="HIGH SCORES"
            currentPlayerId="6"
            className="w-full"
          />

          <Leaderboard
            players={samplePlayers.slice(0, 5)}
            maxPlayers={5}
            showRank={true}
            showAvatar={showAvatar}
            title="TOP 5"
            currentPlayerId="6"
            className="w-full"
          />
        </div>
      </div>

      {/* Additional Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Additional Examples</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Leaderboard
            players={samplePlayers}
            maxPlayers={maxPlayers}
            showRank={showRank}
            showAvatar={showAvatar}
            title="HIGH SCORES"
            currentPlayerId="6"
            className="w-full"
          />

          <Leaderboard
            players={samplePlayers.slice(0, 8)}
            maxPlayers={8}
            showRank={true}
            showAvatar={showAvatar}
            title="SCOREBOARD"
            currentPlayerId="6"
            className="w-full"
          />
        </div>
      </div>

      {/* Compact Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Compact Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Leaderboard
            players={samplePlayers.slice(0, 3)}
            maxPlayers={3}
            showRank={true}
            showAvatar={showAvatar}
            title="TOP 3"
            currentPlayerId="6"
            className="w-full"
          />

          <Leaderboard
            players={samplePlayers.slice(0, 5)}
            maxPlayers={5}
            showRank={false}
            showAvatar={showAvatar}
            title="SCORES"
            currentPlayerId="6"
            className="w-full"
          />

          <Leaderboard
            players={samplePlayers.slice(0, 4)}
            maxPlayers={4}
            showRank={true}
            showAvatar={showAvatar}
            title="RANKING"
            currentPlayerId="6"
            className="w-full"
          />
        </div>
      </div>

      {/* Empty State Example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Empty State</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Leaderboard
            players={[]}
            maxPlayers={10}
            showRank={true}
            showAvatar={showAvatar}
            title="NO PLAYERS YET"
            className="w-full"
          />

          <Leaderboard
            players={[]}
            maxPlayers={10}
            showRank={true}
            showAvatar={showAvatar}
            title="EMPTY LEADERBOARD"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
