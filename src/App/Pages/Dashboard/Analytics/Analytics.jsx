////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
import {
  KeyboardArrowUp,
  AddShoppingCart,
  Preview,
  TrendingUp,
  TrendingDown,
  AttachMoney,
  Link,
  KeyboardArrowDown,
} from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chart from "react-apexcharts";
import fa from "apexcharts/dist/locales/fa.json";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

const SettingsSliderOne = {
  dots: true,
  arrows: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class Analytics extends React.Component {
  state = {
    SeriesTotalTransactions: [
      {
        name: "فروش به مردان",
        data: [
          0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
          4.5, 3.9, 3.5, 3,
        ],
      },
      {
        name: "فروش به زنان",
        data: [
          -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22,
          -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
        ],
      },
    ],
    OptionsTotalTransactions: {
      chart: {
        type: "bar",
        stacked: true,
        toolbar: {
          show: true,
          autoSelected: "pan",
        },
        locales: [fa],
        defaultLocale: "fa",
        fontFamily: "IranSans",
        foreColor: "var(--mp-theme-color)",
      },
      colors: ["#666cff", "#3CCF4E"],
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "80%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        width: 1,
        colors: ["var(--mp-theme-color)"],
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      yaxis: [
        {
          opposite: true,
          min: -5,
          max: 5,
        },
      ],
      tooltip: {
        shared: false,
        x: {
          formatter: function (val) {
            return val;
          },
        },
        y: {
          formatter: function (val) {
            return Math.abs(val) + "%";
          },
        },
      },
      xaxis: {
        categories: [
          "85+",
          "80-84",
          "75-79",
          "70-74",
          "65-69",
          "60-64",
          "55-59",
          "50-54",
          "45-49",
          "40-44",
          "35-39",
          "30-34",
          "25-29",
          "20-24",
          "15-19",
          "10-14",
          "5-9",
          "0-4",
        ],
        labels: {
          formatter: function (val) {
            return Math.abs(Math.round(val)) + "%";
          },
        },
      },
      yaxis: {
        opposite: true,
      },
    },
    SeriesPerformance: [
      {
        name: "کارایی",
        data: [80, 50, 30, 40, 100, 50],
      },
    ],
    OptionsPerformance: {
      chart: {
        type: "radar",
        stacked: true,
        toolbar: {
          show: true,
          autoSelected: "pan",
        },
        locales: [fa],
        defaultLocale: "fa",
        fontFamily: "IranSans",
        foreColor: "var(--mp-theme-color)",
      },
      stroke: {
        width: 1,
        colors: ["var(--mp-theme-color)"],
      },
      colors: ["#3CCF4E"],
      xaxis: {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
      },
      yaxis: {
        opposite: true,
      },
    },
    SeriesVisit: [
      {
        name: "بازدید کنندگان معمولی",
        data: [40, 45, 30, 20, 34, 30, 63, 26, 47],
      },
      {
        name: "بازدید کنندگان پریمیوم",
        data: [60, 35, 60, 69, 65, 30, 20, 34, 53],
      },
      {
        name: "همه بازدید کنندگان",
        data: [100, 80, 90, 89, 94, 60, 83, 53, 99],
      },
    ],
    OptionsVisit: {
      chart: {
        type: "bar",
        stacked: true,
        toolbar: {
          show: true,
          autoSelected: "pan",
        },
        locales: [fa],
        defaultLocale: "fa",
        fontFamily: "IranSans",
        foreColor: "var(--mp-theme-color)",
      },
      colors: ["#fb8500", "#666cff", "#3CCF4E"],
      stroke: {
        show: true,
        width: 1,
        colors: ["var(--mp-theme-color)"],
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "60%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: true,
      },
      xaxis: {
        categories: [
          "آذر",
          "آبان",
          "مهر",
          "شهریور",
          "مرداد",
          "تیر",
          "خرداد",
          "اردیبهشت",
          "فروردین",
        ],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (value) {
            return value + " بازدید";
          },
        },
      },
      yaxis: {
        opposite: true,
      },
    },
  };

  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-8 p-2">
              <section className="bg-t-o b-r-10 d-flex align-items-center justify-content-between pr-1 pl-1 pt-1 pb-2">
                <section className="col-sm-6 d-flex align-items-start justify-content-center flex-column p-2">
                  <h1>تبریک امیر!🎉</h1>
                  <span>شما امروز 89% فروش بیشتری داشته اید.</span>
                  <span>نشان جدید خود را در نمایه خود بررسی کنید.</span>
                  <button className="btn btn-success bg-main mt-3">
                    دیدن پروفایل
                  </button>
                </section>

                <section className="col-sm-6 d-flex align-items-end justify-content-center flex-column">
                  <img
                    alt="Logo"
                    loading="lazy"
                    src="/Assets/Images/Logo.png"
                    className="image-logo-content-page-analytics"
                  />
                </section>
              </section>
            </section>

            <section className="col-xl-2 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-sm-12 d-flex align-items-center justify-content-between p-4">
                  <section>
                    <AddShoppingCart className="text-color-main" />
                  </section>

                  <section>
                    <KeyboardArrowUp className="text-success" />

                    <span className="text-success">% 30</span>
                  </section>
                </section>

                <section className="col-sm-12 d-flex align-items-start justify-content-center flex-column pr-2">
                  <span>155 هزار بازدید</span>
                  <span>کل سفارشات</span>
                </section>

                <section className="col-sm-12 d-flex align-items-start justify-content-start pr-1 pb-3 pt-4">
                  <span className="bg-t-d-m b-r-10 pr-1 pl-1">2 ماه گذشته</span>
                </section>
              </section>
            </section>

            <section className="col-xl-2 p-2">
              <section className="bg-t-o b-r-10">
                <section className="bg-t-o b-r-10">
                  <section className="col-sm-12 d-flex align-items-center justify-content-between p-4">
                    <section>
                      <Preview className="text-color-main" />
                    </section>

                    <section>
                      <KeyboardArrowUp className="text-success" />

                      <span className="text-success">% 60</span>
                    </section>
                  </section>

                  <section className="col-sm-12 d-flex align-items-start justify-content-center flex-column pr-2">
                    <span>100 هزار بازدید</span>
                    <span>کل بازدید ها</span>
                  </section>

                  <section className="col-sm-12 d-flex align-items-start justify-content-start pr-1 pb-3 pt-4">
                    <span className="bg-t-d-m b-r-10 pr-1 pl-1">
                      5 ماه گذشته
                    </span>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>

        <section className="row">
          <section className="row">
            <section className="col-xl-8 p-2">
              <section className="bg-t-o b-r-10">
                <section className="row p-4">
                  <h3>بازدید ها</h3>
                </section>

                <section className="row h-400 pr-2 pl-2 pb-4">
                  <Chart
                    series={this.state.SeriesVisit}
                    options={this.state.OptionsVisit}
                    width="100%"
                    height="100%"
                    type="bar"
                  />
                </section>
              </section>
            </section>

            <section className="col-xl-4 p-2">
              <section className="bg-t-o b-r-10">
                <section className="row pr-2 p-4">
                  <h3>کارایی</h3>
                </section>

                <section className="row h-400 pr-2 pl-2 pb-4">
                  <Chart
                    series={this.state.SeriesPerformance}
                    options={this.state.OptionsPerformance}
                    width="100%"
                    height="100%"
                    type="radar"
                  />
                </section>
              </section>
            </section>
          </section>
        </section>

        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-4 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-xl-12 p-4 pb-5 pt-3">
                  <section>
                    <h3>گزارش بازدید</h3>
                    <span>بازدید ماه گذشته 10,000 هزار</span>
                  </section>

                  <section className="row pt-5 pb-4 bb">
                    <section className="col-xl-6 d-flex flex-column align-items-center justify-content-center p-2">
                      <TrendingDown className="bg-danger b-r-10 p-1" />
                      <span className="p-1">این هفته</span>
                      <span className="p-1">% 64.35</span>
                    </section>

                    <section className="col-xl-6 d-flex flex-column align-items-center justify-content-center brm p-2">
                      <TrendingUp className="bg-success b-r-5 p-1" />
                      <span className="p-1">این هفته</span>
                      <span className="p-1">% 56.23</span>
                    </section>
                  </section>

                  <section className="row pt-4 pb-4 bb">
                    <section className="col-xl-6 d-flex flex-column align-items-center justify-content-center p-2">
                      <TrendingDown className="bg-danger b-r-10 p-1" />
                      <span className="p-1">این ماه</span>
                      <span className="p-1">% 94.23</span>
                    </section>

                    <section className="col-xl-6 d-flex flex-column align-items-center justify-content-center brm p-2">
                      <TrendingUp className="bg-success b-r-5 p-1" />
                      <span className="p-1">این ماه</span>
                      <span className="p-1">% 63.03</span>
                    </section>
                  </section>

                  <section className="row pt-3">
                    <section className="col-xl-6 d-flex flex-column align-items-center justify-content-center p-3">
                      <span className="p-1">بازدید ها</span>
                      <span className="p-1">% 60.65</span>
                    </section>

                    <section className="col-xl-6 d-flex flex-column align-items-center justify-content-center p-3">
                      <button className="btn btn-success bg-main">
                        دیدن بازدید
                      </button>
                    </section>
                  </section>
                </section>
              </section>
            </section>

            <section className="col-xl-8 p-2">
              <section className="row bg-t-o b-r-10">
                <section className="col-xl-12 pr-4 pt-3 pb-3 pl-3">
                  <section>
                    <h3>کل معاملات</h3>
                  </section>

                  <section className="h-500">
                    <Chart
                      series={this.state.SeriesTotalTransactions}
                      options={this.state.OptionsTotalTransactions}
                      width="100%"
                      height="100%"
                      type="bar"
                    />
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>

        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-4 p-2">
              <section className="bg-t-o b-r-10">
                <section className="row pr-2 pt-3">
                  <section className="col-xl-12">
                    <h3>آمار پروژه</h3>
                  </section>
                </section>

                <section className="row pr-2 pl-2 pt-3">
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
                        src="/Assets/Images/Project/Project2.png"
                        width="50px"
                        className="col-xl-1"
                      />

                      <section className="col-xl-11 pr-2 d-flex flex-column align-center justify-content-start">
                        <span>طراحی اپلیکیشن مالی</span>

                        <span>کیت ui فیگما</span>
                      </section>
                    </section>

                    <section className="col-xl-2 d-flex align-center justify-content-center">
                      <span className="bg-t-d-m b-r-10 pr-1 pl-1 text-nowrap">
                        150 تومان
                      </span>
                    </section>
                  </section>

                  <section className="d-flex d-flex align-items-center justify-content-between pb-2 pt-2">
                    <section className="col-xl-10 d-flex align-items-center justify-content-start">
                      <img
                        alt="Project 3"
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
                        alt="Project 4"
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
                        alt="Project 5"
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

            <section className="col-xl-4 row">
              <section className="col-xl-6">
                <section className="col-xl-12 p-2 mb-1">
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

                <section className="col-xl-12 p-2">
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

              <section className="col-xl-6">
                <section className="col-xl-12 p-2 mb-1">
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

                <section className="col-xl-12 p-2">
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

            <section className="col-xl-4 p-2">
              <section className="bg-t-o b-r-10">
                <section className="bg-t-o b-r-10">
                  <section className="row pr-2 pb-4 pt-3">
                    <h3>بیشترین خرید در کشورها</h3>
                  </section>

                  <section className="row d-flex pr-2 pb-2 flex-column">
                    <section className="d-flex align-items-start justify-content-start">
                      <h2 className="m-0 pl-3">222,546</h2>
                      <span className="bg-success b-r-10 p-1 c-white">
                        % 54.7
                      </span>
                    </section>
                    <span className="pt-2">فروش 90 روز گذشته</span>
                  </section>

                  <section className="row bt pt-3 pb-3 mr-4 ml-4">
                    <section className="col-6">
                      <span>روسیه</span>
                    </section>
                    <section className="col-4">
                      <span>8,635</span>
                    </section>
                    <section className="col-2">
                      <span className="pl-1">% 43</span>
                      <KeyboardArrowUp className="text-success" />
                    </section>
                  </section>

                  <section className="row bt pt-3 pb-3 mr-4 ml-4">
                    <section className="col-6">
                      <span>فرانسه</span>
                    </section>
                    <section className="col-4">
                      <span>12,656</span>
                    </section>
                    <section className="col-2">
                      <span className="pl-1">% 75</span>
                      <KeyboardArrowUp className="text-success" />
                    </section>
                  </section>

                  <section className="row bt pt-3 pb-3 mr-4 ml-4">
                    <section className="col-6">
                      <span>هند</span>
                    </section>
                    <section className="col-4">
                      <span>34,272</span>
                    </section>
                    <section className="col-2">
                      <span className="pl-1">% 34</span>
                      <KeyboardArrowDown className="text-danger" />
                    </section>
                  </section>

                  <section className="row bt pt-3 pb-3 mr-4 ml-4">
                    <section className="col-6">
                      <span>المان</span>
                    </section>
                    <section className="col-4">
                      <span>8,934</span>
                    </section>
                    <section className="col-2">
                      <span className="pl-1">% 45</span>
                      <KeyboardArrowUp className="text-success" />
                    </section>
                  </section>

                  <section className="row bt pt-3 pb-3 mr-4 ml-4">
                    <section className="col-6">
                      <span>ایران</span>
                    </section>
                    <section className="col-4">
                      <span>5,573</span>
                    </section>
                    <section className="col-2">
                      <span className="pl-1">% 46</span>
                      <KeyboardArrowDown className="text-danger" />
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>

        <section className="row">
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
                    <span>12 فروردین</span>
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
                    <span>21 اردیبهشت</span>
                  </section>
                </section>
              </section>
            </section>

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

        <section className="row">
          <section className="row">
            <section className="col-xl-3 p-2">
              <section className="bg-t-o b-r-10">
                <section className="h-400 p-3">
                  <Calendar
                    calendar={persian}
                    locale={persian_fa}
                    className="w-100 h-100 d-flex align-items-center justify-content-center"
                  />
                </section>
              </section>
            </section>

            <section className="col-xl-9 p-2">
              <section className="bg-t-o b-r-10">
                <section className="p-3 h-400">
                  <Slider {...SettingsSliderOne} className="slider-three">
                    <section className="section-image-slider-page-analytics">
                      <img
                        alt="ImageSlider"
                        loading="lazy"
                        src="/Assets/Images/Slider/Slider1.png"
                      />
                    </section>
                    <section className="section-image-slider-page-analytics">
                      <img
                        alt="ImageSlider"
                        loading="lazy"
                        src="/Assets/Images/Slider/Slider2.png"
                      />
                    </section>
                    <section className="section-image-slider-page-analytics">
                      <img
                        alt="ImageSlider"
                        loading="lazy"
                        src="/Assets/Images/Slider/Slider3.png"
                      />
                    </section>
                    <section className="section-image-slider-page-analytics">
                      <img
                        alt="ImageSlider"
                        loading="lazy"
                        src="/Assets/Images/Slider/Slider4.png"
                      />
                    </section>
                    <section className="section-image-slider-page-analytics">
                      <img
                        alt="ImageSlider"
                        loading="lazy"
                        src="/Assets/Images/Slider/Slider5.png"
                      />
                    </section>
                    <section className="section-image-slider-page-analytics">
                      <img
                        alt="ImageSlider"
                        loading="lazy"
                        src="/Assets/Images/Slider/Slider6.png"
                      />
                    </section>
                    <section className="section-image-slider-page-analytics">
                      <img
                        alt="ImageSlider"
                        loading="lazy"
                        src="/Assets/Images/Slider/Slider7.png"
                      />
                    </section>
                    <section className="section-image-slider-page-analytics">
                      <img
                        alt="ImageSlider"
                        loading="lazy"
                        src="/Assets/Images/Slider/Slider8.png"
                      />
                    </section>
                  </Slider>
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
