import React, { useState } from 'react'
import estilos from './navAdmin.module.css'


function NavAdmin() {
    return (
        <>
            <div className={`${estilos.divLogo} fixed w-full bg-black flex items-center justify-center relative py-3 px-5`}>
                <img src="src/img/logo.png" alt="logoDorado" className="h-17 w-auto mr-4" />
                <h1 className="bg-white rounded-lg px-2 py-1 absolute text-sm text-black  font-bold sm-block right-5">Panel administrativo</h1>
            </div>
        </>
    )
}

export default NavAdmin