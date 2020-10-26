import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../redux/actions/DatVePhimAction";
import { DAT_GHE } from "../redux/constant/DatVePhimConst";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let cssGheDangChon = "";
      let disable = false;

      //Handle seat booked
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }

      //Handle seat booking (in danhSachGheDangDat) set background = green
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat, index) => {
          return gheDangDat.soGhe === ghe.soGhe;
        }
      );

      if (indexGheDangDat !== -1) {
        cssGheDangChon = "gheDangChon";
      }

      return (
        <button
          key={index}
          className={`ghe ${cssGheDaDat} ${cssGheDangChon}`}
          disabled={disable}
          onClick={() => {
            this.props.datGhe(ghe);
          }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <button className="rowNumber ml-3">{hang.soGhe}</button>;
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <>
          <span className="firstChar">{this.props.hangGhe.hang}</span>
          {this.renderSoHang()}
        </>
      );
    } else {
      return (
        <>
          <span className="firstChar">{this.props.hangGhe.hang}</span>
          {this.renderGhe()}
        </>
      );
    }
  };

  render() {
    return (
      <div className="text-light text-left fs-15 hangGhe">
        {this.renderHangGhe()}
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
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
