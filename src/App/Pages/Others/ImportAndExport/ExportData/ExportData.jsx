////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class ExportData extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3 text-center">
                  <span>صادرات داده ها</span>
                </section>

                <form
                  className="col-12 p-3 text-center"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <section className="col-12 p-3">
                    <input
                      type="submit"
                      className="input-content-users p-2 bg-success"
                      name="ImportFile"
                      value="برای صادرات همه فایل ها کلیک کنید"
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
