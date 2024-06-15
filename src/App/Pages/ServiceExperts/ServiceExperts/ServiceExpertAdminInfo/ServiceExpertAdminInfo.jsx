////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class ServiceExpertAdminInfo extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <form method="POST">
                  <section className="col-12">
                    <span>اطلاعات مدیریتی کارشناسان</span>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">ایمیل کارشناس خدمات</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="email"
                        placeholder="ایمیل"
                        name="ServiceExpertEmail"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">موبایل کارشناس خدمات</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="tel"
                        placeholder="0123-859-4545"
                        name="ServiceExpertMobile"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">کارشناس خدمات واتساپ</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="tel"
                        placeholder="98-123-859-4545+"
                        name="ServiceExpertWhatsapp"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3"></section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2 bg-success"
                        type="submit"
                        name="SendServiceExpert"
                        value="ذخیره تغییرات"
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
