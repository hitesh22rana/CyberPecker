import React, { Component } from 'react'
import loading from '../loading.gif'

export class spinner extends Component {
    render() {
        return (
            <div>
                <img src={loading} alt="loading" />
            </div>
        )
    }
}

export default spinner
