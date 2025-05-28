"use client"

import { useState } from "react"
import { Check, Clipboard } from "lucide-react"
import ShikiHighlighter from "react-shiki"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

function countLines(code: string) {
  return code.split("\n").length
}

export default function CodeSnippet({
  children,
}: {
  children: React.ReactNode
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(children as string)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 3000)

    toast.success("Copied to clipboard")
  }

  return (
    <div className="bg-[#121212] rounded-lg overflow-hidden border border-zinc-800 break-all max-h-[400px] overflow-y-scroll  overflow-x-auto">
      <div className="text-white flex justify-between px-2 pl-4 py-2">
        <pre className="text-sm flex items-center">
          <code className="text-white text-nowrap">{children}</code>
        </pre>

        <Button
          variant="secondary"
          size="icon"
          onClick={handleCopy}
          className="absolute z-10 top-2 right-2"
        >
          {copied ? (
            <Check className="size-3" />
          ) : (
            <Clipboard className="size-3" />
          )}
        </Button>
      </div>
    </ScrollArea>
  )
}
