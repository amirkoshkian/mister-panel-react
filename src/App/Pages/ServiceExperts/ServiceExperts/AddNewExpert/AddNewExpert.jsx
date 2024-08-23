////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AddNewExpert extends React.Component {
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
                        <span>شهر</span>
                      </section>

                      <section className="col-12">
                        <select
                          name="City"
                          className="input-content-users p-2"
                          required={true}
                        >
                          <option value="Tehran">تهران</option>
                          <option value="Tehran">تهران</option>
                          <option value="Shiraz">شیراز</option>
                          <option value="Tabriz">تبریز</option>
                        </select>
                      </section>
                    </section>

                    <section className="col-6 pr-3">
                      <section className="col-12 p-2">
                        <span>حرفه کار</span>
                      </section>

                      <section className="col-12">
                        <select
                          name="WorkProfession"
                          className="input-content-users p-2"
                          required={true}
                        >
                          <option value="ServiceLaptop">سرویس لپتاپ</option>
                          <option value="ServiceComputer">
                            سرویس کامپیوتر
                          </option>
                          <option value="MobileRepairs">تعمیرات موبایل</option>
                        </select>
                      </section>
                    </section>
                  </section>

                  <section className="row col-12 pt-4">
                    <section className="col-6 pl-3">
                      <section className="col-12 p-2">
                        <span>زمان شروع سرویس</span>
                      </section>

                      <section className="col-12">
                        <select
                          name="ServiceStartTime"
                          className="input-content-users p-2"
                          required={true}
                        >
                          <option value="6صبح">6صبح</option>
                          <option value="7صبح">7صبح</option>
                          <option value="8صبح">8صبح</option>
                          <option value="9صبح">9صبح</option>
                          <option value="10صبح">10صبح</option>
                          <option value="11صبح">11صبح</option>
                          <option value="12بعدازظهر">12بعدازظهر</option>
                          <option value="1بعدازظهر">1بعدازظهر</option>
                          <option value="2بعدازظهر">2بعدازظهر</option>
                          <option value="3بعدازظهر">3بعدازظهر</option>
                          <option value="4بعدازظهر">4بعدازظهر</option>
                          <option value="5بعدازظهر">5بعدازظهر</option>
                          <option value="6بعدازظهر">6بعدازظهر</option>
                          <option value="7بعدازظهر">7بعدازظهر</option>
                          <option value="8بعدازظهر">8بعدازظهر</option>
                          <option value="9بعدازظهر">9بعدازظهر</option>
                          <option value="10بعدازظهر">10بعدازظهر</option>
                          <option value="11بعدازظهر">11بعدازظهر</option>
                          <option value="12صبح">12صبح</option>
                        </select>
                      </section>
                    </section>

                    <section className="col-6 pr-3">
                      <section className="col-12 p-2">
                        <span>سال تجربه</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="YearOfExperience"
                          type="text"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>
                  </section>

                  <section className="row col-12 pt-4">
                    <section className="col-6 pl-3">
                      <section className="col-12 p-2">
                        <span>زمان بسته شدن سرویس</span>
                      </section>

                      <section className="col-12">
                        <select
                          name="ServiceCloseTime"
                          className="input-content-users p-2"
                          required={true}
                        >
                          <option value="6صبح">6صبح</option>
                          <option value="7صبح">7صبح</option>
                          <option value="8صبح">8صبح</option>
                          <option value="9صبح">9صبح</option>
                          <option value="10صبح">10صبح</option>
                          <option value="11صبح">11صبح</option>
                          <option value="12بعدازظهر">12بعدازظهر</option>
                          <option value="1بعدازظهر">1بعدازظهر</option>
                          <option value="2بعدازظهر">2بعدازظهر</option>
                          <option value="3بعدازظهر">3بعدازظهر</option>
                          <option value="4بعدازظهر">4بعدازظهر</option>
                          <option value="5بعدازظهر">5بعدازظهر</option>
                          <option value="6بعدازظهر">6بعدازظهر</option>
                          <option value="7بعدازظهر">7بعدازظهر</option>
                          <option value="8بعدازظهر">8بعدازظهر</option>
                          <option value="9بعدازظهر">9بعدازظهر</option>
                          <option value="10بعدازظهر">10بعدازظهر</option>
                          <option value="11بعدازظهر">11بعدازظهر</option>
                          <option value="12صبح">12صبح</option>
                        </select>
                      </section>
                    </section>

                    <section className="col-6 pr-3">
                      <section className="col-12 p-2">
                        <span>کرایه پایه</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="BaseFare"
                          type="text"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>
                  </section>

                  <section className="row col-12 pt-4">
                    <section className="col-6 pl-3">
                      <section className="col-12 p-2">
                        <span>فرتور پروفایل</span>
                      </section>

                      <section className="col-12">
                        <input
                          type="file"
                          name="ProfileImage"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>

                    <section className="col-6 pr-3">
                      <section className="col-12 p-2">
                        <span>فرتور کاور پروفایل</span>
                      </section>

                      <section className="col-12">
                        <input
                          type="file"
                          name="ProfileCoverImage"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12 p-2">
                      <span>خدماتی که می تواند انجام دهد</span>
                    </section>

                    <section className="col-12">
                      <select
                        name="ServicesCanDo"
                        className="input-content-users p-2"
                        required={true}
                      >
                        <option value="ServiceLaptop">سرویس لپتاپ</option>
                        <option value="ServiceComputer">سرویس کامپیوتر</option>
                        <option value="MobileRepairs">تعمیرات موبایل</option>
                      </select>
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12 p-2">
                      <span>مناطق خدماتی</span>
                    </section>

                    <section className="col-12">
                      <select
                        name="ServiceAreas"
                        className="input-content-users p-2"
                        required={true}
                      >
                        <option value="Tehran">تهران</option>
                        <option value="Tehran">تهران</option>
                        <option value="Shiraz">شیراز</option>
                        <option value="Tabriz">تبریز</option>
                      </select>
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12 p-2">
                      <span>روش های پرداختی قابل قبول</span>
                    </section>

                    <section className="col-12">
                      <select
                        name="PaymentAccept"
                        className="input-content-users p-2"
                        required={true}
                      >
                        <option value="PayPal">پی پال</option>
                        <option value="Payeer">پاییر</option>
                        <option value="skrill">اسکریل</option>
                      </select>
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12">
                      <input
                        type="submit"
                        name="SubmitNewServiceExpert"
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
