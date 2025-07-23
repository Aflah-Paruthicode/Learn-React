import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestuarentMenu = (resId) => {

    const [ restInfo, setRestInfo ] = useState(null)

    useEffect(() => {
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId)
        const json = await data.json()
        setRestInfo(json.data)
    }

    return restInfo

}

export default useRestuarentMenu