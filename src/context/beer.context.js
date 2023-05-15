import { createContext, useEffect, useState } from "react";
import axios from 'axios'

const BeerContext = createContext()

const BeerProvider = ({ children }) => {

    const [beers, setBeers] = useState([])




    const getAllBeers = () => {

        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((results) => {
                setBeers(results.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    useEffect(() => {

        getAllBeers()

    }, [])



 return <BeerContext.Provider value={{ beers, getAllBeers }} >
            {children}
        </BeerContext.Provider>
}

export { BeerContext, BeerProvider}