////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
import Chart from "react-apexcharts";
import fa from "apexcharts/dist/locales/fa.json";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class Tables extends React.Component {
  state = {
    series1: [
      {
        name: "دسکتاپ",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    series2: [
      {
        name: "دسکتاپ",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    series3: [
      {
        name: "دسکتاپ",
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
      },
    ],
    series4: [
      {
        name: "اولی",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "دومی",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    series5: [
      {
        name: "موبایل",
        data: [44, 55, 41, 67, 22, 43, 21, 54],
      },
    ],
    series6: [
      {
        name: "دسکتاپ",
        data: [
          {
            x: "تیم1",
            y: [1, 5],
          },
          {
            x: "تیم2",
            y: [4, 6],
          },
          {
            x: "تیم3",
            y: [5, 8],
          },
          {
            x: "تیم4",
            y: [3, 11],
          },
        ],
      },
      {
        name: "موبایل",
        data: [
          {
            x: "تیم1",
            y: [2, 6],
          },
          {
            x: "تیم2",
            y: [1, 3],
          },
          {
            x: "تیم3",
            y: [7, 8],
          },
          {
            x: "تیم4",
            y: [5, 9],
          },
        ],
      },
    ],
    series7: [
      {
        name: "موبایل",
        data: [21, 22, 10, 28, 16, 21, 13, 30],
      },
    ],
    series8: [
      {
        name: "موبایل",
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    series9: [
      {
        name: "موبایل",
        data: [44, 55, 41, 64, 22, 43, 21],
      },
      {
        name: "تبلت",
        data: [53, 32, 33, 52, 13, 44, 32],
      },
    ],
    series10: [
      {
        name: "دسکتاپ",
        data: [400, 430, 448, 470, 540, 580, 690],
      },
    ],
    series11: [
      {
        name: "موبایل",
        type: "column",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
      },
      {
        name: "تبلت",
        type: "column",
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
      },
      {
        name: "دسکتاپ",
        type: "line",
        data: [20, 29, 37, 36, 44, 45, 50, 58],
      },
    ],

    options1: {
      chart: {
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
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
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
      yaxis: {
        opposite: true,
      },
    },
    options2: {
      chart: {
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
        curve: "stepline",
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        hover: {
          sizeOffset: 4,
        },
      },
      yaxis: {
        opposite: true,
      },
    },
    options3: {
      chart: {
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
      forecastDataPoints: {
        count: 7,
      },
      stroke: {
        width: 5,
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "1/11/1401",
          "2/11/1401",
          "3/11/1401",
          "4/11/1401",
          "5/11/1401",
          "6/11/1401",
          "7/11/1401",
          "8/11/1401",
          "9/11/1401",
          "10/11/1401",
          "11/11/1401",
          "12/11/1401",
          "1/11/1402",
          "2/11/1402",
          "3/11/1402",
          "4/11/1402",
          "5/11/1402",
          "6/11/1402",
        ],
        tickAmount: 10,
        labels: {
          formatter: function (value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), "dd MMM");
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        min: -10,
        max: 40,
        opposite: true,
      },
    },
    options4: {
      chart: {
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
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "1401/12/21",
          "1401/12/22",
          "1401/12/23",
          "1401/12/24",
          "1401/12/25",
          "1401/12/26",
          "1401/12/27",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      yaxis: {
        opposite: true,
      },
    },
    options5: {
      chart: {
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
          colors: {
            ranges: [
              {
                from: -100,
                to: -46,
                color: "#F15B46",
              },
              {
                from: -45,
                to: 0,
                color: "#FEB019",
              },
            ],
          },
          columnWidth: "40%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        labels: {
          formatter: function (y) {
            return y.toFixed(0) + "%";
          },
        },
        opposite: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "1401/12/20",
          "1401/12/21",
          "1401/12/22",
          "1401/12/23",
          "1401/12/24",
          "1401/12/25",
          "1401/12/26",
          "1401/12/27",
        ],
        labels: {
          rotate: -90,
        },
      },
    },
    options6: {
      chart: {
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
        },
      },
      dataLabels: {
        enabled: true,
      },
      yaxis: {
        opposite: true,
      },
    },
    options7: {
      chart: {
        events: {
          click: function (chart, w, e) {},
        },
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
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["امیر", "ستوده"],
          ["آرش", "ستوده"],
          ["کوروش", "ستوده"],
          ["زرتشت", "ستوده"],
          ["امیر", "ستوده"],
          ["آرش", "ستوده"],
          ["کوروش", "ستوده"],
          ["زرتشت", "ستوده"],
        ],
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        opposite: true,
      },
    },
    options8: {
      chart: {
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
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "امیر",
          "آرش",
          "امیر",
          "کوروش",
          "امیر",
          "رستم",
          "کوروش",
          "امیر",
          "آرش",
          "کوروش",
        ],
      },
      yaxis: {
        opposite: true,
      },
    },
    options9: {
      chart: {
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
          horizontal: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      xaxis: {
        categories: [1401, 1402, 1403, 1404, 1405, 1406, 1407],
      },
      yaxis: {
        opposite: true,
      },
    },
    options10: {
      chart: {
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
          horizontal: true,
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
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      yaxis: {
        reversed: true,
        axisTicks: {
          show: true,
        },
        opposite: true,
      },
    },
    options11: {
      chart: {
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
        width: [1, 1, 4],
      },
      xaxis: {
        categories: [1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408],
      },
      tooltip: {
        fixed: {
          enabled: true,
          position: "topLeft",
          offsetY: 30,
          offsetX: 60,
        },
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40,
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
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <section className="col-12 p-3">
                  <span>چارت های خطی</span>
                </section>

                <section className="col-12 p-3 h-400">
                  <Chart
                    type="line"
                    options={this.state.options1}
                    series={this.state.series1}
                    width="100%"
                    height="100%"
                  />
                </section>

                <section className="col-12 p-3 h-400">
                  <Chart
                    type="line"
                    options={this.state.options2}
                    series={this.state.series2}
                    width="100%"
                    height="100%"
                  />
                </section>

                <section className="col-12 p-3 h-400">
                  <Chart
                    type="line"
                    options={this.state.options3}
                    series={this.state.series3}
                    width="100%"
                    height="100%"
                  />
                </section>
              </section>
            </section>

            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <section className="col-12 p-3">
                  <span>چارت های ناحیه</span>
                </section>

                <section className="col-12 p-3 h-400">
                  <Chart
                    type="area"
                    options={this.state.options4}
                    series={this.state.series4}
                    width="100%"
                    height="100%"
                  />
                </section>
              </section>
            </section>

            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <section className="col-12 p-3">
                  <span>چارت های ستونی</span>
                </section>

                <section className="col-12 p-3 h-400">
                  <Chart
                    type="bar"
                    options={this.state.options5}
                    series={this.state.series5}
                    width="100%"
                    height="100%"
                  />
                </section>

                <section className="col-12 p-3 h-400">
                  <Chart
                    type="bar"
                    options={this.state.options6}
                    series={this.state.series6}
                    width="100%"
                    height="100%"
                  />
                </section>

                <section className="col-12 p-3 h-400">
                  <Chart
                    type="bar"
                    options={this.state.options7}
                    series={this.state.series7}
                    width="100%"
                    height="100%"
                  />
                </section>
              </section>
            </section>

            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <section className="col-12 p-3">
                  <span>چارت های میله ای</span>
                </section>

                <section className="col-12 p-3 h-400">
                  <Chart
                    type="bar"
                    options={this.state.options8}
                    series={this.state.series8}
                    width="100%"
                    height="100%"
                  />
                </section>

                <section className="col-12 p-3 h-400">
                  <Chart
                    type="bar"
                    options={this.state.options9}
                    series={this.state.series9}
                    width="100%"
                    height="100%"
                  />
                </section>

                <section className="col-12 p-3 h-400">
                  <Chart
                    type="bar"
                    options={this.state.options10}
                    series={this.state.series10}
                    width="100%"
                    height="100%"
                  />
                </section>
              </section>
            </section>

            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <section className="col-12 p-3">
                  <span>چارت های میکس شده</span>
                </section>

                <section className="col-12 p-3 h-400">
                  <Chart
                    type="line"
                    options={this.state.options11}
                    series={this.state.series11}
                    width="100%"
                    height="100%"
                  />
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
