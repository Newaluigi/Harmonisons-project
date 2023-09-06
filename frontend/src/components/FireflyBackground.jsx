import React from "react"

const FireflyBackground = () => {
  const quantity = 82
  const fireflies = []

  for (let i = 1; i <= quantity; i++) {
    fireflies.push(<div key={i} className="firefly"></div>)
  }

  return <div className="firefly-container">{fireflies}</div>
}

export default FireflyBackground
