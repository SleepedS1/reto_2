import React, { useState } from 'react';
import estilos from './formLogin.module.css';
import axios from 'axios';
import MyBoton from './componets/MyBoton';
import { useNavigate } from 'react-router-dom';
import MyModal from './componets/MyModal';

function FormLogin() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Evita la recarga de la página al enviar el formulario

    try {
      const response = await axios.post('http://localhost:3000/dorado/login', { username, password });
      console.log(response.data.message);

      // Si el inicio de sesión es exitoso, redirige a la página de GestionVuelos
      navigate('/GestionVuelos');
    } catch (error) {
      console.error('Error de inicio de sesión:', error.response?.data?.error || 'Error desconocido');
    }
  };

  return (
    <div className={`${estilos.contenedorLogin} flex flex-col py-5`}>
      <div className="flex w-full justify-end  rounded-xl px-5 py-3 ">
        <div className="flex gap-2 ">
          <MyBoton
            onClick={openModal}
            text={'Login'}
            className={'bg-gray-200 hover:text-white hover:bg-blue-700 text-blue-800 font-bold py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline'}
          />

        </div>
      </div>
      <br />
      <MyModal
        show={showModal}
        onClick={closeModal}
        children={
          <>
            <div className="">
              <form className=" bg-white shadow-md rounded-xl px-3 pt-6" onSubmit={handleLogin}>
                <h2 className="text-2xl font-bold mb-6 text-center">INICIAR SESIÓN</h2>
                <div className="mb-4">
                  <label className="block text-blue-700 text-sm font-bold mb-2" htmlFor="Usuario">
                    Usuario
                  </label>
                  <input
                    className="shadow appearance-none rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Usuario"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="w-full flex items-center justify-center py-3">
                  <MyBoton
                    text={'INGRESAR'}
                    type="submit"
                    className={'w-9/12 bg-gray-200 hover:text-white hover:bg-blue-700 text-blue-800 font-bold py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline'}
                  />
                </div>
              </form>
            </div>
          </>
        }
      />
      <MyImg
        src='src/img/piloto.jpg'
        className1={'w-full '}
        className2={'myimgg'}
      />
    </div>
  );
}

export default FormLogin;
