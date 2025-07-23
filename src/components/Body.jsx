import { data } from "../utils/data"
import RestuarentCard from "./RestuarentCard"
import { Link } from "react-router-dom"
import Shimmer from "./Shimmer"
import useRestuarents from "../utils/useRestuarents"

const Body = () => {
    let datas = useRestuarents()

    return datas.length === 0 ? (
            <div className="body mt-32">
            <div className="res-container flex flex-wrap justify-center font-sans">
                <Shimmer /> <Shimmer />
                <Shimmer /> <Shimmer />
                <Shimmer /> <Shimmer />
                <Shimmer /> <Shimmer />
            </div>
            </div>
        ) : (
        <div className="body mt-32 font-[poppins]">
            <div className="Search m-12">
                <input type="search" placeholder="Search..." onChange={((e) => {
                })} />
                
            </div>
            <div className="res-container flex flex-wrap justify-center font-sans">

              {
               datas.map((restuarent) => {
                  let resto = restuarent.info
                if(resto.aggregatedDiscountInfoV3?.header) {

                  return ( <Link className="decoration-[none] text-black" key={resto.id} to={'/restuarent/'+resto.id}><RestuarentCard 
                   key={resto.id}
                   name={resto.name}
                   cuisines={resto.cuisines}
                   areaName={resto.areaName}
                   avgRating={resto.avgRating}
                   deliveryTime={resto.sla.slaString}
                   img={resto.cloudinaryImageId}
                   price={resto.aggregatedDiscountInfoV3.header+" "+resto.aggregatedDiscountInfoV3.subHeader}
                    /></Link>)
                } else {
                  return ( <Link className="decoration-[none] text-black" key={resto.id} to={'/restuarent/'+resto.id}><RestuarentCard 
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