import React from 'react';
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-3.mp4' width="100%" height="100%" autoPlay loop muted />
            <h1>MAGIC FOR THE MIND</h1>
            <p>Are you ready for the perfume journey?</p>
            <div className="hero-btns">
                <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn-large' text-decoration-color='blue'>
                    GET STARTED
                </Button>
                <Button className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn-large'>
                    WACTCH GUIDANCE <i className='far fa-play-circle' />
                </Button>
            </div>

        </div>
    )
}
export default HeroSection;