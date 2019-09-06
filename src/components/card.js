import React from "react"
import Img from "gatsby-image"

function card(props) {
  const { cardTitle, cardSubtitle, link, image, technologies } = props
  return (
    <div className="col-lg-4">
      <div className="card mx-3 my-5">
        <Img className="img" fluid={image} alt={cardTitle} />
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p className="card-text">{cardSubtitle}</p>
          <div className="card-skills">
            {technologies.map(tech => {
              return <span className="card-skill">{tech}</span>
            })}
          </div>
          <a href={link} className="card-link">
            See
          </a>
        </div>
      </div>
    </div>
  )
}

export default card
