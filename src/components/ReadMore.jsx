import { useState } from "react"

const ReadMore = ({text,maxLength = 100}) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const changeExpantion = () => {
        setIsExpanded(!isExpanded)
    }

    const truncatedText = text.slice(0,maxLength)
    const isReadmoreNeeded  = text.length > maxLength
    return (
        <div className="menuDescription">
            <p className="text-gray-600 max-w-[538px]">
                {isExpanded || !isReadmoreNeeded ? text : truncatedText+'...'}
                {
                isReadmoreNeeded && (
                    <button className="bg-none border-none mb-2.5 ml-1.5 font-extrabold [font-feature-settings: normal] text-gray-600" onClick={changeExpantion}>{isExpanded ? 'less' : 'more'}</button>
                )
            }
            </p>
            
        </div>
    )
}

export default ReadMore