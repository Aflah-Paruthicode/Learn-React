import ReadMore from "./ReadMore"

const MenuCard = (props) => {
    console.log('heh ethiii')
    let {name,price,defaultPrice,ratings,description,imageId,itemAttribute} = props.item
    return (
        <div className="menuCard-root border-b border-[#cecccc] justify-between min-h-[226px] items-center my-4 px-3 py-3 rounded-lg w-full flex">
            <div className="menuItem-info ">
            {itemAttribute?.vegClassifier == 'VEG' ? <h6 className="text-[#00a200]  rounded-md w-4 h-4 mb-4 text-4xl font-black flex justify-center items-center">•</h6> : <h6 className="text-red-700  rounded-md justify-center items-center w-4 h-4 mb-4 text-4xl font-black flex">•</h6> }
            <h3 className="mt-0">{name}</h3>
            <h4>₹{ price !== undefined ? price / 100 : defaultPrice / 100 }</h4>
            <p><span className="rating text-green-600">{Object.keys(ratings?.aggregatedRating).length > 0 ?`★ ${ratings?.aggregatedRating?.rating}`:null}</span>
            {Object.keys(ratings?.aggregatedRating).length > 0 ?`(${parseInt(ratings?.aggregatedRating?.ratingCount)})`:null}</p>
            {description !== undefined ? <ReadMore text={description} maxLength={150} /> :<p></p>}
            </div>
            <div className="menuItems-pic">
                {imageId !== undefined ? <img className="menuPic w-[220px] h-[200px] object-cover" src={`https://media-assets.swiggy.com/${imageId}`} alt={name} /> : <p className="mx-2.5">Currently Unavailable</p>}
            </div>
        </div>
    )
}

export default MenuCard