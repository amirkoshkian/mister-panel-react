////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class XMLSitemap extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3 text-center">
                  <span>نقشه سایت XML</span>
                </section>

                <form
                  className="col-12 p-3 text-center"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <span>
                    برای ایجاد نقشه سایت خود{" "}
                    <a
                      href="https://www.xml-sitemaps.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      اینجا
                    </a>{" "}
                    را کلیک کنید سپس در کادر زیر آپلود کنید.
                  </span>

                  <section className="pt-5 d-flex align-items-center justify-content-center flex-column">
                    <section className="col-md-6 pb-4">آپلود فایل XML</section>

                    <section className="col-12 p-3">
                      <input
                        className="input-content-users p-2"
                        required={true}
                        type="file"
                        name="XMLFile"
                      />
                    </section>
                  </section>

                  <section className="col-12 p-3">
                    <input
                      type="submit"
                      className="input-content-users p-2 bg-success"
                      name="SendXMLSitemap"
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
