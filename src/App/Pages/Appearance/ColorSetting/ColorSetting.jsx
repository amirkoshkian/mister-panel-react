////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
import { RotateLeft } from "@mui/icons-material";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class ColorSetting extends React.Component {
  FuncChangeMpTheme = () => {
    let Root = document.querySelector(":root");
    let ValueInput = document.querySelector(".input-color-mp-theme");
    Root.style.setProperty("--mp-theme", `${ValueInput.value}`);
    sessionStorage.setItem("MpTheme", `${ValueInput.value}`);
  };

  FuncChangeMpThemeOther = () => {
    let Root = document.querySelector(":root");
    let ValueInput = document.querySelector(".input-color-mp-theme-other");
    Root.style.setProperty("--mp-theme-other", ValueInput.value);
    sessionStorage.setItem("MpThemeOther", ValueInput.value);
  };

  FuncChangeMpThemeDropdownMenu = () => {
    let Root = document.querySelector(":root");
    let ValueInput = document.querySelector(
      ".input-color-mp-theme-dropdown-menu"
    );
    Root.style.setProperty("--mp-theme-dropdown-menu", ValueInput.value);
    sessionStorage.setItem("MpThemeDropdownMenu", ValueInput.value);
  };

  FuncChangeMpThemeColor = () => {
    let Root = document.querySelector(":root");
    let ValueInput = document.querySelector(".input-color-mp-theme-color");
    Root.style.setProperty("--mp-theme-color", ValueInput.value);
    sessionStorage.setItem("MpThemeColor", ValueInput.value);
  };

  FuncChangeMpThemeOtherHover = () => {
    let Root = document.querySelector(":root");
    let ValueInput = document.querySelector(
      ".input-color-mp-theme-other-hover"
    );
    Root.style.setProperty("--mp-theme-other-hover", ValueInput.value);
    sessionStorage.setItem("MpThemeOtherHover", ValueInput.value);
  };

  FuncResetSetting = () => {
    let Root = document.querySelector(":root");
    Root.style.setProperty("--mp-theme", "#232a3b");
    Root.style.setProperty("--mp-theme-other", "#283144");
    Root.style.setProperty("--mp-theme-other-hover", "#666cff");
    Root.style.setProperty("--mp-theme-dropdown-menu", "#1c222f");
    Root.style.setProperty("--mp-theme-color", "#d8deea");

    sessionStorage.setItem("MpTheme", "#232a3b");
    sessionStorage.setItem("MpThemeOther", "#283144");
    sessionStorage.setItem("MpThemeOtherHover", "#666cff");
    sessionStorage.setItem("MpThemeDropdownMenu", "#1c222f");
    sessionStorage.setItem("MpThemeColor", "#d8deea");
  };

  render() {
    return (
      <section className="p-3">
        <section className="d-flex align-items-center justify-content-center p-2 divider">
          <span>گزینه های رنگ</span>
        </section>

        <section className="d-flex align-items-center justify-content-between p-2 divider">
          <span>عوض کردن رنگ پس زمینه</span>

          <section
            className="d-flex align-items-center justify-content-center"
            title="عوض کردن رنگ پس زمینه"
          >
            <input
              type="color"
              className="input-color-mp-theme"
              onChange={() => {
                this.FuncChangeMpTheme();
              }}
              onFocus={() => {
                this.FuncChangeMpTheme();
              }}
            />
          </section>
        </section>

        <section className="d-flex align-items-center justify-content-between p-2 divider">
          <span>عوض کردن رنگ منو و هدر</span>

          <section
            className="d-flex align-items-center justify-content-center"
            title="عوض کردن رنگ منو و هدر"
          >
            <input
              type="color"
              className="input-color-mp-theme-other"
              onChange={() => {
                this.FuncChangeMpThemeOther();
              }}
              onFocus={() => {
                this.FuncChangeMpThemeOther();
              }}
            />
          </section>
        </section>

        <section className="d-flex align-items-center justify-content-between p-2 divider">
          <span>عوض کردن رنگ مودال ها</span>

          <section
            className="d-flex align-items-center justify-content-center"
            title="عوض کردن رنگ مودال ها"
          >
            <input
              type="color"
              className="input-color-mp-theme-dropdown-menu"
              onChange={() => {
                this.FuncChangeMpThemeDropdownMenu();
              }}
              onFocus={() => {
                this.FuncChangeMpThemeDropdownMenu();
              }}
            />
          </section>
        </section>

        <section className="d-flex align-items-center justify-content-between p-2 divider">
          <span>عوض کردن رنگ متن و ایکون</span>

          <section
            className="d-flex align-items-center justify-content-center"
            title="عوض کردن رنگ متن و ایکون"
          >
            <input
              type="color"
              className="input-color-mp-theme-color"
              onChange={() => {
                this.FuncChangeMpThemeColor();
              }}
              onFocus={() => {
                this.FuncChangeMpThemeColor();
              }}
            />
          </section>
        </section>

        <section className="d-flex align-items-center justify-content-between p-2 divider">
          <span>عوض کردن رنگ هاور</span>

          <section
            className="d-flex align-items-center justify-content-center"
            title="عوض کردن رنگ هاور"
          >
            <input
              type="color"
              className="input-color-mp-theme-other-hover"
              onChange={() => {
                this.FuncChangeMpThemeOtherHover();
              }}
              onFocus={() => {
                this.FuncChangeMpThemeOtherHover();
              }}
            />
          </section>
        </section>

        <section className="d-flex align-items-center justify-content-between p-2 divider">
          <span>ریست تنظیمات</span>

          <section title="عوض کردن تم پنل">
            <button
              onClick={() => {
                this.FuncResetSetting();
              }}
              className="btn btn-primary"
            >
              <RotateLeft />
            </button>
          </section>
        </section>
      </section>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Class
