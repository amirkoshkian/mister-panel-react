////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
import {
  KeyboardArrowUp,
  AttachMoney,
  Link,
  CalendarMonth,
  PersonOutlineOutlined,
  Poll,
  TrendingUp,
  Star,
  KeyboardArrowDown,
} from "@mui/icons-material";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class Widgets extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-12 p-2">
              <section className="d-flex">
                <section className="col-xl-6 d-flex">
                  <section className="col-xl-6 p-2 mb-1">
                    <section className="bg-t-o b-r-10">
                      <section className="col-sm-12 d-flex align-items-center justify-content-between pr-1 pl-1 pt-4 pb-5">
                        <section>
                          <AttachMoney className="text-color-main" />
                        </section>

                        <section>
                          <KeyboardArrowUp className="text-success" />

                          <span className="text-success">K 75.2</span>
                        </section>
                      </section>

                      <section className="col-sm-12 d-flex align-items-start justify-content-center flex-column pr-1 pl-1 pb-2">
                        <span>کل درآمد</span>
                      </section>

                      <section className="col-sm-12 pr-1 pl-1 pb-3 pt-4 pb-4">
                        <section className="d-flex align-items-start justify-content-between">
                          <span>درصد درآمد</span>
                          <span>75</span>
                        </section>
                        <section className="progress">
                          <section
                            aria-valuemax="100"
                            aria-valuemin="0"
                            aria-valuenow="20"
                            className="progress-bar progress-bar-xs wd-75p"
                            role="progressbar"
                          ></section>
                        </section>
                      </section>
                    </section>
                  </section>

                  <section className="col-xl-6 p-2">
                    <section className="bg-t-o b-r-10">
                      <section className="col-sm-12 d-flex align-items-center justify-content-between pr-1 pl-1 pt-4 pb-5">
                        <section>
                          <Link className="text-color-main" />
                        </section>

                        <section>
                          <KeyboardArrowUp className="text-success" />

                          <span className="text-success">% 64.4</span>
                        </section>
                      </section>

                      <section className="col-sm-12 d-flex align-items-start justify-content-center flex-column pr-2">
                        <span className="pb-1">142.8 هزار</span>
                        <span>کل برداشت ها</span>
                      </section>

                      <section className="col-sm-12 d-flex align-items-start justify-content-start pr-1 pb-3 pt-4">
                        <span className="bg-t-d-m b-r-10 pr-1 pl-1">
                          یک سال گذشته
                        </span>
                      </section>
                    </section>
                  </section>
                </section>

                <section className="col-xl-6 d-flex">
                  <section className="col-xl-6 p-2 mb-1">
                    <section className="bg-t-o b-r-10">
                      <section className="col-sm-12 d-flex align-items-center justify-content-between pr-1 pl-1 pt-4 pb-5">
                        <section>
                          <Link className="text-color-main" />
                        </section>

                        <section>
                          <KeyboardArrowUp className="text-success" />

                          <span className="text-success">% 83.4</span>
                        </section>
                      </section>

                      <section className="col-sm-12 d-flex align-items-start justify-content-center flex-column pr-2">
                        <span className="pb-1">54.8 هزار</span>
                        <span>کل برداشت ها</span>
                      </section>

                      <section className="col-sm-12 d-flex align-items-start justify-content-start pr-1 pb-3 pt-4">
                        <span className="bg-t-d-m b-r-10 pr-1 pl-1">
                          دو سال گذشته
                        </span>
                      </section>
                    </section>
                  </section>

                  <section className="col-xl-6 p-2">
                    <section className="bg-t-o b-r-10">
                      <section className="col-sm-12 d-flex align-items-center justify-content-between pr-1 pl-1 pt-4 pb-5">
                        <section>
                          <AttachMoney className="text-color-main" />
                        </section>

                        <section>
                          <KeyboardArrowUp className="text-success" />

                          <span className="text-success">K 6.2</span>
                        </section>
                      </section>

                      <section className="col-sm-12 d-flex align-items-start justify-content-center flex-column pr-1 pl-1 pb-2">
                        <span>کل درآمد</span>
                      </section>

                      <section className="col-sm-12 pr-1 pl-1 pb-3 pt-4 pb-4">
                        <section className="d-flex align-items-start justify-content-between">
                          <span>درصد درآمد</span>
                          <span>45</span>
                        </section>
                        <section className="progress">
                          <section
                            aria-valuemax="100"
                            aria-valuemin="0"
                            aria-valuenow="20"
                            className="progress-bar progress-bar-xs bg-danger wd-45p"
                            role="progressbar"
                          ></section>
                        </section>
                      </section>
                    </section>
                  </section>
                </section>
              </section>

              <section className="row col-xl-12">
                <section className="col-xl-6 p-2">
                  <section className="bg-t-o b-r-10">
                    <section className="row p-3">
                      <h3>بررسی اجمالی فروش</h3>

                      <span>مجموع 42.5 هزار فروش</span>
                    </section>

                    <section className="row d-flex align-items-start justify-content-start pr-2 pt-1 pb-3">
                      <section className="col-xl-4 d-flex align-items-center justify-content-start pt-2 pb-2">
                        <section className="col-xl-2 bg-success b-r-10 d-flex align-items-center justify-content-start p-2">
                          <PersonOutlineOutlined />
                        </section>

                        <section className="col-xl-10 d-flex flex-column pr-1">
                          <h4 className="m-0">8,524</h4>

                          <span>مشتریان</span>
                        </section>
                      </section>

                      <section className="col-xl-4 d-flex align-items-center justify-content-start pt-2 pb-2">
                        <section className="col-xl-2 bg-main b-r-10 d-flex align-items-center justify-content-start p-2">
                          <Poll />
                        </section>

                        <section className="col-xl-10 d-flex flex-column pr-1">
                          <h4 className="m-0">5000تومان</h4>

                          <span>سود کل</span>
                        </section>
                      </section>

                      <section className="col-xl-4 d-flex align-items-center justify-content-start pt-2 pb-2">
                        <section className="col-xl-2 bg-danger b-r-10 d-flex align-items-center justify-content-start p-2">
                          <TrendingUp />
                        </section>

                        <section className="col-xl-10 d-flex flex-column pr-1">
                          <h4 className="m-0">2,435k</h4>

                          <span>معاملات</span>
                        </section>
                      </section>
                    </section>
                  </section>
                </section>

                <section className="col-xl-3 p-2">
                  <section className="bg-t-o b-r-10">
                    <section className="bg-t-o b-r-10">
                      <section className="p-3">
                        <h3 className="mb-4">رتبه بندی ها</h3>

                        <span className="bg-main b-r-10 pr-1 pl-1 text-nowrap">
                          سال 2022
                        </span>
                      </section>

                      <section className="p-3">
                        <section className="col-sm-12 d-flex align-items-center justify-content-between p-2">
                          <section>
                            <Star className="text-color-main" />
                          </section>

                          <section>
                            <KeyboardArrowUp className="text-success" />

                            <span className="text-success">% 26</span>
                          </section>
                        </section>
                      </section>
                    </section>
                  </section>
                </section>

                <section className="col-xl-3 p-2">
                  <section className="bg-t-o b-r-10">
                    <section className="bg-t-o b-r-10">
                      <section className="p-3">
                        <h3 className="mb-4">جلسات</h3>

                        <span className="bg-success b-r-10 pr-1 pl-1 text-nowrap">
                          ماه گذشته
                        </span>
                      </section>

                      <section className="p-3">
                        <section className="col-sm-12 d-flex align-items-center justify-content-between p-2">
                          <section>
                            <CalendarMonth className="text-color-main" />
                          </section>

                          <section>
                            <KeyboardArrowDown className="text-danger" />

                            <span className="text-danger">% 72</span>
                          </section>
                        </section>
                      </section>
                    </section>
                  </section>
                </section>
              </section>

              <section className="row">
                <section className="col-xl-8 p-2">
                  <section className="bg-t-o b-r-10">
                    <section className="row p-4 pb-5">
                      <h3>جدول زمانی فعالیت</h3>
                    </section>

                    <section className="row pb-4 d-flex align-items-center justify-content-between">
                      <section className="col-9 position-relative">
                        <span className="span-point-right-activity-time-line-content-page-analytics bg-danger"></span>

                        <section className="d-flex flex-column pr-5">
                          <p>برای محصول بعدی ویدیو بسازید</p>

                          <span>ویدیوی معرفی و جزئیات محصول</span>
                        </section>
                      </section>

                      <section className="col-3 d-flex align-items-center justify-content-center">
                        <span>فردا</span>
                      </section>
                    </section>

                    <section className="row pb-4 d-flex align-items-center justify-content-between">
                      <section className="col-9 position-relative">
                        <span className="span-point-right-activity-time-line-content-page-analytics bg-primary"></span>

                        <section className="d-flex flex-column pr-5">
                          <p>پرداختی از مشتری دریافت شد 😍</p>

                          <span>
                            100000 تومان برای اپلیکیشن بانکی اندروید دریافت کرد
                          </span>
                        </section>
                      </section>

                      <section className="col-3 d-flex align-items-center justify-content-center">
                        <span>12فروردین</span>
                      </section>
                    </section>

                    <section className="row pb-4 d-flex align-items-center justify-content-between">
                      <section className="col-9 position-relative">
                        <span className="span-point-right-activity-time-line-content-page-analytics bg-success"></span>

                        <section className="d-flex flex-column pr-5">
                          <p>ملاقات باامیر برای پروژه بعدی</p>

                          <span>جلسه تماس ویدیویی در ساعت 9 شب</span>
                        </section>
                      </section>

                      <section className="col-3 d-flex align-items-center justify-content-center">
                        <span>21اردیبهشت</span>
                      </section>
                    </section>
                  </section>
                </section>

                <section className="col-xl-4 p-2">
                  <section className="bg-t-o b-r-10">
                    <section className="bg-t-o b-r-10">
                      <section className="row pr-2 pt-3">
                        <section className="col-xl-12">
                          <h3>آمار پروژه</h3>
                        </section>
                      </section>

                      <section className="row pr-2 pl-2 pt-2">
                        <section className="col-xl-6 d-flex align-items-center justify-content-start">
                          <span>نام</span>
                        </section>

                        <section className="col-xl-6 d-flex align-items-center justify-content-end">
                          <span>بودجه</span>
                        </section>
                      </section>

                      <section className="row p-4">
                        <section className="d-flex d-flex align-items-center justify-content-between pb-2">
                          <section className="col-xl-10 d-flex align-items-center justify-content-start">
                            <img
                              alt="Project 1"
                              loading="lazy"
                              src="/Assets/Images/Project/Project1.png"
                              width="50px"
                              className="col-xl-1"
                            />

                            <section className="col-xl-11 pr-2 d-flex flex-column align-center justify-content-start">
                              <span>فرتورسازی سه بعدی</span>

                              <span>برنامه بلندر</span>
                            </section>
                          </section>

                          <section className="col-xl-2 d-flex align-center justify-content-center">
                            <span className="bg-t-d-m b-r-10 pr-1 pl-1 text-nowrap">
                              100 تومان
                            </span>
                          </section>
                        </section>

                        <section className="d-flex d-flex align-items-center justify-content-between pb-2 pt-2">
                          <section className="col-xl-10 d-flex align-items-center justify-content-start">
                            <img
                              alt="Project 2"
                              loading="lazy"
                              src="/Assets/Images/Project/Project3.png"
                              width="50px"
                              className="col-xl-1"
                            />

                            <section className="col-xl-11 pr-2 d-flex flex-column align-center justify-content-start">
                              <span>واتساپ</span>

                              <span>برنامه اندروید</span>
                            </section>
                          </section>

                          <section className="col-xl-2 d-flex align-center justify-content-center">
                            <span className="bg-t-d-m b-r-10 pr-1 pl-1 text-nowrap">
                              200 تومان
                            </span>
                          </section>
                        </section>

                        <section className="d-flex d-flex align-items-center justify-content-between pb-2 pt-2">
                          <section className="col-xl-10 d-flex align-items-center justify-content-start">
                            <img
                              alt="Project 3"
                              loading="lazy"
                              src="/Assets/Images/Project/Project4.png"
                              width="50px"
                              className="col-xl-1"
                            />

                            <section className="col-xl-11 pr-2 d-flex flex-column align-center justify-content-start">
                              <span>برنامه وب</span>

                              <span>ریکت</span>
                            </section>
                          </section>

                          <section className="col-xl-2 d-flex align-center justify-content-center">
                            <span className="bg-t-d-m b-r-10 pr-1 pl-1 text-nowrap">
                              160 تومان
                            </span>
                          </section>
                        </section>

                        <section className="d-flex d-flex align-items-center justify-content-between pt-2">
                          <section className="col-xl-10 d-flex align-items-center justify-content-start">
                            <img
                              alt="Project 4"
                              loading="lazy"
                              src="/Assets/Images/Project/Project5.png"
                              width="50px"
                              className="col-xl-1"
                            />

                            <section className="col-xl-11 pr-2 d-flex flex-column align-center justify-content-start">
                              <span>وبسایت</span>

                              <span>ویو + لاراول</span>
                            </section>
                          </section>

                          <section className="col-xl-2 d-flex align-center justify-content-center">
                            <span className="bg-t-d-m b-r-10 pr-1 pl-1 text-nowrap">
                              120 تومان
                            </span>
                          </section>
                        </section>
                      </section>
                    </section>
                  </section>
                </section>
              </section>

              <section className="row">
                <section className="col-xl-4 p-2">
                  <section className="bg-t-o b-r-10">
                    <section className="row pr-2 pb-4 pt-3">
                      <h3>بیشترین فروش در کشورها</h3>
                    </section>

                    <section className="row d-flex pr-2 pb-3 flex-column">
                      <section className="d-flex align-items-start justify-content-start">
                        <h2 className="m-0 pl-3">222,546</h2>

                        <span className="bg-success b-r-10 p-1">% 42.5</span>
                      </section>

                      <span className="pt-2">فروش 90 روز گذشته</span>
                    </section>

                    <section className="row bt pt-2 pb-2 mr-4 ml-4">
                      <section className="col-6">
                        <span>استرالیا</span>
                      </section>

                      <section className="col-4">
                        <span>10,357</span>
                      </section>

                      <section className="col-2">
                        <span className="pl-1">% 85</span>

                        <KeyboardArrowUp className="text-success" />
                      </section>
                    </section>

                    <section className="row bt pt-2 pb-2 mr-4 ml-4">
                      <section className="col-6">
                        <span>کانادا</span>
                      </section>

                      <section className="col-4">
                        <span>16,937</span>
                      </section>

                      <section className="col-2">
                        <span className="pl-1">% 54</span>

                        <KeyboardArrowDown className="text-danger" />
                      </section>
                    </section>

                    <section className="row bt pt-2 pb-2 mr-4 ml-4">
                      <section className="col-6">
                        <span>هندوستان</span>
                      </section>

                      <section className="col-4">
                        <span>43,473</span>
                      </section>

                      <section className="col-2">
                        <span className="pl-1">% 76</span>

                        <KeyboardArrowUp className="text-success" />
                      </section>
                    </section>

                    <section className="row bt pt-2 pb-2 mr-4 ml-4">
                      <section className="col-6">
                        <span>ژاپن</span>
                      </section>

                      <section className="col-4">
                        <span>19,757</span>
                      </section>

                      <section className="col-2">
                        <span className="pl-1">% 42</span>

                        <KeyboardArrowUp className="text-success" />
                      </section>
                    </section>

                    <section className="row bt pt-2 pb-2 mr-4 ml-4">
                      <section className="col-6">
                        <span>ایالات متحده</span>
                      </section>

                      <section className="col-4">
                        <span>12,565</span>
                      </section>

                      <section className="col-2">
                        <span className="pl-1">% 84</span>

                        <KeyboardArrowDown className="text-danger" />
                      </section>
                    </section>
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
