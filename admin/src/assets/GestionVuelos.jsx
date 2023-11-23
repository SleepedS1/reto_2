import React from 'react'
import Box from './Box'
import { Link } from 'react-router-dom';
import MyBoton from './MyBoton';

function GestionVuelos() {
    return (
        <Box>
            <div className='flex w-full justify-between bg-white rounded-xl px-5 py-3 shadow-lg'>
                <MyBoton
                    text={'Gestion de vuelos'}
                    linkTo={'/'}
                />
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
                            <th className="px-4 py-2">HORA LLLEGADA</th>
                            <th className="px-4 py-2">TIEMPO DE VUELO</th>
                            <th className="px-4 py-2">Editar</th>
                            <th className="px-4 py-2">Ver pasajeros</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td className="border border-2 border-gray-300 px-4 py-2">2323</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">Bogota</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">Avianca</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">NOc</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">12:40</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">3:30</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">8888</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">
                                <button className="flex justify-between bg-white font-bold py-2 px-4 rounded-xl text-sky-500 shadow-lg">
                                    Editar
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </button></td>
                            <td className="border border-2 border-gray-300 px-4 py-2">
                                <button className="flex justify-between bg-white text-white font-bold py-2 px-4 rounded-xl text-yellow-500 shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>
                            </td>
                            {/* ------ */}
                            
                        </tr>
                        <tr >
                            <td className="border border-2 border-gray-300 px-4 py-2">2323</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">Bogota</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">Avianca</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">NOc</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">12:40</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">3:30</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">8888</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">
                                <button className="flex justify-between bg-white font-bold py-2 px-4 rounded-xl text-sky-500 shadow-lg">
                                    Editar
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </button></td>
                            <td className="border border-2 border-gray-300 px-4 py-2">
                                <button className="flex justify-between bg-white text-white font-bold py-2 px-4 rounded-xl text-yellow-500 shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>
                            </td>
                            {/* ------ */}
                            
                        </tr>
                        <tr >
                            <td className="border border-2 border-gray-300 px-4 py-2">2323</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">Bogota</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">Avianca</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">NOc</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">12:40</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">3:30</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">8888</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">
                                <button className="flex justify-between bg-white font-bold py-2 px-4 rounded-xl text-sky-500 shadow-lg">
                                    Editar
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </button></td>
                            <td className="border border-2 border-gray-300 px-4 py-2">
                                <button className="flex justify-between bg-white text-white font-bold py-2 px-4 rounded-xl text-yellow-500 shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>
                            </td>
                            {/* ------ */}
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </Box>
    )
}

export default GestionVuelos