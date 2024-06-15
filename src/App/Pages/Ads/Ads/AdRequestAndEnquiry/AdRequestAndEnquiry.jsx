////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
import { Search } from "@mui/icons-material";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AdRequestAndEnquiry extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="d-flex align-items-center justify-content-between p-3">
                  <span>درخواست آگهی</span>
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
                <section className="p-2 table-all-news">
                  <table>
                    <thead>
                      <tr>
                        <th>ایدی</th>
                        <th>نام کاربری</th>
                        <th>موقعیت آگهی</th>
                        <th>تاریخ شروع</th>
                        <th>تاریخ پایان</th>
                        <th>روزهای تبلیغات</th>
                        <th>هزینه تبلیغات</th>
                        <th>وضعیت</th>
                        <th>ویرایش</th>
                        <th>حذف</th>
                        <th>تایید</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile.png"
                          />
                          <span>
                            <span>امیر</span>
                            <br />
                            <span>aaaaaa0000000@gmail.com</span>
                          </span>
                        </td>
                        <td>صفحه اصلی پایین</td>
                        <td>5 خرداد 1402</td>
                        <td>30 خرداد 1402</td>
                        <td>4</td>
                        <td>350 تومن</td>
                        <td>
                          <span className="bg-success b-r-10 pt-1 pb-1 pr-1 pl-1 bg-warning">
                            فعال
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            حذف
                          </span>
                        </td>
                        <td>
                          <span className="bg-success b-r-10 pt-1 pb-1 pr-1 pl-1">
                            این را تایید کنید
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile3.png"
                          />
                          <span>
                            <span>امیر</span>
                            <br />
                            <span>aaaaaa0000000@gmail.com</span>
                          </span>
                        </td>
                        <td>صفحه اصلی پایین</td>
                        <td>1 خرداد 1402</td>
                        <td>3 خرداد 1402</td>
                        <td>89</td>
                        <td>740 تومن</td>
                        <td>
                          <span className="bg-success b-r-10 pt-1 pb-1 pr-1 pl-1 bg-warning">
                            فعال
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            حذف
                          </span>
                        </td>
                        <td>
                          <span className="bg-success b-r-10 pt-1 pb-1 pr-1 pl-1">
                            این را تایید کنید
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile5.png"
                          />
                          <span>
                            <span>امیر</span>
                            <br />
                            <span>aaaaaa0000000@gmail.com</span>
                          </span>
                        </td>
                        <td>صفحه اصلی پایین</td>
                        <td>4 خرداد 1402</td>
                        <td>31 خرداد 1402</td>
                        <td>6</td>
                        <td>320 تومن</td>
                        <td>
                          <span className="bg-success b-r-10 pt-1 pb-1 pr-1 pl-1 bg-warning">
                            فعال
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            ویرایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            حذف
                          </span>
                        </td>
                        <td>
                          <span className="bg-success b-r-10 pt-1 pb-1 pr-1 pl-1">
                            این را تایید کنید
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
                    <span>نمایش 1 تا 3 از 3 ورودی</span>
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
