"use client"

import Container from "@/app/components/ui/container";
import getProducts from "@/actions/get-products";
import getBillboard from "@/actions/get-billboards";
import ProductList from "@/app/components/product-list";
import Billboard from "@/app/components/ui/billboard";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("0e12e5cf-29ab-4529-b8d5-c5371dae1f7b");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;