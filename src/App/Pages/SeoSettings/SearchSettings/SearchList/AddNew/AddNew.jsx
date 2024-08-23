////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AddNew extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3 text-center">
                  <span>کوئری جستجو</span>
                </section>

                <form className="col-12 p-3 text-center" method="POST">
                  <section className="d-flex align-items-center justify-content-center">
                    <section className="col-12 col-md-6">
                      <input
                        className="input-content-users p-2"
                        name="SearchText"
                        type="text"
                        placeholder="متن جستجو"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="pt-5 d-flex align-items-center justify-content-center">
                    <section className="col-12 col-md-6">
                      <input
                        className="input-content-users p-2"
                        name="TagForSearch"
                        type="text"
                        placeholder="تگ برای جستجو"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="pt-5 d-flex align-items-center justify-content-center">
                    <section className="col-12 col-md-6">
                      <input
                        className="input-content-users p-2"
                        name="SearchLink"
                        type="text"
                        placeholder="لینک جستجو"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="pt-5 d-flex align-items-center justify-content-center">
                    <section className="col-12 col-md-6">
                      <input
                        type="submit"
                        className="input-content-users p-2 bg-success"
                        name="SendGoogleAnalytics"
                        value="ارسال"
                      />
                    </section>
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
