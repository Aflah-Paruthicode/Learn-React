import UserClass from "./userClass"
import { Component } from "react"

 class AboutUs extends Component {

    constructor (props) {
        super(props)
        console.log('Parent Constructor')
    }

    componentDidMount () {
        console.log('Parent ConponentDidMount')
    }

    render() {
        console.log('Parent Render')
        return (
        <div className="about mt-32">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur aeniam, totam quae facilis maiores tempore animi. Nihil maxime eum provident quia, laudantium quas adipisci incidunt? Itaque.
            </p>
            <UserClass name={'first'} shortOf={`'d'inu 'a'flu 's'alu bus'h'ra-ra'h'man`} />
            <UserClass name={'second'} shortOf={`'d'inu 'a'flu 's'alu bus'h'ra-ra'h'man`} />
            <UserClass name={'third'} shortOf={`'d'inu 'a'flu 's'alu bus'h'ra-ra'h'man`} />
            <p>hfhfhfhfd what the heck is happening in this code</p> 
        </div>
    )   
    }
}

export default AboutUs