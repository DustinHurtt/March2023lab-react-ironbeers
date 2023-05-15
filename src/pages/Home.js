import Landing from "../components/Landing"
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'



const Home = () => {
  return (
    <div>

        <Landing src={beers} headline='All Beers' link='/all-beers' />
        <Landing src={newBeer} headline='Random Beer' link='/random-beer' />
        <Landing src={randomBeer} headline='New Beer' link='/add-beer' />

    </div>
  )
}

export default Home