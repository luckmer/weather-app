import { createStore } from "redux";
import Reducer from "../reducers/Index";

// const Save = (state) =>
// {
//     try {
//         const Save = JSON.stringify(state);
//         localStorage.setItem("DATA", Save);
//     } catch (err) {
//         throw err
//     }
// }
// const Load = () =>{
//     try {
//         const load = localStorage.getItem("DATA");
//         if (load === null) return undefined;
//         return JSON.parse(load);
//     } catch (err) {
//         throw err
//     }
// }
const Store = createStore(Reducer);
// Store.subscribe(() => Save(Store.getState()));

export default Store