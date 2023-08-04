import React from 'react';
import Layout from '../components/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const NuevaCuenta = () => {


    // Formulario y validación con formik y Yup
    const formik = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                .required('El nombre es obligatorio'),
            apellido: Yup.string()
                .required('El apellido es obligatorio'),
            email: Yup.string()
                .email('El email no es válido')
                .required('El email es obligatorio'),
            password: Yup.string()
                .required('El password no puede ir vacío')
                .min(6, 'El password debe ser de al menos 6 caracteres')
        }),
        onSubmit: valores => {
            console.log(valores);
        }
    });

    return (

        <>

            <Layout>
                <h1 className="text-center text-2xl text-white font-light">Crear Nueva Cuenta</h1>

                <div className="flex justify-center mt-5">
                    <div className="w-full max-w-sm">
                        <form
                            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                            onSubmit={formik.handleSubmit}
                            
                        >
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="nombre"
                                >Nombre</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Nombre Usuario"
                                    value={formik.values.nombre}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="apellido"
                                >Nombre</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="apellido"
                                    type="text"
                                    placeholder="Apellidos Usuario"
                                    value={formik.values.apellido}
                                    onChange={formik.handleChange}
                                />
                            </div>                            
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="email"
                                >Email</label>
                                <input
                                    type="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    placeholder="Email Usuario"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="password"
                                >Password</label>
                                <input
                                    type="password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    placeholder="Password Usuario"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <input
                                type="submit"
                                className="bg-gray-800 w-full mt-5 p-2 text-white hover:bg-gray-900"
                                value="Crear Cuenta"
                            />
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default NuevaCuenta;