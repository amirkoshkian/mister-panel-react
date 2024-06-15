////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
const SettingsSliderThree = {
  dots: false,
  arrows: false,
  autoplay: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const SettingsSliderFour = {
  dots: true,
  arrows: false,
  autoplay: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
};
const SettingsSliderFive = {
  dots: true,
  arrows: true,
  autoplay: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
};

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class Slider extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="d-flex align-items-center justify-content-center">
              <section className="col-6 p-2">
                <section className="col-xl-12 p-2 bg-t-o b-r-10">
                  <section className="p-3">
                    <span>اسلایدر نوع اول</span>
                  </section>

                  <Sliders {...SettingsSliderOne} className="slider-one">
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
                        src="/Assets/Images/Slider/Slider6.png"
                      />
                    </section>
                    <section className="section-image-slider-page-ecommerce">
                      <img
                        alt="ImageSlider"
                        loading="lazy"
                        src="/Assets/Images/Slider/Slider4.png"
                      />
                    </section>
                  </Sliders>
                </section>
              </section>

              <section className="col-6 p-2">
                <section className="col-xl-12 p-2 bg-t-o b-r-10">
                  <section className="p-3">
                    <span>اسلایدر نوع دوم</span>
                  </section>

                  <Sliders {...SettingsSliderThree} className="slider-one">
                    <section className="section-image-slider-page-ecommerce">
                      <img
                        alt="ImageSlider"
                        loading="lazy"
                        src="/Assets/Images/Slider/Slider3.png"
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
                        src="/Assets/Images/Slider/Slider1.png"
                      />
                    </section>
                  </Sliders>
                </section>
              </section>
            </section>

            <section className="p-2">
              <section className="col-xl-12 p-2 bg-t-o b-r-10">
                <section className="p-3">
                  <span>اسلایدر نوع سوم</span>
                </section>

                <Sliders {...SettingsSliderTwo} className="slider-two">
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
                      src="/Assets/Images/Slider/Slider5.png"
                    />
                  </section>
                  <section className="section-image-slider-page-ecommerce">
                    <img
                      alt="ImageSlider"
                      loading="lazy"
                      src="/Assets/Images/Slider/Slider7.png"
                    />
                  </section>
                </Sliders>
              </section>
            </section>

            <section className="p-2">
              <section className="col-xl-12 p-2 bg-t-o b-r-10">
                <section className="p-3">
                  <span>اسلایدر نوع چهارم</span>
                </section>

                <Sliders {...SettingsSliderFour} className="slider-one">
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
                      src="/Assets/Images/Slider/Slider3.png"
                    />
                  </section>
                  <section className="section-image-slider-page-ecommerce">
                    <img
                      alt="ImageSlider"
                      loading="lazy"
                      src="/Assets/Images/Slider/Slider5.png"
                    />
                  </section>
                </Sliders>
              </section>
            </section>

            <section className="p-2">
              <section className="col-xl-12 p-2 bg-t-o b-r-10">
                <section className="p-3">
                  <span>اسلایدر نوع پنجم</span>
                </section>

                <Sliders {...SettingsSliderFive} className="slider-one">
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
                </Sliders>
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Class
