import { data } from "../utils/data"
import RestuarentCard from "./RestuarentCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

const Body = () => {
    let [datas,setDatas] = useState([])

    const isMobile = () => {
        return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    };

        const mobile = isMobile();
        const url = mobile
      ? 'https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=11.2488425&lng=75.78392099999999&carousel=true&third_party_vendor=1'
      : 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2488425&lng=75.78392099999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

     let fetchData = async () => {
        try {
            let data = await fetch(url)
            let json = await data.json()
    
            setDatas(json?.data?.cards?.find(
            (c) => c.card?.card?.gridElements?.infoWithStyle?.restaurants
            )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
            console.log('data : ',datas)
        } catch (err) {
            console.log('error : ',err)
        }
    } 
    
    useEffect(()=>{
        
        fetchData()
    }, [])

    return datas.length === 0 ? (
            <div className="body">
            <div className="res-container">
                <Shimmer /> <Shimmer />
                <Shimmer /> <Shimmer />
                <Shimmer /> <Shimmer />
                <Shimmer /> <Shimmer />
            </div>
            </div>
        ) : (
        <div className="body">
            <div className="Search">
                <input type="search" placeholder="Search..." onChange={((e) => {
                    let result = data.filter((elem) => {
                        let name = elem.info.name.toUpperCase()
                        if(name.includes(e.target.value.toUpperCase())) {
                            return elem
                        }
                    })
                    setDatas(result)
                })} />
                
            </div>
            <div className="res-container">

              {
               datas.map((restuarent) => {
                  let resto = restuarent.info
                if(resto.aggregatedDiscountInfoV3?.header) {

                  return ( <RestuarentCard 
                   key={resto.id}
                   name={resto.name}
                   cuisines={resto.cuisines}
                   areaName={resto.areaName}
                   avgRating={resto.avgRating}
                   deliveryTime={resto.sla.slaString}
                   img={resto.cloudinaryImageId}
                   price={resto.aggregatedDiscountInfoV3.header+" "+resto.aggregatedDiscountInfoV3.subHeader}
                    />)
                } else {
                  return ( <RestuarentCard 
                   key={resto.id}
                   name={resto.name}
                   cuisines={resto.cuisines}
                   areaName={resto.areaName}
                   avgRating={resto.avgRating}
                   deliveryTime={resto.sla.slaString}
                   img={resto.cloudinaryImageId}
                    />)
                }
                    
                    })
              }
            </div>
        </div>
    )
 
}

export default Body