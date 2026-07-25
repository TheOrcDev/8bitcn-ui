"use client";

import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  type UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconDotsVertical,
  IconGripVertical,
  IconTrendingUp,
} from "@tabler/icons-react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type Row,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { useCallback, useId, useMemo, useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { toast } from "sonner";
import { z } from "zod";
import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/8bit/chart";
import { Checkbox } from "@/components/ui/8bit/checkbox";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/8bit/drawer";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/8bit/dropdown-menu";
import { Input } from "@/components/ui/8bit/input";
import { Label } from "@/components/ui/8bit/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/8bit/select";
import { Separator } from "@/components/ui/8bit/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/8bit/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/8bit/tabs";
import { useIsMobile } from "@/hooks/use-mobile";

const SAVE_DELAY_MS = 600;

const nonNegativeIntegerStringSchema = z
  .string()
  .trim()
  .min(1, "This value is required.")
  .regex(/^\d+$/, "Enter a whole number of 0 or greater.");

export const schema = z.object({
  id: z.number(),
  header: z.string().trim().min(1, "Header is required."),
  type: z.string(),
  status: z.string(),
  target: nonNegativeIntegerStringSchema,
  limit: nonNegativeIntegerStringSchema,
  reviewer: z.string(),
});

type DataTableItem = z.infer<typeof schema>;
type EditableNumberField = "limit" | "target";
type UpdateItem = (id: number, changes: Partial<DataTableItem>) => void;

const itemEditSchema = schema.omit({ id: true });
type ItemEditValues = z.infer<typeof itemEditSchema>;
type ItemEditErrors = Partial<Record<keyof ItemEditValues, string>>;

function waitForSave(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, SAVE_DELAY_MS);
  });
}

function getItemEditValues(item: DataTableItem): ItemEditValues {
  return {
    header: item.header,
    limit: item.limit,
    reviewer: item.reviewer,
    status: item.status,
    target: item.target,
    type: item.type,
  };
}

// Create a separate component for the drag handle
function DragHandle({ id }: { id: number }) {
  const { attributes, listeners } = useSortable({
    id,
  });

  return (
    <Button
      {...attributes}
      {...listeners}
      className="size-7 text-muted-foreground hover:bg-transparent"
      type="button"
      variant="ghost"
    >
      <IconGripVertical className="size-3 text-muted-foreground" />
      <span className="sr-only">Drag to reorder</span>
    </Button>
  );
}

