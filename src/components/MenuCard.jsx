import ReadMore from "./ReadMore"

const MenuCard = ({name,price,rating,description,image,isVeg}) => {
    console.log('imageeee : ',Object.keys(rating).length)
    return (
        <div className="menuCard-root">
            <div className="menuItem-info">
            {isVeg == 'VEG' ? <h5>•</h5> : <h6>•</h6> }
            <h3>{name}</h3>
            <h4>₹{price / 100}</h4>
            <p><span className="rating">{Object.keys(rating).length > 0 ?`★ ${rating.rating}`:null}</span>
            {Object.keys(rating).length > 0 ?`(${parseInt(rating.ratingCount)})`:null}</p>
            {description !== undefined ? <ReadMore text={description} maxLength={150} /> :<p></p>}
            </div>
            <div className="menuItems-pic">
                {image !== undefined ? <img className="menuPic" src={`https://media-assets.swiggy.com/${image}`} alt={name} /> : <p>Currently Unavailable</p>}
            </div>
        </div>
    )
}

export default MenuCard