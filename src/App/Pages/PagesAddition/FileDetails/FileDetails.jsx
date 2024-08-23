////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class FileDetails extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="row col-12">
                <section className="col-4 p-3">
                  <section className="bg-t-o b-r-10 p-2">
                    <section className="col-12 p-3">جزئیات فایل</section>

                    <section className="col-12 p-3">
                      <section className="col-6 col-12 d-flex align-items-center justify-content-between ba">
                        <section className="col-6 d-flex align-items-center justify-content-start p-2 bl">
                          نام فایل
                        </section>

                        <section className="col-6 d-flex align-items-center justify-content-start p-2">
                          image.png
                        </section>
                      </section>

                      <section className="col-6 col-12 d-flex align-items-center justify-content-between ba">
                        <section className="col-6 d-flex align-items-center justify-content-start p-2 bl">
                          تاریخ اپلود
                        </section>

                        <section className="col-6 d-flex align-items-center justify-content-start p-2">
                          21/12/1402
                        </section>
                      </section>

                      <section className="col-6 col-12 d-flex align-items-center justify-content-between ba">
                        <section className="col-6 d-flex align-items-center justify-content-start p-2 bl">
                          اندازه
                        </section>

                        <section className="col-6 d-flex align-items-center justify-content-start p-2">
                          34kb
                        </section>
                      </section>

                      <section className="col-6 col-12 d-flex align-items-center justify-content-between ba">
                        <section className="col-6 d-flex align-items-center justify-content-start p-2 bl">
                          ابعاد
                        </section>

                        <section className="col-6 d-flex align-items-center justify-content-start p-2">
                          3232X1736
                        </section>
                      </section>

                      <section className="col-6 col-12 d-flex align-items-center justify-content-between ba">
                        <section className="col-6 d-flex align-items-center justify-content-start p-2 bl">
                          واحد رزولوشن
                        </section>

                        <section className="col-6 d-flex align-items-center justify-content-start p-2">
                          1
                        </section>
                      </section>

                      <section className="col-6 col-12 d-flex align-items-center justify-content-between ba">
                        <section className="col-6 d-flex align-items-center justify-content-start p-2 bl">
                          نوع فایل
                        </section>

                        <section className="col-6 d-flex align-items-center justify-content-start p-2">
                          png
                        </section>
                      </section>
                    </section>
                  </section>
                </section>

                <section className="col-8 p-3">
                  <section className="bg-t-o b-r-10 p-2 h-600 p-3">
                    <img
                      alt="png"
                      src="/Assets/Images/Files/image.png"
                      lazy="loading"
                      className="w-100 h-100 b-r-5"
                    />
                  </section>
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
