import React from 'react'
import './Hour.css'

const Hour = ({temp, rain}) => {
  console.log(temp)

const degree = () => {
  if (temp < 0) {
    return 'zero'
  } else if (temp < 6) {
    return 'five'
  } else if (temp < 11) {
    return 'ten'
  } else if (temp < 16) {
    return 'fifteen'
  } else if (temp < 21) {
    return 'twenty'
  } else if (temp < 26) {
    return 'twenty-five'
  }else if (temp < 31) {
    return 'thirty'
  }else if (temp < 36) {
    return 'thirty-five'
  }else if (temp < 41) {
    return 'forty'
  }else if (temp < 46) {
    return 'forty-five'
  }else if (temp < 51) {
    return 'fifty'
  }else if (temp < 56) {
    return 'fifty-five'
  }else if (temp < 61) {
    return 'sixty'
  }else if (temp < 66) {
    return 'sixty-five'
  }else if (temp < 71) {
    return 'seventy'
  }else if (temp < 76) {
    return 'seventy-five'
  }else if (temp < 81) {
    return 'eighty'
  }else if (temp < 86) {
    return 'eighty-five'
  }else if (temp < 91) {
    return 'ninety'
  }else if (temp < 96) {
    return 'ninety-five'
  }else if (temp < 101) {
    return 'hundred'
  }else if (temp < 106) {
    return 'hundred-five'
  }else if (temp < 111) {
    return 'hundred-ten'
  }else if (temp < 116) {
    return 'hundred-fifteen'
  }else if (temp < 121) {
    return 'hundred-twenty'
  }else if (temp < 126) {
    return 'hundred-twenty-five'
  }else if (temp < 131) {
    return 'hundred-thirty'
  }
}

  return (
    <div>
      <div className={degree()}></div>
    </div>
  )
}

export default Hour
