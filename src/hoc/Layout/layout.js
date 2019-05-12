import React, { Component } from 'react'

export default class Layout extends Component {

    state = {

    }

    render() {
        return (
            <div>
                Header
                {this.props.children}
                Footer
      </div>
        )
    }
}
