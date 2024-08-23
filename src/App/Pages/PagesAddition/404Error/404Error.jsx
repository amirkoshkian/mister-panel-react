////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class Error404 extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 d-flex align-items-center justify-content-center p-4 flex-column">
                  <h1>404</h1>

                  <p>پیدا نشد</p>

                  <p>صفحه مورد نظر پیدا نشد</p>

                  <img
                    alt="404"
                    src="/Assets/Images/ImagePagesAddition/404.png"
                    lazy="loading"
                    width="80%"
                    className="pt-4"
                  />

                  <Link
                    onClick={() => {
                      this.props.FuncSetActiveSubMenus("1");
                    }}
                    to="/"
                    className="input-buttons pt-1 pb-1 pr-1 pl-1 mt-5"
                  >
                    برگشت به خانه
                  </Link>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Class
