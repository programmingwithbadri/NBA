import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/home'

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        )
    }
}
