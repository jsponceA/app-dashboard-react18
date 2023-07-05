import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import authSlice from "./slices/authSlice";
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

const counterReducer = persistReducer(counterConfig, counterSlice);
const authReducer = persistReducer(authConfig, authSlice);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
