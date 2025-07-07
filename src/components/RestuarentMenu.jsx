import { useEffect,useState } from "react"
import Shimmer from "./Shimmer"
import MenuCard from "./MenuCard"
import {useParams} from "react-router-dom"
import { MENU_API } from "../utils/constants"
import MenuShimmer from "./MenuShimmer"

const RestuarentMenu = () => {
    const [resInfo,setResInfo] = useState(null)
    useEffect(() => {
        fetchMenu()
    },[])

    const {resId} = useParams()

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId)
        const json = await data.json();
        console.log(json)
        setResInfo(json.data)
    }

    if ( resInfo === null ) return <MenuShimmer />
console.log('hey dyde',resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards)
    return (
        <div className="rootMenu">
        <div className="Menu-body">
            <h1 className="hotel-Name">{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <div className="hotel-Details">
                <p>{`${resInfo?.cards[2]?.card?.card?.info?.avgRating}
                    (${resInfo?.cards[2]?.card?.card?.info?.totalRatingsString}) •
                    ${resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}`}</p>
                <p>{resInfo?.cards[2]?.card?.card?.info?.cuisines?.join(', ')}</p>
                <p>Outlet <span> {resInfo?.cards[2]?.card?.card?.info?.areaName}</span></p>
                <p>{resInfo?.cards[2]?.card?.card?.info?.sla?.slaString}</p>
                </div>
                {
                    
                    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((elem) => {
                        return (
                            <MenuCard 
                            key={elem?.card?.info?.id} 
                            name={elem?.card?.info?.name}
                            price={elem?.card?.info?.defaultPrice || elem?.card?.info?.price}
                            rating={elem?.card?.info?.ratings?.aggregatedRating}
                            description={elem?.card?.info?.description}
                            image={elem?.card?.info?.imageId}
                            isVeg={elem?.card?.info?.itemAttribute?.vegClassifier}
                              />
                        )
                    })
                }
                {
                    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards?.map((elem) => {
                        return (
                            <MenuCard 
                            key={elem?.card?.info?.id} 
                            name={elem?.card?.info?.name}
                            price={elem?.card?.info?.defaultPrice || elem?.card?.info?.price}
                            rating={elem?.card?.info?.ratings?.aggregatedRating}
                            description={elem?.card?.info?.description}
                            image={elem?.card?.info?.imageId}
                            isVeg={elem?.card?.info?.itemAttribute?.vegClassifier}
                              />
                        )
                    })
                }
            
        </div>
        </div>
    )
}

export default RestuarentMenu