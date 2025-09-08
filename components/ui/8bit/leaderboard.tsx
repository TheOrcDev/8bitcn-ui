import * as React from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/8bit/avatar";
import { Badge } from "@/components/ui/8bit/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Separator } from "@/components/ui/8bit/separator";

import "./styles/retro.css";

export interface LeaderboardPlayer {
  id: string;
  name: string;
  score: number;
  rank?: number;
  isCurrentPlayer?: boolean;
  avatar?: string;
  avatarFallback?: string;
}

export interface LeaderboardProps extends React.ComponentProps<"div"> {
  players: LeaderboardPlayer[];
  maxPlayers?: number;
  showRank?: boolean;
  showAvatar?: boolean;
  className?: string;
  title?: string;
  currentPlayerId?: string;
}

const playerItemVariants = cva(
  "flex items-center justify-between p-3 rounded-lg transition-all duration-200",
  {
    variants: {
      rank: {
        default: "bg-muted/50 hover:bg-muted",
        first:
          "bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border-2 border-yellow-400 hover:from-yellow-400/30 hover:to-yellow-600/30",
        second:
          "bg-gradient-to-r from-gray-300/20 to-gray-500/20 border-2 border-gray-400 hover:from-gray-300/30 hover:to-gray-500/30",
        third:
          "bg-gradient-to-r from-amber-600/20 to-amber-800/20 border-2 border-amber-600 hover:from-amber-600/30 hover:to-amber-800/30",
        current: "bg-primary/20 border-2 border-primary hover:bg-primary/30",
      },
    },
    defaultVariants: {
      rank: "default",
    },
  }
);

const rankBadgeVariants = cva(
  "flex items-center justify-center size-8 text-sm font-bold",
  {
    variants: {
      rank: {
        default: "bg-muted text-muted-foreground",
        first:
          "bg-gradient-to-br from-yellow-400 to-yellow-600 text-yellow-900 shadow-lg",
        second:
          "bg-gradient-to-br from-gray-300 to-gray-500 text-gray-900 shadow-lg",
        third:
          "bg-gradient-to-br from-amber-600 to-amber-800 text-amber-100 shadow-lg",
        current: "bg-primary text-primary-foreground",
      },
    },
    defaultVariants: {
      rank: "default",
    },
  }
);

function getRankVariant(
  rank: number,
  isCurrentPlayer: boolean
): "default" | "first" | "second" | "third" | "current" {
  if (isCurrentPlayer) return "current";
  if (rank === 1) return "first";
  if (rank === 2) return "second";
  if (rank === 3) return "third";
  return "default";
}

function formatScore(score: number): string {
  return score.toLocaleString();
}

function getRankIcon(rank: number): string {
  switch (rank) {
    case 1:
      return "🥇";
    case 2:
      return "🥈";
    case 3:
      return "🥉";
    default:
      return rank.toString();
  }
}

export function Leaderboard({
  players,
  maxPlayers = 10,
  showRank = true,
  showAvatar = true,
  className,
  title = "LEADERBOARD",
  currentPlayerId,
  ...props
}: LeaderboardProps) {
  // Sort players by score (descending) and assign ranks
  const sortedPlayers = React.useMemo(() => {
    return players
      .sort((a, b) => b.score - a.score)
      .slice(0, maxPlayers)
      .map((player, index) => ({
        ...player,
        rank: index + 1,
        isCurrentPlayer: currentPlayerId
          ? player.id === currentPlayerId
          : player.isCurrentPlayer,
      }));
  }, [players, maxPlayers, currentPlayerId]);

  return (
    <Card
      data-slot="leaderboard"
      className={className}
      font={"retro"}
      {...props}
    >
      {title && (
        <CardHeader>
          <CardTitle className="text-center">{title}</CardTitle>
        </CardHeader>
      )}

      <CardContent className="space-y-5">
        <div className="space-y-2">
          {sortedPlayers.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p className="retro text-sm">No players yet</p>
            </div>
          ) : (
            sortedPlayers.map((player) => {
              const rankVariant = getRankVariant(
                player.rank!,
                player.isCurrentPlayer!
              );

              return (
                <div
                  key={player.id}
                  className={cn(
                    playerItemVariants({ rank: rankVariant }),
                    "retro"
                  )}
                >
                  <div className="flex items-center gap-3">
                    {showAvatar && (
                      <Avatar variant="pixel" font="retro" className="size-10">
                        {player.avatar && (
                          <AvatarImage src={player.avatar} alt={player.name} />
                        )}
                        <AvatarFallback className="retro text-xs">
                          {player.avatarFallback ||
                            player.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    )}

                    {showRank && !showAvatar && (
                      <div
                        className={cn(rankBadgeVariants({ rank: rankVariant }))}
                      >
                        <span className="text-xs">
                          {getRankIcon(player.rank!)}
                        </span>
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-4">
                        <span
                          className={cn(
                            "font-medium truncate retro text-xs md:text-sm",
                            player.isCurrentPlayer && "text-primary font-bold"
                          )}
                        >
                          {player.name}
                        </span>
                        {player.isCurrentPlayer && (
                          <Badge className="text-[9px]">YOU</Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "font-bold retro text-xs md:text-sm",
                        rankVariant === "first" && "text-yellow-600",
                        rankVariant === "second" && "text-gray-600",
                        rankVariant === "third" && "text-amber-700",
                        player.isCurrentPlayer && "text-primary"
                      )}
                    >
                      {formatScore(player.score)}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <Separator />

        {sortedPlayers.length > 0 && (
          <div className="mt-4 pt-4">
            <p
              className={cn("text-xs text-muted-foreground text-center retro")}
            >
              Showing top {Math.min(sortedPlayers.length, maxPlayers)} players
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default Leaderboard;
