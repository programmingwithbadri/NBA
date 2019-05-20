import React, { Component } from 'react';
import './layout.css'

import Header from '../../components/header/header'

export default class Layout extends Component {

    state = {

    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                Footer
             </div >
        )
    }
}
