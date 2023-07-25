import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import authSlice from "./slices/authSlice";
import systemSlice from "./slices/systemSlice";
import localStorage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const counterConfig = {
  key: "counter",
  storage: localStorage,
};

const authConfig = {
  key: "auth",
  storage: localStorage,
};

const systemConfig = {
  key: "system",
  storage: localStorage,
};

const counterReducer = persistReducer(counterConfig, counterSlice);
const authReducer = persistReducer(authConfig, authSlice);
const systemReducer = persistReducer(systemConfig, systemSlice);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    system: systemReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
