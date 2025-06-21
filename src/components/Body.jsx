import { data } from "../utils/data"
import RestuarentCard from "./RestuarentCard"

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search
                
            </div>
            <div className="res-container">

              {
                
               data.restaurants.map((restuarent) => {
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