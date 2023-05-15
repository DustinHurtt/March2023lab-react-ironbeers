import { useContext } from "react"
import { BeerContext } from "../context/beer.context"
import Beers from "../components/Beers"

export const AllBeer = () => {


    const { beers } = useContext(BeerContext)


  return (
    <div>
        {beers.length ? 
        
            beers.map((beer) => {
                return (
                    <Beers beer={beer} />
                )
            })
        
        : <p>Loading... </p>
        }
    </div>
  )
}

export default AllBeer


// image
// name
// tagline
// contributed_by
// Also, add the link to check the details of each beer. The link should navigate to /beers/:beerId.
