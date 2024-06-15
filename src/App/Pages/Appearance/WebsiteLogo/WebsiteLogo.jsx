////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class WebsiteLogo extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3">
                  <span>لوگوی وب سایت</span>
                </section>

                <form method="POST" encType="multipart/form-data">
                  <section className="col-12 p-3">
                    <input
                      className="input-content-users p-2"
                      name="WebsiteLogo"
                      type="file"
                      required={true}
                    />
                  </section>

                  <section className="col-12 p-3">
                    <input
                      className="input-content-users p-2"
                      name="Width"
                      type="text"
                      placeholder="عرض"
                      required={true}
                    />
                  </section>

                  <section className="col-12 p-3">
                    <input
                      className="input-content-users p-2"
                      name="Height"
                      type="text"
                      placeholder="طول"
                      required={true}
                    />
                  </section>

                  <section className="col-12 p-3 d-flex align-items-center justify-content-center">
                    <input
                      type="submit"
                      name="UpdateWebsiteLogo"
                      className="input-content-users p-2 bg-success"
                      value="اپدیت"
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
