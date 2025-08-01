import RestuarentCard , {isOpened} from "./RestuarentCard"
import { useContext } from "react"
import { Link } from "react-router-dom"
import Shimmer from "./Shimmer"
import useRestuarents from "../utils/useRestuarents"
import userContext from "../utils/userContext"


const Body = () => {
    let datas = useRestuarents()
    let OpenedRestuarents = isOpened(RestuarentCard)
    const {user, setUserName} = useContext(userContext)

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
                <input type="search" placeholder="Search..." value={user} onChange={((e) => {
                    setUserName(e.target.value)
                })} />
                
            </div>
            <div className="res-container flex flex-wrap justify-center font-sans">

              {
               datas.map((restuarent) => {
                  let resto = restuarent.info

                  return ( <Link className="decoration-[none] text-black" key={resto.id} to={'/restuarent/'+resto.id}>
                    { resto.isOpen ? <OpenedRestuarents restuarent={resto} /> : <RestuarentCard restuarent={resto} /> }
                    </Link>)
                    })
              }
            </div>
        </div>
    )
 
}

export default Body