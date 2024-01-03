"use client"

import { ShoppingBag } from "lucide-react";
import Button from "./ui/button";
import { useEffect, useState } from "react";


const NavbarActions = () => {
//our cart will use local storage to preserve the amount of item in the cart. to prevent hydration mount will be used 
const [isMounted,setIsMounted]=useState(false)
useEffect(()=>{
    setIsMounted(true)
},[])

    if(!isMounted){
        return null
    }
    return ( 
        <div className="ml-auto flex-center gap-x-4">
            <Button className="flex items-center rounded-full bg-black px-4 py-2">
                <ShoppingBag size={20} color="white"/>
                <span className="ml-2 text-sm font-medium text-white">0</span>
            </Button>
        </div>
     );
}
 
export default NavbarActions;