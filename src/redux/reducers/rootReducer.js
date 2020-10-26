import { combineReducers } from "redux";
import DatVePhimReducer from "./DatVePhimReducer";

export const rootReducer = combineReducers({
  StateDatVePhim: DatVePhimReducer,
});
