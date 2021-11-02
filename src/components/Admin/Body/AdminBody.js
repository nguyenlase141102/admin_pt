import React, { Fragment, useState } from "react";
import { MdDelete, MdSystemUpdate } from "react-icons/md";
import { useHistory } from "react-router-dom";
import classes from "./AdminBody.module.css";

const AdminBody = () => {
  const [roleTable, setRoleTable] = useState("pt");

  const listPT = [
    {
      name: "Lê Hoàng Khang",
      email: "Khangle@gmail.com",
      password: "khangle123",
      amount: "31.300.000",
      phone: "0932132132",
      status: "Active",
    },
    {
      name: "Ngô Bao Nam",
      email: "Namngo@gmail.com",
      password: "NamNgo123",
      amount: "21.300.000",
      phone: "093232522",
      status: "Active",
    },
    {
      name: "Lê Hoàng Khang",
      email: "Khangle@gmail.com",
      password: "khangle123",
      amount: "31.300.000",
      phone: "0932132132",
      status: "Active",
    },
    {
      name: "Lê Hoàng Khang",
      email: "Khangle@gmail.com",
      password: "khangle123",
      amount: "31.300.000",
      phone: "0932132132",
      status: "Active",
    },
    {
      name: "Lê Hoàng Khang",
      email: "Khangle@gmail.com",
      password: "khangle123",
      amount: "31.300.000",
      phone: "0932132132",
      status: "Active",
    },
    {
      name: "Lê Hoàng Khang",
      email: "Khangle@gmail.com",
      password: "khangle123",
      amount: "31.300.000",
      phone: "0932132132",
      status: "Active",
    },
    {
      name: "Lê Hoàng Khang",
      email: "Khangle@gmail.com",
      password: "khangle123",
      amount: "31.300.000",
      phone: "0932132132",
      status: "Active",
    },
    {
      name: "Lê Hoàng Khang",
      email: "Khangle@gmail.com",
      password: "khangle123",
      amount: "31.300.000",
      phone: "0932132132",
      status: "Active",
    },
    {
      name: "Lê Hoàng Khang",
      email: "Khangle@gmail.com",
      password: "khangle123",
      amount: "31.300.000",
      phone: "0932132132",
      status: "Active",
    },
    {
      name: "Lê Hoàng Khang",
      email: "Khangle@gmail.com",
      password: "khangle123",
      amount: "31.300.000",
      phone: "0932132132",
      status: "Active",
    },
  ];

  const listTrainee = [
    {
      name: "Khưu hồng phát",
      email: "phatKhuu@gmail.com",
      password: "phatKhuu123",
      amount: "1.300.000",
      registerDay: "25/10/2021 ",
      phone: "0921893213",
      status: "Active",
    },
    {
      name: "Lê xuân hoài",
      email: "hoaiLe@gmail.com",
      password: "Hoaile123",
      amount: "11.300.000",
      registerDay: "15/10/2021 ",
      phone: "0921321321",
      status: "Active",
    },
    {
      name: "Khưu hồng phát",
      email: "phatKhuu@gmail.com",
      password: "phatKhuu123",
      amount: "1.300.000",
      registerDay: "25/10/2021 ",
      phone: "0921893213",
      status: "Active",
    },
    {
      name: "Khưu hồng phát",
      email: "phatKhuu@gmail.com",
      password: "phatKhuu123",
      amount: "1.300.000",
      registerDay: "25/10/2021 ",
      phone: "0921893213",
      status: "Active",
    },
    {
      name: "Khưu hồng phát",
      email: "phatKhuu@gmail.com",
      password: "phatKhuu123",
      amount: "1.300.000",
      registerDay: "25/10/2021 ",
      phone: "0921893213",
      status: "Active",
    },
    {
      name: "Khưu hồng phát",
      email: "phatKhuu@gmail.com",
      password: "phatKhuu123",
      amount: "1.300.000",
      registerDay: "25/10/2021",
      phone: "0921893213",
      status: "Active",
    },
    {
      name: "Khưu hồng phát",
      email: "phatKhuu@gmail.com",
      password: "phatKhuu123",
      amount: "1.300.000",
      registerDay: "25/10/2021",
      phone: "0921893213",
      status: "Active",
    },
    {
      name: "Khưu hồng phát",
      email: "phatKhuu@gmail.com",
      password: "phatKhuu123",
      amount: "1.300.000",
      registerDay: "25/10/2021 ",
      phone: "0921893213",
      status: "Active",
    },
    {
      name: "Khưu hồng phát",
      email: "phatKhuu@gmail.com",
      password: "phatKhuu123",
      amount: "1.300.000",
      registerDay: "25/10/2021 ",
      phone: "0921893213",
      status: "Active",
    },
    {
      name: "Khưu hồng phát",
      email: "phatKhuu@gmail.com",
      password: "phatKhuu123",
      amount: "1.300.000",
      registerDay: "25/10/2021 ",
      phone: "0921893213",
      status: "Active",
    },
  ];

  const traineeTableHandler = () => {
    setRoleTable("trainee");
  };

  const ptTableHandler = () => {
    setRoleTable("pt");
  };

  return (
    <Fragment>
      {roleTable === "pt" ? (
        <button className={classes.list}>Danh sách huấn luyện viên</button>
      ) : (
        <button className={classes.list}>Danh sách người tập</button>
      )}

      <div className={classes.table_header}>
        <div className={classes.numberPage}>Trang: 1 </div>
        {/* {roleTable === "pt" ? (
          <h2 style = {{ fontSize : "10pxs"}}>Danh sách huấn luyện viên</h2>
        ) : (
          <h2>Danh sách người tập </h2>
        )} */}
        {roleTable === "pt" ? (
          <button className={classes.btn_content}>
            + Thêm huấn luyện viên
          </button>
        ) : (
          <button className={classes.btn_content}>
            + Thêm người tập luyện
          </button>
        )}
      </div>
      <div className={classes.tableItem}>
        <table className={classes.table_table}>
          <thead>
            {roleTable === "pt" ? (
              <tr>
                <th scope="col">Họ và tên</th>
                <th scope="col">Email</th>
                <th scope="col">Mật khẩu</th>
                <th scope="col">Ví</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Cập nhật</th>
                <th scope="col">Cấm</th>
              </tr>
            ) : (
              <tr>
                <th scope="col">Họ và tên</th>
                <th scope="col">Tài khoản</th>
                <th scope="col">Mật khẩu</th>
                <th scope="col">Ví</th>
                <th scope="col">Ngày đăng ký</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Cập nhật</th>
                <th scope="col">Cấm</th>
              </tr>
            )}
          </thead>

          <tbody>
            {roleTable === "pt"
              ? listPT.map((value, index) => (
                  <tr key={index}>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.password}</td>
                    <td>{value.amount}</td>
                    <td>{value.phone}</td>
                    <td className={classes.statusTable}>{value.status}</td>
                    <td>
                      <MdSystemUpdate className={classes.iconList} />
                    </td>
                    <td>
                      <MdDelete className={classes.iconListDelete} />{" "}
                    </td>
                  </tr>
                ))
              : listTrainee.map((value, index) => (
                  <tr key={index}>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.password}</td>
                    <td>{value.amount}</td>
                    <td>{value.registerDay}</td>
                    <td>{value.phone}</td>
                    <td className={classes.statusTable}>{value.status}</td>
                    <td>
                      <MdSystemUpdate className={classes.iconList} />
                    </td>
                    <td>
                      <MdDelete className={classes.iconListDelete} />{" "}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        <div className={classes.pagination}>
          <div className={classes.btn_pagination}>
            <div className={classes.listButton}>
              <button className={classes.btn_list}>Trang trước</button>
            </div>
            <div className={classes.listButton}>
              <button className={classes.btn_list}>Trang tiếp theo </button>
            </div>
          </div>
          <div>
            {roleTable === "pt" ? (
              <button
                className={classes.btn_content}
                onClick={traineeTableHandler}
              >
                Chuyển tới danh sách người tập
              </button>
            ) : (
              <button className={classes.btn_content} onClick={ptTableHandler}>
                Chuyển tới danh sách huấn luyện viên
              </button>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminBody;
