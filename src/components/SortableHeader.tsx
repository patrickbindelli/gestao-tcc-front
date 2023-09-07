import {
  ArrowDownNarrowWide,
  ArrowUpDown,
  ArrowUpNarrowWide,
} from "lucide-react";
import { useState } from "react";

interface Columns {
  label: string;
  accessor: string;
  sortable: boolean;
}
export default function SortableHeader({
  columns,
  handleSorting,
}: {
  columns: Columns[];
  handleSorting?: (accessor: string, sortOrder: string) => void;
}) {
  const ICON_SIZE = 16;
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor: string) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting?.(accessor, sortOrder);
  };

  return (
    <tr className="p-2 text-left">
      {columns.map((column, index) => {
        const indvidualOrder = column.sortable
          ? sortField === column.accessor && order === "asc"
            ? "up"
            : sortField === column.accessor && order === "desc"
            ? "down"
            : "default"
          : "";
        return (
          <th
            key={index}
            className="border border-slate-6 p-2 cursor-pointer hover:text-slate-11"
            onClick={() => {
              if (column.sortable) {
                handleSortingChange(column.accessor);
              }
            }}
          >
            <div className="flex items-center gap-2">
              <span>{column.label}</span>
              {column.sortable && (
                <>
                  {indvidualOrder === "up" ? (
                    <ArrowUpNarrowWide size={ICON_SIZE} />
                  ) : indvidualOrder === "down" ? (
                    <ArrowDownNarrowWide size={ICON_SIZE} />
                  ) : (
                    <ArrowUpDown size={ICON_SIZE} />
                  )}
                </>
              )}
            </div>
          </th>
        );
      })}
    </tr>
  );
}
