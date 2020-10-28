/* eslint-disable react/no-array-index-key */
/* eslint-disable func-names */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from "react"
import Layout from "../components/layout.jsx"
import Portfolio from "../components/portfolio.jsx"
import Contact from "../components/contact.jsx"
import About from "../components/about.jsx"
import Blogs from "../components/blogs.jsx"
import Stack from "../sdk/entry"

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entry: {},
      header: undefined,
      footer: undefined,
      blogs: undefined,
    }
  }

  async componentDidMount() {
    const header = await Stack.getEntry("header", "en-us")
    const footer = await Stack.getEntry("footer", "en-us")
    const result = await Stack.getEntry("home", "en-us")
    const blogs = await Stack.getEntryWithRef("blog_posts", "author", "en-us")
    this.setState({
      header: header[0][0],
      footer: footer[0][0],
      entry: result[0][0],
      blogs: blogs[0],
    })
  }

  render() {
    return (
      <Layout
        header={this.state.header}
        footer={this.state.footer}
        property={this.props}
      >
        {this.state.entry.hasOwnProperty("banner") ? (
          <header>
            <div id="maincontent" className="container" tabIndex="-1">
              <div className="row">
                <div className="col-lg-12">
                  <div>
                    <img
                      src={this.state.entry.banner.image.url}
                      alt={this.state.entry.banner.image.filename}
                      className="img-responsive"
                    />
                  </div>
                  <div className="intro-text">
                    <h1 className="name">
                      {this.state.entry.banner
                        ? this.state.entry.banner.title
                        : ""}
                    </h1>
                    <hr className="star-light" />
                    <span className="skills">
                      {this.state.entry.banner
                        ? this.state.entry.banner.description
                        : ""}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </header>
        ) : (
          ""
        )}
        {this.state.entry.portfolio ? (
          <Portfolio
            portfolio={this.state.entry.portfolio}
            select={this.state.entry.select}
          />
        ) : (
          ""
        )}
        {this.state.blogs ? <Blogs blogs={this.state.blogs} /> : ""}
        {this.state.entry.about ? <About about={this.state.entry.about} /> : ""}
        {this.state.entry.contact ? (
          <Contact contact={this.state.entry.contact} />
        ) : (
          ""
        )}
        {/* <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) --> */}
        <div className="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
          <a className="btn btn-primary" href="#page-top">
            <i className="fa fa-chevron-up" />
          </a>
        </div>
        {/* <!-- Portfolio Modals --> */}
        {this.state.entry.portfolio
          ? this.state.entry.portfolio.portfolo_details.map(function (
              folio,
              i
            ) {
              return (
                <div key={i}>
                  <div
                    id={folio.hash_link}
                    className="portfolio-modal modal fade"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-content">
                      <div className="close-modal" data-dismiss="modal">
                        <div className="lr">
                          <div className="rl" />
                        </div>
                      </div>
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-8 col-lg-offset-2">
                            <div className="modal-body">
                              <h2>{folio.title}</h2>
                              <hr className="star-primary" />
                              <div>
                                <img
                                  src={folio.image.url}
                                  className="img-responsive img-centered"
                                  alt={folio.image.filename}
                                />
                              </div>
                              <div v-html="folio.description" />
                              <ul className="list-inline item-details">
                                <li>
                                  Client:
                                  <strong>
                                    <a href={folio.client_link}>
                                      {folio.client}
                                    </a>
                                  </strong>
                                </li>
                                <li>
                                  Date:
                                  <strong>
                                    <a href={folio.date_link}>{folio.date}</a>
                                  </strong>
                                </li>
                                <li>
                                  Service:
                                  <strong>
                                    <a href={folio.service_link}>
                                      {folio.service}
                                    </a>
                                  </strong>
                                </li>
                              </ul>
                              <button
                                type="button"
                                className="btn btn-default"
                                data-dismiss="modal"
                              >
                                <i className="fa fa-times" /> Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          : ""}
      </Layout>
    )
  }
}
