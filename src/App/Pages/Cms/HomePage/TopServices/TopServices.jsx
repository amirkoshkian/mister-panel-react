////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class TopServices extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="d-flex align-items-center justify-content-between p-3">
                  <span>صفحه اصلی کسب و کار محبوب</span>
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
                        <th>ارائه دهندگان خدمات</th>
                        <th>کلیک ها</th>
                        <th>تغییر دادن</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>جزیره بهشت</td>
                        <td>31</td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            تغییر فهرست
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>استراحتگاه</td>
                        <td>78</td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            تغییر فهرست
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>کاخ امارات</td>
                        <td>61</td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            تغییر فهرست
                          </span>
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
