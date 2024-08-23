////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class ImportData extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3 text-center">
                  <span>واردات داده ها</span>
                </section>

                <form
                  className="col-12 p-3 text-center"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <section className="row d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <span>فایل واردات را انتخاب کنید</span>
                    </section>
                  </section>
                  <section className="row d-flex align-items-center justify-content-center">
                    <section className="col-12 col-md-6">
                      <input
                        className="input-content-users p-2"
                        name="ImportFile"
                        type="file"
                        required={true}
                      ></input>
                    </section>
                  </section>

                  <section className="row d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <input
                        type="submit"
                        className="input-content-users p-2 bg-success"
                        name="ImportFile"
                        value="اکنون وارد کنید"
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
