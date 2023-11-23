import React from 'react'

function NavAdmin() {
    return (
        <>
            <nav className=" w-full bg-cyan-950 items-center text-white p-4 flex items-center shadow-md justify-between m-auto py-4 px-7">
                <div className="flex items-center">
                    <img src="src/img/logo.png" alt="logoDorado" className="h-14 w-auto mr-4" />
                    <h1 className="text-lg font-bold">Panel administrativo</h1>
                </div>
                <div>
                    <button className="flex justify-between bg-red-600 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl">
                        Salir
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                    </button>
                </div>
            </nav>
        
        </>

    )
}

export default NavAdmin