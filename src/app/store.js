import { configureStore } from "@reduxjs/toolkit";
import indicadoreReducer from "../features/indicadores/indicadoresSlice";

export const store = configureStore({
    reducer: {
        indicadores: indicadoreReducer
    }
});
