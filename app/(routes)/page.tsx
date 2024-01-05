import getBillboard from "@/actions/get-billboards";
import BillBoard from "../components/billboard";
import Container from "../components/ui/container";
import getProducts from "@/actions/get-products";
import ProductList from "../components/product-list";
//prevent caching
export const revalidate=0
const HomePage = async() => {
    const products=await getProducts({isFeatured:true})
    const billboard=await getBillboard("c26860b0-4f30-41ec-98ab-b8308f376f83")
    
    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <BillBoard data={billboard}/>
            
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products}/>
                </div>
            </div>
        </Container>
     );
}
 
export default HomePage;