import React, { useState } from 'react';

import '../styles/BodyForm.css';
const BodyForm = () => {
    // Estado para controlar qué formulario mostrar
    const [isLoginActive, setIsLoginActive] = useState(true);

    // Manejador para mostrar el formulario de registro
    const handleShowRegister = () => {
    setIsLoginActive(false);
    }

    // Manejador para mostrar el formulario de login
    const handleShowLogin = () => {
    setIsLoginActive(true);
    }

  return (
    <div className='forma'>  
     <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
     <div className={`container-form register ${isLoginActive ? 'hide' : ''}`}>
        <div className="information">
            <div className="info-childs">
                <h2>Bienvenido</h2>
                <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
                <input type="button" value="Iniciar Sesión" onClick={() => setIsLoginActive(true)}></input>
            </div>
        </div>
        <div className="form-information">
            <div className="form-information-childs">
                <h2>Crear una Cuenta</h2>
                <div className="icons">
                    <i className='bx bxl-google'></i>
                    <i className='bx bxl-github'></i>
                    <i className='bx bxl-linkedin' ></i>
                </div>
                <p>o usa tu email para registrarte</p>
                <form className="form form-register" novalidate>
                    <div>
                        <label>
                            <i className='bx bx-user' ></i>
                            <input type="text" placeholder="Nombre Usuario" name="userName" ></input>
                        </label>
                    </div>
                    <div>
                        <label >
                            <i className='bx bx-envelope' ></i>
                            <input type="email" placeholder="Correo Electronico" name="userEmail" ></input>
                        </label>
                    </div>
                   <div>
                        <label>
                            <i className='bx bx-lock-alt' ></i>
                            <input type="password" placeholder="Contraseña" name="userPassword"></input>
                        </label>
                   </div>
                   
                    <input type="submit" value="Registrarse"></input>
                    <div className="alerta-error">Todos los campos son obligatorios</div>
                    <div className="alerta-exito">Te registraste correctamente</div>
                </form>
            </div>
        </div>
    </div>


    <div className={`container-form login ${isLoginActive ? '' : 'hide'}`}>
        <div className="information">
            <div className="info-childs">
                <h2>¡¡Bienvenido nuevamente!!</h2>
                <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
                <input type="button" value="Registrarse" onClick={() => setIsLoginActive(false)}></input>
            </div>
        </div>
        <div className="form-information">
            <div className="form-information-childs">
                <h2>Iniciar Sesión</h2>
                <div className="icons">
                    <i className='bx bxl-google'></i>
                    <i className='bx bxl-github'></i>
                    <i className='bx bxl-linkedin' ></i>
                </div>
                <p>o Iniciar Sesión con una cuenta</p>
                <form className="form form-login"novalidate>
                    <div>
                        <label >
                            <i className='bx bx-envelope' ></i>
                            <input type="email" placeholder="Correo Electronico" name="userPassword"></input>
                        </label>
                    </div>
                    <div>
                        <label>
                            <i className='bx bx-lock-alt' ></i>
                            <input type="password" placeholder="Contraseña" name="userPassword"></input>
                        </label>
                    </div>
                    <input type="submit" value="Iniciar Sesión"></input>
                    <div className="alerta-error">Todos los campos son obligatorios</div>
                    <div className="alerta-exito">Te registraste correctamente</div>
                </form>
            </div>
        </div>
    </div>
</div>        
  )
}

export default BodyForm
