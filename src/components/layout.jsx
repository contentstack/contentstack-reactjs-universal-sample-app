/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react"
import Header from "./header.jsx"
import CustomHeader from "./customHeader.jsx"
import Footer from "./footer.jsx"

export default class Layout extends React.Component {
  render() {
    return (
      <>
        {this.props.header ? (
          this.props.property.location.pathname === "/" ? (
            <Header header={this.props.header} />
          ) : (
            <CustomHeader header={this.props.header} />
          )
        ) : (
          ""
        )}
        <main>{this.props.children}</main>
        {this.props.footer ? <Footer footer={this.props.footer} /> : ""}
      </>
    )
  }
}
