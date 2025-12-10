import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/8bit/avatar";
import { cva } from "class-variance-authority";
import { ScrollArea } from "@/components/ui/8bit/scroll-area";

const truncate = (
  str: string | null | undefined,
  length: number
): string | null => {
  if (!str || str.length <= length) return str ?? null;
  return `${str.slice(0, length - 3)}...`;
};

const statusVariants = cva("w-2 h-2 flex-shrink-0", {
  variants: {
    status: {
      // IN-GAME (Red Glow)
      ingame: `
                bg-[#ff0055] border-[#ff0055] 
                shadow-[0_0_6px_#ff0055]
            `,
      // ONLINE (Neon Green Glow)
      online: `
                bg-[#00ff00] border-[#00ff00] 
                shadow-[0_0_6px_#00ff00]
            `,
      // AWAY (Yellow Glow)
      away: `
                bg-[#ffea00] border-[#ffea00] 
                shadow-[0_0_6px_#ffea00]
            `,
      // OFFLINE (No Glow/Subtle Dark Shadow)
      offline: `
                bg-[#5d6063] border-[#33363a] 
                shadow-[0_0_2px_#5d6063]
            `,
      default: `
                bg-[#5d6063] border-[#33363a] 
                shadow-[0_0_2px_#5d6063]
            `,
    },
  },
  defaultVariants: {
    status: "default",
  },
});

const playerCardVariants = cva(
  "flex items-center justify-between sm:p-3  p-2 rounded-lg transition-all duration-200 min-w-[150px] overflow-hidden",
  {
    variants: {
      status: {
        default: "bg-muted/50 hover:bg-muted",
      },
    },
  }
);

export interface FriendListPlayer {
  id: number;
  name: string;
  status: "online" | "ingame" | "away" | "offline";
  avatar?: string;
  avatarFallback?: string;
  activity?: string;
}
export interface FriendListProps extends React.ComponentPropsWithoutRef<"div"> {
  players: FriendListPlayer[];
  className?: string;
  showstatus?: boolean;
  showactivity?: boolean;
}
export default function FriendList({
  className,
  showstatus = true,
  showactivity = true,
  players,
  ...props
}: FriendListProps){
  return (
    <div
      className={cn("flex flex-col gap-6 w-full h-full", className)}
      {...props}
    >
      <Card data-slot="friend-list" font={"retro"}>
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl  text-center gap-2">
            Friends (
            {
              players.filter(
                (player) =>
                  player.status === "online" || player.status === "ingame"
              ).length
            }
            /{players.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 px-1  min-w-[150px]">
          <ScrollArea className="h-[400px]">
            <div className="space-y-2 mx-8">
              {players.map((player) => (
                <div
                  key={player.id}
                  className="relative rounded-none border-y-4 border-foreground dark:border-ring"
                >
                  <div
                    className="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none"
                    aria-hidden="true"
                  />
                  <div
                    className={cn(playerCardVariants({ status: "default" }))}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar
                        variant="pixel"
                        font="retro"
                        className="size-6 md:size-10"
                      >
                        <AvatarImage src={player.avatar} alt={player.name} />
                        <AvatarFallback className="retro text-[5px] md:text-sm">
                          {player.avatarFallback ||
                            player.name?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-4">
                          <span className="font-medium truncate retro text-xs hidden sm:inline">
                            {truncate(player.name, 20)}
                          </span>
                          <span className="font-medium truncate retro sm:hidden text-xs md:text-sm">
                            {truncate(player.name, 12)}
                          </span>
                        </div>
                        {/* Status and Activity Line */}
                        <div className="flex items-center text-xs">
                          {/* Status Indicator Dot */}
                         <div
                            className={cn(
                              "w-2 h-2 mr-1 mt-[2px]",
                              statusVariants({ status: player.status })
                            )}
                            aria-label={`Status: ${player.status}`}
                          ></div>

                          {/* Status Text (e.g., ONLINE) */}
                          {showstatus && (
                            <span
                              className={cn(
                                `uppercase font-retro mr-1 mt-1 text-[9px] `
                              )}
                            >
                              {player.status?.toUpperCase()}
                            </span>
                          )}

                          {/* Activity Text (Optional) */}
                          {player.activity && showactivity && (
                            <>
                              <span
                                className={`text-muted-foreground italic mt-1 text-[9px] md:hidden `}
                              >
                                {truncate(player.activity, 20)}
                              </span>
                              <span
                                className={`text-muted-foreground italic mt-1 text-[9px] hidden md:inline `}
                              >
                                {truncate(player.activity, 30)}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
