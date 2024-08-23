////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class Buttons extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-12 p-2">
              <section className="col-12 p-2">
                <section className="p-2 bg-t-o b-r-10">
                  <section className="col-12">دکمه های بوت استرپ</section>

                  <section className="d-flex">
                    <section className="col-2 p-3 d-flex align-items-center justify-content-center">
                      <button className="btn btn-primary w-100 h-100">اولیه</button>
                    </section>

                    <section className="col-2 p-3 d-flex align-items-center justify-content-center">
                      <button className="btn btn-secondary w-100 h-100">
                        ثانوی
                      </button>
                    </section>

                    <section className="col-2 p-3 d-flex align-items-center justify-content-center">
                      <button className="btn btn-success w-100 h-100">
                        موفقیت
                      </button>
                    </section>

                    <section className="col-2 p-3 d-flex align-items-center justify-content-center">
                      <button className="btn btn-info w-100 h-100">اینفو</button>
                    </section>

                    <section className="col-2 p-3 d-flex align-items-center justify-content-center">
                      <button className="btn btn-warning w-100 h-100">اخطار</button>
                    </section>

                    <section className="col-2 p-3 d-flex align-items-center justify-content-center">
                      <button className="btn btn-danger w-100 h-100">خطر</button>
                    </section>
                  </section>
                </section>
              </section>

              <section className="col-12 p-2">
                <section className="p-2 bg-t-o b-r-10">
                  <section className="col-12">
                    دکمه های ساخته شده با اینپوت
                  </section>

                  <section className="d-flex">
                    <section className="col-2 p-3">
                      <input
                        class="input-content-users p-2 bg-primary"
                        type="button"
                        value="اولیه"
                      />
                    </section>

                    <section className="col-2 p-3">
                      <input
                        class="input-content-users p-2 bg-secondary"
                        type="button"
                        value="ثانوی"
                      />
                    </section>

                    <section className="col-2 p-3">
                      <input
                        class="input-content-users p-2 bg-success"
                        type="button"
                        value="موفقیت"
                      />
                    </section>

                    <section className="col-2 p-3">
                      <input
                        class="input-content-users p-2 bg-info"
                        type="button"
                        value="اینفو"
                      />
                    </section>

                    <section className="col-2 p-3">
                      <input
                        class="input-content-users p-2 bg-warning"
                        type="button"
                        value="اخطار"
                      />
                    </section>

                    <section className="col-2 p-3">
                      <input
                        class="input-content-users p-2 bg-danger"
                        type="button"
                        value="خطر"
                      />
                    </section>
                  </section>
                </section>
              </section>

              <section className="col-12 p-2">
                <section className="p-2 bg-t-o b-r-10">
                  <section className="col-12">
                    دکمه های شخصی سازی شده برای همین قالب
                  </section>

                  <section className="d-flex">
                    <section className="col-2 p-3">
                      <span className="w-100 h-100 input-buttons pt-1 pb-1 pr-1 pl-1 bg-primary">
                        اولیه
                      </span>
                    </section>

                    <section className="col-2 p-3">
                      <span className="w-100 h-100 input-buttons pt-1 pb-1 pr-1 pl-1 bg-secondary">
                        ثانوی
                      </span>
                    </section>

                    <section className="col-2 p-3">
                      <span className="w-100 h-100 input-buttons pt-1 pb-1 pr-1 pl-1 bg-success">
                        موفقیت
                      </span>
                    </section>

                    <section className="col-2 p-3">
                      <span className="w-100 h-100 input-buttons pt-1 pb-1 pr-1 pl-1 bg-info">
                        اینفو
                      </span>
                    </section>

                    <section className="col-2 p-3">
                      <span className="w-100 h-100 input-buttons pt-1 pb-1 pr-1 pl-1 bg-warning">
                        اخطار
                      </span>
                    </section>

                    <section className="col-2 p-3">
                      <span className="w-100 h-100 input-buttons pt-1 pb-1 pr-1 pl-1 bg-danger">
                        خطر
                      </span>
                    </section>
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
