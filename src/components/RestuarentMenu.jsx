import {useParams} from "react-router-dom"
import { useState } from "react"
import MenuShimmer from "./MenuShimmer"
import useRestuarentMenu from "../utils/useRestuarentMenu"
import MenuAccordion from "./MenuAccordion"

const RestuarentMenu = () => {

    const {resId} = useParams()
    const resInfo = useRestuarentMenu(resId)
    const [showAccordionIndex, setShowAccordionIndex] = useState(0)
    const restuarentInfo = resInfo?.cards[2]?.card?.card?.info

    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cate) => {
        return cate.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    })
    
    console.log(categories)

    if ( resInfo === null ) return <MenuShimmer />
    return (
        <div className="rootMenu w-full flex justify-center mt-32">
        <div className="Menu-body w-[840px] font-sans font-normal mb-36">
            <h1 className="hotel-Name text-2xl font-bold">{restuarentInfo?.name}</h1>
            <div className="hotel-Details border border-[18px] w-full [border-image-source:linear-gradient(to_top,#ababab70,#ffffff)] [border-image-slice:1] [border-image-repeat:stretch] p-4 mb-10 font-bold">
                <p>{`${restuarentInfo?.avgRating}
                    (${restuarentInfo?.totalRatingsString}) •
                    ${restuarentInfo?.costForTwoMessage}`}</p>
                <p>{restuarentInfo?.cuisines?.join(', ')}</p>
                <p>Outlet <span className="font-normal"> {restuarentInfo?.areaName}</span></p> 
                <p>{restuarentInfo?.sla?.slaString}</p>
                </div>
            {
                
                categories.map((elem, index) => {
                    return (
                        <MenuAccordion 
                        key={elem?.card?.card?.title} 
                        title={elem?.card?.card?.title} 
                        items={elem?.card?.card?.itemCards}
                        showAccordion={showAccordionIndex == index ? true : false}
                        setShowAccordion={() => setShowAccordionIndex(index)}
                         />
                    )
                })
            }
             
            
        </div>
        </div>
    )
}

export default RestuarentMenu