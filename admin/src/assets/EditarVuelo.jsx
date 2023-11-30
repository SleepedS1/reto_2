import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from './Box';
import MyBoton from './MyBoton';
import axios from 'axios';
import Swal from 'sweetalert2';
import MyImg from './MyImg';

function EditarVuelo() {
    const { codVuelo } = useParams();
    const [vuelo, setVuelo] = useState(null);
    const [aerolineas, setAerolineas] = useState([]);
    const [destinos, setDestinos] = useState([]);
    const [selectedAerolinea, setSelectedAerolinea] = useState('');
    const [selectedDestino, setSelectedDestino] = useState('');
    const [selectedSala, setSelectedSala] = useState('');
    const [horaSalida, setHoraSalida] = useState('');
    const [horaLlegada, setHoraLlegada] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3000/dorado/vuelos/consultar/${codVuelo}`)
            .then(response => {
                setVuelo(response.data.vuelo);
                setSelectedAerolinea(response.data.vuelo.codaerolinea);
                setSelectedDestino(response.data.vuelo.coddestino);
                setSelectedSala(response.data.vuelo.salaabordaje);
                setHoraSalida(response.data.vuelo.horasalida);
                setHoraLlegada(response.data.vuelo.horallegada);
            })
            .catch(error => {
                console.error('Error al obtener información del vuelo:', error);
            });

        axios.get('http://localhost:3000/dorado/aerolineas')
            .then(response => {
                setAerolineas(response.data.aerolineas || []);
            })
            .catch(error => {
                console.error('Error al obtener aerolíneas:', error);
            });

        axios.get('http://localhost:3000/dorado/destinos')
            .then(response => {
                setDestinos(response.data.destinos || []);
            })
            .catch(error => {
                console.error('Error al obtener destinos:', error);
            });
    }, [codVuelo]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validaciones adicionales si es necesario
        if (!selectedAerolinea || !selectedDestino || !selectedSala || !horaSalida || !horaLlegada) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Todos los campos son obligatorios.',
            });
            return;
        }

        try {
            // Enviar el formulario y manejar la respuesta
            const response = await axios.put(`http://localhost:3000/dorado/vuelos/editar/${codVuelo}`, {
                coddestino: selectedDestino,
                codaerolinea: selectedAerolinea,
                salaabordaje: selectedSala,
                horasalida: horaSalida,
                horallegada: horaLlegada,
            });

            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: response.data.message,
            });
        } catch (error) {
            console.error('Error al editar vuelo:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al editar el vuelo. Por favor, inténtalo de nuevo.',
            });
        }
    };

    if (!vuelo) {
        return <p>Cargando...</p>;
    }

    return (
        <Box>
            <div className='flex w-full justify-between items-center text-violet-700 font-bold bg-white rounded-xl px-5 py-3 shadow-lg'>
                <h1>Editar vuelo</h1>
                <div className='flex items-center gap-2 '>
                    
                    <MyBoton
                        text={'Volver'}
                        linkTo={'/gestionvuelos'}
                        className={'flex bg-white px-2 py-1 rounded-xl shadow-lg text-black font-bold'}
                        children={
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                                </svg>
                            </>
                        }
                    />
                </div>
            </div>
            <br />
            <div className='flex gap-1 justify-center'>
            <MyImg
               src='src/img/avion2.png'
                className1={' '}
                className2={'myimgg'}
                />
                <form className="myForm bg-white rounded-lg flex flex-col px-4 py-4" onSubmit={handleSubmit}>
                    <div className='w-full gap-4 grid-cols-3 grid-rows-2'>
                        <div className="">
                            <label htmlFor="codVuelo" className="block mb-2 font-bold">
                                Código de vuelo:
                            </label>
                            <div className="py-2 px-3 border rounded-lg">{vuelo.codvuelo}</div>
                        </div>
                        <div className="">
                            <label htmlFor="destino" className="block mb-2 font-bold">
                                Destino:
                            </label>
                            <select
                                className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                value={selectedDestino}
                                onChange={(e) => setSelectedDestino(e.target.value)}
                            >
                                <option disabled>Seleccionar...</option>
                                {destinos.map(destino => (
                                    <option key={destino.coddestino} value={destino.coddestino}>
                                        {destino.descripcion}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="">
                            <label htmlFor="aerolinea" className="block mb-2 font-bold">
                                Aerolínea:
                            </label>
                            <select
                                className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                value={selectedAerolinea}
                                onChange={(e) => setSelectedAerolinea(e.target.value)}
                            >
                                <option disabled>Seleccionar...</option>
                                {aerolineas.map(aerolinea => (
                                    <option key={aerolinea.codaerolinea} value={aerolinea.codaerolinea}>
                                        {aerolinea.descripcion}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="">
                            <label htmlFor="salaabordaje" className="block mb-2 font-bold">
                                Sala de abordaje:
                            </label>
                            <select
                                className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                value={selectedSala}
                                onChange={(e) => setSelectedSala(e.target.value)}
                            >
                                <option disabled>Seleccionar...</option>
                                <option value="A1">A1</option>
                                <option value="B2">B2</option>
                                <option value="C3">C3</option>
                                <option value="D4">D4</option>
                                <option value="E5">E5</option>
                            </select>
                        </div>
                        <div className="">
                            <label htmlFor="horaSalida" className="block mb-2 font-bold">
                                Hora de salida:
                            </label>
                            <input
                                type='time'
                                className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                value={horaSalida}
                                onChange={(e) => setHoraSalida(e.target.value)}
                            />
                        </div>
                        <div className="">
                            <label htmlFor="horaLlegada" className="block mb-2 font-bold">
                                Hora de llegada:
                            </label>
                            <input
                                type='time'
                                className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                value={horaLlegada}
                                onChange={(e) => setHoraLlegada(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-start py-3">
                        <MyBoton
                            text={'EDITAR'}
                            type="submit"
                            className={'bg-gray-200 hover:text-white hover:bg-blue-700 text-blue-800 font-bold py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline'}
                        />
                    </div>
                </form>
               
            </div>

        </Box>
    );
}

export default EditarVuelo;
