import { Link } from 'react-router-dom'


const Navbar = () => {


    return (
        <nav>

            <Link to='/'>Home</Link>
            <Link to='/all-beers'>All Beers</Link>
            <Link to='/random-beer'>Random Beer</Link>
            <Link to='/add-beer'>New Beer</Link>

        </nav>
    )
}

export default Navbar