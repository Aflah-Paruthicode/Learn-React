import MenuCard from "./MenuCard"

const MenuAccordion = (props) => {

    return (
    <div
    
    className=" shadow-lg border border-[#a3a3a353] p-4 rounded-lg my-2.5 cursor-pointer">
        <div  onClick={() => {
                    props.setShowAccordion(props.showAccordion ? -1 : null) 
            }} 
            className="flex justify-between">
            <h1 className="font-bold">{props.title} ({props.items.length})</h1>
            <h1 className="text-[#a3a3a3] px-5">{props.showAccordion ? "▲" : "▼"}</h1>
            </div>
        {
            props.items.map((elem) => {
                return props.showAccordion && ( 
                <MenuCard key={elem?.card?.info?.id} item={elem?.card?.info} /> )
            })
        }
    </div>
    )
}

export default MenuAccordion