////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
import { Search } from "@mui/icons-material";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AllPointsHistory extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="d-flex align-items-center justify-content-between p-3">
                  <span>تمام جزئیات تبلیغات</span>
                </section>

                <section className="row d-flex align-items-center justify-content-between p-3">
                  <section className="col-xl-6 d-flex align-items-center justify-content-start">
                    <span>نشان دادن</span>

                    <select
                      className="input-forms p-1 m-2 cursor-pointer"
                      name="number-of-items"
                    >
                      <option defaultValue="5">5</option>
                      <option defaultValue="10">10</option>
                      <option defaultValue="15">15</option>
                      <option defaultValue="20">20</option>
                      <option defaultValue="25">25</option>
                      <option defaultValue="50">50</option>
                      <option defaultValue="75">75</option>
                      <option defaultValue="100">100</option>
                      <option defaultValue="125">125</option>
                      <option defaultValue="150">150</option>
                      <option defaultValue="175">175</option>
                      <option defaultValue="200">200</option>
                      <option defaultValue="1000">1000</option>
                    </select>

                    <span>آیتم</span>
                  </section>

                  <section className="col-xl-6 d-flex align-items-center justify-content-end">
                    <span>جستجو</span>

                    <form className="form-search" method="GET">
                      <input
                        placeholder="جستجو"
                        className="input-form-search"
                        name="Search"
                        required
                      />

                      <button type="submit" className="button-form-search">
                        <Search titleAccess="جستجوی کلمه مورد نظر" />
                      </button>
                    </form>
                  </section>
                </section>
              </section>
            </section>

            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 pr-2 pl-2">
                <section className="p-2 table-users-page-new-user-request">
                  <table>
                    <thead>
                      <tr>
                        <th>ایدی</th>
                        <th>کاربر</th>
                        <th>تاریخ خرید</th>
                        <th>نکته ها</th>
                        <th>هزینه کل</th>
                        <th>حذف</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile2.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            31 اردیبهشت 1401
                          </span>
                        </td>
                        <td>20</td>
                        <td>
                          <span className="bg-success b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            140 تومن
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
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            31 اردیبهشت 1401
                          </span>
                        </td>
                        <td>20</td>
                        <td>
                          <span className="bg-success b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            140 تومن
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
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile6.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            31 اردیبهشت 1401
                          </span>
                        </td>
                        <td>20</td>
                        <td>
                          <span className="bg-success b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            140 تومن
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
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile5.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            1 اردیبهشت 1401
                          </span>
                        </td>
                        <td>50</td>
                        <td>
                          <span className="bg-success b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            170 تومن
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
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile4.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            24 اردیبهشت 1401
                          </span>
                        </td>
                        <td>203</td>
                        <td>
                          <span className="bg-success b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            180 تومن
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

            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="row d-flex align-items-center justify-content-between p-3">
                  <section className="col-xl-6 d-flex align-items-center justify-content-start">
                    <button className="input-buttons">قبلی</button>
                    <button className="input-buttons">1</button>
                    <button className="input-buttons">2</button>
                    <button className="input-buttons">3</button>
                    <button className="input-buttons">...</button>
                    <button className="input-buttons">10</button>
                    <button className="input-buttons">بعدی</button>
                  </section>

                  <section className="col-xl-6 d-flex align-items-center justify-content-end">
                    <span>نمایش 1 تا 5 از 5 ورودی</span>
                  </section>
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
