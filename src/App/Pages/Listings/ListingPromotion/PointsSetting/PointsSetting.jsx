////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class PointsSetting extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <section className="col-xl-12 text-center">
                  <span>تنظیم امتیاز تبلیغاتی</span>
                </section>

                <form method="POST">
                  <section className="col-xl-12 pt-4">
                    <input
                      type="text"
                      className="input-content-users p-2"
                      name="CostPerPoint"
                      placeholder="هزینه در هر نقطه"
                      required={true}
                    />
                  </section>

                  <section className="d-flex col-xl-12 pt-5">
                    <input
                      type="submit"
                      className="input-content-users p-2 bg-success"
                      name="SubmitPoint"
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
