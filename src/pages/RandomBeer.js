
import { useContext, useEffect, useState } from "react"
import { BeerContext } from "../context/beer.context"
import Details from "../components/Details"


const RandomBeer = () => {

    const { beers } = useContext(BeerContext)

    const beer = beers[Math.floor(Math.random() * beers.length)]

  return (
    <>
        <h1>Random Beer</h1>
        {
            beer ? 

            <Details beer={beer} />

            : <p>Loading...</p>
        }
    </>
  )
}

export default RandomBeer