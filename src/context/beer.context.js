import { createContext, useEffect, useState } from "react";
import axios from 'axios'

const BeerContext = createContext()

const BeerProvider = ({ children }) => {

    const [beers, setBeers] = useState([])




    useEffect(() => {

        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((results) => {
                setBeers(results.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [beers])



 return <BeerContext.Provider value={{ beers, setBeers }} >
            {children}
        </BeerContext.Provider>
}

export { BeerContext, BeerProvider}