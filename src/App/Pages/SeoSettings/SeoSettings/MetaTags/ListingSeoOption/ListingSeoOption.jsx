////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
import { Search } from "@mui/icons-material";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class ListingSeoOption extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="d-flex align-items-center justify-content-between p-3">
                  <span>تمام جزئیات سئو لیست ها</span>
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
                <section className="p-2 table-users-page-seo-settings">
                  <table>
                    <thead>
                      <tr>
                        <th>ایدی</th>
                        <th>نام فهرست</th>
                        <th>امتیاز سئو</th>
                        <th>ویرایش</th>
                        <th>پیش نمایش</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>رستوران</td>
                        <td className="progress">
                          <section
                            aria-valuemax="100"
                            aria-valuemin="0"
                            aria-valuenow="20"
                            className="progress-bar bg-success progress-bar wd-45p"
                            role="progressbar"
                          >
                            <span>% 45</span>
                          </section>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>عروسی</td>
                        <td className="progress">
                          <section
                            aria-valuemax="100"
                            aria-valuemin="0"
                            aria-valuenow="20"
                            className="progress-bar bg-danger progress-bar wd-25p"
                            role="progressbar"
                          >
                            <span>% 25</span>
                          </section>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>ورزش</td>
                        <td className="progress">
                          <section
                            aria-valuemax="100"
                            aria-valuemin="0"
                            aria-valuenow="20"
                            className="progress-bar bg-warning progress-bar wd-20p"
                            role="progressbar"
                          >
                            <span>% 20</span>
                          </section>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>نمونه</td>
                        <td className="progress">
                          <section
                            aria-valuemax="100"
                            aria-valuemin="0"
                            aria-valuenow="20"
                            className="progress-bar bg-primary progress-bar wd-75p"
                            role="progressbar"
                          >
                            <span>% 75</span>
                          </section>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>تست</td>
                        <td className="progress">
                          <section
                            aria-valuemax="100"
                            aria-valuemin="0"
                            aria-valuenow="20"
                            className="progress-bar bg-main progress-bar wd-45p"
                            role="progressbar"
                          >
                            <span>% 45</span>
                          </section>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
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
