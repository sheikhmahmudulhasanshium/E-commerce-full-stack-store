import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/app/components/gallery";
import ProductList from "@/app/components/product-list";
import Container from "@/app/components/ui/container";

interface ProductPageProps{
    params:{
        productId:string
    }
}
const ProductPage:React.FC<ProductPageProps> = async({params}) => {
    {/**Get individual product after clicking expand */}
    const product=await getProduct(params.productId)
    const suggestedProducts=await getProducts({
        categoryId:product?.category?.id
    })
    return ( 
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/**Gallery */}
                        <Gallery images={product.images}/>
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        {/**Info */}
                        Info
                        </div>
                        <hr className="my-10"/>
                        <ProductList title="Related Items" items={suggestedProducts}/>
                    </div>
                </div>
            </Container>
        </div>
    );
}
 
export default ProductPage;