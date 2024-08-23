////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AllFeedBacks extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="d-flex align-items-center justify-content-between p-3">
                  <span>همه جزئیات بازخورد</span>
                </section>
              </section>
            </section>

            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 pr-2 pl-2">
                <section className="p-2 table-listing-category">
                  <table>
                    <thead>
                      <tr>
                        <th>ایدی</th>
                        <th>نام</th>
                        <th>موبایل</th>
                        <th>ایمیل</th>
                        <th>پیام</th>
                        <th>تاریخ</th>
                        <th>حذف</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <span>امیر</span>
                        </td>
                        <td>0123-544-5464</td>
                        <td>12312321dsdd@gmail.com</td>
                        <td>سلام</td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            30 دی 1402
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            حذف
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <span>امیر</span>
                        </td>
                        <td>0123-656-8585</td>
                        <td>12312321dsdd@gmail.com</td>
                        <td>میستر پنل </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            30 دی 1402
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            حذف
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <span>امیر</span>
                        </td>
                        <td>0123-567-8657</td>
                        <td>12312321dsdd@gmail.com</td>
                        <td>ادمین پنل میستر پنل</td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            30 دی 1402
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            حذف
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <span>امیر</span>
                        </td>
                        <td>0123-574-6577</td>
                        <td>12312321dsdd@gmail.com</td>
                        <td>من امیر هستم</td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            30 دی 1402
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            حذف
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <span>امیر</span>
                        </td>
                        <td>0123-675-6578</td>
                        <td>12312321dsdd@gmail.com</td>
                        <td>سلام من امیر هستم</td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            30 دی 1402
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            حذف
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
