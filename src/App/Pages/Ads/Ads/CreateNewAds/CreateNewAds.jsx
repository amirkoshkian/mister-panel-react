////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class CreateNewAds extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3 text-center">
                  <span>تبلیغات جدید ایجاد کنید</span>
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
                        name="SelectAdsPosition"
                        className="input-content-users p-2"
                      >
                        <option value="HomePageBottom">صفحه اصلی پایین</option>
                        <option value="AllListingPageLeft">
                          تمام صفحه فهرست سمت چپ
                        </option>
                        <option value="AllListingPageBottom">
                          همه صفحه فهرست در پایین
                        </option>
                      </select>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <input
                        className="input-content-users p-2"
                        name="AdStartDate"
                        type="text"
                        placeholder="تاریخ شروع آگهی (روز/ماه/سال)"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <textarea
                        className="input-content-users p-2"
                        name="AdEndDate"
                        placeholder="تاریخ پایان آگهی (روز/ماه/سال)"
                        required={true}
                      ></textarea>
                    </section>
                  </section>

                  <section className="row d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <span>فرتور آگهی را انتخاب کنید</span>
                    </section>
                  </section>
                  <section className="row d-flex align-items-center justify-content-center">
                    <section className="col-12 col-md-6">
                      <input
                        className="input-content-users p-2"
                        name="ChooseAdImage"
                        type="file"
                        required={true}
                      ></input>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <textarea
                        rows="5"
                        className="input-content-users p-2"
                        name="AdvertisementExternalLink"
                        type="text"
                        placeholder="تبلیغات لینک خارجی"
                        required={true}
                      ></textarea>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <input
                        type="submit"
                        className="input-content-users p-2 bg-success"
                        name="PublishAd"
                        value="آگهی را منتشر کنید"
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
