/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from "react"

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="text-center">
        <div className="footer-above">
          <div className="container">
            <div className="row">
              <div className="footer-col col-md-4">
                <h3>{this.props.footer.location.title}</h3>
                <p>{this.props.footer.location.address}</p>
              </div>
              <div className="footer-col col-md-4">
                <h3>{this.props.footer.social.title}</h3>
                <ul className="list-inline">
                  {this.props.footer.social.social_links.map((social, id) => {
                    return (
                      <li key={id}>
                        <a href={social.url} className="btn-social btn-outline">
                          <span className="sr-only">{social.title}</span>
                          <i className={social.fontawesome_class} />
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="footer-col col-md-4">
                <h3>{this.props.footer.freelancer.title}</h3>
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.props.footer.freelancer.body,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-below">
          <div className="container">
            <div className="row">
              <div>
                <div
                  className="col-lg-12"
                  dangerouslySetInnerHTML={{
                    __html: this.props.footer.copyright,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
