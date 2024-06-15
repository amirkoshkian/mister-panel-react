////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class SiteSetting extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="d-flex align-items-center justify-content-between p-3">
                  <span>جزئیات مدیریت</span>
                </section>

                <form method="post" encType="multipart/form-data">
                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">نام وب سایت</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        required={true}
                        type="text"
                        name="WebsiteName"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">ایمیل مدیر</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        required={true}
                        name="AdminEmail"
                        type="email"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">نماد ارز</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        required={true}
                        type="text"
                        name="CurrencySymbol"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">نام</section>

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
                    <section className="col-3">نام کاربری</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        required={true}
                        type="text"
                        name="UserName"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">رمز عبور جدید</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        required={true}
                        type="password"
                        name="NewPassword"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">ایمیل بازیابی</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        required={true}
                        type="text"
                        name="RecoveryEmail"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">نماد مورد علاقه</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        required={true}
                        type="file"
                        name="FavIcon"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">عنوان سئو</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        name="SEOTitle"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">توضیحات سئو</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <textarea
                        className="input-content-users p-2"
                        type="text"
                        name="SeoDescription"
                      ></textarea>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">کلمات کلیدی SEO</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        name="SeoKeywords"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">بنر صفحه اصلی</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="file"
                        name="HomePageBanner"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">
                      با استفاده از گوگل وارد شوید
                    </section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <select
                        className="input-content-users p-2"
                        name="LoginUsingGoogle"
                      >
                        <option vlaue="Active">فعال</option>
                        <option vlaue="InActive">غیر فعال</option>
                      </select>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">
                      با استفاده از فیس بوک وارد شوید
                    </section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <select
                        className="input-content-users p-2"
                        name="LoginUsingFacebook"
                      >
                        <option vlaue="Active">فعال</option>
                        <option vlaue="InActive">غیر فعال</option>
                      </select>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">شناسه مشتری</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        name="ClientID"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">شناسه برنامه</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        name="AppId"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">نقشه جغرافیایی گوگل</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        type="text"
                        name="GoogleGeoMapAPIKey"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3"></section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
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
