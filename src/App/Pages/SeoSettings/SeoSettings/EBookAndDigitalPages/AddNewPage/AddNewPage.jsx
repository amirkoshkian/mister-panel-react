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
            <section className="col-xl-12 p-2">
              <form method="POST" encType="multipart/form-data">
                <section className="bg-t-o b-r-10">
                  <section className="col-xl-12 p-3">
                    <span>صفحه جدیدی برای کتاب الکترونیکی را اضافه کنید</span>
                  </section>

                  <section className="col-xl-12 p-3">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      placeholder="تایتل بنر"
                      name="BannerTitle"
                      required={true}
                    />
                  </section>

                  <section className="col-xl-12 p-3">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      placeholder="ساب تایتل بنر"
                      name="BannerSubTitle"
                      required={true}
                    />
                  </section>

                  <section className="col-xl-12 p-3">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      placeholder="لینک دانلود"
                      name="DownloadLink"
                      required={true}
                    />
                  </section>

                  <section className="col-xl-12 p-3">
                    <input
                      className="input-content-users p-2"
                      required={true}
                      type="file"
                      name="EbookPreviewImage"
                    />
                  </section>

                  <section className="col-12 p-3">
                    <textarea
                      type="text"
                      className="input-content-users p-2"
                      placeholder="جزئیات در مورد لیست شما"
                      name="PageDescriptions"
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
