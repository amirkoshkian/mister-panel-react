////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class SocialMediaShare extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 pr-2 pl-2">
                <section className="col-xl-12 p-2">
                  <span>گزینه های اشتراک گذاری</span>
                </section>
              </section>
            </section>

            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 pr-2 pl-2">
                <section className="p-2 table-ad-pricing">
                  <table>
                    <thead>
                      <tr>
                        <th>ایدی</th>
                        <th>رسانه های اجتماعی</th>
                        <th>وضعیت</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>توییتر</td>
                        <td>
                          <section className="form-check form-switch">
                            <input
                              className="form-check-input cursor-pointer"
                              type="checkbox"
                              id="Status1"
                              defaultChecked={true}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="Status1"
                            ></label>
                          </section>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>فیس بوک</td>
                        <td>
                          <section className="form-check form-switch">
                            <input
                              className="form-check-input cursor-pointer"
                              type="checkbox"
                              id="Status1"
                              defaultChecked={true}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="Status1"
                            ></label>
                          </section>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>واتس اپ</td>
                        <td>
                          <section className="form-check form-switch">
                            <input
                              className="form-check-input cursor-pointer"
                              type="checkbox"
                              id="Status1"
                              defaultChecked={true}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="Status1"
                            ></label>
                          </section>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>لینکدین</td>
                        <td>
                          <section className="form-check form-switch">
                            <input
                              className="form-check-input cursor-pointer"
                              type="checkbox"
                              id="Status1"
                              defaultChecked={true}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="Status1"
                            ></label>
                          </section>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>پینترست</td>
                        <td>
                          <section className="form-check form-switch">
                            <input
                              className="form-check-input cursor-pointer"
                              type="checkbox"
                              id="Status1"
                              defaultChecked={true}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="Status1"
                            ></label>
                          </section>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Class
