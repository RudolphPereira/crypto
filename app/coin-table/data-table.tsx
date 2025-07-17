"use client";
import * as React from "react";

import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <Table className="border-separate border-spacing-y-2.5">
      <TableHeader className="[&_tr]:border-b-0">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow
            key={headerGroup.id}
            className="bg-transparent hover:bg-transparent"
          >
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id} className="px-0">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody className="[&_tr]:bg-black-russian">
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              className=" hover:shadow-lg hover:bg-violet-blue/15 transition-all ease-in duration-150"
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className="p-4 text-sm font-[500] truncate"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow className="border-0 bg-black-russian">
            <TableCell
              colSpan={columns.length}
              className="h-24 text-center p-4 py-6 text-sm font-[500]"
            >
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