function InlineNumberForm({
  field,
  item,
  onUpdate,
}: {
  field: EditableNumberField;
  item: DataTableItem;
  onUpdate: UpdateItem;
}) {
  const [value, setValue] = useState(item[field]);
  const [error, setError] = useState<string>();
  const [isPending, setIsPending] = useState(false);
  const errorId = useId();
  const inputId = `${item.id}-${field}`;
  const label = field === "target" ? "Target" : "Limit";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isPending) {
      return;
    }

    const result = nonNegativeIntegerStringSchema.safeParse(value);

    if (!result.success) {
      setError(result.error.issues[0]?.message ?? `Enter a valid ${label}.`);
      return;
    }

    setError(undefined);
    setIsPending(true);

    try {
      await waitForSave();
      const changes =
        field === "target" ? { target: result.data } : { limit: result.data };
      onUpdate(item.id, changes);
      setValue(result.data);
      toast.success(`${label} saved`);
    } catch {
      setError(`Could not save ${label.toLowerCase()}. Try again.`);
      toast.error(`Could not save ${label.toLowerCase()}`);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form
      aria-busy={isPending}
      className="grid min-w-44 gap-1"
      noValidate
      onSubmit={handleSubmit}
    >
      <Label className="sr-only" htmlFor={inputId}>
        {label}
      </Label>
      <div className="flex items-start gap-2">
        <Input
          aria-describedby={error ? errorId : undefined}
          aria-invalid={Boolean(error)}
          className="w-24"
          disabled={isPending}
          id={inputId}
          inputMode="numeric"
          name={field}
          onChange={(event) => {
            setValue(event.target.value);
            setError(undefined);
          }}
          pattern="[0-9]+"
          required
          value={value}
        />
        <Button disabled={isPending} size="sm" type="submit" variant="outline">
          {isPending ? "Saving..." : "Save"}
        </Button>
      </div>
      {error ? (
        <p className="text-destructive text-xs" id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}

function createColumns(onUpdate: UpdateItem): ColumnDef<DataTableItem>[] {
  return [
    {
      id: "drag",
      header: () => null,
      cell: ({ row }) => <DragHandle id={row.original.id} />,
    },
    {
      id: "select",
      header: ({ table }) => (
        <div className="flex items-center">
          <Checkbox
            aria-label="Select all"
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center justify-center pr-2">
          <Checkbox
            aria-label="Select row"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
          />
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "header",
      header: "Header",
      cell: ({ row }) => (
        <TableCellViewer item={row.original} onUpdate={onUpdate} />
      ),
      enableHiding: false,
    },
    {
      accessorKey: "type",
      header: "Section Type",
      cell: ({ row }) => (
        <div className="min-w-32">
          <Badge>{row.original.type}</Badge>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <Badge>{row.original.status}</Badge>,
    },
    {
      accessorKey: "target",
      header: () => <div className="w-full text-right">Target</div>,
      cell: ({ row }) => (
        <InlineNumberForm
          field="target"
          item={row.original}
          key={`${row.original.id}-target-${row.original.target}`}
          onUpdate={onUpdate}
        />
      ),
    },
    {
      accessorKey: "limit",
      header: () => <div className="w-full text-right">Limit</div>,
      cell: ({ row }) => (
        <InlineNumberForm
          field="limit"
          item={row.original}
          key={`${row.original.id}-limit-${row.original.limit}`}
          onUpdate={onUpdate}
        />
      ),
    },
    {
      accessorKey: "reviewer",
      header: "Reviewer",
      cell: ({ row }) => {
        const isAssigned = row.original.reviewer !== "Assign reviewer";

        if (isAssigned) {
          return row.original.reviewer;
        }

        return (
          <>
            <Label className="sr-only" htmlFor={`${row.original.id}-reviewer`}>
              Reviewer
            </Label>
            <Select
              onValueChange={(reviewer) => {
                onUpdate(row.original.id, { reviewer });
              }}
            >
              <SelectTrigger
                className="w-38 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate"
                id={`${row.original.id}-reviewer`}
              >
                <SelectValue placeholder="Assign reviewer" />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectItem value="Eddie Lake">Eddie Lake</SelectItem>
                <SelectItem value="Jamik Tashpulatov">
                  Jamik Tashpulatov
                </SelectItem>
              </SelectContent>
            </Select>
          </>
        );
      },
    },
    {
      id: "actions",
      cell: () => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
              size="icon"
              type="button"
              variant="ghost"
            >
              <IconDotsVertical />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Make a copy</DropdownMenuItem>
            <DropdownMenuItem>Favorite</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];
}

function DraggableRow({ row }: { row: Row<DataTableItem> }) {
  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.original.id,
  });

  return (
    <TableRow
      className="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
      data-dragging={isDragging}
      data-state={row.getIsSelected() && "selected"}
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  );
}

export function DataTable({ data: initialData }: { data: DataTableItem[] }) {
  const [data, setData] = useState(() => initialData);
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [activeView, setActiveView] = useState("outline");
  const sortableId = useId();
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  );

  const dataIds = useMemo<UniqueIdentifier[]>(
    () => data?.map(({ id }) => id) || [],
    [data]
  );
  const updateItem = useCallback<UpdateItem>((id, changes) => {
    setData((currentData) =>
      currentData.map((item) =>
        item.id === id ? { ...item, ...changes } : item
      )
    );
  }, []);
  const columns = useMemo(() => createColumns(updateItem), [updateItem]);

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setData((currentData) => {
        const oldIndex = dataIds.indexOf(active.id);
        const newIndex = dataIds.indexOf(over.id);
        return arrayMove(currentData, oldIndex, newIndex);
      });
    }
  }

  return (
    <Tabs
      className="w-full flex-col justify-start gap-6"
      onValueChange={setActiveView}
      value={activeView}
    >
      <div className="flex flex-col gap-6 px-4 lg:px-6">
        <Label className="sr-only" htmlFor="view-selector">
          View
        </Label>
        <Select onValueChange={setActiveView} value={activeView}>
          <SelectTrigger
            className="flex @4xl/main:hidden w-fit"
            id="view-selector"
          >
            <SelectValue placeholder="Select a view" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="outline">Outline</SelectItem>
            <SelectItem value="past-performance">Past Performance</SelectItem>
            <SelectItem value="key-personnel">Key Personnel</SelectItem>
          </SelectContent>
        </Select>

        <TabsList className="@4xl/main:flex hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:px-1">
          <TabsTrigger value="outline">Outline</TabsTrigger>
          <TabsTrigger
            className="flex items-center gap-3"
            value="past-performance"
          >
            Past Performance <Badge>3</Badge>
          </TabsTrigger>
          <TabsTrigger
            className="flex items-center gap-3"
            value="key-personnel"
          >
            Key Personnel <Badge>2</Badge>
          </TabsTrigger>
        </TabsList>

        <div className="flex items-center gap-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline">
                <span className="hidden lg:inline">Customize Columns</span>
                <span className="lg:hidden">Columns</span>
                <IconChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {table
                .getAllColumns()
                .filter(
                  (column) =>
                    typeof column.accessorFn !== "undefined" &&
                    column.getCanHide()
                )
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    checked={column.getIsVisible()}
                    className="capitalize"
                    key={column.id}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button aria-label="Add section" size="sm" variant="outline">
            <span className="hidden lg:inline">Add Section</span>
          </Button>
        </div>
      </div>

      <TabsContent
        className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
        value="outline"
      >
        <div className="max-w-screen">
          <DndContext
            collisionDetection={closestCenter}
            id={sortableId}
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={handleDragEnd}
            sensors={sensors}
          >
            <Table variant="borderless">
              <TableHeader className="sticky top-0 z-10 bg-muted">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead colSpan={header.colSpan} key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody className="**:data-[slot=table-cell]:first:w-8">
                {table.getRowModel().rows?.length ? (
                  <SortableContext
                    items={dataIds}
                    strategy={verticalListSortingStrategy}
                  >
                    {table.getRowModel().rows.map((row) => (
                      <DraggableRow key={row.id} row={row} />
                    ))}
                  </SortableContext>
                ) : (
                  <TableRow>
                    <TableCell
                      className="h-24 text-center"
                      colSpan={columns.length}
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </DndContext>
        </div>
        <div className="flex items-center justify-between px-4">
          <div className="hidden flex-1 text-muted-foreground text-sm lg:flex">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="flex w-full items-center gap-8 lg:w-fit">
            <div className="hidden items-center gap-2 lg:flex">
              <Label className="font-medium text-sm" htmlFor="rows-per-page">
                Rows per page
              </Label>
              <Select
                onValueChange={(value) => {
                  table.setPageSize(Number(value));
                }}
                value={`${table.getState().pagination.pageSize}`}
              >
                <SelectTrigger className="w-20" id="rows-per-page">
                  <SelectValue
                    placeholder={table.getState().pagination.pageSize}
                  />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex w-fit items-center justify-center font-medium text-sm">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </div>
            <div className="ml-auto flex items-center gap-3 lg:ml-0">
              <Button
                className="hidden h-8 w-8 p-0 lg:flex"
                disabled={!table.getCanPreviousPage()}
                onClick={() => table.setPageIndex(0)}
                size="icon"
                variant="outline"
              >
                <span className="sr-only">Go to first page</span>
                <IconChevronsLeft />
              </Button>
              <Button
                className="size-8"
                disabled={!table.getCanPreviousPage()}
                onClick={() => table.previousPage()}
                size="icon"
                variant="outline"
              >
                <span className="sr-only">Go to previous page</span>
                <IconChevronLeft />
              </Button>
              <Button
                className="size-8"
                disabled={!table.getCanNextPage()}
                onClick={() => table.nextPage()}
                size="icon"
                variant="outline"
              >
                <span className="sr-only">Go to next page</span>
                <IconChevronRight />
              </Button>
              <Button
                className="hidden size-8 lg:flex"
                disabled={!table.getCanNextPage()}
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                size="icon"
                variant="outline"
              >
                <span className="sr-only">Go to last page</span>
                <IconChevronsRight />
              </Button>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent
        className="flex flex-col px-4 lg:px-6"
        value="past-performance"
      >
        <div className="aspect-video w-full flex-1 border border-dashed" />
      </TabsContent>
      <TabsContent className="flex flex-col px-4 lg:px-6" value="key-personnel">
        <div className="aspect-video w-full flex-1 border border-dashed" />
      </TabsContent>
      <TabsContent
        className="flex flex-col px-4 lg:px-6"
        value="focus-documents"
      >
        <div className="aspect-video w-full flex-1 border border-dashed" />
      </TabsContent>
    </Tabs>
  );
}

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

function TableCellViewer({
  item,
  onUpdate,
}: {
  item: DataTableItem;
  onUpdate: UpdateItem;
}) {
  const isMobile = useIsMobile();
  const formId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [values, setValues] = useState(() => getItemEditValues(item));
  const [errors, setErrors] = useState<ItemEditErrors>({});
  const [formError, setFormError] = useState<string>();

  function handleOpenChange(open: boolean) {
    setIsOpen(open);

    if (open) {
      setValues(getItemEditValues(item));
      setErrors({});
      setFormError(undefined);
    }
  }

  function updateValue(field: keyof ItemEditValues, value: string) {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));
    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: undefined,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isPending) {
      return;
    }

    const result = itemEditSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        header: fieldErrors.header?.[0],
        limit: fieldErrors.limit?.[0],
        target: fieldErrors.target?.[0],
      });
      return;
    }

    setErrors({});
    setFormError(undefined);
    setIsPending(true);

    try {
      await waitForSave();
      onUpdate(item.id, result.data);
      setValues(result.data);
      toast.success("Section saved");
    } catch {
      toast.error("Could not save section");
      setFormError("Could not save changes. Try again.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <Drawer
      direction={isMobile ? "bottom" : "right"}
      onOpenChange={handleOpenChange}
      open={isOpen}
    >
      <DrawerTrigger asChild>
        <Button
          className="w-fit px-0 text-left text-foreground"
          type="button"
          variant="link"
        >
          {item.header}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="gap-1">
          <DrawerTitle>{item.header}</DrawerTitle>
          <DrawerDescription>
            Showing total visitors for the last 6 months
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
          {!isMobile && (
            <>
              <div className="relative border-foreground border-y-6 dark:border-ring">
                <ChartContainer className="rounded-none" config={chartConfig}>
                  <AreaChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                      left: 20,
                      right: 20,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      axisLine={false}
                      dataKey="month"
                      hide
                      tickFormatter={(value) => value.slice(0, 3)}
                      tickLine={false}
                      tickMargin={8}
                    />
                    <ChartTooltip
                      content={<ChartTooltipContent indicator="dot" />}
                      cursor={false}
                    />
                    <Area
                      activeDot={{
                        fill: "var(--chart-active-dot)",
                      }}
                      dataKey="mobile"
                      fill="var(--color-mobile)"
                      fillOpacity={0.6}
                      stackId="a"
                      stroke="var(--color-mobile)"
                      type="natural"
                    />
                    <Area
                      activeDot={{
                        fill: "var(--chart-active-dot)",
                      }}
                      dataKey="desktop"
                      fill="var(--color-desktop)"
                      fillOpacity={0.4}
                      stackId="a"
                      stroke="var(--color-desktop)"
                      type="natural"
                    />
                  </AreaChart>
                </ChartContainer>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -mx-1.5 border-foreground border-x-6 dark:border-ring"
                />
              </div>
              <Separator />
              <div className="grid gap-2">
                <div className="flex gap-2 font-medium leading-none">
                  Trending up by 5.2% this month{" "}
                  <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Showing total visitors for the last 6 months. This is just
                  some random text to test the layout. It spans multiple lines
                  and should wrap around.
                </div>
              </div>
              <Separator />
            </>
          )}
          <form
            aria-busy={isPending}
            className="flex flex-col gap-4"
            id={`${formId}-form`}
            noValidate
            onSubmit={handleSubmit}
          >
            {formError ? (
              <p className="text-destructive text-xs" role="alert">
                {formError}
              </p>
            ) : null}
            <div className="flex flex-col gap-3">
              <Label htmlFor={`${formId}-header`}>Header</Label>
              <Input
                aria-describedby={
                  errors.header ? `${formId}-header-error` : undefined
                }
                aria-invalid={Boolean(errors.header)}
                disabled={isPending}
                id={`${formId}-header`}
                name="header"
                onChange={(event) => {
                  updateValue("header", event.target.value);
                }}
                required
                value={values.header}
              />
              {errors.header ? (
                <p
                  className="text-destructive text-xs"
                  id={`${formId}-header-error`}
                  role="alert"
                >
                  {errors.header}
                </p>
              ) : null}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <Label htmlFor={`${formId}-type`}>Type</Label>
                <Select
                  disabled={isPending}
                  onValueChange={(value) => {
                    updateValue("type", value);
                  }}
                  value={values.type}
                >
                  <SelectTrigger className="w-full" id={`${formId}-type`}>
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Table of Contents">
                      Table of Contents
                    </SelectItem>
                    <SelectItem value="Executive Summary">
                      Executive Summary
                    </SelectItem>
                    <SelectItem value="Technical Approach">
                      Technical Approach
                    </SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                    <SelectItem value="Capabilities">Capabilities</SelectItem>
                    <SelectItem value="Focus Documents">
                      Focus Documents
                    </SelectItem>
                    <SelectItem value="Narrative">Narrative</SelectItem>
                    <SelectItem value="Cover Page">Cover Page</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor={`${formId}-status`}>Status</Label>
                <Select
                  disabled={isPending}
                  onValueChange={(value) => {
                    updateValue("status", value);
                  }}
                  value={values.status}
                >
                  <SelectTrigger className="w-full" id={`${formId}-status`}>
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Done">Done</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Not Started">Not Started</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <Label htmlFor={`${formId}-target`}>Target</Label>
                <Input
                  aria-describedby={
                    errors.target ? `${formId}-target-error` : undefined
                  }
                  aria-invalid={Boolean(errors.target)}
                  disabled={isPending}
                  id={`${formId}-target`}
                  inputMode="numeric"
                  name="target"
                  onChange={(event) => {
                    updateValue("target", event.target.value);
                  }}
                  pattern="[0-9]+"
                  required
                  value={values.target}
                />
                {errors.target ? (
                  <p
                    className="text-destructive text-xs"
                    id={`${formId}-target-error`}
                    role="alert"
                  >
                    {errors.target}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor={`${formId}-limit`}>Limit</Label>
                <Input
                  aria-describedby={
                    errors.limit ? `${formId}-limit-error` : undefined
                  }
                  aria-invalid={Boolean(errors.limit)}
                  disabled={isPending}
                  id={`${formId}-limit`}
                  inputMode="numeric"
                  name="limit"
                  onChange={(event) => {
                    updateValue("limit", event.target.value);
                  }}
                  pattern="[0-9]+"
                  required
                  value={values.limit}
                />
                {errors.limit ? (
                  <p
                    className="text-destructive text-xs"
                    id={`${formId}-limit-error`}
                    role="alert"
                  >
                    {errors.limit}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor={`${formId}-reviewer`}>Reviewer</Label>
              <Select
                disabled={isPending}
                onValueChange={(value) => {
                  updateValue("reviewer", value);
                }}
                value={values.reviewer}
              >
                <SelectTrigger className="w-full" id={`${formId}-reviewer`}>
                  <SelectValue placeholder="Select a reviewer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Eddie Lake">Eddie Lake</SelectItem>
                  <SelectItem value="Jamik Tashpulatov">
                    Jamik Tashpulatov
                  </SelectItem>
                  <SelectItem value="Emily Whalen">Emily Whalen</SelectItem>
                  <SelectItem value="Assign reviewer">
                    Assign reviewer
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
        </div>
        <DrawerFooter>
          <Button disabled={isPending} form={`${formId}-form`} type="submit">
            {isPending ? "Saving..." : "Save changes"}
          </Button>
          <DrawerClose asChild>
            <Button disabled={isPending} type="button" variant="outline">
              Done
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
