import React, { useState, useEffect  } from 'react';

import '../styles/BodyForm.css';
const BodyForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [isLoginActive, setIsLoginActive] = useState(true); // State for managing login/registration form toggle

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Error al iniciar sesión');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token); // Guardar el token en el almacenamiento local

            // Realizar acciones adicionales, como redirigir al usuario a otra página
            setSuccess(true);
            setError(null); // Resetear cualquier mensaje de error anterior
            alert("funcionó"); 
        } catch (error) {
            setError("Error al iniciar sesión");
            setSuccess(false); // Resetear el estado de éxito
        }
    };
    useEffect(() => {
        console.log("Error: ", error); // Log the value of 'success' after it has been updated
    }, [success]); // Run this effect whenever 'success' changes
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
                        <form className="form form-login" onSubmit={handleLogin} noValidate>
                            <div>
                                <label>
                                    <i className='bx bx-envelope' ></i>
                                    <input type="email" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} name="userEmail" required />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <i className='bx bx-lock-alt' ></i>
                                    <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} name="userPassword" required />
                                </label>
                            </div>
                            {/* Mensaje de error */}
                            {error && <div className="alerta-error">{error}</div>}
                            {/* Mensaje de éxito */}
                            {success && <div className="alerta-exito">¡Inicio de sesión exitoso!</div>}

                            <input type="submit" value="Iniciar Sesión" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyForm
