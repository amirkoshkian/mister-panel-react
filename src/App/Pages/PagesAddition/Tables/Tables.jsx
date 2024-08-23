////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class Tables extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3">
                  <span>جدول نوع اول</span>
                </section>

                <section className="col-12 p-3">
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
                              lazy="loading"
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
                      </tbody>
                    </table>
                  </section>
                </section>
              </section>
            </section>

            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <section className="col-12 p-3">
                  <span>جدول نوع دوم</span>
                </section>

                <section className="col-12 p-3">
                  <section className="p-2 table-users-page-seo-settings">
                    <table>
                      <thead>
                        <tr>
                          <th>ایدی</th>
                          <th>کوئری جستجو</th>
                          <th>لینک جستجو</th>
                          <th>ویرایش</th>
                          <th>حذف</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>خدمات نظافت منزل در نزدیکی شما</td>
                          <td>
                            <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                              دیدن پیش نمایش
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
                        </tr>
                      </tbody>
                    </table>
                  </section>
                </section>
              </section>
            </section>

            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <section className="col-12 p-3">
                  <span>جدول نوع سوم</span>
                </section>

                <section className="col-12 p-3">
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
                              lazy="loading"
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
                      </tbody>
                    </table>
                  </section>
                </section>
              </section>
            </section>

            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <section className="col-12 p-3">
                  <span>جدول نوع چهارم</span>
                </section>

                <section className="col-12 p-3">
                  <section className="p-2 table-all-expert-lades">
                    <table>
                      <thead>
                        <tr>
                          <th>ایدی</th>
                          <th>کاربر</th>
                          <th>جزئیات کاربر</th>
                          <th>پیام</th>
                          <th>حذف</th>
                          <th>جزئیات</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <img
                              alt="Profile"
                              lazy="loading"
                              src="/Assets/Images/Profiles/Profile.png"
                            />
                            <span>امیر</span>
                          </td>
                          <td className="d-flex flex-column">
                            <span>
                              <span>تلفن : </span>1234-545-4545
                            </span>
                            <span>
                              <span>ایمیل : </span>aaaaaa0000000@gmail.com
                            </span>
                            <span>
                              <span>ادرس : </span>تهران
                            </span>
                            <span>
                              <span>تاریخ ثبت نام : </span>21 فروردین 1402
                            </span>
                            <span>
                              <span>تاریخ عضویت ویژه: </span>30 اردیبهشت 1402
                            </span>
                          </td>
                          <td>سلام به همه</td>
                          <td>
                            <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                              حذف
                            </span>
                          </td>
                          <td>
                            <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                              جزئیات
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </section>
                </section>
              </section>
            </section>

            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <section className="col-12 p-3">
                  <span>جدول نوع پنجم</span>
                </section>

                <section className="col-12 p-3">
                  <section className="p-2 table-all-news">
                    <table>
                      <thead>
                        <tr>
                          <th>ایدی</th>
                          <th>خبر</th>
                          <th>دسته بندی</th>
                          <th>منتشر شده</th>
                          <th>دیدگاه</th>
                          <th>ویرایش</th>
                          <th>حذف</th>
                          <th>پیش نمایش</th>
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
                            کووید: قوانین ماسک صورت و مجوز کووید برای پایان در
                            جهان
                          </td>
                          <td>
                            <span className="bg-info b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                              سلامتی
                            </span>
                          </td>
                          <td>12 دی 1401</td>
                          <td>
                            <span className="bg-warning b-r-10 pt-1 pb-1 pl-1 pr-1 text-white">
                              46
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
                            <span className="input-buttons pt-1 pb-1 pr-1 pl-1">
                              دیدن پیش نمایش
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
            </section>

            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <section className="col-12 p-3">
                  <span>جدول نوع ششم</span>
                </section>

                <section className="col-12 p-3">
                  <section className="p-2 table-ad-pricing">
                    <table>
                      <thead>
                        <tr>
                          <th>ایدی</th>
                          <th>نام تبلیغات</th>
                          <th>پیش نمایش تبلیغات</th>
                          <th>اندازه تبلیغات</th>
                          <th>هزینه / روز</th>
                          <th>وضعیت</th>
                          <th>ویرایش</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>صفحه اصلی پایین</td>
                          <td>
                            <img
                              alt="Profile"
                              lazy="loading"
                              src="/Assets/Images/Profiles/Profile2.png"
                            />
                          </td>
                          <td>720X90px</td>
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
                        </tr>
                      </tbody>
                    </table>
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
