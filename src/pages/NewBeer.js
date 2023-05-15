
import { useState, useContext } from 'react'
import { BeerContext } from '../context/beer.context'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

export const NewBeer = () => {
    
    const navigate = useNavigate()

    const { beers, getAllBeers } = useContext(BeerContext)

    const [ newBeer, setNewBeer ] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    })


    const handleTextChange = (e) => {
        setNewBeer((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleNumberChange = (e) => {
        setNewBeer((prev) => ({...prev, [e.target.name]: Number(e.target.value)}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then((results) => {
                console.log(results.data.message)
                getAllBeers()
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                navigate('/all-beers')
            })

    }




  return (
    <div>
        <form onSubmit={handleSubmit}>

            <label>Name</label>
            <input name='name' value={newBeer.name} onChange={handleTextChange} type='text' ></input>

            <label>Tagline</label>
            <input name='tagline' value={newBeer.tagline} onChange={handleTextChange} type='text' ></input>

            <label>Description</label>
            <input name='description' value={newBeer.description} onChange={handleTextChange} type='text' ></input>

            <label>First Brewed</label>
            <input name='first_brewed' value={newBeer.first_brewed} onChange={handleTextChange} type='text' ></input>

            <label>Brewers Tipd</label>
            <input name='brewers_tips' value={newBeer.brewers_tips} onChange={handleTextChange} type='text' ></input>

            <label>Attenuation Level</label>
            <input name='attenuation_level' value={newBeer.attenuation_level} onChange={handleNumberChange} type='number'></input>

            <label>contributed By</label>
            <input name='contributed_by' value={newBeer.contributed_by} onChange={handleTextChange} type='text'></input>

            <button type='submit'>Add Beer</button>

        </form>
    </div>
  )
}

export default NewBeer


// name - must be type text
// tagline - must be type text
// description - must be type text
// first_brewed - must be type text
// brewers_tips - must be type text
// attenuation_level - must be type number !!!
// contributed_by - must be type text
// Why we pointed out the type? Well, since we al