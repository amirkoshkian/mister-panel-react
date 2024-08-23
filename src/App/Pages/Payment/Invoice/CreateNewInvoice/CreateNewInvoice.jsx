////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class CreateNewInvoice extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3">
                  <span>فاکتور - کاربران پریمیوم</span>
                </section>

                <section className="col-12 p-3">
                  <textarea
                    className="input-content-users p-2"
                    rows="15"
                    defaultValue={`شما عضو طلایی شماره 1 وب سایت میستر پنل تجاری جهان هستید.

کاربر                                        :  امیر

نوع پل                                    :  پریمیوم

مبلغ پرداخت شده                     :  250 تومن

ایمیل                                      :  aaaaaa0000000@gmail.com

نوع پرداخت                             :  پرداخت نقدی هنگام تحویل

پروفایل                                    :  #

ادرس                                       :  ایران تهران

شما عضو طلایی شماره 1 وب سایت میستر پنل تجاری جهان هستید.`}
                  ></textarea>
                </section>

                <section className="col-12 p-3 d-flex align-items-center justify-content-center">
                  <a
                    href="/public/Assets/Images/Logo.png"
                    download={true}
                    className="input-content-users p-2 bg-danger d-flex align-items-center justify-content-center"
                  >
                    دانلود pdf
                  </a>
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
