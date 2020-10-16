/* eslint-disable react/prop-types */
import React from "react";
import Header from "./Header.jsx";
import CustomHeader from "./CustomHeader.jsx";
import Footer from "./Footer.jsx";

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
        {this.props.footer ? (
          <Footer footer={this.props.footer} />
        ) : (
          ""
        )}
      </>
    );
  }
}
