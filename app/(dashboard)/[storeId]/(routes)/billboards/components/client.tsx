"use client"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { BillboardsColumn, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"

interface BillboardsClientProps {
    data: BillboardsColumn[]
}

export const  BillboardsClient: React.FC<BillboardsClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Billboards (${data.length})`} description="Manage billboards for your store"></Heading>
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2 h-4 w-4"></Plus>
                    Add New
                </Button>
            </div>
            <Separator></Separator>
            <DataTable searchKey="label" columns={columns} data={data}></DataTable>
            <Heading title="API" description="API calls for Billboards"></Heading>
            <Separator></Separator>
            <ApiList entityName="billboards" entityIdName="billboardId"></ApiList>
        </>
    )
}