/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react"

export default class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>{this.props.contact.title}</h2>
              <hr className="star-primary" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 address">
              <div>
                <b>Address: </b>
                {this.props.contact.address}
              </div>
              <div>
                <b>Phone: </b> {this.props.contact.phone_number}
              </div>
              <div>
                <b>Email: </b> {this.props.contact.email}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
