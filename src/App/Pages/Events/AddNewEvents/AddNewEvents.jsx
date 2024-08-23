////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AddNewEvents extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <form method="POST" encType="multipart/form-data">
                  <section className="col-12">
                    <section className="col-12 p-2">
                      <span>کاربر را انتخاب کنید</span>
                    </section>

                    <section className="col-12">
                      <select
                        name="SelectUser"
                        className="input-content-users p-2"
                        required={true}
                      >
                        <option value="amir">امیر</option>
                        <option value="arash">آرش</option>
                        <option value="dariush">داریوش</option>
                        <option value="rostam">رستم</option>
                        <option value="kourosh">کوروش</option>
                      </select>
                    </section>
                  </section>

                  <section className="row col-12 pt-4">
                    <section className="col-6 pl-3">
                      <section className="col-12 p-2">
                        <span>نام رویداد</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="EventName"
                          type="text"
                          placeholder="نام رویداد"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>

                    <section className="col-6 pr-3">
                      <section className="col-12 p-2">
                        <span>ادرس</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="Address"
                          type="text"
                          placeholder="ادرس"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>
                  </section>

                  <section className="row col-12 pt-4">
                    <section className="col-6 pl-3">
                      <section className="col-12 p-2">
                        <span>تاریخ</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="Date"
                          placeholder="روز/ماه/سال"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>

                    <section className="col-6 pr-3">
                      <section className="col-12 p-2">
                        <span>زمان</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="Time"
                          type="text"
                          placeholder="زمان"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>
                  </section>

                  <section className="row col-12 pt-4">
                    <section className="col-12">
                      <section className="col-12 p-2">
                        <span>جزئیات رویداد</span>
                      </section>

                      <section className="col-12">
                        <textarea
                          name="EventDetails"
                          placeholder="جزئیات رویداد"
                          className="input-content-users p-2"
                          required={true}
                        ></textarea>
                      </section>
                    </section>
                  </section>

                  <section className="row col-12 pt-4">
                    <section className="col-12">
                      <section className="col-12 p-2">
                        <span>موقعیت مکانی نقشه گوگل</span>
                      </section>

                      <section className="col-12">
                        <textarea
                          name="GoogleMapLocation"
                          className="input-content-users p-2"
                          placeholder="موقعیت مکانی نقشه گوگل"
                          required={true}
                        ></textarea>
                      </section>
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12 p-2">
                      <span>فرتور کاور را انتخاب کنید</span>
                    </section>

                    <section className="col-12">
                      <input
                        name="ProductImages"
                        type="file"
                        className="input-content-users p-2"
                        required={true}
                      ></input>
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12">
                      <input
                        type="submit"
                        name="SubmitAddNewJob"
                        value="ارسال کن"
                        className="input-content-users p-2 bg-info"
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
