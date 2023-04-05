import React from 'react'

const City = ({city}) => {

  return (
    <div>
      <p className='city-name'>{city.city}, {city.principalSubdivision}, {city.countryCode}</p>
    </div>
  )
}

export default City
