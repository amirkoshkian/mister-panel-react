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
              <form method="POST">
                <section className="bg-t-o b-r-10">
                  <section className="col-xl-12 p-3">
                    <span>افزودن صفحه جدید</span>
                  </section>

                  <section className="col-xl-12 p-3">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      placeholder="نام صفحه"
                      name="PageName"
                      required={true}
                    />
                  </section>
                </section>

                <section className="bg-t-o b-r-10">
                  <section className="col-xl-12 p-3">
                    <span>فهرستی را برای نمایش این صفحه انتخاب کنید:</span>
                  </section>

                  <section className="col-xl-12 p-3">
                    <select
                      className="input-content-users p-2"
                      name="SelectOption"
                    >
                      <option>تست 1</option>
                      <option>تست 2</option>
                      <option>تست 3</option>
                      <option>تست 4</option>
                      <option>تست 5</option>
                    </select>
                  </section>
                </section>

                <section className="bg-t-o b-r-10">
                  <section className="col-xl-12 p-3">
                    <span>تنظیمات سئو</span>
                  </section>

                  <section className="col-xl-12 p-3">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      placeholder="عنوان صفحه"
                      name="PageTitle"
                      required={true}
                    />
                  </section>

                  <section className="col-xl-12 p-3">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      placeholder="کلمات کلیدی صفحه"
                      name="PageKeywords"
                      required={true}
                    />
                  </section>

                  <section className="col-xl-12 p-3">
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
                  <section className="col-xl-12 p-3">
                    <span>تنظیمات سئو پیشرفته</span>
                  </section>

                  <section className="col-xl-12 p-3">
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
                  <section className="col-xl-12 p-3">
                    <span>انتشار</span>
                  </section>

                  <section className="col-xl-12 p-3">
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
