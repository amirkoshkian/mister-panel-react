////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class LogOut extends React.Component {
  FuncRedirectToLogin = () => {
    window.location.href = "/PagesAdditionLogin";
  };

  render() {
    this.FuncRedirectToLogin();
    return <section></section>;
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Class
