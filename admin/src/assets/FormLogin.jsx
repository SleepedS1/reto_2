import React from 'react';
import estilos from './formLogin.module.css';
import MyBoton from './MyBoton';

function FormLogin() {
    return (
        <div className={`${estilos.contenedorLogin} flex items-center justify-center flex-wrap min-h-screen`} >
            <div className='w-4/12' >
                <h1 className='text-white font-bold text-5xl'>Bienvenido</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elitt.
                </p>
                <MyBoton
                    text={'Gestion de vuelos'}
                    linkTo={'/GestionVuelos'}
                />
                <MyBoton
                    text={'Lista de pasajeros'}
                    linkTo={'/ListaPasajeros'}
                />
            </div>

            <div className="w-9/12 max-w-md ">
                <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl font-bold mb-6 text-center">INICIAR SESION</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Usuario">
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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded-lg w-full m-auto py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="************"
                        />
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <button
                            className="w-9/12 bg-yellow-400 hover:bg-blue-700 text-white  py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            INGRESAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormLogin;
