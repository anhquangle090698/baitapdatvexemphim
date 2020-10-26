import { DAT_GHE, HUY_GHE } from "../constant/DatVePhimConst";

const stateInit = {
  danhSachGheDangDat: [],
};

const DatVePhimReducer = (state = stateInit, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangDatCapNhat = [...state.danhSachGheDangDat];

      let index = danhSachGheDangDatCapNhat.findIndex((gheDangDat) => {
        return gheDangDat.soGhe === action.ghe.soGhe;
      });

      if (index !== -1) {
        danhSachGheDangDatCapNhat.splice(index, 1);
      } else {
        danhSachGheDangDatCapNhat.push(action.ghe);
      }

      state.danhSachGheDangDat = danhSachGheDangDatCapNhat;
      return { ...state };
    }

    case HUY_GHE: {
      let danhSachGheDangDatCapNhat = [...state.danhSachGheDangDat];

      let index = danhSachGheDangDatCapNhat.findIndex((gheDangDat) => {
        return gheDangDat.soGhe === action.soGhe;
      });

      if (index !== -1) {
        danhSachGheDangDatCapNhat.splice(index, 1);
      }

      state.danhSachGheDangDat = danhSachGheDangDatCapNhat;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default DatVePhimReducer;
