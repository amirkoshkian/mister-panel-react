////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AddNewPage extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-12 p-2">
              <form method="POST">
                <section className="bg-t-o b-r-10">
                  <section className="col-12 p-3">
                    <span>افزودن صفحه جدید</span>
                  </section>

                  <section className="col-12 p-3">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      placeholder="نام صفحه"
                      name="PageName"
                      required={true}
                    />
                  </section>

                  <section className="col-12 p-3">
                    <textarea
                      type="text"
                      className="input-content-users p-2"
                      placeholder="جزئیات در مورد لیست شما"
                      name="DetailsAboutListing"
                      required={true}
                    />
                  </section>
                </section>

                <section className="bg-t-o b-r-10">
                  <section className="col-12 p-3">
                    <span>سبک های CSS سفارشی</span>
                  </section>

                  <section className="col-12 p-3">
                    <textarea
                      type="text"
                      className="input-content-users p-2"
                      placeholder="استایل های CSS خود را اینجا بنویسید"
                      name="CustomCSSStyles"
                      required={true}
                    />
                  </section>
                </section>

                <section className="bg-t-o b-r-10">
                  <section className="col-12 p-3">
                    <span>اسکریپت سفارشی Js</span>
                  </section>

                  <section className="col-12 p-3">
                    <textarea
                      type="text"
                      className="input-content-users p-2"
                      placeholder="کدهای جاوا اسکریپت خود را اینجا بنویسید"
                      name="CustomJsScript"
                      required={true}
                    />
                  </section>
                </section>

                <section className="bg-t-o b-r-10">
                  <section className="col-12 p-3">
                    <span>تنظیمات سئو</span>
                  </section>

                  <section className="col-12 p-3">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      placeholder="عنوان صفحه"
                      name="PageTitle"
                      required={true}
                    />
                  </section>

                  <section className="col-12 p-3">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      placeholder="کلمات کلیدی صفحه"
                      name="PageKeywords"
                      required={true}
                    />
                  </section>

                  <section className="col-12 p-3">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      placeholder="توضیحات صفحه"
                      name="PageDescriptions"
                      required={true}
                    />
                  </section>
                </section>

                <section className="bg-t-o b-r-10">
                  <section className="col-12 p-3">
                    <span>تنظیمات سئو پیشرفته</span>
                  </section>

                  <section className="col-12 p-3">
                    <textarea
                      type="text"
                      className="input-content-users p-2"
                      placeholder="schema گوگل"
                      name="GoogleSchema"
                      required={true}
                    />
                  </section>
                </section>

                <section className="row bg-t-o b-r-10">
                  <section className="col-12 p-3">
                    <span>تنظیم صفحه</span>
                  </section>

                  <section className="row col-xl-6 d-flex">
                    <section className="row d-flex col-12 p-3">
                      <span className="col-xl-4">نمایش لیست</span>

                      <section className="col-xl-8">
                        <select
                          className="input-content-users p-2"
                          name="ShowListing"
                        >
                          <option value="Yes">بله</option>
                          <option value="No">خیر</option>
                        </select>
                      </section>
                    </section>

                    <section className="row d-flex col-12 p-3">
                      <span className="col-xl-4">نمایش محصولات</span>

                      <section className="col-xl-8">
                        <select
                          className="input-content-users p-2"
                          name="ShowProducts"
                        >
                          <option value="Yes">بله</option>
                          <option value="No">خیر</option>
                        </select>
                      </section>
                    </section>
                  </section>

                  <section className="row col-xl-6 d-flex">
                    <section className="row d-flex col-12 p-3">
                      <span className="col-xl-4">نمایش رویداد</span>

                      <section className="col-xl-8">
                        <select
                          className="input-content-users p-2"
                          name="ShowEvents"
                        >
                          <option value="Yes">بله</option>
                          <option value="No">خیر</option>
                        </select>
                      </section>
                    </section>

                    <section className="row d-flex col-12 p-3">
                      <span className="col-xl-4">نمایش وبلاگ</span>

                      <section className="col-xl-8">
                        <select
                          className="input-content-users p-2"
                          name="ShowBlogs"
                        >
                          <option value="Yes">بله</option>
                          <option value="No">خیر</option>
                        </select>
                      </section>
                    </section>
                  </section>
                </section>

                <section className="bg-t-o b-r-10">
                  <section className="col-12 p-3">
                    <span>انتشار</span>
                  </section>

                  <section className="row d-flex col-12 p-3">
                    <span className="col-xl-2">وضعیت</span>

                    <section className="col-xl-10">
                      <select className="input-content-users p-2" name="Status">
                        <option value="Public">انتشار</option>
                        <option value="Draft">پیش نویس</option>
                      </select>
                    </section>
                  </section>

                  <section className="row d-flex col-12 p-3">
                    <span className="col-xl-2">دیدن</span>

                    <section className="col-xl-10">
                      <select
                        className="input-content-users p-2"
                        name="Visibility"
                      >
                        <option value="Public">انتشار</option>
                        <option value="Private">خصوصی</option>
                      </select>
                    </section>
                  </section>

                  <section className="col-12 p-3">
                    <input
                      type="submit"
                      className="input-content-users p-2 bg-success"
                      name="SaveChange"
                      value="ارسال"
                    />
                  </section>
                </section>
              </form>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Class
