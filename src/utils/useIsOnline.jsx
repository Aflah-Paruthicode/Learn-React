import { useEffect, useState } from "react"

const useIsOnline = () => {
    const [isOnline,setIsOnline] = useState(true)

    let checkIsOnline = () => {

        window.addEventListener('offline',() => {
            setIsOnline(false);
        })
    
        window.addEventListener('online',() => {
            setIsOnline(true);
        })
    }

    useEffect(() => {
        checkIsOnline();
    },[])

    return isOnline;

}

export default useIsOnline;