import type { Metadata } from "next"

import { tableMetaData } from "@/lib/metadata"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/8bit/table"
import { Separator } from "@/components/ui/separator"

import CodeSnippet from "../code-snippet"
import CopyCommandButton from "../copy-command-button"
import InstallationCommands from "../installation-commands"
import { OpenInV0Button } from "../open-in-v0-button"

export const metadata: Metadata = {
  title: "8-bit Table",
  description: "Displays an 8-bit table component.",
  openGraph: {
    images: tableMetaData,
  },
}

const TablePage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Table</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-table.json`}
          command={"pnpm dlx shadcn@canary add 8bit-table"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays an 8-bit table component.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            8-bit table component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-table" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] mx-auto relative">
          <Table className="w-60 md:w-auto">
            <TableCaption className="text-xs md:text-sm">
              A list of your recent invoices.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="invisible md:visible">Method</TableHead>
                <TableHead className="text-right invisible md:visible">
                  Amount
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell className="invisible md:visible">
                  Credit Card
                </TableCell>
                <TableCell className="text-right invisible md:visible">
                  $250.00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV002</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell className="invisible md:visible">Cash</TableCell>
                <TableCell className="text-right invisible md:visible">
                  $300.00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV003</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell className="invisible md:visible">
                  Credit Card
                </TableCell>
                <TableCell className="text-right invisible md:visible">
                  $250.00
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-table.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/8bit/table"`}</CodeSnippet>

      <CodeSnippet>{`<Table className="w-60 md:w-auto">
  <TableCaption className="text-xs md:text-sm">
    A list of your recent invoices.
  </TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="invisible md:visible">Method</TableHead>
      <TableHead className="text-right invisible md:visible">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell className="invisible md:visible">Credit Card</TableCell>
      <TableCell className="text-right invisible md:visible">$250.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV002</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell className="invisible md:visible">Cash</TableCell>
      <TableCell className="text-right invisible md:visible">$300.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV003</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell className="invisible md:visible">Credit Card</TableCell>
      <TableCell className="text-right invisible md:visible">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`}</CodeSnippet>
    </div>
  )
}

export default TablePage
