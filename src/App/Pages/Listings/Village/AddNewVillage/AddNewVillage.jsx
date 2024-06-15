////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class AddNewVillage extends React.Component {
  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10">
                <section className="col-12 p-3 text-center">
                  <span>اضافه کردن روستای جدید</span>
                </section>

                <form className="col-12 p-3 text-center" method="POST">
                  <section className="d-flex align-items-center justify-content-center">
                    <section className="col-12 col-md-6">
                      <select
                        name="CityName"
                        className="input-content-users p-2"
                      >
                        <option value="Tehran">تهران</option>
                        <option value="Tehran">تهران</option>
                        <option value="Tabriz">تبریز</option>
                      </select>
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <input
                        className="input-content-users p-2"
                        name="VillageName"
                        type="text"
                        placeholder="نام روستا"
                        required={true}
                      />
                    </section>
                  </section>

                  <section className="d-flex align-items-center justify-content-center pt-4">
                    <section className="col-12 col-md-6">
                      <input
                        type="submit"
                        className="input-content-users p-2 bg-success"
                        name="SendVillage"
                        value="ارسال"
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
