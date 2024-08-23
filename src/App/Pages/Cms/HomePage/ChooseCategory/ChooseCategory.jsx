////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class ChooseCategory extends React.Component {
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
                        <th>نام دسته</th>
                        <th>فرتور</th>
                        <th>ویرایش</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>اسپا و صورت</td>
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
                        <td>حمل و نقل</td>
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
                        <td>حمل و نقل</td>
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
                        <td>بیمارستان ها</td>
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
