////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Imports
import React from "react";
import { Edit, Delete, AddCircleOutlineOutlined } from "@mui/icons-material";
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Imports

////////////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    let ToDoListData = sessionStorage.getItem("ToDoListData");
    this.state = {
      ToDoListData: JSON.parse(ToDoListData),
    };
  }

  FuncAddItemToDoList = () => {
    let ValueToDoList = document.querySelector(".input-add-item-todo-list");
    if (ValueToDoList.value !== "") {
      let NewData = {
        Id: `${this.state.ToDoListData.length + 1}`,
        Text: ValueToDoList.value,
        Complete: false,
      };
      this.setState((previousState) => ({
        ToDoListData: [...previousState.ToDoListData, NewData],
      }));
      ValueToDoList.value = "";
      setTimeout(() => {
        sessionStorage.setItem(
          "ToDoListData",
          JSON.stringify(this.state.ToDoListData)
        );
      }, 100);
    }
  };

  FuncCheckItemToDoList = (Id) => {};

  FuncEditItemToDoList = (Id, Text) => {
    let ValueToDoList = document.querySelector(".input-add-item-todo-list");
    ValueToDoList.value = Text;

    const NewData = this.state.ToDoListData.filter((Item) => {
      return Item.Id !== Id;
    });
    this.setState({
      ToDoListData: NewData,
    });
    setTimeout(() => {
      sessionStorage.setItem(
        "ToDoListData",
        JSON.stringify(this.state.ToDoListData)
      );
    }, 100);
  };

  FuncDeleteItemToDoList = (Id) => {
    const NewData = this.state.ToDoListData.filter((Item) => {
      return Item.Id !== Id;
    });
    this.setState({
      ToDoListData: NewData,
    });
    setTimeout(() => {
      sessionStorage.setItem(
        "ToDoListData",
        JSON.stringify(this.state.ToDoListData)
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
                {/* Start Section To Do */}
                <section className="todo-in-page-todo-list">
                  <section className="d-flex align-items-center justify-content-between p-2 divider">
                    <input
                      type="text"
                      placeholder="کار خود را بنویسید"
                      className="input-add-item-todo-list"
                    />

                    <AddCircleOutlineOutlined
                      onClick={() => {
                        this.FuncAddItemToDoList();
                      }}
                      titleAccess="اضافه کردن کار جدید"
                    />
                  </section>

                  <section className="d-flex align-items-start justify-content-start flex-column p-2 divider section-items-todo-list">
                    {this.state.ToDoListData ||
                    this.state.ToDoListData !== "[]" ? (
                      this.state.ToDoListData.map((item, i) => (
                        <section key={i} className="section-todo-list">
                          <input
                            type="checkbox"
                            className="check-todo-list"
                            defaultChecked={item.Complete}
                            onClick={() => {
                              this.FuncCheckItemToDoList(item.Id);
                            }}
                            title="تیک زدن به عنوان انجام شده"
                          />
                          <span className="text-todo-list">{item.Text}</span>

                          <Edit
                            onClick={() => {
                              this.FuncEditItemToDoList(item.Id, item.Text);
                            }}
                            titleAccess="ویرایش کار مورد نظر"
                          />
                          <Delete
                            onClick={() => {
                              this.FuncDeleteItemToDoList(item.Id);
                            }}
                            titleAccess="حذف کردن کار مورد نظر"
                          />
                        </section>
                      ))
                    ) : (
                      <p className="m-auto mb-0 mt-0">
                        کاری برای نمایش وجود نداشت
                      </p>
                    )}
                  </section>
                </section>
                {/* End Section To Do */}
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////// End Section Class
