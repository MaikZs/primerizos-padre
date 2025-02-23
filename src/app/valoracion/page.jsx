'use client';

import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Header from '../componentes/header';
import Footer from '../componentes/footer';

const ValoracionPage = () => {
    const [stats, setStats] = useState({
        edadPromedio: 0,
        edadMinima: 0,
        edadMaxima: 0,
        puntajePromedio: 0,
        puntajeMinimo: 0,
        puntajeMaximo: 0,
        distribucionEdad: {},
        distribucionSexo: {},
        totalValoraciones: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'ratings'));
                const ratings = querySnapshot.docs.map(doc => doc.data());
                
                if (ratings.length > 0) {
                    // Cálculos de edad
                    const edades = ratings.map(r => r.edad);
                    const edadPromedio = (edades.reduce((a, b) => a + b, 0) / edades.length).toFixed(1);
                    const edadMinima = Math.min(...edades);
                    const edadMaxima = Math.max(...edades);

                    // Cálculos de puntaje
                    const puntajes = ratings.map(r => r.puntaje);
                    const puntajePromedio = (puntajes.reduce((a, b) => a + b, 0) / puntajes.length).toFixed(1);
                    const puntajeMinimo = Math.min(...puntajes);
                    const puntajeMaximo = Math.max(...puntajes);

                    // Distribución por edad
                    const distribucionEdad = ratings.reduce((acc, curr) => {
                        acc[curr.edad] = (acc[curr.edad] || 0) + 1;
                        return acc;
                    }, {});

                    // Distribución por sexo
                    const distribucionSexo = ratings.reduce((acc, curr) => {
                        acc[curr.sexo] = (acc[curr.sexo] || 0) + 1;
                        return acc;
                    }, {});

                    setStats({
                        edadPromedio,
                        edadMinima,
                        edadMaxima,
                        puntajePromedio,
                        puntajeMinimo,
                        puntajeMaximo,
                        distribucionEdad,
                        distribucionSexo,
                        totalValoraciones: ratings.length,
                    });
                }
            } catch (error) {
                console.error('Error al obtener datos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const StatCard = ({ title, value, subtitle }) => (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-3xl font-bold text-[#FF6FB0] mb-1">{value}</p>
            {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-[#824058] mb-8 text-center">
                    Estadísticas de Valoraciones
                </h1>

                {loading ? (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-600">Cargando estadísticas...</p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {/* Métricas Principales */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatCard 
                                title="Total de Valoraciones"
                                value={stats.totalValoraciones}
                                subtitle="opiniones registradas"
                            />
                            <StatCard 
                                title="Puntaje Promedio"
                                value={stats.puntajePromedio}
                                subtitle={`Rango: ${stats.puntajeMinimo} - ${stats.puntajeMaximo}`}
                            />
                            <StatCard 
                                title="Edad Promedio"
                                value={stats.edadPromedio}
                                subtitle={`Rango: ${stats.edadMinima} - ${stats.edadMaxima}`}
                            />
                        </div>

                        {/* Distribución por Sexo */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Distribución por Sexo
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {Object.entries(stats.distribucionSexo).map(([sexo, cantidad]) => (
                                    <div key={sexo} className="bg-gray-50 rounded p-4">
                                        <p className="text-lg font-semibold text-[#FF6FB0]">{sexo}</p>
                                        <p className="text-2xl font-bold">{cantidad}</p>
                                        <p className="text-sm text-gray-600">personas</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Distribución por Edad */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Distribución por Edad
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {Object.entries(stats.distribucionEdad)
                                    .sort(([a], [b]) => parseInt(a) - parseInt(b))
                                    .map(([edad, cantidad]) => (
                                        <div key={edad} className="bg-gray-50 rounded p-4">
                                            <p className="text-lg font-semibold text-[#FF6FB0]">{edad} años</p>
                                            <p className="text-2xl font-bold">{cantidad}</p>
                                            <p className="text-sm text-gray-600">personas</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default ValoracionPage;