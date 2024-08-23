////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
import {
  PersonOutlineOutlined,
  Poll,
  TrendingUp,
  Star,
  KeyboardArrowUp,
  KeyboardArrowDown,
  CalendarMonth,
} from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chart from "react-apexcharts";
import fa from "apexcharts/dist/locales/fa.json";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

const SettingsSliderOne = {
  dots: true,
  arrows: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const SettingsSliderTwo = {
  dots: true,
  arrows: true,
  autoplay: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
};

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class Ecommerce extends React.Component {
  state = {
    SeriesLiveVisitors: [
      {
        name: "بازدید کنندگان زنده",
        data: [203, 140, 152, 102, 82, 93, 97, 143, 206, 210, 56, 68],
      },
    ],
    OptionsLiveVisitors: {
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
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "12",
          "11",
          "10",
          "9",
          "8",
          "7",
          "6",
          "5",
          "4",
          "3",
          "2",
          "1",
        ],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " بازدید";
          },
        },
      },
      yaxis: {
        opposite: true,
      },
    },
    SeriesSpeed: [
      {
        name: "صفحه اصلی",
        data: [80, 50, 30, 40, 100, 20],
      },
      {
        name: "صفحه ورود",
        data: [20, 30, 40, 80, 20, 80],
      },
      {
        name: "صفحه ثبت نام",
        data: [44, 76, 78, 13, 43, 10],
      },
    ],
    OptionsSpeed: {
      chart: {
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
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
        width: 2,
      },
      fill: {
        opacity: 0.1,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
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
          <section className="row">
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
          </section>
        </section>

        <section className="row">
          <section className="row">
            <section className="col-xl-6 p-2">
              <section className="col-xl-12 p-3 bg-t-o b-r-10">
                <Slider {...SettingsSliderOne} className="slider-one">
                  <section className="section-image-slider-page-ecommerce">
                    <img
                      alt="ImageSlider"
                      loading="lazy"
                      src="/Assets/Images/Slider/Slider1.png"
                    />
                  </section>
                  <section className="section-image-slider-page-ecommerce">
                    <img
                      alt="ImageSlider"
                      loading="lazy"
                      src="/Assets/Images/Slider/Slider2.png"
                    />
                  </section>
                  <section className="section-image-slider-page-ecommerce">
                    <img
                      alt="ImageSlider"
                      loading="lazy"
                      src="/Assets/Images/Slider/Slider3.png"
                    />
                  </section>
                </Slider>
              </section>
            </section>

            <section className="col-xl-6 p-2">
              <section className="col-xl-12 p-3 bg-t-o b-r-10">
                <section className="p-2">
                  <h3>بازدید کنندگان امروز</h3>

                  <span>
                    در مجموع 2053 بازدید کننده امروز از سایت بازدید کرده اند
                  </span>
                </section>

                <section className="col-xl-12 p-2 h-350">
                  <Chart
                    series={this.state.SeriesLiveVisitors}
                    options={this.state.OptionsLiveVisitors}
                    width="100%"
                    height="100%"
                    type="bar"
                  />
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
                    <span>21 اردیبهشت</span>
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
        </section>

        <section className="row">
          <section className="row">
            <section className="col-xl-4 p-2">
              <section className="bg-t-o b-r-10">
                <section className="bg-t-o b-r-10">
                  <section className="row pr-2 p-4">
                    <h3>سرعت وبسایت</h3>
                  </section>

                  <section className="row h-400 pr-2 pl-2 pb-4">
                    <Chart
                      series={this.state.SeriesSpeed}
                      options={this.state.OptionsSpeed}
                      width="100%"
                      height="100%"
                      type="radar"
                    />
                  </section>
                </section>
              </section>
            </section>

            <section className="col-xl-8 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-xl-12 p-3 bg-t-o b-r-10">
                  <Slider {...SettingsSliderTwo} className="slider-two">
                    <section className="section-image-slider-page-ecommerce">
                      <img
                        alt="ImageSlider"
                        loading="lazy"
                        src="/Assets/Images/Slider/Slider4.png"
                      />
                    </section>
                    <section className="section-image-slider-page-ecommerce">
                      <img
                        alt="ImageSlider"
                        loading="lazy"
                        src="/Assets/Images/Slider/Slider5.png"
                      />
                    </section>
                    <section className="section-image-slider-page-ecommerce">
                      <img
                        alt="ImageSlider"
                        loading="lazy"
                        src="/Assets/Images/Slider/Slider6.png"
                      />
                    </section>
                    <section className="section-image-slider-page-ecommerce">
                      <img
                        alt="ImageSlider"
                        loading="lazy"
                        src="/Assets/Images/Slider/Slider7.png"
                      />
                    </section>
                    <section className="section-image-slider-page-ecommerce">
                      <img
                        alt="ImageSlider"
                        loading="lazy"
                        src="/Assets/Images/Slider/Slider8.png"
                      />
                    </section>
                    <section className="section-image-slider-page-ecommerce">
                      <img
                        alt="ImageSlider"
                        loading="lazy"
                        src="/Assets/Images/Slider/Slider2.png"
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
