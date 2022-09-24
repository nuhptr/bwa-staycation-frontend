import React, { Component } from "react";

import Header from "layouts/Header";
export default class LandingPages extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
      </>
    );
  }
}
