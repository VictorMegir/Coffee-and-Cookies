import './style/PopUp.css';
import React from 'react';

function PopUp({id, setID, content})
{ 
    return (
        <>
        { content._id === id ? (
            <div className='overlay'>
                <div className='popup'>
                    <i className="fa close-button" onClick={() => setID(0)}>&#xf00d;</i>
                    <img className='item-image' src={content.image} alt='Not Found'/>
                    <div className='item-description'>{content.description}</div>
                </div>
            </div>
        ) : (
            null
        )}
        </>
    );
}

export default PopUp;