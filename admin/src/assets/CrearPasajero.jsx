import React from 'react'
import Box from './Box'
import MyBoton from './MyBoton'
import BtnBack from './BtnBack'

function CrearPasajero() {
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
                            type='email'
                            className="peer shadow appearance-none border rounded-lg w-full m-auto py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                            Por favor ingrese un correo valido.
                        </p>
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
                    <div className="flex justify-center items-center h-full bg-gray-100 rounded-xl py-2">
                        <div class="shrink-0 rounded-lg">
                            <img class="h-48 w-48 object-cover border-2  rounded-full" src="src/img/user.webp" alt="Current profile photo" />
                        </div>
                        <label class="block">
                            <span class="sr-only">Cargar foto de perfil</span>
                            <input type="file" class="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100
                        "/>
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