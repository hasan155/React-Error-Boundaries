import React, { Component } from 'react'

function Hero({heroName}) {
    if(heroName === 'joker') {
        throw new Error ('You are wrong!')
    }
    return (
        <div>
           <h1>{heroName}</h1>
        </div>
    )
}

export default Hero;