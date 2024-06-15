////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AddNewJobPost extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                <form method="POST" encType="multipart/form-data">
                  <section className="col-12">
                    <section className="col-12 p-2">
                      <span>کاربر را انتخاب کنید</span>
                    </section>

                    <section className="col-12">
                      <select
                        name="SelectUser"
                        className="input-content-users p-2"
                        required={true}
                      >
                        <option value="amir">امیر</option>
                        <option value="arash">آرش</option>
                        <option value="dariush">داریوش</option>
                        <option value="rostam">رستم</option>
                        <option value="kourosh">کوروش</option>
                      </select>
                    </section>
                  </section>

                  <section className="row col-12 pt-4">
                    <section className="col-6 pl-3">
                      <section className="col-12 p-2">
                        <span>عنوان شغلی</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="JobTitle"
                          type="text"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>

                    <section className="col-6 pr-3">
                      <section className="col-12 p-2">
                        <span>حقوق</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="Salary"
                          type="text"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>
                  </section>

                  <section className="row col-12 pt-4">
                    <section className="col-6 pl-3">
                      <section className="col-12 p-2">
                        <span>تاریخ مصاحبه</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="InterviewDate"
                          type="text"
                          placeholder="سال/ماه/روز"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>

                    <section className="col-6 pr-3">
                      <section className="col-12 p-2">
                        <span>زمان مصاحبه</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="InterviewTime"
                          type="text"
                          placeholder="دقیقه/ساعت"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>
                  </section>

                  <section className="row col-12 pt-4">
                    <section className="col-6 pl-3">
                      <section className="col-12 p-2">
                        <span>نقش</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="Role"
                          type="text"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>

                    <section className="col-6 pr-3">
                      <section className="col-12 p-2">
                        <span>تحصیلات و صلاحیت</span>
                      </section>

                      <section className="col-12">
                        <input
                          name="EducationQualification"
                          type="text"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>
                  </section>

                  <section className="row col-12 pt-4">
                    <section className="col-6 pl-3">
                      <section className="col-12 p-2">
                        <span>محل</span>
                      </section>

                      <section className="col-12">
                        <select
                          name="Location"
                          className="input-content-users p-2"
                          required={true}
                        >
                          <option value="iran">ایران</option>
                          <option value="American">امریکا</option>
                          <option value="Germany">المان</option>
                        </select>
                      </section>
                    </section>

                    <section className="col-6 pr-3">
                      <section className="col-12 p-2">
                        <span>لوگو شرکت</span>
                      </section>

                      <section className="col-12">
                        <input
                          type="file"
                          name="Companylogo"
                          className="input-content-users p-2"
                          required={true}
                        />
                      </section>
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12 p-2">
                      <span>دسته شغلی</span>
                    </section>

                    <section className="col-12">
                      <select
                        name="JobCategory"
                        className="input-content-users p-2"
                        required={true}
                      >
                        <option value="ServiceLaptop">سرویس لپتاپ</option>
                        <option value="ServiceComputer">سرویس کامپیوتر</option>
                        <option value="MobileRepairs">تعمیرات موبایل</option>
                      </select>
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12 p-2">
                      <span>زیر مجموعه مشاغل</span>
                    </section>

                    <section className="col-12">
                      <select
                        name="JobSubCategory"
                        className="input-content-users p-2"
                        required={true}
                      >
                        <option value="ServiceLaptop">سرویس لپتاپ</option>
                        <option value="ServiceComputer">سرویس کامپیوتر</option>
                        <option value="MobileRepairs">تعمیرات موبایل</option>
                      </select>
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12 p-2">
                      <span>نوع کار</span>
                    </section>

                    <section className="col-12">
                      <select
                        name="JobType"
                        className="input-content-users p-2"
                        required={true}
                      >
                        <option value="Freelancer">فریلسنری</option>
                        <option value="Freelancer">فریلسنری</option>
                      </select>
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12 p-2">
                      <span>سال ها تجربه</span>
                    </section>

                    <section className="col-12">
                      <input
                        type="text"
                        name="YearOfExperience"
                        className="input-content-users p-2"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12 p-2">
                      <span>شماره تماس</span>
                    </section>

                    <section className="col-12">
                      <input
                        type="text"
                        name="ContactNumber"
                        className="input-content-users p-2"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12 p-2">
                      <span>ایمیل</span>
                    </section>

                    <section className="col-12">
                      <input
                        type="email"
                        name="Email"
                        className="input-content-users p-2"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12 p-2">
                      <span>وبسایت</span>
                    </section>

                    <section className="col-12">
                      <input
                        type="text"
                        name="Website"
                        className="input-content-users p-2"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12 p-2">
                      <span>محل مصاحبه</span>
                    </section>

                    <section className="col-12">
                      <input
                        type="text"
                        name="InterviewLocation"
                        className="input-content-users p-2"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12 p-2">
                      <span>نام شرکت</span>
                    </section>

                    <section className="col-12">
                      <input
                        type="text"
                        name="CompanyName"
                        className="input-content-users p-2"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12 p-2">
                      <span>شرح شغل</span>
                    </section>

                    <section className="col-12">
                      <textarea
                        type="text"
                        name="JobDescriptions"
                        className="input-content-users p-2"
                        required={true}
                      ></textarea>
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12 p-2">
                      <span>درباره شرکت شما (توضیحات کوچک)</span>
                    </section>

                    <section className="col-12">
                      <textarea
                        type="text"
                        name="AboutYourCompany"
                        className="input-content-users p-2"
                        required={true}
                      ></textarea>
                    </section>
                  </section>

                  <section className="col-12 pt-4">
                    <section className="col-12">
                      <input
                        type="submit"
                        name="SubmitAddNewJob"
                        value="ارسال کن"
                        className="input-content-users p-2 bg-info"
                      />
                    </section>
                  </section>
                </form>
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Class
