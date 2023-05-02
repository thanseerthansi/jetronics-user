import React, { createContext, useEffect, useState } from 'react'
import Callaxios from './Callaxios';

export const Simplecontext = createContext();
export default function Simplecontextprovider({children}) {
    const [contactdata,setcontactdata] = useState()
    const [productdata,setproductdata]=useState([]);
    const  [searchvalue,setsearchvalue]=useState("") 
    useEffect(() => {
        Getproduct()
        Getcontact()
    }, [])
    const Getproduct =async()=>{
        let data = await Callaxios("get","product/product/")
        // console.log("dataprodvuct",data)
        if (data.status===200){
            setproductdata(data.data)
        }
    }
    const Getcontact=async()=>{
        try {
            let data = await Callaxios("get","product/contact/")
            // console.log("contaxct",data)
            if(data.status===200){
                setcontactdata(data.data[0])
            }
        } catch (error) {
            
        }
    }
    return (
    <Simplecontext.Provider value={{
        productdata,searchvalue,setsearchvalue,contactdata
    }}>{children}</Simplecontext.Provider>
    )
}