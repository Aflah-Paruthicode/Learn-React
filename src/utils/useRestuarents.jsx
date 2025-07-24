import { RESTUARENT_MOB_API, RESTUARENT_WEB_API } from "../utils/constants"
import { useEffect, useState } from "react"

const useRestuarents =  () => {
    let [datas,setDatas] = useState([])

    const isMobile = () => {
        return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    };

        const mobile = isMobile();
        const url = mobile ?
        RESTUARENT_MOB_API :
        RESTUARENT_WEB_API;

     let fetchData = async () => {
        try {
            let data = await fetch(url)
            let json = await data.json()
        
            setDatas(json?.data?.cards?.find(
            (c) => c.card?.card?.gridElements?.infoWithStyle?.restaurants
            )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
            console.log('data : ',json)
        } catch (err) {
            console.log('error : ',err)
        }
    } 
    
    useEffect(()=>{
        
        fetchData()
    }, [])

    return datas
}

export default useRestuarents