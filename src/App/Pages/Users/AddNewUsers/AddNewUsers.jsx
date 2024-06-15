////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AddNewUsers extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="d-flex align-items-center justify-content-between p-3">
                  <span>اضافه کردن کاربر جدید</span>
                </section>

                <form method="post" encType="multipart/form-data">
                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">نام (اجباری)</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        required={true}
                        type="text"
                        name="Name"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">ایمیل (اجباری)</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        required={true}
                        name="Email"
                        type="email"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">رمز پوفایل (اجباری)</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        required={true}
                        type="password"
                        name="PasswordProfile"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">شماره موبایل (اجباری)</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        required={true}
                        type="tel"
                        name="MobileNumber"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">فرتور پروفایل (اجباری)</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        required={true}
                        type="file"
                        name="ProfilePicture"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">آدرس (اجباری)</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        required={true}
                        type="text"
                        name="Address"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">نوع کاربر (اجباری)</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <select
                        className="input-content-users p-2"
                        name="TypeUser"
                      >
                        <option defaultValue="GeneralUser">کاربر عمومی</option>
                        <option defaultValue="ServiceProvider">
                          ارائه دهنده خدمات
                        </option>
                      </select>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">طرح کاربری (اجباری)</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <select
                        className="input-content-users p-2"
                        name="UserPlan"
                      >
                        <option defaultValue="Free">رایگان</option>
                        <option defaultValue="Standard">استاندارد</option>
                        <option defaultValue="Premium">پریمیوم</option>
                        <option defaultValue="PremiumPlus">پریمیوم پلاس</option>
                      </select>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">فیسبوک (اختیاری)</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        name="Facebook"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">توییتر (اختیاری)</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        name="Twitter"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">یوتیوب (اختیاری)</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        name="Youtube"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">لینکدین (اختیاری)</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        name="Linkedin"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">اینستاگرام (اختیاری)</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        name="Instagram"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">گیت هاب (اختیاری)</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        name="GitHub"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">وبسایت (اختیاری)</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        name="Website"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3"></section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2 bg-success"
                        type="submit"
                        name="SendDataAddNewUser"
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
