////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
import { Search } from "@mui/icons-material";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AllNonPaidUsers extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="d-flex align-items-center justify-content-between p-3">
                  <span>همه کاربران غیر پولی</span>
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
                        <th>نام کاربری</th>
                        <th>شناسه کاربر</th>
                        <th>نوع طرح</th>
                        <th>تاریخ انقضا</th>
                        <th>مبلغ</th>
                        <th>نوع کاربر</th>
                        <th>ویرایش</th>
                        <th>حذف</th>
                        <th>پیش نمایش</th>
                        <th>اطلاعات بیشتر</th>
                        <th>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </th>
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
                        <td>USER126</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            رایگان
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            21 اردیبهشت 1405
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            20 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
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
                        <td>USER136</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            استاندارد
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            30 اردیبهشت 1402
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            60 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile3.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER193</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            رایگان
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            21 اردیبهشت 1405
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            50 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile4.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER452</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            استاندارد
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            29 اردیبهشت 1406
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            80 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile5.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER195</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            رایگان
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            25 اردیبهشت 1404
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            99 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile6.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER190</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            رایگان
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            12 اردیبهشت 1407
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            84 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER165</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            رایگان
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            2 اردیبهشت 1402
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            78 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER129</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            رایگان
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            4 اردیبهشت 1405
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            96 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile3.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER151</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            استاندارد
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            27 اردیبهشت 1405
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            56 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile4.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER953</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            استاندارد
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            13 اردیبهشت 1405
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            62 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile5.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER194</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            استاندارد
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            23 اردیبهشت 1405
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            67 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile6.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER152</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            رایگان
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            8 اردیبهشت 1405
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            96 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER172</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            استاندارد
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            8 اردیبهشت 1405
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            73 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER165</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            استاندارد
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            16 اردیبهشت 1405
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            25 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER445</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            رایگان
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            9 اردیبهشت 1405
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            72 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile2.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER346</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            استاندارد
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            2 اردیبهشت 1405
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            79 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile3.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER635</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            رایگان
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            6 اردیبهشت 1405
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            64 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>18</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile4.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER846</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            رایگان
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            24 اردیبهشت 1405
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            64 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>19</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile5.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER185</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            رایگان
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            6 اردیبهشت 1405
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            62 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>
                          <img
                            alt="Profile"
                            src="/Assets/Images/Profiles/Profile6.png"
                          />
                          <span>امیر</span>
                        </td>
                        <td>USER246</td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            استاندارد
                          </span>
                        </td>
                        <td>
                          <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            3 اردیبهشت 1405
                          </span>
                        </td>
                        <td>
                          <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                            26 تومن
                          </span>
                        </td>
                        <td>عمومی</td>
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
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            دیدن پیش نمایش
                          </span>
                        </td>
                        <td>
                          <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                            اطلاعات بیشتر
                          </span>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="check-select-item-user"
                            className="cursor-pointer"
                          />
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
                    <span>نمایش 1 تا 20 از 20 ورودی</span>
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
