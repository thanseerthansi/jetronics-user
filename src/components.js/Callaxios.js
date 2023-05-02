import axios from 'axios'
import React from 'react'
import { BaseURL } from './Baseurl'

export default async function Callaxios(action,url,datalist) {
    try {
        
        // accesscheck()
        // console.log("action",datalist)
        // console.log("url",BaseURL+url)
        let data
        if (action === "get"){

            data = await axios.get(BaseURL+url,{params:datalist})
        }else{
            // console.log("postdata")
            data = await axios(
                {
                    method:action,
                    url:BaseURL+url,
                    data:datalist
                }
            )
            // console.log("data",data)
        }
        
        return data
    } catch (error) {
        return error
    }
}
