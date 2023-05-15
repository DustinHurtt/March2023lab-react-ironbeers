

import { Link } from 'react-router-dom'

const Beers = ({ beer }) => {
  return (
    <Link to={`/beer/${beer._id}`}>
        <img src={beer.image_url} alt='beer' />
        <br />
        <h2>{beer.name}</h2>
        <h3>{beer.tagline}</h3>
        <p>Created by: {beer.contributed_by}</p>
    </Link>
  )
}

export default Beers

// image
// name
// tagline
// contributed_by
// Also, add the link to check the details of each beer. The link should navigate to /beers/:beerId.