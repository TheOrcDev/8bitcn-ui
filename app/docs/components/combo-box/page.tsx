import { Combobox } from "@/components/ui/8bit/combo-box"
import { Separator } from "@/components/ui/separator"
import CodeSnippet from "@/app/docs/components/code-snippet"
import CopyCommandButton from "@/app/docs/components/copy-command-button"
import InstallationCommands from "@/app/docs/components/installation-commands"
import { OpenInV0Button } from "@/app/docs/components/open-in-v0-button"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
]

export default function ComboBoxPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Combo box</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-combo-box.json`}
          command={"pnpm dlx shadcn@canary add 8bit-combo-box"}
        />
      </div>

      <p className="text-muted-foreground">
        A combobox component with a searchable dropdown for selecting items from
        a list.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit combo box component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="8bit-dropdown-menu" className="w-fit" />
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <Combobox options={fruits} placeholder="Select Fruit..." />
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>
      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/8bit-combo-box.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Combobox } from "@/components/ui/8bit/combo-box"
`}</CodeSnippet>

      <CodeSnippet>{`const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
];

<Combobox options={fruits} placeholder="Select Fruit..." />`}</CodeSnippet>
    </div>
  )
}
