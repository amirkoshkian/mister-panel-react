////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class SendInvoice extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3 text-center">
                  <span>فاکتور بفرستید</span>
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
                      <select
                        name="SelectPlan"
                        className="input-content-users p-2"
                      >
                        <option value="Free">رایگان</option>
                        <option value="Standard">استاندارد</option>
                        <option value="Premium">پریمیوم</option>
                      </select>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <input
                        className="input-content-users p-2"
                        name="InvoiceAmount"
                        type="text"
                        placeholder="مبلغ فاکتور"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="row d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <span>فاکتور را انتخاب کنید</span>
                    </section>
                  </section>
                  <section className="row d-flex align-items-center justify-content-center">
                    <section className="col-12 col-md-6">
                      <input
                        className="input-content-users p-2"
                        name="Invoice"
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
                        name="SendInvoice"
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
