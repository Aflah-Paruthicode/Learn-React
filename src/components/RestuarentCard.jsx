const RestuarentCard = ({name, cuisines, areaName, avgRating, deliveryTime, img, price}) => {
    {console.log(cuisines)}
    return (
        <div className="res-card">
            <div className="res-LogoRoot">
                <img className="res-logo" src={`https://media-assets.swiggy.com/${img}`} alt="res-logo" />
                <div className="price-div">
                <h2>{price}</h2>
                </div>
            </div>
            
            <h3>{name}</h3>
            <h4>{avgRating}Stars</h4>
            <h4>{deliveryTime}</h4>
            <p>{cuisines.join(', ')}</p>
            <p>{areaName}</p>
        </div>
    )
}

export default RestuarentCard