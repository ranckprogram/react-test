import React, {Component} from 'react'
import Login from '../Login'
import Manage from '../Manage'

class Route extends Component {
    render (){
        return (
            <div>
                Route
                <Login />
                <Manage/>   
                </div>
        )
    }
}

export default Route