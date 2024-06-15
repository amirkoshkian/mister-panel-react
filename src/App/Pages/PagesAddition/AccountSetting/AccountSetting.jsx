////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AccountSetting extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <form method="POST" encType="multipart/form-data">
                  <section className="row col-12">
                    <section className="col-6 pl-3">
                      <section className="col-12 p-2">
                        <span>نام کاربری</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="UserName"
                          type="text"
                          className="input-content-users p-2"
                          required={true}
                          placeholder="امیر"
                        />
                      </section>
                    </section>

                    <section className="col-6 pr-3">
                      <section className="col-12 p-2">
                        <span>نام</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="Name"
                          type="text"
                          className="input-content-users p-2"
                          required={true}
                          placeholder="امیر"
                        />
                      </section>
                    </section>
                  </section>
                  <section className="row col-12 pt-4">
                    <section className="col-6 pl-3">
                      <section className="col-12 p-2">
                        <span>ایمیل</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="Email"
                          placeholder="ایمیل"
                          type="text"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>

                    <section className="col-6 pr-3">
                      <section className="col-12 p-2">
                        <span>نقش</span>
                      </section>

                      <section className="col-12">
                        <select
                          name="Role"
                          className="input-content-users p-2"
                          required={true}
                        >
                          <option value="Admin">مدیر</option>
                          <option value="Author">نویسنده</option>
                          <option value="Editor">ویرایشگر</option>
                          <option value="Maintainer">نگهدارنده</option>
                          <option value="Subscriber">مشترک</option>
                        </select>
                      </section>
                    </section>
                  </section>
                  <section className="row col-12 pt-4">
                    <section className="col-6 pl-3">
                      <section className="col-12 p-2">
                        <span>وضعیت</span>
                      </section>

                      <section className="col-12">
                        <select
                          name="Status"
                          className="input-content-users p-2"
                          required={true}
                        >
                          <option value="Active">فعال</option>
                          <option value="InActive">غیر فعال</option>
                          <option value="Pending">انتظار</option>
                        </select>
                      </section>
                    </section>

                    <section className="col-6 pr-3">
                      <section className="col-12 p-2">
                        <span>شرکت</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="Company"
                          type="text"
                          placeholder="میستر پنل"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12 p-2">
                      <span>فرتور پروفایل</span>
                    </section>

                    <section className="col-12">
                      <input
                        type="file"
                        name="ProfileImage"
                        className="input-content-users p-2"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="col-12 pt-4 d-flex">
                    <section className="col-xl-1 ml-4">
                      <input
                        type="submit"
                        name="SaveChange"
                        value="ذخیره تغیرات"
                        className="input-content-users p-2 bg-info"
                      />
                    </section>

                    <section className="col-xl-1">
                      <input
                        type="button"
                        name="Cancel"
                        value="ریست"
                        className="input-content-users p-2"
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
