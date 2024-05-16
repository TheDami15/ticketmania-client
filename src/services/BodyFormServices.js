// src/services/BodyFormService.js
const login = async (email, password) => {
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
    return data;
};

const register = async (name, email, password, is_admin=true) => {
    const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, is_admin }),
    });

    if (!response.ok) {
        throw new Error('Error al registrarse');
    }

    const data = await response.json();
    // Automatically log in the user after registration
    await login(email, password);
    return data;
};

export { login, register };
