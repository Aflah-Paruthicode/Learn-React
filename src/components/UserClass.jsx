import React from "react";

class UserClass extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            count : 1,
            count2 : 2
        }
    }

    render () {
        return (
            <div>
                <p>heueieu</p>
                <p>second count : {this.state.count2}</p>
                <p>first : {this.state.count}</p>
            </div>
        )
    }

}

export default UserClass