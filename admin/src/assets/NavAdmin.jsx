import React, { useState } from 'react'
import MyBoton from './MyBoton'
import estilos from './navAdmin.module.css'

function NavAdmin() {
    const [activo, setActivo] = useState(false);

    const toggleActivo = () => {
      setActivo(!activo);
    };
    return (
        <>
            <nav className={`${estilos.navAdmin} w-full bg-blue-800 items-center flex items-center text-white shadow-md justify-between m-auto py-4 px-7`}>
                <div className={`${estilos.divLogo} flex items-center`}>
                    <img src="src/img/logo.png" alt="logoDorado" className="h-14 w-auto mr-4" />
                    <h1 className="text-lg font-bold">Panel administrativo</h1>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <MyBoton
                        text={'Salir'}
                        className={`${estilos.myBoton} items-center bg-white hover:bg-red-400 hover:text-black text-black font-bold rounded-xl`}
                        linkTo={'/'} children={
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                            </>
                        }
                    />
                    <button
                        className={`${estilos.btnMenu} ${activo ? estilos.open : ""}`}
                        onClick={toggleActivo}
                    >
                        <span className={estilos.bar1}></span>
                        <span className={estilos.bar2}></span>
                        <span className={estilos.bar3}></span>
                    </button>
                </div>
            </nav>

        </>

    )
}

export default NavAdmin