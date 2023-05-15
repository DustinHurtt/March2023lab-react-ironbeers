
import { useContext, useEffect, useState } from "react"
import { BeerContext } from "../context/beer.context"
import Details from "../components/Details"


const RandomBeer = () => {

    const { beers } = useContext(BeerContext)

    const [theseBeers, setTheseBeers] = useState([...beers])

    const [beer, setBeer] = (useState(null))

    const getBeer = () => {
        return theseBeers[Math.floor(Math.random() * beers.length)]
    }

    useEffect(() => {

        setBeer(getBeer())

    }, [beer])



  return (
    <>
        <h1>Random Beer</h1>
        {
            theseBeers ? 

            <Details beer={beer} />

            : <p>Loading...</p>
        }
    </>
  )
}

export default RandomBeer