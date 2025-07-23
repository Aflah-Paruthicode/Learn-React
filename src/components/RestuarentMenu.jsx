import MenuCard from "./MenuCard"
import {useParams} from "react-router-dom"
import MenuShimmer from "./MenuShimmer"
import useRestuarentMenu from "../utils/useRestuarentMenu"

const RestuarentMenu = () => {

    const {resId} = useParams()
    const resInfo = useRestuarentMenu(resId)

    if ( resInfo === null ) return <MenuShimmer />
    return (
        <div className="rootMenu w-full flex justify-center mt-32">
        <div className="Menu-body w-[840px] font-sans font-normal mb-36">
            <h1 className="hotel-Name text-2xl font-bold">{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <div className="hotel-Details border border-[18px] w-full [border-image-source:linear-gradient(to_top,#ababab70,#ffffff)] [border-image-slice:1] [border-image-repeat:stretch] p-4 mb-10 font-bold">
                <p>{`${resInfo?.cards[2]?.card?.card?.info?.avgRating}
                    (${resInfo?.cards[2]?.card?.card?.info?.totalRatingsString}) •
                    ${resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}`}</p>
                <p>{resInfo?.cards[2]?.card?.card?.info?.cuisines?.join(', ')}</p>
                <p>Outlet <span className="font-normal"> {resInfo?.cards[2]?.card?.card?.info?.areaName}</span></p> 
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