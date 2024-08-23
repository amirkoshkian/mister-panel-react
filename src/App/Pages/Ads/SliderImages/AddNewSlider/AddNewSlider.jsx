////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AddNewSlider extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3">
                  <span>فرتور اسلایدر جدید اضافه کنید</span>
                </section>

                <form method="POST" encType="multipart/form-data">
                  <section className="col-12 p-3">
                    <span>فرتور کشویی را انتخاب کنید</span>
                  </section>
                  <section className="col-12 pr-1 pl-1">
                    <input
                      className="input-content-users p-2"
                      name="ChooseBannerImage"
                      type="file"
                      required={true}
                    />
                  </section>

                  <section className="col-12 p-3">
                    <textarea
                      className="input-content-users p-2"
                      name="SliderExternalLink"
                      placeholder="اسلایدر پیوند خارجی"
                      required={true}
                    ></textarea>
                  </section>

                  <section className="col-12 p-3 d-flex align-items-center justify-content-center">
                    <input
                      type="submit"
                      name="AddNewSlider"
                      className="input-content-users p-2 bg-success"
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
