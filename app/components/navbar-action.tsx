"use client"

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import Button from "./ui/button";


const NavbarActions = () => {
//our cart will use local storage to preserve the amount of item in the cart. to prevent hydration mount will be used 
const [isMounted,setIsMounted]=useState(false)
useEffect(()=>{
    setIsMounted(true)
},[])

    const router=useRouter()
    const cart=useCart()

    if(!isMounted){
        return null
    }
    return ( 
        <div className="ml-auto flex-center gap-x-4">
            <Button onClick={()=>router.push("/cart")} className="flex items-center rounded-full bg-black px-4 py-2">
                <ShoppingBag size={20} color="white"/>
                <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
            </Button>
        </div>
     );
}
 
export default NavbarActions;