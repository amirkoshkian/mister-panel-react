////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class FooterCMS extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="d-flex align-items-center justify-content-between p-3">
                  <span>سامانه مدیریت محتوا فوتر</span>
                </section>

                <form method="post" encType="multipart/form-data">
                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">پشتیبانی</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        required={true}
                        type="text"
                        placeholder="0123-345-3535"
                        name="Support"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">دسته برتر</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <select
                        className="input-content-users p-2"
                        name="TopCategory"
                      >
                        <option vlaue="Technology">تکنولوژی</option>
                        <option vlaue="Sport">ورزشی</option>
                      </select>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">دسته پرطرفدار</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <select
                        className="input-content-users p-2"
                        name="TrendingCategory"
                      >
                        <option vlaue="Technology">تکنولوژی</option>
                        <option vlaue="Sport">ورزشی</option>
                      </select>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">بخش تماس با ما</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        placeholder="ادرس"
                        name="ContactMe"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">اپلیکیشن موبایل</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        name="MobileApp"
                        placeholder="لینک دانلود اپلیکیشن شما"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">لینک فیسبوک</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        placeholder="ادرس فیسبوک شما"
                        name="Facebook"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">لینک اینستاگرام</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        placeholder="ادرس پیچ اینستاگرام شما"
                        name="Instagram"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">لینک گیت هاب</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        placeholder="ادرس گیت هاب شما"
                        name="GitHub"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">لینک توییتر</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        placeholder="ادرس توییتر شما"
                        name="Twitter"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">لینک لینکدین</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        placeholder="ادرس لینکدین شما"
                        name="Linkedin"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">لینک یوتیوب</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        placeholder="ادرس کانال یوتوب شما"
                        name="Youtube"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">واتس اپ</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        placeholder="لینک واتساپ شما (#)"
                        name="WhatsApp"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-12 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2 bg-success"
                        type="submit"
                        name="SubmitChange"
                        value="ثبت تغییرات"
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
