"use client";
import * as React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SearchIcon } from "lucide-react";
import { Label } from "@/components/ui/label";

import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { TableCellSkeleton } from "../components/Skeletons/TableCellSkeleton";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  coinList: TData[];
  // eslint-disable-next-line
  getMoreData: any;
  skeletonLoader: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  getMoreData,
  coinList,
  skeletonLoader,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={getMoreData}
      hasMore={
        data.length !== coinList.length &&
        table.getRowModel().rows?.length &&
        columnFilters.length === 0
          ? true
          : false
      }
      scrollThreshold="200px"
      loader={
        data.length !== coinList.length && columnFilters.length === 0 ? (
          <div className="flex justify-center items-center py-2">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-3 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-periwinkle-blue"
              role="status"
            ></div>
          </div>
        ) : (
          <></>
        )
      }
    >
      <div className="flex items-center md:justify-end justify-center mb-1">
        <div className="flex shadow-xs items-center light:border-0 rounded-sm pl-3 border border-white/15 light:bg-white dark:bg-black-russian">
          <Label htmlFor="coinTableSearch">
            <SearchIcon className="size-4 shrink-0 opacity-50 text-background" />
          </Label>
          <Input
            id="coinTableSearch"
            placeholder="Search a coin in the table"
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm border-0 shadow-none placeholder:text-muted-foreground flex h-10 w-full rounded-sm focus-visible:border-0 focus-visible:ring-0 light:bg-white dark:bg-black-russian py-3 text-sm text-background disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>
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
          {skeletonLoader ? (
            <>
              <TableRow>
                <TableCellSkeleton />
                <TableCellSkeleton />
                <TableCellSkeleton />
                <TableCellSkeleton />
                <TableCellSkeleton />
                <TableCellSkeleton />
                <TableCellSkeleton />
                <TableCellSkeleton />
                <TableCellSkeleton />
                <TableCellSkeleton />
              </TableRow>
            </>
          ) : (
            <>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    className="hover:shadow-sm light:hover:bg-periwinkle-blue/20 hover:bg-violet-blue/15 transition-all ease-in duration-150"
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="p-4 text-sm font-[500] truncate text-background"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow className="border-0 bg-black-russian hover:shadow-sm light:hover:bg-periwinkle-blue/20 hover:bg-violet-blue/15  transition-all ease-in duration-150">
                  <TableCell
                    colSpan={columns.length}
                    className="h-10 text-center p-4 py-6 text-sm font-[500] text-background"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </>
          )}
        </TableBody>
      </Table>
    </InfiniteScroll>
  );
}
