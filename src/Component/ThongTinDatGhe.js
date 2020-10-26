import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/actions/DatVePhimAction";

class ThongTinDatGhe extends Component {
  renderThongTinGhe = () => {
    return this.props.danhSachGheDangDat.map((gheDangDat, index) => {
      return (
        <tr key={index}>
          <td>{gheDangDat.soGhe}</td>
          <td>{gheDangDat.gia}</td>
          <td>
            <span
              className="iconHuyGhe"
              onClick={() => {
                this.props.huyGhe(gheDangDat.soGhe);
              }}
            >
              X
            </span>
          </td>
        </tr>
      );
    });
  };

  tongTienVe = () => {
    return this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat) => {
      return (tongTien += gheDangDat.gia);
    }, 0);
  };

  render() {
    return (
      <div>
        <div className="my-5">
          <button className="gheDuocChon mr-2"></button>
          <span className="information__seat">Ghế đã đặt</span>
          <div></div>
          <button className="gheDangChon mr-2"></button>
          <span className="information__seat">Ghế đang chọn</span>
          <div></div>
          <button className="ghe mr-2"></button>
          <span className="information__seat">Ghế chưa đặt</span>
        </div>

        <div>
          <table className="table text-light" border="2">
            <thead className="fs-15">
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody>
              {this.renderThongTinGhe()}
              <tr>
                <td>Tổng tiền</td>
                <td>{this.tongTienVe().toLocaleString()}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.StateDatVePhim.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    huyGhe: (soGhe) => {
      dispatch(huyGheAction(soGhe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);
