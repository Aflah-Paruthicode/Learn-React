import { useSelector } from "react-redux";
import MenuCard from "./MenuCard";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="text-center mt-32">
            <h1 className="font-bold text-2xl my-2">Cart</h1>
            <div className="max-w-3xl m-auto border text-start mt-4 border-[#cecccc] p-2 rounded-lg">
            {
                cartItems.map((item,index) => {
                    return <MenuCard key={index} item={item} fromCart={true} />
                })
            }
            </div>
        </div>
    )
}

export default Cart;