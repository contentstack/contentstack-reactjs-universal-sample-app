/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react"
import orderBy from "lodash/orderBy"

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolio: this.props.portfolio.portfolo_details,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    switch (e.target.textContent) {
      case "A-Z":
        this.setState({
          portfolio: orderBy(this.state.portfolio, ["title"], ["ase"]),
        })
        break
      case "Z-A":
        this.setState({
          portfolio: orderBy(this.state.portfolio, ["title"], ["desc"]),
        })
        break
      default:
        this.setState({ portfolio: this.props.portfolio.portfolo_details })
    }
  }

  render() {
    return (
      <section id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>{this.props.portfolio.title}</h2>
              <hr className="star-primary" />
            </div>
            <div className="row col-lg-8 text-left">
              <div
                className="dropdown"
                style={{ marginTop: "-95px", marginLeft: "15px" }}
              >
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  Filter By <span className="caret" />
                </button>
                <ul className="dropdown-menu">
                  {this.props.select.map((val, i) => (
                    <li
                      key={i}
                      className="dropdown-list"
                      value={val}
                      onClick={this.handleClick}
                    >
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            {this.state.portfolio.map((folio, i) => {
              return (
                <div key={i} className="col-sm-4 portfolio-item">
                  <a
                    href={`#${folio.hash_link}`}
                    className="portfolio-link"
                    data-toggle="modal"
                  >
                    <div className="caption">
                      <div className="caption-content">
                        <i className="fa fa-search-plus fa-3x" />
                      </div>
                    </div>
                    <div>
                      <img
                        src={folio.image.url}
                        className="img-responsive"
                        alt={folio.image.filename}
                      />
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
