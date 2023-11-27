import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from './Box';
import MyBoton from './MyBoton';

const DESTINOS = {
  1: 'Armenia',
  2: 'Barranquilla',
  3: 'Cali',
  4: 'Cartagena',
  5: 'Medellin',
  6: 'Santa Marta',
  7: 'San Andres',
};

const AEROLINEAS = {
    1: 'Avianca',
    2: 'Satena',
    3: 'Wingo',
    4: 'Latam',
    5: 'Ultra Air',
    6: 'Easy Fly',
  };

function GestionVuelos() {
  const [vuelos, setVuelos] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET al servidor
    axios.get('http://localhost:3000/dorado/vuelos/consultar')
      .then(response => {
        // Actualizar el estado con los datos recibidos
        setVuelos(response.data.vuelos || []);
      })
      .catch(error => {
        console.error('Error al obtener vuelos:', error);
        // Manejar el error según tus necesidades
      });
  }, []); // El segundo argumento del useEffect es un array vacío para que se ejecute solo una vez al montar el componente

  const Destino = (codDestino) => {
    return DESTINOS[codDestino] || 'No encontrado';
  };

  const Aerolineas = (codAerolinea) => {
    return AEROLINEAS[codAerolinea] || 'No encontrada';
  };

  return (
    <Box>
      <div className='flex w-full justify-end bg-white rounded-xl px-5 py-3 shadow-lg'>
        <div className='flex gap-2 '>
          <MyBoton
            text={'Crear pasajero'}
            className={'flex bg-white px-2 py-1 rounded-xl shadow-lg text-black font-bold'}
            children={
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </>
            }
          />
          <MyBoton
            text={'Crear vuelo'}
            className={'flex bg-white px-2 py-1 rounded-xl shadow-lg text-black font-bold'}
            children={
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </>
            }
          />
        </div>
      </div>
      <br />
      <div className="m-auto">
        <table className="m-auto table-auto hover:table-fixed shadow-lg rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2">COD VUELO</th>
              <th className="px-4 py-2">DESTINO</th>
              <th className="px-4 py-2">AEROLINEA</th>
              <th className="px-4 py-2">SALA</th>
              <th className="px-4 py-2">HORA SALIDA</th>
              <th className="px-4 py-2">HORA LLEGADA</th>
              <th className="px-4 py-2">TIEMPO DE VUELO</th>
              <th className="px-4 py-2">Editar</th>
              <th className="px-4 py-2">Ver pasajeros</th>
            </tr>
          </thead>
          <tbody>
            {vuelos.map(vuelo => (
              <tr key={vuelo.codvuelo}>
                <td className="border border-2 border-gray-300 px-4 py-2">{vuelo.codvuelo}</td>
                <td className="border border-2 border-gray-300 px-4 py-2">{Destino(vuelo.coddestino)}</td>
                <td className="border border-2 border-gray-300 px-4 py-2">{Aerolineas(vuelo.codaerolinea)}</td>
                <td className="border border-2 border-gray-300 px-4 py-2">{vuelo.salaabordaje}</td>
                <td className="border border-2 border-gray-300 px-4 py-2">{vuelo.horasalida}</td>
                <td className="border border-2 border-gray-300 px-4 py-2">{vuelo.horallegada}</td>
                <td className="border border-2 border-gray-300 px-4 py-2">{/* Calcular el tiempo de vuelo aquí si es necesario */}</td>
                <td className="border border-2 border-gray-300 px-4 py-2">
                  <button className="flex justify-between bg-white font-bold py-2 px-4 rounded-xl text-sky-500 shadow-lg">
                    Editar
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                  </button>
                </td>
                <td className="border border-2 border-gray-300 px-4 py-2">
                  <button className="flex justify-between bg-white text-white font-bold py-2 px-4 rounded-xl text-yellow-500 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
}

export default GestionVuelos;
