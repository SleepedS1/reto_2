import React from 'react';
import estilos from './formLogin.module.css';
import MyBoton from './MyBoton';

function FormLogin() {
    return (
        <div className={`${estilos.contenedorLogin} flex items-center justify-center flex-wrap min-h-screen`} >
           
                <div className='flex gap-2 flex-wrap items-center justify-center'>
                    <MyBoton
                        text={'Gestion de vuelos'}
                        linkTo={'/GestionVuelos'}
                        className={'bg-white rounded-xl px-2 py-1'}
                    />
                    <MyBoton
                        text={'Lista de pasajeros'}
                        linkTo={'/ListaPasajeros'}
                        className={'bg-white rounded-xl px-2 py-1'}
                    />
                     <MyBoton
                        text={'Crear pasajero'}
                        linkTo={'/CrearPasajero'}
                        className={'bg-white rounded-xl px-2 py-1'}
                    />
                </div>

            <div className="w-9/12 max-w-md ">
                <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl font-bold mb-6 text-center">INICIAR SESION</h2>
                    <div className="mb-4">
                        <label className="block text-blue-700 text-sm font-bold mb-2" htmlFor="Usuario">
                            Usuario
                        </label>
                        <input
                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Usuario"
                            type="text"
                            placeholder="Usuario"
                        />
                    </div>
                    <div className="mb-6 w-full flex flex-col">
                        <label className="block text-blue-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="************"
                        />
                    </div>
                    <div className="w-full flex items-center justify-center py-3">
                        <MyBoton
                         text={'INGRESAR'}
                         className={'w-9/12 bg-gray-200 hover:text-white hover:bg-blue-700 text-blue-800 font-bold py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline'}
                        />

                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormLogin;
