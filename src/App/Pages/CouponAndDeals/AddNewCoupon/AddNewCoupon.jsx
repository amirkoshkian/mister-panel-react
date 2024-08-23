////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AddNewCoupon extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3 text-center">
                  <span>ایجاد کوپن</span>
                </section>

                <form
                  className="col-12 p-3 text-center"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <section className="d-flex align-items-center justify-content-center">
                    <section className="col-12 col-md-6">
                      <select
                        name="SelectUser"
                        className="input-content-users p-2"
                      >
                        <option value="amir">امیر</option>
                        <option value="arash">آرش</option>
                        <option value="dariush">داریوش</option>
                        <option value="rostam">رستم</option>
                        <option value="kourosh">کوروش</option>
                      </select>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <input
                        className="input-content-users p-2"
                        name="CouponName"
                        type="text"
                        placeholder="نام کوپن"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <textarea
                        className="input-content-users p-2"
                        name="OfferCode"
                        placeholder="شماره کوپن"
                        required={true}
                      ></textarea>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <textarea
                        className="input-content-users p-2"
                        name="WebsiteLink"
                        placeholder="لینک وب سایت (در صورت پیشنهاد آنلاین)"
                        required={true}
                      ></textarea>
                    </section>
                  </section>

                  <section className="row d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <span>نشان تجاری یا فرتور (اندازه توصیه شده 65*65)</span>
                    </section>
                  </section>
                  <section className="row d-flex align-items-center justify-content-center">
                    <section className="col-12 col-md-6">
                      <input
                        className="input-content-users p-2"
                        name="BrandLogoOrOfferImage"
                        type="file"
                        required={true}
                      ></input>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-center pt-4">
                    <section className="col-6 d-flex align-items-center justify-content-center">
                      <section className="col-12 col-md-6 pl-4">
                        <input
                          className="input-content-users p-2"
                          name="StartDate"
                          placeholder="روز/ماه/سال"
                          type="text"
                          required={true}
                        ></input>
                      </section>

                      <section className="col-12 col-md-6 pr-4">
                        <input
                          className="input-content-users p-2"
                          name="EndDate"
                          placeholder="روز/ماه/سال"
                          type="text"
                          required={true}
                        ></input>
                      </section>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-center pt-4">
                    <section className="col-6 d-flex align-items-center justify-content-center">
                      <input
                        type="submit"
                        className="input-content-users p-2 bg-success"
                        name="AddNewNews"
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
