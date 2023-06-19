import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import DatePicker, { registerLocale } from 'react-datepicker';
import { format, differenceInMonths as getDifferenceInMonthsnth } from 'date-fns';
import es from 'date-fns/locale/es';
import { Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIndicadores } from '../features/indicadores/indicadoresThunks';
import 'react-datepicker/dist/react-datepicker.css';
Chart.register( ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend );
registerLocale('es', es)

const LineGraphic = () => {

    const indicadores = useSelector(state => state.indicadores);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchIndicadores());
    },[dispatch])
    const indicadoresOrdenados = [...indicadores].sort((a, b) => new Date(a.fechaIndicador) - new Date(b.fechaIndicador));


    const [startDate , setStartDate] = useState(new Date())
    const [endDate , setEndDate] = useState(null)
    const onChangeDate = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }

    let indicadoresFiltrados = indicadoresOrdenados;
    if (startDate && endDate) {
            indicadoresFiltrados = indicadoresOrdenados.filter(
        (ind) => new Date(ind.fechaIndicador) >= startDate && new Date(ind.fechaIndicador) <= endDate
        );
    }

    const differenceInMonths = getDifferenceInMonthsnth(endDate, startDate);

    const formatLabel = (date) => {
        if (differenceInMonths <= 3) {
            return format(date, 'dd-MM-yyyy');
        } else {
            return format(date, 'MM-yyyy');
        }
    };

    const formattedLabels = indicadoresFiltrados.map(ind => formatLabel(new Date(ind.fechaIndicador)));


    const data = {
        labels: formattedLabels,
        datasets: [{
            label: indicadoresFiltrados.codigoIndicador,
            data: indicadoresFiltrados.map(ind => ind.valorIndicador),
            tension: .5,
            pointBorderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 1)', 
            backgroundColor: 'white',
        }]
    };
    const options = {
        plugins: {
            legend: { display: false }
        },
        elements: {
            line: {
                borderColor: 'rgba(255, 255, 255, 1)' 
            }
        },
        scales: {
            x: {
                type: 'category',
                offset: true,
                grid: {
                    offset: true,
                    color: 'rgba(255, 255, 255, 1)' 
                },
                ticks: {
                    color: 'white', 
                    fontSize: 20
                }
            },
            y: {
                grid: {
                    drawBorder: false,
                    color: 'rgba(255, 255, 255, 1)'
                },
                ticks: {
                    color: 'white', 
                    fontSize: 20 
                }
            }
        }
    };
    

    return (
        <div>
            <div className='container'>
                <div className='mt-5'>
                    <h2 className='display-2 text-center'>
                        Valores UF
                    </h2>
                </div>
                <div className='row mt-5'>
                    <div className='col-3 text-center'>
                        <p className='lead'>
                            Seleccione un rango de fechas
                        </p>
                        <DatePicker
                            selected={startDate}
                            onChange={onChangeDate}
                            selectsRange
                            inline
                            startDate={startDate}
                            endDate={endDate}
                            locale="es"
                            dateFormat="dd/MM/yyyy"
                            maxDate={new Date()}  
                        /> 
                    </div>
                    <div className='col-9'>
                        <Line data={data} options={options} />
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default LineGraphic;
