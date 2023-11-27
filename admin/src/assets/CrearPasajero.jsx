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
        <form action="">
                        
        </form>
        </Box>
    )
}

export default CrearPasajero