////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AddNewListings extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <section className="col-xl-12 text-center">
                  <span>اضافه کردن لیست جدید</span>
                </section>

                <form method="POST" encType="multipart/form-data">
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
                      placeholder="نام لیست"
                      required={true}
                    />
                  </section>

                  <section className="col-xl-12 pt-4">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      name="PhoneNumber"
                      placeholder="شماره تلفن"
                      required={true}
                    />
                  </section>

                  <section className="col-xl-12 pt-4">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      name="Email"
                      placeholder="ایمیل"
                      required={true}
                    />
                  </section>

                  <section className="col-xl-12 pt-4">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      name="WhatsappNumber"
                      placeholder="شماره واتساپ"
                      required={true}
                    />
                  </section>

                  <section className="col-xl-12 pt-4">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      name="website"
                      placeholder="وبسایت(#)"
                      required={true}
                    />
                  </section>

                  <section className="col-xl-12 pt-4">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      name="ShopAddress"
                      placeholder="ادرس فروشگاه"
                      required={true}
                    />
                  </section>

                  <section className="d-flex col-xl-12 pt-4">
                    <section className="col-xl-6 pl-2">
                      <input
                        type="text"
                        className="input-content-users p-2"
                        name="Latitude"
                        placeholder="عرض جغرافیایی یعنی 40.730610"
                        required={true}
                      />
                    </section>

                    <section className="col-xl-6 pr-2">
                      <input
                        type="text"
                        className="input-content-users p-2"
                        name="Longitude"
                        placeholder="طول جغرافیایی یعنی 73.935242"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="col-xl-12 pt-4">
                    <select
                      className="input-content-users p-2"
                      name="Country"
                      required={true}
                    >
                      <option value="Country">انتخاب کشور</option>
                      <option value="America">امریکا</option>
                      <option value="Germany">المان</option>
                      <option value="Russia">روسیه</option>
                      <option value="UnitedKingdom">انگلیس</option>
                      <option value="Iran">ایران</option>
                    </select>
                  </section>

                  <section className="col-xl-12 pt-4">
                    <select
                      className="input-content-users p-2"
                      name="City"
                      required={true}
                    >
                      <option value="City">شهر خود را انتخاب کنید</option>
                      <option value="Tehran">تهران</option>
                      <option value="Tehran">تهران</option>
                      <option value="Tabriz">تبریز</option>
                      <option value="Esfahan">اصفهان</option>
                    </select>
                  </section>

                  <section className="col-xl-12 pt-4">
                    <select
                      className="input-content-users p-2"
                      name="Category"
                      required={true}
                    >
                      <option value="SelectCategory">انتخاب دسته بندی</option>
                      <option value="Technology">تکنولوژی</option>
                      <option value="Sports">ورزشی</option>
                      <option value="Hospital">بیمارستان</option>
                      <option value="Electrical">الکتریک</option>
                      <option value="Restaurant">رستوران</option>
                    </select>
                  </section>

                  <section className="col-xl-12 pt-4">
                    <select
                      className="input-content-users p-2"
                      name="SubCategory"
                      required={true}
                    >
                      <option value="SubCategory">انتخاب زیر دسته بندی</option>
                      <option value="Technology">موبایل</option>
                      <option value="Sports">تبلت</option>
                      <option value="Electrical">لپتاپ</option>
                      <option value="Restaurant">کامپیوتر</option>
                    </select>
                  </section>

                  <section className="col-xl-12 pt-4">
                    <textarea
                      className="input-content-users p-2"
                      name="DetailsListing"
                      placeholder="جزئیات در مورد فهرست شما"
                      required={true}
                    ></textarea>
                  </section>

                  <section className="d-flex col-xl-12 pt-4">
                    <section className="col-xl-6 pl-2">
                      <span>فرتور نمایه را انتخاب کنید</span>
                    </section>
                    <section className="col-xl-6 pr-2">
                      <span>فرتور جلد را انتخاب کنید</span>
                    </section>
                  </section>
                  <section className="d-flex col-xl-12">
                    <section className="col-xl-6 pl-2">
                      <input
                        type="file"
                        className="input-content-users p-2"
                        name="ProfileImage"
                        placeholder="فرتور نمایه را انتخاب کنید"
                        required={true}
                      />
                    </section>

                    <section className="col-xl-6 pr-2">
                      <input
                        type="file"
                        className="input-content-users p-2"
                        name="CoverImage"
                        placeholder="فرتور جلد را انتخاب کنید"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="d-flex col-xl-12 pt-5">
                    <input
                      type="submit"
                      className="input-content-users p-2 bg-success"
                      name="SubmitListing"
                      value="ارسال فهرست"
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
