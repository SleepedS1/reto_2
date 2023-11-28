import React from 'react'
import Box from './Box'
import BtnBack from './BtnBack';

function ListaPasajeros() {
    return (
        <Box>
            <div className='flex w-full justify-end bg-white rounded-xl px-5 py-3 shadow-lg'>
                <div className='flex gap-2 '>
                    <BtnBack
                        linkTo={'/'}
                    />
                </div>
            </div>
            <br />
            <div className="m-auto">
                <table className="m-auto table-auto hover:table-fixed shadow-lg rounded-lg">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">IDENTIFICACION</th>
                            <th className="px-4 py-2">NOMBRES</th>
                            <th className="px-4 py-2">APELLIDOS</th>
                            <th className="px-4 py-2">EMAIL</th>
                            <th className="px-4 py-2">TELEFONO</th>
                            <th className="px-4 py-2">CANCELAR VUELO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td className="border border-2 border-gray-300 px-4 py-2">2323</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">Bogota</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">Avianca</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">NOc</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">12:40</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">
                                <button className="flex justify-between bg-white font-bold py-2 px-4 rounded-xl text-red-500 shadow-lg">
                                    Eliminar
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr >
                            <td className="border border-2 border-gray-300 px-4 py-2">2323</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">Bogota</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">Avianca</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">NOc</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">12:40</td>
                            <td className="border border-2 border-gary-300 px-4 py-2">
                                <button className="flex justify-between bg-white font-bold py-2 px-4 rounded-xl text-red-500 shadow-lg">
                                    Eliminar
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Box>
    )
}

export default ListaPasajeros