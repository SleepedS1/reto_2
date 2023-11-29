import React, { useState } from 'react'
import MyBoton from './MyBoton'
import estilos from './navAdmin.module.css'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function NavAdmin() {
    const [activo, setActivo] = useState(false);

    const toggleActivo = () => {
        setActivo(!activo);
    };
    return (
        <>
            {/* <header className={`${estilos.header} ${activo ? estilos.open : ""} flex flex-col sm:flex-row items-center justify-between w-full bg-blue-800 text-white shadow-md m-auto py-4 px-7`}>
    <div className={`${estilos.divLogo} flex items-center mb-2 sm:mb-0`}>
        <img src="src/img/logo.png" alt="logoDorado" className="h-14 w-auto mr-4" />
        <h1 className="text-lg font-bold">Panel administrativo</h1>
    </div>
    <div className={`${estilos.nav} ${activo ? estilos.open : ""} flex items-center justify-center gap-4 mb-2 sm:mb-0`}>
        <MyBoton
            text={'Salir'}
            className={`${estilos.myBoton} ${activo ? estilos.open : ""} items-center bg-white hover:bg-red-400 hover:text-black text-black font-bold rounded-xl`}
            linkTo={'/'}
        >
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
        </MyBoton>
    </div>
    <button
        className={`${estilos.btnMenu} ${activo ? estilos.open : ""}`}
        onClick={toggleActivo}
    >
        <span className={estilos.bar1}></span>
        <span className={estilos.bar2}></span>
        <span className={estilos.bar3}></span>
    </button>
</header> */}
            <Disclosure as="nav" className="w-full bg-white shadow-lg flex justify-center items-center py-3">

                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">

                            <div className="flex space-x-4">
                                <div className={`${estilos.divLogo} flex items-center mb-2 sm:mb-0`}>
                                    <img src="src/img/logo.png" alt="logoDorado" className="h-14 w-auto mr-4" />
                                    <h1 className="text-sm font-bold sm-block flex-end">Panel administrativo</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">

                        </div>
                    </Disclosure.Panel>
                </>
            </Disclosure>


        </>

    )
}

export default NavAdmin