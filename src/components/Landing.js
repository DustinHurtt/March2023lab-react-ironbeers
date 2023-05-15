import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Landing = ({ src, headline, link }) => {

    const [text, setText] = useState('')



    useEffect(() => {
        axios.get('https://dinoipsum.com/api/?format=text&paragraphs=1')
            .then((results) => {
                setText(results.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    





  return (
    <div>
        <Link to={link} >
            <img src={src} alt='home' />
            <h1>{headline}</h1>
            <p>{text}</p>
            <br />
            <hr />
        </Link>
    </div>
  )
}

export default Landing