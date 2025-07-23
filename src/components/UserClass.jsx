import React from "react";

class UserClass extends React.Component {
    
    constructor (props) {
        super(props)
         console.log(props.name+'fff')
        this.state = {
            count : 1,
            count2 : 0
        }
        console.log(`${this.props.name} Child Constructor`)
    }

     componentDidMount () {
        console.log(this.props.name +'Child ConponentDidMount')
    }


    render () {
        console.log(this.props.name +'Child Render')
        return ( 
            <div>
             
                <p>the name that we made : {this.props.name}</p>
                <p>second count : {this.state.count2}</p>
                <p>first : {this.state.count}</p>
                <button onClick={() => {
                    this.setState({
                        count2:this.state.count2+5
                    })
                }}>on chch</button>
            </div>
        )
    } 

}

export default UserClass