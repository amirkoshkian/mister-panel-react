////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AddNewCategory extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <section className="col-xl-12 text-center">
                  <span>اضافه کردن دسته محصول جدید</span>
                </section>

                <form method="POST" encType="multipart/form-data">
                  <section className="col-xl-12 pt-4">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      name="CategoryName"
                      placeholder="نام دسته"
                      required={true}
                    />
                  </section>

                  <section className="col-xl-12 pt-4">
                    فرتور دسته را انتخاب کنید
                  </section>
                  <section className="col-xl-12">
                    <input
                      type="file"
                      className="input-content-users p-2"
                      name="CategoryImage"
                      required={true}
                    />
                  </section>

                  <section className="d-flex col-xl-12 pt-5">
                    <input
                      type="submit"
                      className="input-content-users p-2 bg-success"
                      name="SubmitCategory"
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
