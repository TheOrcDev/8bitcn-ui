"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/8bit/accordion";
import { Badge } from "@/components/ui/8bit/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { ScrollArea } from "@/components/ui/8bit/scroll-area";
import { cn } from "@/lib/utils";

import "./styles/retro.css";

export type QuestStatus = "active" | "completed" | "failed" | "pending";

export type Quest = {
  id: string;
  title: string;
  description: string;
  status: QuestStatus;
  shortDescription?: string;
};

export type QuestLogProps = {
  quests: Quest[];
  className?: string;
  maxHeight?: string;
  showEmptyState?: boolean;
  emptyStateMessage?: string;
};

const getStatusBadgeVariant = (status: QuestStatus) => {
  switch (status) {
    case "active":
      return "default";
    case "completed":
      return "secondary";
    case "failed":
      return "destructive";
    case "pending":
      return "outline";
    default:
      return "outline";
  }
};

function QuestItem({ quest }: { quest: Quest }) {
  const shortDescription =
    quest.shortDescription ||
    (quest.description.length > 100
      ? `${quest.description.substring(0, 100)}...`
      : quest.description);

  return (
    <AccordionItem
      className="border-foreground border-b-2 dark:border-ring"
      value={quest.id}
    >
      <AccordionTrigger className="px-4 py-3 hover:no-underline">
        <div className="flex w-full items-center gap-3">
          <div className="flex-1 text-left">
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:pr-10">
              <div className="flex flex-col gap-1">
                <h3 className="text-center font-medium text-sm sm:text-left">
                  {quest.title}
                </h3>
                <p className="mt-1 text-muted-foreground text-xs">
                  {shortDescription}
                </p>
              </div>

              <Badge
                className="text-[9px]"
                variant={getStatusBadgeVariant(quest.status)}
              >
                {quest.status.toUpperCase()}
              </Badge>
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-3">
        <div className="pt-2">
          <p className="text-muted-foreground text-xs leading-relaxed">
            {quest.description}
          </p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-4 text-center">
      <p className="text-muted-foreground text-sm">{message}</p>
    </div>
  );
}

export function QuestLog({
  quests,
  className,
  showEmptyState = true,
  emptyStateMessage = "No quests available.",
}: QuestLogProps) {
  const activeQuests = quests.filter((quest) => quest.status === "active");
  const sortedQuests = [
    ...activeQuests,
    ...quests.filter((quest) => quest.status !== "active"),
  ];

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between gap-2 text-base">
          Quest Log
          {activeQuests.length > 0 && (
            <Badge className="ml-2" variant="default">
              {activeQuests.length} Active
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {quests.length === 0 && showEmptyState ? (
          <EmptyState message={emptyStateMessage} />
        ) : (
          <ScrollArea className="h-[400px] w-full">
            <Accordion className="w-full" type="multiple">
              {sortedQuests.map((quest) => (
                <QuestItem key={quest.id} quest={quest} />
              ))}
            </Accordion>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}

export default QuestLog;
