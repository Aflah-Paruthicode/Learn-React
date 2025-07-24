import { useState } from "react"
const useRestuaSearch = (wholeDatas,value) => {
console.log('hahahahhaha : ',wholeDatas,value)
    let [datas,setDatas] = useState([])
    
            let result = wholeDatas.filter((elem) => {
            let name = elem.info.name.toUpperCase()
            if(name.includes(value.toUpperCase())) {
                return elem
            }
                    })
            setDatas(result)
            return datas
}

export default useRestuaSearch;