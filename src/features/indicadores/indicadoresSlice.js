import { createSlice } from "@reduxjs/toolkit";

export const indicadoresSlice = createSlice({
    name: 'indicadores',
    initialState: [],
    reducers: {
        getIndicadores: (state, action) => {
            return action.payload;
        },
        addIndicador: (state, action) => {
            state.push(action.payload);
        },
        updateIndicador: (state, action) => {
            const { id, newData } = action.payload;
            const indicadorIndex = state.findIndex(indicador => indicador.id === id);
            if (indicadorIndex !== -1) {
                state[indicadorIndex] = { ...state[indicadorIndex], ...newData };
            }
        },
        deleteIndicador: (state, action) => {
            const indicadorId = action.payload;
            const indicadorIndex = state.findIndex(indicador => indicador.id === indicadorId);
            if (indicadorIndex !== -1) {
                state.splice(indicadorIndex, 1);
            }
        }
    }
})


export const { getIndicadores, addIndicador, updateIndicador, deleteIndicador } = indicadoresSlice.actions

export default indicadoresSlice.reducer

