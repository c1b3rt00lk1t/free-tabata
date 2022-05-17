import React from 'react'

const VerticalContainer = ({children, classes}) => {
  return (
    <div className={`verticalContainer ${classes}`}>{children}</div>
  )
}

export default VerticalContainer