import './style/LandingPage.css';
import React from 'react-dom';

function LandingPage()
{
    return (
        <>
        <div className='landing-page'>
            <div className='left-side'>
                <div className='large-text'>Coffee and Cookies</div>
                <div className='medium-text'>Start your day with a warm cup of coffee over some nice cookies.</div>
                <div className='small-text'>We will deliver the coffee and cookies of your choice right to your home or to your office.</div>
                <div className='button-container'>
                    <a href='#form'><button>Order Here</button></a>
                </div>
            </div>
            <div className='right-side'>
                <img src='https://i.imgur.com/splog1l.jpg' alt='Not Found' className='page-image' />
            </div>
        </div>
        </>
    );
}

export default LandingPage;
