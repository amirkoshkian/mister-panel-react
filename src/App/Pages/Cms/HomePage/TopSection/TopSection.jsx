////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class TopSection extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="d-flex align-items-center justify-content-between p-3">
                  <span>بخش بالای صفحه اصلی - (برای تغییر صفحه اصلی - 1)</span>
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
                        <th>تایتل</th>
                        <th>فرتور</th>
                        <th>ویرایش</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>کسب و کار 24 میلیونی</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Product/Product.png"
                          />
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>بیش از 500 کارشناس خدمات</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Product/Product3.png"
                          />
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>اکنون شغل بعدی خود را پیدا کنید</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Product/Product2.png"
                          />
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>فروش و خرید آنلاین محصول</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Product/Product4.png"
                          />
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
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
