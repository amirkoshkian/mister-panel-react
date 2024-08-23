////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class CreateNewPromotions extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <section className="col-xl-12">
                  <span>ایجاد تبلیغات</span>
                </section>

                <form method="POST">
                  <section className="col-xl-12 pt-4">
                    <select
                      className="input-content-users p-2"
                      name="Listing"
                      required={true}
                    >
                      <option value="Listing">فهرست را انتخاب کنید</option>
                      <option value="amir">امیر</option>
                      <option value="arash">آرش</option>
                      <option value="dariush">داریوش</option>
                      <option value="rostam">رستم</option>
                      <option value="kourosh">کوروش</option>
                    </select>
                  </section>

                  <section className="col-xl-12 pt-4">تاریخ شروع</section>
                  <section className="col-xl-12">
                    <input
                      type="text"
                      name="StartDate"
                      placeholder="ماه/روز/سال"
                      className="input-content-users p-2"
                      required={true}
                    />
                  </section>

                  <section className="col-xl-12 pt-4">تاریخ پایان</section>
                  <section className="col-xl-12">
                    <input
                      type="text"
                      name="EndDate"
                      placeholder="ماه/روز/سال"
                      className="input-content-users p-2"
                      required={true}
                    />
                  </section>

                  <section className="col-xl-12 pt-4">
                    <input
                      type="submit"
                      className="input-content-users p-2 bg-success"
                      name="SubmitListing"
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
