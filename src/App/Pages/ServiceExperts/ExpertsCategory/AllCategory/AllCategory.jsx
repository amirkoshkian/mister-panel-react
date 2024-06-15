////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
import { Search } from "@mui/icons-material";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AllCategory extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="d-flex align-items-center justify-content-between p-3">
                  <span>همه دسته بندی ها برای کارشناسان</span>
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
                <section className="p-2 table-listing-category">
                  <table>
                    <thead>
                      <tr>
                        <th>ایدی</th>
                        <th>نام دسته</th>
                        <th>فرتور دسته</th>
                        <th>تاریخ ایجاد</th>
                        <th>فهرست کردن</th>
                        <th>دسته فرعی</th>
                        <th>ویرایش</th>
                        <th>مشاهده زیر دسته بندی</th>
                        <th>حذف</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            امیر
                          </span>
                        </td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile2.png"
                          />
                        </td>
                        <td>3 فروردین 1401</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            1
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            6
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن
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
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            امیر
                          </span>
                        </td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile3.png"
                          />
                        </td>
                        <td>5 فروردین 1401</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            5
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            86
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن
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
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            امیر
                          </span>
                        </td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile4.png"
                          />
                        </td>
                        <td>3 فروردین 1401</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            5
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            2
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن
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
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            امیر
                          </span>
                        </td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile5.png"
                          />
                        </td>
                        <td>9 فروردین 1401</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            8
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            4
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن
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
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            امیر
                          </span>
                        </td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile6.png"
                          />
                        </td>
                        <td>7 فروردین 1401</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            10
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            60
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            حذف
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            امیر
                          </span>
                        </td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile2.png"
                          />
                        </td>
                        <td>3 فروردین 1401</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            1
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            6
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            حذف
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            امیر
                          </span>
                        </td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile3.png"
                          />
                        </td>
                        <td>5 فروردین 1401</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            5
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            86
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            حذف
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            امیر
                          </span>
                        </td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile4.png"
                          />
                        </td>
                        <td>3 فروردین 1401</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            5
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            2
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            حذف
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            امیر
                          </span>
                        </td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile5.png"
                          />
                        </td>
                        <td>9 فروردین 1401</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            8
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            4
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            حذف
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            امیر
                          </span>
                        </td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile6.png"
                          />
                        </td>
                        <td>7 فروردین 1401</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            10
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            60
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن
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
                    <span>نمایش 1 تا 10 از 10 ورودی</span>
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
