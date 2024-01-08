import {create} from 'zustand'
import { persist,createJSONStorage } from 'zustand/middleware'
import { Product } from '@/type'
import toast from 'react-hot-toast'
interface CartStore{
    items:Product[],
    //get individual product and work with that
    addItem:(data:Product)=>void,
    removeItem:(id:string)=>void,
    removeAll:()=>void,
    
}
const usePreviewModal=create(
    //create store

    persist<CartStore>((set,get)=>({
        items:[],
        addItem:(data:Product)=>{
            const currentItems=get().items
            const existingItem=currentItems.find((item)=>item.id===data.id)
            if(existingItem){
                return toast("Item already in cart.")
            }
            set({items:[...get().items,data]})
            toast.success("Item added to cart.")
        },
        removeItem:(id:string)=>{
            set({items:[...get().items.filter((item)=>item.id !==id)]})
            toast.success("Item removed from the cart.")
        },
        removeAll:()=>set({items:[]}),

    }),{
        name:"cart-storage",
        storage:createJSONStorage(()=>localStorage)
    })
)

export default usePreviewModal