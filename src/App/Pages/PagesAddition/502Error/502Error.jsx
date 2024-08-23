////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
import { Link } from "react-router-dom";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class Error502 extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 d-flex align-items-center justify-content-center p-4 flex-column">
                  <h1>502</h1>

                  <p>دروازه بد</p>

                  <p>
                    خطایی به دلیل مشکل در رایانه یا تجهیزات شبکه شما رخ داده است
                  </p>

                  <img
                    alt="502"
                    src="/Assets/Images/ImagePagesAddition/502.png"
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
