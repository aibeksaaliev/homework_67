import {configureStore} from "@reduxjs/toolkit";
import {CalculatorReducer} from "../containers/Calculator/CalculatorSlice";

export const store = configureStore({
  reducer: {
    calculator: CalculatorReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;