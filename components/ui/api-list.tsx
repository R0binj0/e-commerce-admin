"use client"

import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import { ApiAlert } from "@/components/ui/api-alert";

interface ApiListProps {
    entityName: string;
    entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
    entityName,
    entityIdName,
}) => {
    const params = useParams()
    const origin = useOrigin()
    const baseUrl = `${origin}/api/${params.storeId}`;

    return (
        <>
            <ApiAlert title="GET" variant="public" description={`${baseUrl}/${entityName}`}></ApiAlert>
            <ApiAlert title="GET" variant="public" description={`${baseUrl}/${entityName}/{${entityIdName}}`}></ApiAlert>
            <ApiAlert title="POST" variant="admin" description={`${baseUrl}/${entityName}`}></ApiAlert>
            <ApiAlert title="PATCH" variant="admin" description={`${baseUrl}/${entityName}/{${entityIdName}}`}></ApiAlert>
            <ApiAlert title="DELETE" variant="admin" description={`${baseUrl}/${entityName}/{${entityIdName}}`}></ApiAlert>
        </>
    )
}