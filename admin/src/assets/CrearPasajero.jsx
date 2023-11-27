import React from 'react'
import Box from './Box'
import MyBoton from './MyBoton'

function CrearPasajero() {
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
            <form className="w-full bg-white rounded-lg flex flex-col px-4 py-4">
                <div className='w-full gap-4 grid-cols-3 grid-rows-2'>
                    <div className="">
                        <label htmlFor="aerolinea" className="block mb-2 font-bold">
                            Identificacion:
                        </label>
                        <input
                            className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="aerolinea" className="block mb-2 font-bold">
                            Nombres:
                        </label>
                        <input
                            className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="aerolinea" className="block mb-2 font-bold">
                            Apellidos:
                        </label>
                        <input
                            className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="aerolinea" className="block mb-2 font-bold">
                            Email:
                        </label>
                        <input
                            className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="aerolinea" className="block mb-2 font-bold">
                            Telefono:
                        </label>
                        <input
                            className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="aerolinea" className="block mb-2 font-bold">
                            Vuelo:
                        </label>

                        <select
                            className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="1">Armenia</option>
                            <option value="2">959565</option>
                            <option value="3">959565</option>
                            <option value="4">959565</option>
                        </select>
                    </div>
                    <div className="flex justify-center h-full bg-gray-100 rounded-xl py-2">
                        <label htmlFor="profilePicture" className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="file"
                                id="profilePicture"
                                className="hidden"
                                accept="image/*"
                            />
                            <div className="bg-gray-200 w-32 h-32 flex items-center justify-center rounded-lg overflow-hidden">
                                <img

                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="bg-gray-200 hover:text-white hover:bg-blue-700 text-blue-800 font-bold py-1 px-8 rounded-lg ">Subir foto</span>
                        </label>
                    </div>
                </div>

                <div className="w-full flex items-center justify-start py-3">
                    <MyBoton
                        text={'REGISTRAR'}
                        className={'bg-gray-200 hover:text-white hover:bg-blue-700 text-blue-800 font-bold py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline'}
                    />
                </div>
            </form>
        </Box>
    )
}

export default CrearPasajero