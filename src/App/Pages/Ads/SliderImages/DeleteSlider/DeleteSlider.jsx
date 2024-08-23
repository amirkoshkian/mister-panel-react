////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class DeleteSlider extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3 text-center">
                  <span>حذف اسلایدر</span>
                </section>

                <form className="col-12 p-3 text-center" method="POST">
                  <section className="d-flex align-items-center justify-content-center">
                    <section className="col-12 col-md-6">
                      <select name="Slider" className="input-content-users p-2">
                        <option value="Number1">اسلایدر 1</option>
                        <option value="Number2">اسلایدر 2</option>
                        <option value="Number3">اسلایدر 3</option>
                      </select>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <input
                        type="submit"
                        className="input-content-users p-2 bg-success"
                        name="DeleteSlider"
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
