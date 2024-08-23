////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class CreateNewSubAdmins extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="d-flex align-items-center justify-content-between p-3">
                  <span>جزئیات زیر مدیریت</span>
                </section>

                <form method="post" encType="multipart/form-data">
                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">نام مدیر فرعی</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        required={true}
                        name="SubAdminName"
                        placeholder="نام"
                        type="text"
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
                        placeholder="نام کاربری را وارد کنید"
                        name="UserName"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">پسورد</section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2"
                        required={true}
                        type="password"
                        placeholder="پسورد را وارد کنید"
                        name="Password"
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-between p-3">
                    <section className="col-3">فرتور پروفایل</section>

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
                    <section className="col-3"></section>

                    <section className="col-9 d-flex align-items-center justify-content-center">
                      <input
                        className="input-content-users p-2 bg-success"
                        type="submit"
                        name="AddUser"
                        value="اضافه کردن کاربر"
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
