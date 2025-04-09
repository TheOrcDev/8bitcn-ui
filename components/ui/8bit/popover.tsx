import {
  Popover as ShadcnPopover,
  PopoverContent as ShadcnPopoverContent,
  PopoverAnchor as ShadcnPopoverAnchor,
  PopoverTrigger as ShadcnPopoverTrigger,
} from "@/components/ui/popover";
import { Press_Start_2P } from "next/font/google";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
});

const Popover = ShadcnPopover;

const PopoverTrigger = ShadcnPopoverTrigger;

const PopoverAnchor = ShadcnPopoverAnchor;

const PopoverContent = ShadcnPopoverContent;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
