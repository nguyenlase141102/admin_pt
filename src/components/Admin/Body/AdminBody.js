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
      amount: "44.300.000",
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
      name: "Trần Bảo Tiến",
      email: "TienTran@gmail.com",
      password: "Tientran123",
      amount: "17.300.000",
      phone: "0932567342",
      status: "Active",
    },
    {
      name: "Lê Hồng Phúc",
      email: "phucle@gmail.com",
      password: "phucbadoi",
      amount: "15.300.000",
      phone: "09329632342",
      status: "Active",
    },
    {
      name: "Tran The Anh",
      email: "TheAnh98@gmail.com",
      password: "theanhmomo",
      amount: "12.300.000",
      phone: "0932234712",
      status: "Active",
    },
    {
      name: "Nguyen Le Dong Anh",
      email: "DongAnh@gmail.com",
      password: "Tananhdong",
      amount: "24.300.000",
      phone: "0934612332",
      status: "Active",
    },
    {
      name: "Pham Thế Phát",
      email: "phamphat@gmail.com",
      password: "phatle1231",
      amount: "23.300.000",
      phone: "07132899114",
      status: "Active",
    },
    {
      name: "Hoò Anh Tuấn",
      email: "Anhtuan@gmail.com",
      password: "tuananh1235",
      amount: "22.300.000",
      phone: "05112310951",
      status: "Active",
    },
    {
      name: "Minh Tâm",
      email: "minhtam@gmail.com",
      password: "minhtam123",
      amount: "29.300.000",
      phone: "01857103123",
      status: "Active",
    },
    {
      name: "Minh Hoàng",
      email: "minhhoang@gmail.com",
      password: "minhhoang123",
      amount: "23.300.000",
      phone: "08131230985",
      status: "Active",
    },
  ];

  const listTrainee = [
    {
      name: "Trần Hữu Duy",
      email: "duyhuu@gmail.com",
      password: "duyhuumo",
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
      name: "Mạnh Thường Quân",
      email: "quantrhuong@gmail.com",
      password: "quankhuKhuu123",
      amount: "1.300.000",
      registerDay: "25/10/2021 ",
      phone: "0921562113",
      status: "Active",
    },
    {
      name: "Trần Anh Tuất",
      email: "Anhtuat@gmail.com",
      password: "trananhtuan123",
      amount: "1.300.000",
      registerDay: "25/10/2021 ",
      phone: "092123573",
      status: "Active",
    },
    {
      name: "Phan Lê Long",
      email: "Longleu@gmail.com",
      password: "AnhLong123",
      amount: "2.300.000",
      registerDay: "25/10/2021 ",
      phone: "0921834113",
      status: "Active",
    },
    {
      name: "Đỗ Thế Dương",
      email: "duongga@gmail.com",
      password: "duongpro123",
      amount: "1.300.000",
      registerDay: "25/10/2021",
      phone: "0921526833",
      status: "Active",
    },
    {
      name: "Lê Anh Nguyên",
      email: "nguyenle@gmail.com",
      password: "leanhnguyen12309",
      amount: "2.300.000",
      registerDay: "25/10/2021",
      phone: "09123757012",
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
