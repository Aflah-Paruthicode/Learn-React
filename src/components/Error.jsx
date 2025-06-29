import { useRouteError } from "react-router-dom"

const Error = () => {
    let err = useRouteError()
    return (
        <div>
            <h1>{err.status}</h1>
            <p>This path is not available at the moment !</p>
        </div>
    )
}

export default Error