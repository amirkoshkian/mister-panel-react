////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AddNewProduct extends React.Component {
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
                        <span>نام محصول</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="ProductName"
                          type="text"
                          placeholder="نام محصول"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>

                    <section className="col-6 pr-3">
                      <section className="col-12 p-2">
                        <span>دسته را انتخاب کنید</span>
                      </section>

                      <section className="col-12">
                        <select
                          name="SelectCategory"
                          className="input-content-users p-2"
                          required={true}
                        >
                          <option value="Health">سلامتی</option>
                          <option value="Toys">اسباب بازی</option>
                        </select>
                      </section>
                    </section>
                  </section>

                  <section className="row col-12 pt-4">
                    <section className="col-6 pl-3">
                      <section className="col-12 p-2">
                        <span>زیر دسته بندی را انتخاب کنید</span>
                      </section>

                      <section className="col-12">
                        <select
                          name="SelectSubCategory"
                          className="input-content-users p-2"
                          required={true}
                        >
                          <option value="Toys">اسباب بازی</option>
                          <option value="Health">سلامتی</option>
                        </select>
                      </section>
                    </section>

                    <section className="col-6 pr-3">
                      <section className="col-12 p-2">
                        <span>قیمت</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="Price"
                          type="text"
                          placeholder="قیمت"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>
                  </section>

                  <section className="row col-12 pt-4">
                    <section className="col-12">
                      <section className="col-12 p-2">
                        <span>پیشنهاد</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="Offer"
                          placeholder="پیشنهاد"
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
                        <span>لینک خارجی پرداخت محصول</span>
                      </section>

                      <section className="col-12">
                        <textarea
                          name="ProductPaymentExternalLink"
                          className="input-content-users p-2"
                          placeholder="لینک خارجی پرداخت محصول"
                          required={true}
                        ></textarea>
                      </section>
                    </section>

                    <section className="col-6 pr-3">
                      <section className="col-12 p-2">
                        <span>مشخصات محصول</span>
                      </section>

                      <section className="col-12">
                        <textarea
                          name="ProductDetails"
                          placeholder="مشخصات محصول"
                          className="input-content-users p-2"
                          required={true}
                        ></textarea>
                      </section>
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12 p-2">
                      <span>تصاویر محصول (حداکثر 5 فرتور)</span>
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
                    <section className="col-12 p-2">
                      <span>
                        برچسب های محصول (یعنی) الکترونیک، لپ تاپ، اچ پی، کانن
                      </span>
                    </section>

                    <section className="col-12">
                      <textarea
                        name="ProductTags"
                        placeholder="برچسب های محصول (یعنی) الکترونیک، لپ تاپ، اچ پی، کانن"
                        className="input-content-users p-2"
                        required={true}
                      ></textarea>
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
