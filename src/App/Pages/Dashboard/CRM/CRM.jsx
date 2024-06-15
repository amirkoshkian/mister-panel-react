////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
import {
  MobileFriendly,
  MovieFilter,
  AccountBalance,
  Code,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from "@mui/icons-material";
import Chart from "react-apexcharts";
import fa from "apexcharts/dist/locales/fa.json";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class CRM extends React.Component {
  state = {
    SeriesMonthlyBudget: [
      {
        name: "بودجه ماهانه - بیشترین حد",
        type: "column",
        data: [440, 505, 414, 671, 600, 413, 201, 352, 752, 320, 257, 260],
      },
      {
        name: "بودجه ماهانه - کمترین حد",
        type: "line",
        data: [230, 402, 305, 207, 403, 202, 170, 301, 220, 220, 102, 106],
      },
    ],
    OptionsMonthlyBudget: {
      chart: {
        type: "line",
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
        width: [0, 4],
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: ["12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"],
      yaxis: {
        opposite: true,
      },
    },
    SeriesTotalProfit: [87, 54],
    OptionsTotalProfit: {
      chart: {
        type: "radialBar",
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
      colors: ["#3CCF4E", "#fb8500"],
      plotOptions: {
        enabled: true,
        radialBar: {
          startAngle: -150,
          endAngle: 150,
          dataLabels: {
            name: {
              fontSize: "16px",
              color: "var(--mp-theme-color)",
              offsetY: -10,
            },
            value: {
              offsetY: 10,
              fontSize: "20px",
              color: "var(--mp-theme-color)",
              formatter: function (val) {
                return val + "%";
              },
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.3,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
        },
      },
      stroke: {
        dashArray: 4,
        colors: ["var(--mp-theme-color)"],
      },
      yaxis: {
        opposite: true,
      },
    },
    SeriesTotalGrowth: [
      {
        name: "رشد کل",
        data: [60, 30, 90, 20, 121, 54],
      },
    ],
    OptionsTotalGrowth: {
      chart: {
        type: "line",
        zoom: {
          enabled: false,
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
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        show: true,
        colors: ["#fb8500"],
      },
      grid: {
        row: {
          colors: ["transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["شهریور", "مرداد", "تیر", "خرداد", "اردیبهشت", "فروردین"],
      },
      yaxis: {
        opposite: true,
      },
    },
    SeriesProjectTimeline: [
      {
        data: [1253, 571, 983, 345],
      },
    ],
    OptionsProjectTimeline: {
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
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        offsetX: 15,
        dropShadow: {
          enabled: true,
        },
      },
      stroke: {
        width: 1,
      },
      xaxis: {
        categories: ["امیر", "کوروش", "زرتشت", "آرش"],
      },
      yaxis: {
        opposite: true,
      },
    },
    SeriesSocialNetworkVisits: [76, 67, 61, 90],
    OptionsSocialNetworkVisits: {
      chart: {
        type: "radialBar",
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
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: ["#3CCF4E", "#0084ff", "#666cff", "#fb8500"],
      labels: ["واتساپ", "تلگرام", "فیسبوک", "اینستاگرام"],
      legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: "right",
        offsetX: 210,
        offsetY: 5,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter: function (seriesName, opts) {
          return (
            " " + seriesName + " : " + opts.w.globals.series[opts.seriesIndex]
          );
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
      yaxis: {
        opposite: true,
      },
    },
    SeriesExternalLinks: [
      {
        name: "تجزیه و تحلیل گوگل",
        data: [4.7, 4.65, 4.76, 5.88, 3.5, 5.1],
      },
      {
        name: "تبلیغات فیس بوک",
        data: [-2.5, -2.05, -5.06, -4.18, -3.4, -3.2],
      },
    ],
    OptionsExternalLinks: {
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
      colors: ["#666cff", "#fb8500"],
      plotOptions: {
        bar: {
          horizontal: false,
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
      yaxis: {
        opposite: true,
      },
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
    },
    SeriesInternalLinks: [
      {
        name: "تجزیه و تحلیل گوگل",
        data: [62.5, 46.5, 47.6, 58.8, 38.5, 52.1],
      },
      {
        name: "تبلیغات فیس بوک",
        data: [-25.6, -20.5, -50.6, -41.8, -35.4, -32.2],
      },
    ],
    OptionsInternalLinks: {
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
      colors: ["#fb8500", "#666cff"],
      plotOptions: {
        bar: {
          horizontal: false,
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
    },
    yaxis: {
      opposite: true,
    },
  };

  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="row col-xl-12">
              <section className="row col-xl-12 d-flex flex-row">
                <section className="col-xl-4 p-2">
                  <section className="bg-t-o b-r-10">
                    <section className="row col-sm-12 d-flex align-items-center justify-content-between pr-2 pl-1 pt-4">
                      <section className="bg-t-o b-r-10">
                        <section className="col-sm-12 d-flex align-items-center justify-content-between">
                          <h3>بودجه ماهانه</h3>

                          <span>625300 تومان</span>
                        </section>

                        <section className="col-sm-12 p-3 d-flex align-items-center justify-content-center h-400">
                          <Chart
                            options={this.state.OptionsMonthlyBudget}
                            series={this.state.SeriesMonthlyBudget}
                            type="line"
                            width="100%"
                            height="100%"
                          />
                        </section>
                      </section>
                    </section>
                  </section>
                </section>

                <section className="col-xl-4 p-2">
                  <section className="bg-t-o b-r-10">
                    <section className="row col-sm-12 d-flex align-items-center justify-content-between pr-2 pl-1 pt-4">
                      <section className="bg-t-o b-r-10">
                        <section className="col-sm-12 d-flex align-items-center justify-content-between">
                          <h3>سود کل</h3>

                          <span>54500 تومان</span>
                        </section>

                        <section className="col-sm-12 p-3 d-flex align-items-center justify-content-center h-400">
                          <Chart
                            options={this.state.OptionsTotalProfit}
                            series={this.state.SeriesTotalProfit}
                            type="radialBar"
                            width="100%"
                            height="100%"
                          />
                        </section>
                      </section>
                    </section>
                  </section>
                </section>

                <section className="col-xl-4 p-2">
                  <section className="bg-t-o b-r-10">
                    <section className="row col-sm-12 d-flex align-items-center justify-content-between pr-2 pl-1 pt-4">
                      <section className="bg-t-o b-r-10">
                        <section className="col-sm-12 d-flex align-items-center justify-content-between">
                          <h3>رشد کل</h3>

                          <span>635000 تومان</span>
                        </section>

                        <section className="col-sm-12 p-3 d-flex align-items-center justify-content-center h-400">
                          <Chart
                            options={this.state.OptionsTotalGrowth}
                            series={this.state.SeriesTotalGrowth}
                            type="line"
                            width="100%"
                            height="100%"
                          />
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
          <section className="row d-flex align-items-center justify-content-center">
            <section className="row col-xl-12">
              <section className="row col-xl-12 d-flex flex-row">
                <section className="col-xl-8 p-2">
                  <section className="row col-xl-12 bg-t-o b-r-10">
                    <section className="col-xl-8">
                      <section className="row col-xl-12 pr-3 pt-3">
                        <h3>جدول زمانی پروژه</h3>

                        <span>مجموع 840 کار تکمیل شد</span>
                      </section>

                      <section className="row col-xl-12 p-3 d-flex align-items-center justify-content-center h-377">
                        <Chart
                          options={this.state.OptionsProjectTimeline}
                          series={this.state.SeriesProjectTimeline}
                          type="bar"
                          width="100%"
                          height="100%"
                        />
                      </section>
                    </section>

                    <section className="col-xl-4">
                      <section className="row col-xl-12 pr-3 pt-3">
                        <h3>لیست پروژه</h3>
                        <span>4 پروژه در حال اجرا</span>
                      </section>

                      <section className="col-xl-12 p-4">
                        <section className="d-flex align-items-center justify-content-start mt-4">
                          <section className="col-xl-2">
                            <section className="bg-success b-r-5 p-3 d-flex align-items-center justify-content-center">
                              <MobileFriendly />
                            </section>
                          </section>

                          <section className="col-xl-10 d-flex align-items-start justify-content-center flex-column pr-2">
                            <h5>برنامه اندروید</h5>

                            <span>برنامه بانک</span>
                          </section>
                        </section>

                        <section className="d-flex align-items-center justify-content-start mt-3">
                          <section className="col-xl-2">
                            <section className="bg-secondary b-r-5 p-3 d-flex align-items-center justify-content-center">
                              <MovieFilter />
                            </section>
                          </section>

                          <section className="col-xl-10 d-flex align-items-start justify-content-center flex-column pr-2">
                            <h5>وب اپلیکیشن</h5>

                            <span>پیام رسان</span>
                          </section>
                        </section>

                        <section className="d-flex align-items-center justify-content-start mt-3">
                          <section className="col-xl-2">
                            <section className="bg-info b-r-5 p-3 d-flex align-items-center justify-content-center">
                              <AccountBalance />
                            </section>
                          </section>

                          <section className="col-xl-10 d-flex align-items-start justify-content-center flex-column pr-2">
                            <h5>داشبورد بانک</h5>

                            <span>ادمین پنل</span>
                          </section>
                        </section>

                        <section className="d-flex align-items-center justify-content-start mt-3">
                          <section className="col-xl-2">
                            <section className="bg-main b-r-5 p-3 d-flex align-items-center justify-content-center">
                              <Code />
                            </section>
                          </section>

                          <section className="col-xl-10 d-flex align-items-start justify-content-center flex-column pr-2">
                            <h5>برنامه دسکتاپ</h5>

                            <span>ادیتور کد</span>
                          </section>
                        </section>
                      </section>
                    </section>
                  </section>
                </section>

                <section className="col-xl-4 p-2">
                  <section className="col-xl-12 bg-t-o b-r-10">
                    <section className="row col-xl-12 pr-3 pt-3">
                      <h3>بازدید از شبکه های اجتماعی</h3>
                    </section>

                    <section className="row col-xl-12 d-flex align-items-center justify-content-center p-3 h-400">
                      <Chart
                        options={this.state.OptionsSocialNetworkVisits}
                        series={this.state.SeriesSocialNetworkVisits}
                        type="radialBar"
                        width="100%"
                        height="100%"
                      />
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
                <section className="row pr-2 pb-4 pt-4">
                  <h3>بیشترین فروش در روستاها</h3>
                </section>

                <section className="row d-flex pr-2 pb-1 flex-column">
                  <section className="d-flex align-items-start justify-content-start">
                    <h2 className="m-0 pl-3">2,554</h2>

                    <span className="bg-success b-r-10 p-1">% 34.6</span>
                  </section>

                  <span className="pt-2">فروش 90 روز گذشته</span>
                </section>

                <section className="row bt pt-3 pb-3 mr-4 ml-4">
                  <section className="col-6">
                    <span>میمند</span>
                  </section>

                  <section className="col-4">
                    <span>1,5623</span>
                  </section>

                  <section className="col-2">
                    <span className="pl-1">% 55</span>

                    <KeyboardArrowUp className="text-success" />
                  </section>
                </section>

                <section className="row bt pt-3 pb-3 mr-4 ml-4">
                  <section className="col-6">
                    <span>ابیانه</span>
                  </section>

                  <section className="col-4">
                    <span>667</span>
                  </section>

                  <section className="col-2">
                    <span className="pl-1">% 14</span>

                    <KeyboardArrowDown className="text-danger" />
                  </section>
                </section>

                <section className="row bt pt-3 pb-3 mr-4 ml-4">
                  <section className="col-6">
                    <span>ماسوله</span>
                  </section>

                  <section className="col-4">
                    <span>443</span>
                  </section>

                  <section className="col-2">
                    <span className="pl-1">% 78</span>

                    <KeyboardArrowUp className="text-success" />
                  </section>
                </section>

                <section className="row bt pt-3 pb-3 mr-4 ml-4">
                  <section className="col-6">
                    <span>کندوان</span>
                  </section>

                  <section className="col-4">
                    <span>757</span>
                  </section>

                  <section className="col-2">
                    <span className="pl-1">% 12</span>

                    <KeyboardArrowUp className="text-success" />
                  </section>
                </section>

                <section className="row bt pt-3 pb-3 mr-4 ml-4">
                  <section className="col-6">
                    <span>زیارت</span>
                  </section>

                  <section className="col-4">
                    <span>165</span>
                  </section>

                  <section className="col-2">
                    <span className="pl-1">% 24</span>

                    <KeyboardArrowDown className="text-danger" />
                  </section>
                </section>

                <section className="row bt pt-3 pb-3 mr-4 ml-4">
                  <section className="col-6">
                    <span>اروامانات</span>
                  </section>

                  <section className="col-4">
                    <span>923</span>
                  </section>

                  <section className="col-2">
                    <span className="pl-1">% 42</span>

                    <KeyboardArrowUp className="text-success" />
                  </section>
                </section>
              </section>
            </section>

            <section className="col-xl-8 p-2">
              <section className="bg-t-o b-r-10">
                <section className="row p-4 pb-5">
                  <h3>لینک های خارجی</h3>
                </section>

                <section className="row d-flex align-items-center justify-content-center h-400 p-3">
                  <Chart
                    series={this.state.SeriesExternalLinks}
                    options={this.state.OptionsExternalLinks}
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
                <section className="row p-4">
                  <h3>لینک های داخلی</h3>
                </section>

                <section className="row d-flex align-items-center justify-content-center h-400 p-3">
                  <Chart
                    series={this.state.SeriesInternalLinks}
                    options={this.state.OptionsInternalLinks}
                    width="100%"
                    height="100%"
                    type="bar"
                  />
                </section>
              </section>
            </section>

            <section className="col-xl-4 p-2">
              <section className="bg-t-o b-r-10">
                <section className="row pr-2 pb-4 pt-3">
                  <h3>بازدید از شبکه های اجتماعی</h3>
                </section>

                <section className="row d-flex pr-2 pb-3 flex-column">
                  <section className="d-flex align-items-start justify-content-start">
                    <h2 className="m-0 pl-3">7,915</h2>

                    <span className="bg-success b-r-10 p-1">% 82.4</span>
                  </section>

                  <span className="pt-2">بازدیدهای 1 سال گذشته</span>
                </section>

                <section className="row pt-3 pb-3 mr-4 ml-4">
                  <section className="col-1 d-flex align-items-center justify-content-center">
                    <img
                      alt="Social Network"
                      loading="lazy"
                      src="/Assets/Images/SocialNetwork/Facebook.png"
                      width="30px"
                    />
                  </section>

                  <section className="col-7 d-flex align-items-start justify-content-center flex-column pr-1">
                    <span>فیس بوک</span>

                    <span>رسانه های اجتماعی</span>
                  </section>

                  <section className="col-3 d-flex align-items-center justify-content-center">
                    <span className="pl-1">2,348</span>

                    <KeyboardArrowUp className="text-success" />
                  </section>
                </section>

                <section className="row pt-3 pb-3 mr-4 ml-4">
                  <section className="col-1 d-flex align-items-center justify-content-center">
                    <img
                      alt="Social Network"
                      loading="lazy"
                      src="/Assets/Images/SocialNetwork/Dribbble.png"
                      width="30px"
                    />
                  </section>

                  <section className="col-7 d-flex align-items-start justify-content-center flex-column pr-1">
                    <span>دریبل</span>

                    <span>انجمن</span>
                  </section>

                  <section className="col-3 d-flex align-items-center justify-content-center">
                    <span className="pl-1">8,450</span>

                    <KeyboardArrowDown className="text-danger" />
                  </section>
                </section>

                <section className="row pt-3 pb-3 mr-4 ml-4">
                  <section className="col-1 d-flex align-items-center justify-content-center">
                    <img
                      alt="Social Network"
                      loading="lazy"
                      src="/Assets/Images/SocialNetwork/Twitter.png"
                      width="30px"
                    />
                  </section>

                  <section className="col-7 d-flex align-items-start justify-content-center flex-column pr-1">
                    <span>توییتر</span>

                    <span>رسانه های اجتماعی</span>
                  </section>

                  <section className="col-3 d-flex align-items-center justify-content-center">
                    <span className="pl-1">4,350</span>

                    <KeyboardArrowDown className="text-danger" />
                  </section>
                </section>

                <section className="row pt-3 pb-3 mr-4 ml-4">
                  <section className="col-1 d-flex align-items-center justify-content-center">
                    <img
                      alt="Social Network"
                      loading="lazy"
                      src="/Assets/Images/SocialNetwork/Instagram.png"
                      width="30px"
                    />
                  </section>

                  <section className="col-7 d-flex align-items-start justify-content-center flex-column pr-1">
                    <span>اینستاگرام</span>

                    <span>رسانه های اجتماعی</span>
                  </section>

                  <section className="col-3 d-flex align-items-center justify-content-center">
                    <span className="pl-1">5,566</span>

                    <KeyboardArrowUp className="text-success" />
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
