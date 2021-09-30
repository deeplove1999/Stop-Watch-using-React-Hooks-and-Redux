import { createStore } from "redux";
import Timer from "./reducer/timerreducer";
const store = createStore(Timer);
export default store;
