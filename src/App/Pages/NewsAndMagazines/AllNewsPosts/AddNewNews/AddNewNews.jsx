////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AddNewNews extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3 text-center">
                  <span>ایجاد اخبار</span>
                </section>

                <form
                  className="col-12 p-3 text-center"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <section className="d-flex align-items-center justify-content-center">
                    <section className="col-12 col-md-6">
                      <input
                        className="input-content-users p-2"
                        name="NewsTitle"
                        type="text"
                        placeholder="عنوان خبر"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <input
                        className="input-content-users p-2"
                        name="NewsDetails"
                        type="text"
                        placeholder="جزئیات خبر"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="row d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <span>فرتور لوگو را انتخاب کنید</span>
                    </section>
                  </section>
                  <section className="row d-flex align-items-center justify-content-center">
                    <section className="col-12 col-md-6">
                      <input
                        className="input-content-users p-2"
                        name="ChooseBannerImage"
                        type="file"
                        required={true}
                      ></input>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <select
                        name="SelectCategory"
                        className="input-content-users p-2"
                      >
                        <option value="Technology">فن اوری</option>
                        <option value="Health">سلامتی</option>
                      </select>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <input
                        type="submit"
                        className="input-content-users p-2 bg-success"
                        name="CreateNews"
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
