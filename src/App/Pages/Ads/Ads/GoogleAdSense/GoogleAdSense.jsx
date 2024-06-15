////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class GoogleAdSense extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3">
                  <span>گوگل ادسنس</span>
                </section>

                <form method="POST">
                  <section className="col-12 p-3">
                    <textarea
                      className="input-content-users p-2"
                      rows="5"
                      name="GoogleAdSenseCode"
                      placeholder="کد تبلیغات گوگل"
                      required={true}
                    ></textarea>
                  </section>

                  <section className="col-12 p-3 d-flex align-items-center justify-content-center">
                    <input
                      type="submit"
                      className="input-content-users p-2 bg-success"
                      value="ارسال"
                    />
                  </section>
                </form>
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Class
