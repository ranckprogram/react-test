import React, { Component } from 'react'

import {BrowserRouter  } from "react-router-dom";

import { renderRoutes } from "react-router-config";

import routes from "./config"




class Route extends Component {
    render() {
        return (
            <div>
                Route
                {/* <Login />
                <Manage /> */}
                <BrowserRouter>
                    {renderRoutes(routes)}
                </BrowserRouter>
            </div>
        )
    }
}

export default Route