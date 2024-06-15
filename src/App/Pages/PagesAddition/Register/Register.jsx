////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class Register extends React.Component {
  render() {
    return (
      <section className="p-3 h-100">
        <section className="row h-100">
          <section className="row d-flex align-items-center justify-content-center h-100">
            <section className="col-xl-4 p-2 d-flex flex-column align-items-center justify-content-center">
              <section className="bg-t-o b-r-10 d-flex flex-column align-items-center justify-content-center">
                <img
                  alt="Logo"
                  className="w-50"
                  loading="lazy"
                  src="/Assets/Images/Logo.png"
                />
                <span className="pt-4">ماجراجویی از اینجا شروع می شود 🚀</span>

                <span className="pt-4 text-center">
                  مدیریت برنامه خود را آسان و سرگرم کننده کنید!
                </span>

                <form className="col-12 p-3 text-center" method="POST">
                  <section className="d-flex align-items-center justify-content-center flex-column">
                    <section className="col-12 p-3">
                      <input
                        className="input-content-users p-2"
                        name="UserName"
                        type="text"
                        placeholder="نام کاربری"
                        required={true}
                      />
                    </section>

                    <section className="col-12 p-3">
                      <input
                        className="input-content-users p-2"
                        name="Email"
                        type="email"
                        placeholder="ایمیل"
                        required={true}
                      />
                    </section>

                    <section className="col-12 p-3">
                      <input
                        className="input-content-users p-2"
                        name="Password"
                        type="password"
                        placeholder="پسورد"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="col-12 p-3">
                    <input
                      type="submit"
                      className="input-content-users p-2 bg-main"
                      name="SignUp"
                      value="ثبت نام"
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
