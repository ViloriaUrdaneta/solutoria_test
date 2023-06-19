import axios from 'axios';
import { getIndicadores, addIndicador, updateIndicador, deleteIndicador } from './indicadoresSlice';

export const fetchIndicadores = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:3000/api/indicadores');
        const data = response.data;
        dispatch(getIndicadores(data));
    } catch (error) {
        console.log('Error al obtener los indicadores:', error.message);
    }
};
export const createIndicador = (indicadorData) => async (dispatch) => {
    try {
        const response = await axios.post('/api/indicadores', indicadorData);
        const data = response.data;
        dispatch(addIndicador(data));
    } catch (error) {
        console.log('Error al crear el indicador:', error.message);
    }
};
export const updateInd = (indicadorId, indicadorData) => async (dispatch) => {
    try {
        const response = await axios.put(`/api/indicadores/${indicadorId}`, indicadorData);
        const updatedIndicador = response.data;
        dispatch(updateIndicador({ id: indicadorId, newData: updatedIndicador }));
    } catch (error) {
        console.log('Error al actualizar el indicador:', error.message);
    }
};
export const deleteInd = (indicadorId) => async (dispatch) => {
    try {
        await axios.delete(`/api/indicadores/${indicadorId}`);
        dispatch(deleteIndicador(indicadorId));
    } catch (error) {
        console.log('Error al eliminar el indicador:', error.message);
    }
};