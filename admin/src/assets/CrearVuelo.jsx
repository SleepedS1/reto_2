import React, { useState } from 'react';
import axios from 'axios';
import Box from './Box';
import MyBoton from './MyBoton';

const CrearVuelo = () => {
  const [formData, setFormData] = useState({
    coddestino: '',
    codaerolinea: '',
    salaabordaje: '',
    horasalida: '',
    horallegada: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Envía la solicitud al backend
      const response = await axios.post('http://localhost:3000/dorado/vuelos/crear', formData);

      // Maneja la respuesta del servidor
      console.log(response.data.message); // Puedes mostrar un mensaje de éxito si lo deseas
    } catch (error) {
      console.error('Error al crear vuelo:', error.response.data.message);
      // Puedes manejar el error mostrando un mensaje al usuario o realizando otras acciones necesarias
    }
  };

  return (
    <Box>
      <div className='flex w-full justify-end bg-white rounded-xl px-5 py-3 shadow-lg'>
        <div className='flex gap-2 '>
          <MyBoton
            text={'Volver'}
            linkTo={'/'}
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
      <form className="w-full bg-white flex flex-col px-4 py-4">
        <div className='w-full gap-4 grid-cols-3 grid-rows-2'>
          <div className="">
            <label htmlFor="codaerolinea" className="block mb-2 font-bold">
              Aerolínea
            </label>
            <select
              name="codaerolinea"
              className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
            >
              <option value="1">Armenia</option>
              <option value="2">959565</option>
              <option value="3">959565</option>
              <option value="4">959565</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="salaabordaje" className="block mb-2 font-bold">
              Sala de abordaje
            </label>
            <select
              name="salaabordaje"
              className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
            >
              <option value="1">No encontrado</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="coddestino" className="block mb-2 font-bold">
              Destinos
            </label>
            <select
              name="coddestino"
              className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
            >
              <option value="1">Armenia</option>
              <option value="2">Barranquilla</option>
              <option value="3">Cali</option>
              <option value="4">Cartagena</option>
              <option value="5">Medellin</option>
              <option value="6">Santa Marta</option>
              <option value="7">San Andres</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="horasalida" className="block mb-2 font-bold">
              Hora de salida
            </label>
            <input
              type='time'
              name="horasalida"
              className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label htmlFor="horallegada" className="block mb-2 font-bold">
              Hora de llegada
            </label>
            <input
              type='time'
              name="horallegada"
              className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-start">
          <button
            className=" bg-gray-200 hover:text-white hover:bg-blue-700 text-blue-800 font-bold py-1 px-8 rounded-lg focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            REGISTRAR
          </button>
        </div>
      </form>
    </Box>
  );
};

export default CrearVuelo;
