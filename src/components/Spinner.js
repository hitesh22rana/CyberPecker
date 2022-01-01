import React, { Component } from 'react'
import Spinner from '../Spinner.gif'

export class spinner extends Component {
    render() {
        return (
            <div style={{display : 'flex', flexDirection : 'column' , position : 'absolute' , justifyContent : 'flex-start' , alignItems : 'center' , width : '100%' , height : 'auto'}}>
                <img src={Spinner} alt="loading" />

            </div>
        )
    }
}

export default spinner
