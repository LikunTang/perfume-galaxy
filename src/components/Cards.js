import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Stop in here for all your perfume needs!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-4.jpg'
                            text='Experience Fresh Water and Breeze from the Seaside'
                            label='Adventure'
                            path='/articles'
                        />

                        <CardItem
                            src='images/img-2.jpg'
                            text='Travel Through the Islands of Flowers in a Private Perfume'
                            label='Luxury'
                            path='/explore'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-14.jpg'
                            text=' Visit Uncharted Secret for tranquility '
                            label='Mystery'
                            path='/explore'
                        />
                        <CardItem
                            src='images/img-7.jpg'
                            text='Explore the Hidden Secret Deep Inside the Fragrance'
                            label='Adventure'
                            path='/explore'
                        />
                        <CardItem
                            src='images/img-5.jpg'
                            text='Feel the Frangrance with Jewelry and Flower'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Explore the Special Bottle and Frangrance with Your Heart '
                            label='Adrenaline'
                            path='/gifts'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
