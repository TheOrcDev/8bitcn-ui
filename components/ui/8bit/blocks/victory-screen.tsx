import { Card, CardContent } from "@/components/ui/8bit/card";
import { cn } from "@/lib/utils";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/8bit/item";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/8bit/alert";
import Image from "next/image";
import { cva } from "class-variance-authority";

const rarityVariants = cva("", {
  variants: {
    status: {
      common: "text-muted-foreground",
      rare: "text-blue-600",
      epic: "text-purple-600",
      legendary: "text-yellow-500",
      mythic: "text-rose-600",
    },
  },
  defaultVariants: {
    status: "common",
  },
});

export interface VictoryScreenItems {
  id: number;
  name: string;
  rarity: "common" | "rare" | "epic" | "legendary" | "mythic";
  icon?: string;
}

export interface VictoryScreenBattleReport {
  id: number;
  title: string;
  description: string | number;
}
export interface VictoryScreenStats {
  id: number;
  title: string;
  stats: number | string;
}
export interface VictoryScreenProps
  extends React.ComponentPropsWithoutRef<"div"> {
  itemsObtained?: VictoryScreenItems[];
  battleReport?: VictoryScreenBattleReport[];
  stats?: VictoryScreenStats[];
  className?: string;
  showItemIcon?: boolean;
}
function VictoryScreen({
  className,
  itemsObtained,
  stats,
  battleReport,
  showItemIcon = true,
  ...props
}: VictoryScreenProps) {
  return (
    <Card
      data-slot="victoryscreen"
      className={cn("w-full h-full dark:bg-blue-950/10", className)}
      {...props}
    >
      <CardContent>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">VICTORY!</h1>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-around flex-wrap mt-6 gap-y-6 ">
          {stats?.map((stat) => (
            <Alert
              key={stat.id}
              className="max-w-full min-w-3/4 md:min-w-auto p-2"
            >
              <AlertTitle className="text-center text-md md:text-lg font-bold">
                {stat.title}
              </AlertTitle>
              <AlertDescription className="text-xl md:text-2xl font-bold flex justify-center items-center mt-2">
                {stat.stats}
              </AlertDescription>
            </Alert>
          ))}
        </div>

        {itemsObtained && itemsObtained.length > 0 && (
          <div className="flex flex-col items-center justify-center mt-6">
            <h2 className="text-lg text-center font-bold">Items Obtained</h2>

            <ItemGroup className="mt-2 w-[80%]">
              {itemsObtained?.map((item, index) => (
                <div key={item.id}>
                  <Item variant="outline" className="dark:bg-blue-950/50 p-1">
                    <ItemContent className="flex flex-col md:flex-row items-center justify-between gap-2  truncate">
                      <div className="flex flex-row justify-center md:justify-start items-center gap-2 truncate w-full md:max-w-[65%]">
                        {showItemIcon && item.icon && (
                          <Image
                            src={item.icon}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="size-8 object-contain rounded-full"
                          />
                        )}
                        <ItemTitle className="leading-normal retro">
                          {item.name}{" "}
                        </ItemTitle>
                      </div>
                      <ItemDescription
                        className={cn(rarityVariants({ status: item.rarity }))}
                      >
                        {item.rarity}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  {index < itemsObtained.length - 1 && <ItemSeparator />}
                </div>
              ))}
            </ItemGroup>
          </div>
        )}
        {battleReport && battleReport.length > 0 && (
          <div className="flex flex-col items-center justify-center mt-6">
            <h2 className="text-lg text-center font-bold">Battle Report</h2>

            <ItemGroup className="mt-2 w-[80%]">
              {battleReport?.map((report, index) => (
                <div key={report.id}>
                  <Item
                    variant="outline"
                    className="dark:bg-blue-950/50  p-1 truncate"
                  >
                    <ItemContent className="flex flex-col flex-wrap  md:flex-row items-center justify-between w-full gap-2">
                      <div className="flex items-center justify-center md:justify-start w-full md:max-w-[65%] ">
                        <ItemTitle className="leading-normal text-center">
                          {report.title}
                        </ItemTitle>
                      </div>
                      <ItemDescription>{report.description}</ItemDescription>
                    </ItemContent>
                  </Item>
                  {index < battleReport.length - 1 && <ItemSeparator />}
                </div>
              ))}
            </ItemGroup>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default VictoryScreen;
