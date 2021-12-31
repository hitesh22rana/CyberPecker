import React, { Component } from 'react'
import Spinner from '../Spinner.gif'

export class spinner extends Component {
    render() {
        return (
            <div>
                {/* <img src={loading} alt="loading" /> */}
                <img src={Spinner} alt="loading" />

            </div>
        )
    }
}

export default spinner
