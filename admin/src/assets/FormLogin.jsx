import React from 'react';
import estilos from './formLogin.module.css';

function FormLogin() {
    return (
        <div className={`${estilos.contenedorLogin} flex items-center justify-center min-h-screen`} >
        <div className="w-6/12 max- w-md">
            <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-bold mb-6 text-center">Login <span>elDorado</span></h2>
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
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="************"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-amber-500	hover:bg-blue-700 text-white  py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    </div>
);
}

export default FormLogin;
