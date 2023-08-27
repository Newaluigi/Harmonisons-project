import React from "react"

const FireflyBackground = () => {
  const quantity = 82 // Set the quantity
  const fireflies = []

  for (let i = 1; i <= quantity; i++) {
    fireflies.push(<div key={i} className="firefly"></div>)
  }

  return <div className="firefly-container">{fireflies}</div>
}

export default FireflyBackground
