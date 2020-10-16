/* eslint-disable react/prop-types */
import React from 'react'
export default class CustomHeader extends React.Component{
    render() {
        return (
          <nav
            id="mainNav"
            className="navbar navbar-default navbar-fixed-top navbar-custom"
          >
            <div className="container">
              <div className="navbar-header page-scroll">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  <span className="sr-only">Toggle navigation</span> Menu
                  <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="#page-top">
                  {this.props.header.title}
                </a>
              </div>
    
              <div
                id="bs-example-navbar-collapse-1"
                className="collapse navbar-collapse"
              >
                <ul className="nav navbar-nav navbar-right">
                  <li className="hidden">
                    <a href="/"></a>
                  </li>
                  {this.props.header.menu.map((head, i) => {
                    return (
                      <li key={i} className="page-scroll">
                        <a href={'/#'+head.hash_link}>{head.title} </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </nav>
        );
      }
}