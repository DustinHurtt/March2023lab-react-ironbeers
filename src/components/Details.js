

const Details = ({ beer }) => {
  return (

    <>
        {
            beer ?

        <div>
            <img src={beer.image_url} alt='beer' />
            <br />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>

        : <p>Loading...</p>


        }

    </>
    

  )
}

export default Details


// image
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by
