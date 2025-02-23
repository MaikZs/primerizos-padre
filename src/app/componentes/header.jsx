'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Importamos directamente la instancia de Firestore

const Header = () => {
    const [user, setUser] = useState(null);
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        edad: '',
        sexo: '',
        puntaje: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const userName = localStorage.getItem('userName');
        if (userName) {
            setUser({
                name: userName,
                initial: userName.charAt(0).toUpperCase()
            });
        }
    }, []);

    useEffect(() => {
        if (user && showRatingModal) {
            setFormData(prev => ({
                ...prev,
                nombre: user.name
            }));
        }
    }, [showRatingModal, user]);

    const handleSignOut = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userPhoto');
        setUser(null);
        window.location.href = '/';
    };

    const validateForm = () => {
        const errors = {};
        
        if (!formData.nombre || formData.nombre.length < 2) {
            errors.nombre = 'El nombre debe tener al menos 2 caracteres';
        }
        
        const edad = parseInt(formData.edad);
        if (!formData.edad || isNaN(edad) || edad <= 18 || edad === 0) {
            errors.edad = 'La edad debe ser un número mayor a 18';
        }
        
        const puntaje = parseInt(formData.puntaje);
        if (!formData.puntaje || isNaN(puntaje) || puntaje < 1 || puntaje > 7) {
            errors.puntaje = 'El puntaje debe ser un número entre 1 y 7';
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        
        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            try {
                // Preparar los datos para Firestore
                const ratingData = {
                    ...formData,
                    timestamp: new Date(),
                    edad: parseInt(formData.edad),
                    puntaje: parseInt(formData.puntaje)
                };

                // Guardar en Firestore
                await addDoc(collection(db, 'ratings'), ratingData);
                
                // Limpiar el formulario y cerrar el modal
                setShowRatingModal(false);
                setFormData({ nombre: '', edad: '', sexo: '', puntaje: '' });
                alert('¡Gracias por tu calificación!');
            } catch (error) {
                console.error('Error detallado:', {
                    message: error.message,
                    code: error.code,
                    stack: error.stack
                });
                alert(`Error al guardar: ${error.message}. Por favor, verifica la conexión a Firestore.`);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setFormErrors(errors);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (
        <header className="w-full px-8 py-6 bg-white shadow-lg">
            <nav className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left Section */}
                <div className="flex space-x-6">
    <Link href="/" className="text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110">
        INICIO
    </Link>
    <Link href="/modulos" className="text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110">
        MODULOS
    </Link>
    <Link href="/valoracion" className="text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110">
        VALORACIÓN
    </Link>
</div>

                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/inicio/logo.png"
                        alt="Baby Life"
                        width={128}
                        height={128}
                        quality={100}
                        className="h-16 w-auto"
                    />
                </Link>

                {/* Right Section */}
                <div className="flex space-x-6 items-center">
                    <Link href="/consejosRapidos" className="text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110">
                        CONSEJO RÁPIDO
                    </Link>
                    <Link href="/contacto" className="text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110">
                        CONTACTO
                    </Link>

                    <button
                        onClick={() => setShowRatingModal(true)}
                        className="bg-[#FF6FB0] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#e55a9d] transition-all duration-300"
                    >
                        Calificar App
                    </button>

                    {!user ? (
                        <Link
                            href="/login"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            LOGIN
                        </Link>
                    ) : (
                        <div className="relative group">
                            <button className="w-10 h-10 rounded-full bg-[#FF6FB0] text-white flex items-center justify-center text-lg font-semibold hover:bg-[#e55a9d] transition-colors">
                                {user.initial}
                            </button>
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <div className="py-1">
                                    <p className="px-4 py-2 text-sm text-gray-700 border-b">
                                        {user.name}
                                    </p>
                                    <button
                                        onClick={handleSignOut}
                                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                    >
                                        Cerrar Sesión
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Modal de Calificación */}
            {showRatingModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full">
                        <h2 className="text-2xl font-bold text-[#824058] mb-6">Califique la aplicación</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-2">Nombre *</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-md p-2"
                                    placeholder="Ingrese su nombre"
                                    disabled={isSubmitting}
                                />
                                {formErrors.nombre && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.nombre}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Edad *</label>
                                <input
                                    type="number"
                                    name="edad"
                                    value={formData.edad}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-md p-2"
                                    placeholder="Ingrese su edad"
                                    disabled={isSubmitting}
                                />
                                {formErrors.edad && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.edad}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Sexo</label>
                                <div className="flex space-x-4">
                                    {['Masculino', 'Femenino', 'Otro'].map((option) => (
                                        <label key={option} className="flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                name="sexo"
                                                value={option}
                                                checked={formData.sexo === option}
                                                onChange={handleInputChange}
                                                className="text-[#FF6FB0]"
                                                disabled={isSubmitting}
                                            />
                                            <span>{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Puntaje (1-7) *</label>
                                <input
                                    type="number"
                                    name="puntaje"
                                    value={formData.puntaje}
                                    onChange={handleInputChange}
                                    min="1"
                                    max="7"
                                    className="w-full border rounded-md p-2"
                                    placeholder="Ingrese un puntaje del 1 al 7"
                                    disabled={isSubmitting}
                                />
                                {formErrors.puntaje && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.puntaje}</p>
                                )}
                            </div>

                            <div className="flex justify-end space-x-4 mt-6">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowRatingModal(false);
                                        setFormData({ nombre: '', edad: '', sexo: '', puntaje: '' });
                                        setFormErrors({});
                                    }}
                                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                                    disabled={isSubmitting}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#FF6FB0] text-white rounded-md hover:bg-[#e55a9d] transition-colors disabled:opacity-50"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;