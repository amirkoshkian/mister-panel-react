////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class FileManager extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="row col-12">
                <section className="col-xl-4 col-12">
                  <section className="bg-t-o b-r-5 p-3">
                    <section className="bg-t-o b-r-10 p-2">
                      <section className="col-12">
                        <form
                          method="POST"
                          className="col-12 d-flex align-items-center justify-content-center p-3 flex-column"
                        >
                          <input
                            className="input-content-users p-2 bg-main c-p"
                            type="file"
                            name="File"
                            required={true}
                          />

                          <section className="col-12 mt-4">
                            <input
                              className="input-content-users p-2 bg-main c-p"
                              type="submit"
                              name="AddNewFile"
                              value="اضافه کردن فایل جدید"
                            />
                          </section>
                        </form>
                      </section>

                      <section className="col-12 p-3 bt">
                        <section className="col-6 col-12 d-flex align-items-center justify-content-between ba">
                          <section className="col-6 d-flex align-items-center justify-content-start p-2 bl">
                            فرتور ها
                          </section>

                          <section className="col-6 d-flex align-items-center justify-content-start p-2">
                            344MB
                          </section>
                        </section>

                        <section className="col-6 col-12 d-flex align-items-center justify-content-between ba">
                          <section className="col-6 d-flex align-items-center justify-content-start p-2 bl">
                            ویدیو
                          </section>

                          <section className="col-6 d-flex align-items-center justify-content-start p-2">
                            2Gb
                          </section>
                        </section>

                        <section className="col-6 col-12 d-flex align-items-center justify-content-between ba">
                          <section className="col-6 d-flex align-items-center justify-content-start p-2 bl">
                            اسناد
                          </section>

                          <section className="col-6 d-flex align-items-center justify-content-start p-2">
                            23MB
                          </section>
                        </section>

                        <section className="col-6 col-12 d-flex align-items-center justify-content-between ba">
                          <section className="col-6 d-flex align-items-center justify-content-start p-2 bl">
                            فایل های دیگر
                          </section>

                          <section className="col-6 d-flex align-items-center justify-content-start p-2">
                            1Gb
                          </section>
                        </section>

                        <section className="col-6 col-12 d-flex align-items-center justify-content-between ba">
                          <section className="col-6 d-flex align-items-center justify-content-start p-2 bl">
                            فایل های ناشناخته
                          </section>

                          <section className="col-6 d-flex align-items-center justify-content-start p-2">
                            5GB
                          </section>
                        </section>
                      </section>
                    </section>

                    <section className="p-3 bt">
                      <section className="d-flex">
                        <span className="file-manager-image">
                          <img
                            src="/Assets/Images/Files/zip.png"
                            alt="img"
                            lazy="loading"
                          />
                        </span>
                        <h3 className="ms-3 mt-3 tx-medium">467 فایل</h3>
                      </section>
                      <section className="progress">
                        <section
                          aria-valuemax="100"
                          aria-valuemin="0"
                          aria-valuenow="75"
                          className="progress-bar progress-bar-xs bg-secondary wd-75p"
                          role="progressbar"
                        ></section>
                      </section>
                      <section className="mt-3">
                        <section className="d-flex align-items-center justify-content-between">
                          <section className="d-flex">
                            <section>
                              <h6 className="mt-2">کل فضای ذخیره سازی</h6>
                              <span>128 GB</span>
                            </section>
                          </section>
                          <section>
                            <h6 className="mt-2">استفاده شده</h6>
                            <span>100 GB</span>
                          </section>
                        </section>
                      </section>
                    </section>
                  </section>
                </section>

                <section className="col-xl-8 col-12">
                  <section className="col-12">
                    <section className="col-12 b-r-10">
                      <section className="col-12 p-3">فایل ها</section>

                      <section className="col-xl-12">
                        <section className="row">
                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="pdf"
                                  src="/Assets/Images/Files/pdf.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  amir.pdf
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  34kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="ppt"
                                  src="/Assets/Images/Files/ppt.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  moh.ppt
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  35kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="png"
                                  src="/Assets/Images/Files/image.png"
                                  lazy="loading"
                                  className="w-100 h-100"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  ahfb.jpg
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  76kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="xls"
                                  src="/Assets/Images/Files/xls.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  haf.xls
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  365kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="doc"
                                  src="/Assets/Images/Files/doc.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  ali.doc
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  342kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="zip"
                                  src="/Assets/Images/Files/zip.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  mohsen.zip
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  342kb
                                </section>
                              </section>
                            </section>
                          </section>
                        </section>

                        <section className="row">
                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="png"
                                  src="/Assets/Images/Files/image.png"
                                  lazy="loading"
                                  className="w-100 h-100"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  ahfb.jpg
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  76kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="xls"
                                  src="/Assets/Images/Files/xls.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  haf.xls
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  365kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="ppt"
                                  src="/Assets/Images/Files/ppt.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  moh.ppt
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  35kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="doc"
                                  src="/Assets/Images/Files/doc.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  ali.doc
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  342kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="zip"
                                  src="/Assets/Images/Files/zip.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  mohsen.zip
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  342kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="pdf"
                                  src="/Assets/Images/Files/pdf.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  amir.pdf
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  34kb
                                </section>
                              </section>
                            </section>
                          </section>
                        </section>

                        <section className="row">
                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="pdf"
                                  src="/Assets/Images/Files/pdf.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  amir.pdf
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  34kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="ppt"
                                  src="/Assets/Images/Files/ppt.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  moh.ppt
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  35kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="png"
                                  src="/Assets/Images/Files/image.png"
                                  lazy="loading"
                                  className="w-100 h-100"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  ahfb.jpg
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  76kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="xls"
                                  src="/Assets/Images/Files/xls.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  haf.xls
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  365kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="doc"
                                  src="/Assets/Images/Files/doc.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  ali.doc
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  342kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="zip"
                                  src="/Assets/Images/Files/zip.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  mohsen.zip
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  342kb
                                </section>
                              </section>
                            </section>
                          </section>
                        </section>

                        <section className="row">
                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="png"
                                  src="/Assets/Images/Files/image.png"
                                  lazy="loading"
                                  className="w-100 h-100"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  ahfb.jpg
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  76kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="xls"
                                  src="/Assets/Images/Files/xls.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  haf.xls
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  365kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="ppt"
                                  src="/Assets/Images/Files/ppt.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  moh.ppt
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  35kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="doc"
                                  src="/Assets/Images/Files/doc.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  ali.doc
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  342kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="zip"
                                  src="/Assets/Images/Files/zip.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  mohsen.zip
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  342kb
                                </section>
                              </section>
                            </section>
                          </section>

                          <section className="col-md-6 col-xl-4 p-3">
                            <section className="bg-t-o b-r-5">
                              <section className="bb d-flex align-items-center justify-content-center h-150">
                                <img
                                  alt="pdf"
                                  src="/Assets/Images/Files/pdf.png"
                                  lazy="loading"
                                  className="h-50"
                                />
                              </section>

                              <section className="d-flex align-items-center justify-content-between">
                                <section className="pr-3 pt-2 pb-2">
                                  amir.pdf
                                </section>

                                <section className="pl-3 pt-2 pb-2">
                                  34kb
                                </section>
                              </section>
                            </section>
                          </section>
                        </section>
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
