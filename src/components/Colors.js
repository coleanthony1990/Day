import React from 'react'
import Hour from './Hour'

const Colors = ({data}) => {
  console.log(data)
  const hours = data.length !== 0 ? data.days[0].hours.map((hour, index) => {
    return (
      <Hour
        temp={hour.temp}
        key={index}
        rain={hour.precipprob}
        />
    )
  })
  : null


  return (
    <div>
      {hours}
    </div>
  )
}

export default Colors
