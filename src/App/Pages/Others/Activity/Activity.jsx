////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
import { Close, AddCircleOutlineOutlined } from "@mui/icons-material";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    let NotificationsData = sessionStorage.getItem("NotificationsData");
    this.state = {
      NotificationsData: JSON.parse(NotificationsData),
    };
  }

  FuncAddItemNotification = () => {
    let NotificationsDataText = document.querySelector(
      ".input-add-item-notification"
    );
    let NotificationsDataTime = document.querySelector(
      ".input-add-item-time-notification"
    );
    if (
      NotificationsDataText.value !== "" &&
      NotificationsDataTime.value !== ""
    ) {
      let NewData = {
        Id: `${this.state.NotificationsData.length + 1}`,
        Link: "/OthersSendNotificationAllNotification",
        Img: "/Assets/Images/Profiles/Profile.png",
        Text: NotificationsDataText.value,
        Time: NotificationsDataTime.value,
      };
      this.setState((previousState) => ({
        NotificationsData: [...previousState.NotificationsData, NewData],
      }));
      NotificationsDataText.value = "";
      NotificationsDataTime.value = "";
      setTimeout(() => {
        sessionStorage.setItem(
          "NotificationsData",
          JSON.stringify(this.state.NotificationsData)
        );
      }, 100);
    }
  };

  FuncDeleteNotification = (Id) => {
    const NewData = this.state.NotificationsData.filter((Item) => {
      return Item.Id !== Id;
    });
    this.setState({
      NotificationsData: NewData,
    });
    setTimeout(() => {
      sessionStorage.setItem(
        "NotificationsData",
        JSON.stringify(this.state.NotificationsData)
      );
    }, 100);
  };

  render() {
    return (
      <section className="p-3">
        <section className="row">
          <section className="row d-flex align-items-center justify-content-center">
            <section className="col-xl-12 p-2">
              <section className="bg-t-o b-r-10 p-3">
                {/* Start Section Notification */}
                <section className="notification-page">
                  <section className="d-flex align-items-center justify-content-between p-2 divider">
                    <section className="w-100 d-flex align-items-start justify-content-center flex-column">
                      <input
                        type="text"
                        placeholder="کار خود را بنویسید"
                        className="input-add-item-notification"
                      />

                      <input
                        type="text"
                        placeholder="زمان نوتیفیکیشن"
                        className="input-add-item-time-notification"
                      />
                    </section>

                    <AddCircleOutlineOutlined
                      onClick={() => {
                        this.FuncAddItemNotification();
                      }}
                      titleAccess="اضافه کردن کار جدید"
                    />
                  </section>

                  <ul>
                    <li className="divider d-flex align-items-center justify-content-between">
                      <span>شما 3 نوتیفیکیشن دارید</span>

                      <span
                        title="تعداد نوتیفیکیشن های دریافت شده"
                        className="new-message-notification"
                      >
                        {this.state.NotificationsData.length}
                      </span>
                    </li>

                    {this.state.NotificationsData ||
                    this.state.NotificationsData !== "[]" ? (
                      this.state.NotificationsData.map((item, i) => (
                        <li className="divider li-notification" key={i}>
                          <section className="text-notification">
                            <p className="text-font-14">{item.Text}</p>
                            <p className="text-font-12">{item.Time}</p>
                          </section>
                          <section className="close-notification">
                            <Close
                              titleAccess="حذف نوتیفیکیشن مورد نظر"
                              onClick={() => {
                                this.FuncDeleteNotification(item.Id);
                              }}
                            />
                          </section>
                        </li>
                      ))
                    ) : (
                      <p className="m-auto mb-0 mt-0">
                        نوتیفیکیشنی برای نمایش وجود نداشت
                      </p>
                    )}
                  </ul>
                </section>
                {/* End Section Notification */}
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Class
