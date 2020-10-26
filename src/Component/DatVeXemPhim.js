import React, { Component } from "react";
import "../style/BaiTapBookingTicket.css";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGhe from "../Data/danhSachGhe.json";

export default class DatVeXemPhim extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index}></HangGhe>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="bgMovie bookingMovie">
        <div className="overlayBgMovie">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 text-center">
                <h3 className="booking__title">
                  Đặt vé xem phim cyberlearn.vn
                </h3>
                <p className="booking__screen"> Màn hình</p>
                <div className="booking__listSeat">
                  <div className="screen"></div>
                  {this.renderHangGhe()}
                </div>
              </div>
              <div className="col-md-4">
                <h3 className="booking__choosingSeat">
                  Danh sách ghế đang chọn
                </h3>
                <ThongTinDatGhe></ThongTinDatGhe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
