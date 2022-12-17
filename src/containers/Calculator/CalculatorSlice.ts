import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CalculatorState {
  calculation: string;
  result: string;
}

const initialState: CalculatorState = {
  calculation: "",
  result: "",
};

export const CalculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<string>) => {
      if (state.calculation[0] === "*" || "/" || "+" || "-") {
        state.calculation = state.calculation.slice(0);
      }
      state.calculation += action.payload;
      console.log(initialState);
    },
    operation: (state, action: PayloadAction<string>) => {
      state.calculation += action.payload;
    },
    deleteNumber: (state) => {
      state.calculation = state.calculation.slice(0, -1);
    },
    getResult: (state) => {
      const type = /[^\d*/+()-]/g;
      const pow = /(\d+)\*\*(\d+)/g;
      state.result = state.calculation.replace(type, " ").replace(pow, "Math.pow($1, $2)");
      // eslint-disable-next-line no-eval
      state.result = eval(state.calculation);
      state.calculation = "";
    },
    clearMemory: (state) => {
      state.calculation = "";
      state.result = "";
    }
  }
});

export const CalculatorReducer = CalculatorSlice.reducer;
export const {addNumber, operation, deleteNumber, getResult, clearMemory} = CalculatorSlice.actions;