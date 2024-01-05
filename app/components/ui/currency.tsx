"use client"

import { useEffect, useState } from "react"

const formatter = new Intl.NumberFormat("en-US",{
    style: 'currency',
    currency: 'USD'
})
interface CurrencyProps{
    value?:string|number

}

const Currency:React.FC<CurrencyProps> = ({value}) => {
    //mounted used for preventing hydration error caused by formatter
    const [isMounted,setIsMounted]=useState(false)
    useEffect(()=>{
        setIsMounted(true)
    },[])//[] is a dependency array
    if(!isMounted){
        return null
    }
    return ( 
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
     );
}
 
export default Currency;