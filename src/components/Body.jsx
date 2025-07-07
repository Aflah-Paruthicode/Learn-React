import { data } from "../utils/data";
import RestuarentCard from "./RestuarentCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTUARENT_MOB_API,RESTUARENT_WEB_API } from "../utils/constants";

const Body = () => {
    let [datas,setDatas] = useState([])

    const isMobile = () => {
        return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    };

        const mobile = isMobile();
        const url = mobile
      ? RESTUARENT_MOB_API
      : RESTUARENT_WEB_API ;

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

                  return ( <Link key={resto.id} to={'/restuarent/'+resto.id}><RestuarentCard 
                   
                   name={resto.name}
                   cuisines={resto.cuisines}
                   areaName={resto.areaName}
                   avgRating={resto.avgRating}
                   deliveryTime={resto.sla.slaString}
                   img={resto.cloudinaryImageId}
                   price={resto.aggregatedDiscountInfoV3.header+" "+resto.aggregatedDiscountInfoV3.subHeader}
                    /></Link>)
                } else {
                  return ( <Link key={resto.id} to={'/restuarent/'+resto.id}> <RestuarentCard 
                   key={resto.id}
                   name={resto.name}
                   cuisines={resto.cuisines}
                   areaName={resto.areaName}
                   avgRating={resto.avgRating}
                   deliveryTime={resto.sla.slaString}
                   img={resto.cloudinaryImageId}
                    /></Link>)
                }
                    
                    })
              }
            </div>
        </div>
    )
 
}

export default Body