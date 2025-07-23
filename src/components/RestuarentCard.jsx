const RestuarentCard = ({name, cuisines, areaName, avgRating, deliveryTime, img, price}) => {
    
    return (
        <div className="res-card p-1.5 w-[400px] font-[poppins] mx-2.5 hover:transform-[scale(0.95)] duration-[0.2s] mb-1 hover:cursor-pointer">
            <div className="res-LogoRoot relative">
                <img className="res-logo w-full h-64 object-cover rounded-2xl" src={`https://media-assets.swiggy.com/${img}`} alt="res-logo" />
                <div className="price-div w-full h-1/2 absolute bottom-0 bg-linear-to-b from-transparent to-black rounded-b-2xl">
                <h2 className="absolute bottom-5 left-8 m-0 font-extrabold tracking-[-1px] text-2xl text-white">{price}</h2>
                </div>
            </div>
            
            <h3 className="m-3 font-bold text-lg">{name}</h3>
            <h4 className="mt-1.5 text-gray-700">{avgRating}Stars</h4>
            <h4 className="mt-1.5 text-gray-700">{deliveryTime}</h4>
            <p className="mt-2 leading-5 text-gray-400">{cuisines.join(', ')}</p>
            <p className="mt-2 leading-5 text-gray-400">{areaName}</p>
        </div>
    )
}

export default RestuarentCard