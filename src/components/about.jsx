/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react"

export default class About extends React.Component {
  render() {
    return (
      <section id="about" className="success">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>{this.props.about.title}</h2>
              <hr className="star-light" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-lg-offset-2">
              <p>{this.props.about.left_description}</p>
            </div>
            <div className="col-lg-4">
              <p>{this.props.about.right_description}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
