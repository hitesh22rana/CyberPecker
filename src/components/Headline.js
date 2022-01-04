import React from 'react';
import './Headline.css';

function Headline({bgmode}) {
    return (
        <div className='headline-container'>
            <h1 className='headline-heading' style={bgmode === true ? {color : 'rgba(15,15,14,0.8'} : {color : 'rgba(245, 245, 245, 1)'}}>Headlines</h1>
        </div>
    )
}

export default Headline
