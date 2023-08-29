import { configureStore } from "@reduxjs/toolkit";
import peso from "./peso";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";

const persistconfig = {
  key: "root",
  storage,
};

const persistreducer = persistReducer(persistconfig, peso);
const store = configureStore({
  reducer: persistreducer,
  middleware: [thunk],
});
const persistor = persistStore(store);

export default store;
export { persistor };
