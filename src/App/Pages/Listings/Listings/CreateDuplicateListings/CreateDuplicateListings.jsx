////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class CreateDuplicateListings extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <section className="col-xl-12 text-center">
                  <span>ایجاد لیست تکراری</span>
                </section>

                <form method="POST">
                  <section className="col-xl-12 pt-4">
                    <select
                      className="input-content-users p-2"
                      name="ListingName"
                      required={true}
                    >
                      <option value="SelectListingName">
                        انتخاب نام فهرست
                      </option>
                      <option value="Css">سی اس اس</option>
                      <option value="Html">اچ تی ام ال</option>
                      <option value="JavaScript">جاوا اسکریپت</option>
                      <option value="Php">پی اچ پی</option>
                      <option value="Sql">اس کیو ال</option>
                    </select>
                  </section>

                  <section className="col-xl-12 pt-4">
                    <select
                      className="input-content-users p-2"
                      name="UserName"
                      required={true}
                    >
                      <option value="UserName">نام کاربری</option>
                      <option value="amir">امیر</option>
                      <option value="arash">آرش</option>
                      <option value="dariush">داریوش</option>
                      <option value="rostam">رستم</option>
                      <option value="kourosh">کوروش</option>
                    </select>
                  </section>

                  <section className="col-xl-12 pt-4">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      name="ListingName"
                      placeholder="نام فهرست"
                      required={true}
                    />
                  </section>

                  <section className="d-flex col-xl-12 pt-5">
                    <input
                      type="submit"
                      className="input-content-users p-2 bg-success"
                      name="CreateDuplicateListings"
                      value="ایجاد کن"
                      required={true}
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
