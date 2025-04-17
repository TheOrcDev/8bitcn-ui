import { Press_Start_2P } from "next/font/google"

import { cn } from "@/lib/utils"
import {
  ResizableHandle as ShadcnResizableHandle,
  ResizablePanel as ShadcnResizablePanel,
  ResizablePanelGroup as ShadcnResizablePanelGroup,
} from "@/components/ui/resizable"

const ResizableHandle = ShadcnResizableHandle

function ResizablePanel() {
  return <ResizablePanel />
}

const ResizablePanelGroup = ShadcnResizablePanelGroup

export { ResizablePanel, ResizableHandle, ResizablePanelGroup }
