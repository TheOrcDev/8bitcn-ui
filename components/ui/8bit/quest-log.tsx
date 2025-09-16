"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

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

import "./styles/retro.css";

export type QuestStatus = "active" | "completed" | "failed" | "pending";

export interface Quest {
  id: string;
  title: string;
  description: string;
  status: QuestStatus;
  shortDescription?: string;
}

export interface QuestLogProps {
  quests: Quest[];
  className?: string;
  maxHeight?: string;
  showEmptyState?: boolean;
  emptyStateMessage?: string;
}

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
      className="border-b-2 border-foreground dark:border-ring"
      value={quest.id}
    >
      <AccordionTrigger className="hover:no-underline py-3 px-4">
        <div className="flex items-center gap-3 w-full">
          <div className="flex-1 text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between sm:pr-10 gap-3">
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium text-center sm:text-left">
                  {quest.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {shortDescription}
                </p>
              </div>

              <Badge
                variant={getStatusBadgeVariant(quest.status)}
                className="text-[9px]"
              >
                {quest.status.toUpperCase()}
              </Badge>
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-3">
        <div className="pt-2">
          <p className="text-xs text-muted-foreground leading-relaxed">
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
      <p className="text-sm text-muted-foreground">{message}</p>
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
        <CardTitle className="flex items-center gap-2 text-base justify-between">
          Quest Log
          {activeQuests.length > 0 && (
            <Badge variant="default" className="ml-2">
              {activeQuests.length} Active
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {quests.length === 0 && showEmptyState ? (
          <EmptyState message={emptyStateMessage} />
        ) : (
          <ScrollArea className="w-full h-[400px]">
            <Accordion type="multiple" className="w-full">
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
