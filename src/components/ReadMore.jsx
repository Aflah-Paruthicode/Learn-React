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
            <p>
                {isExpanded || !isReadmoreNeeded ? text : truncatedText+'...'}
                {
                isReadmoreNeeded && (
                    <button onClick={changeExpantion}>{isExpanded ? 'less' : 'more'}</button>
                )
            }
            </p>
            
        </div>
    )
}

export default ReadMore