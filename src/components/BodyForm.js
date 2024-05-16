import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { login, register } from '../services/BodyFormServices'; // Import the register service

import '../styles/BodyForm.css';

const BodyForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [isLoginActive, setIsLoginActive] = useState(true); // State for managing login/registration form toggle

    const navigate = useNavigate(); // Initialize navigate

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await login(email, password); // Call the login service

            setSuccess('¡Inicio de sesión exitoso!');
            setError(null);

            navigate('/'); // Navigate to the home route
        } catch (error) {
            setError("Error al iniciar sesión");
            setSuccess(null);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await register(name, email, password); // Call the register service

            setSuccess('¡Registro exitoso! Redirigiendo...');
            setError(null);

            navigate('/'); // Navigate to the home route
        } catch (error) {
            setError("Error al crear usuario");
            setSuccess(null);
        }
    };

    const toggleForm = (isLogin) => {
        setIsLoginActive(isLogin);
        setError(null);
        setSuccess(null);
    };

    return (
        <div className='forma'>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <div className={`container-form register ${isLoginActive ? 'hide' : ''}`}>
                <div className="information">
                    <div className="info-childs">
                        <h2>Bienvenido</h2>
                        <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
                        <input type="button" value="Iniciar Sesión" onClick={() => toggleForm(true)}></input>
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
                        <form className="form form-register" onSubmit={handleRegister} noValidate>
                            <div>
                                <label>
                                    <i className='bx bx-user' ></i>
                                    <input type="text" placeholder="Nombre Usuario" value={name} onChange={(e) => setName(e.target.value)} name="userName" required />
                                </label>
                            </div>
                            <div>
                                <label >
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
                            <input type="submit" value="Registrarse" />
                            {/* Mensaje de error */}
                            {error && <div className="alerta-error">{error}</div>}
                            {/* Mensaje de éxito */}
                            {success && <div className="alerta-exito">{success}</div>}
                        </form>
                    </div>
                </div>
            </div>


            <div className={`container-form login ${isLoginActive ? '' : 'hide'}`}>
                <div className="information">
                    <div className="info-childs">
                        <h2>¡¡Bienvenido nuevamente!!</h2>
                        <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
                        <input type="button" value="Registrarse" onClick={() => toggleForm(false)}></input>
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
                            <input type="submit" value="Iniciar Sesión" />
                            {/* Mensaje de error */}
                            {error && <div className="alerta-error">{error}</div>}
                            {/* Mensaje de éxito */}
                            {success && <div className="alerta-exito">{success}</div>}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyForm;
