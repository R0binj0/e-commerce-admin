"use client"

import { ColumnDef } from "@tanstack/react-table"
import { useState } from "react";
import { Row } from "@tanstack/react-table"; 
import axios from "axios";

export type OrdersColumn = {
  id: string
  phone: string
  address: string
  isPaid: boolean
  isSent: boolean
  totalPrice: string
  products: string
  createdAt: string
}

function SentCell({ row }: { row: Row<OrdersColumn> }) {
  const [isChecked, setIsChecked] = useState(row.original.isSent);

  const handleCheckboxChange = async () => {
    try {
      setIsChecked(!isChecked);

      const storeId = "4658eab3-508b-4592-b37f-b690924842d9";
      const orderId = row.original.id;
      const url = `/api/${storeId}/isSent/${orderId}`;

      await axios.post(url, {
        isSent: !isChecked,
      });

      console.log('Update successful');
    } catch (error) {
      console.error('Error:', error);
      setIsChecked(!isChecked);
    }
  };

  return (
    <input className="w-8" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
  );
}

export const columns: ColumnDef<OrdersColumn>[] = [
  {
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "totalPrice",
    header: "Total price",
  },
  {
    accessorKey: "isPaid",
    header: "Paid",
  },
  {
    accessorKey: "isSent",
    header: "Sent",
    cell: SentCell,
  },
]
