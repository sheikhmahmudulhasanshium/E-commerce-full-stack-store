import getBillboard from "@/actions/get-billboards";
import BillBoard from "../components/billboard";
import Container from "../components/ui/container";
//prevent caching
export const revalidate=0
const HomePage = async() => {
    const billboard=await getBillboard("c26860b0-4f30-41ec-98ab-b8308f376f83")
    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <BillBoard data={billboard}/>
            </div>
        </Container>
     );
}
 
export default HomePage;