import prismadb from "@/lib/prismadb";
import { ProductForm } from "./components/products-form";

const ProductPage = async ({
    params
} : {
    params: { productId: string, storeId: string }
}) => {
    const product = await prismadb.product.findUnique({
        where: {
            id: params.productId
        },
        include:{
            images:true
        }
    })

    const categories = await prismadb.category.findMany({
        where: {
            storeId: params.storeId
        }
    })

    const size = await prismadb.size.findMany({
        where: {
            storeId: params.storeId
        }
    })

    const colors = await prismadb.color.findMany({
        where: {
            storeId: params.storeId
        }
    })

    return ( 
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductForm categories={categories} colors={colors} sizes={size} initialData={product}></ProductForm>
            </div>
        </div>
     );
}
 
export default ProductPage