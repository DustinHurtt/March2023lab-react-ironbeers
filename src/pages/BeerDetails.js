import { useContext, useEffect, useState } from 'react'

import { BeerContext } from '../context/beer.context'

import { useParams } from 'react-router-dom'

import Details from '../components/Details'


const BeerDetails = () => {

    const { beers } = useContext(BeerContext)

    const { id } = useParams()

    const beer = beers.find((beer) => (beer._id === id)) 

  return (  

    <>
        <h1>Beer Details</h1>
        {
            beer ? 

            <Details beer={beer} />

            : <p>Loading...</p>
        }
    </>

  )
}

export default BeerDetails