////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
import { Close, AddCircleOutlineOutlined } from "@mui/icons-material";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    let MessagesData = sessionStorage.getItem("MessageData");
    this.state = {
      MessagesData: JSON.parse(MessagesData),
    };
  }

  FuncAddItemMessage = () => {
    let MessagesDataText = document.querySelector(".input-add-item-message");
    let MessagesDataTime = document.querySelector(
      ".input-add-item-time-message"
    );
    if (MessagesDataText.value !== "" && MessagesDataTime.value !== "") {
      let NewData = {
        Id: `${this.state.MessagesData.length + 1}`,
        Link: "/OthersSendMessageAllMessage",
        Img: "/Assets/Images/Profiles/Profile.png",
        Text: MessagesDataText.value,
        Time: MessagesDataTime.value,
      };
      this.setState((previousState) => ({
        MessagesData: [...previousState.MessagesData, NewData],
      }));
      MessagesDataText.value = "";
      MessagesDataTime.value = "";
      setTimeout(() => {
        sessionStorage.setItem(
          "MessageData",
          JSON.stringify(this.state.MessagesData)
        );
      }, 100);
    }
  };

  FuncDeleteMessage = (Id) => {
    const NewData = this.state.MessagesData.filter((Item) => {
      return Item.Id !== Id;
    });
    this.setState({
      MessagesData: NewData,
    });
    setTimeout(() => {
      sessionStorage.setItem(
        "MessageData",
        JSON.stringify(this.state.MessagesData)
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
                {/* Start Section Message */}
                <section className="message-page">
                  <section className="d-flex align-items-center justify-content-between p-2 divider">
                    <section className="w-100 d-flex align-items-start justify-content-center flex-column">
                      <input
                        type="text"
                        placeholder="پیام خود را بنویسید"
                        className="input-add-item-message"
                      />

                      <input
                        type="text"
                        placeholder="زمان پیام"
                        className="input-add-item-time-message"
                      />
                    </section>

                    <AddCircleOutlineOutlined
                      onClick={() => {
                        this.FuncAddItemMessage();
                      }}
                      titleAccess="اضافه کردن پیام جدید"
                    />
                  </section>

                  <ul>
                    <li className="divider d-flex align-items-center justify-content-between">
                      <span>شما 3 پیام دارید</span>

                      <span
                        title="تعداد پیام های دریافت شده"
                        className="new-message-message"
                      >
                        {this.state.MessagesData.length}
                      </span>
                    </li>

                    {this.state.MessagesData ||
                    this.state.MessagesData !== "[]" ? (
                      this.state.MessagesData.map((item, i) => (
                        <li className="divider li-message" key={i}>
                          <section className="text-message">
                            <p className="text-font-14">{item.Text}</p>
                            <p className="text-font-12">{item.Time}</p>
                          </section>
                          <section className="close-message">
                            <Close
                              titleAccess="حذف نوتیفیکیشن مورد نظر"
                              onClick={() => {
                                this.FuncDeleteMessage(item.Id);
                              }}
                            />
                          </section>
                        </li>
                      ))
                    ) : (
                      <p className="m-auto mb-0 mt-0">
                        پیام برای نمایش وجود نداشت
                      </p>
                    )}
                  </ul>
                </section>
                {/* End Section Message */}
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Class
