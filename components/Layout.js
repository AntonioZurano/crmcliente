import React from 'react';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>CRM - Administración de Clientes</title>
            </Head>

            <div className="bg-gray-200 min-h-screen">
                <div className="flex min-h-screen">
                    <Sidebar />

                    {children}
                </div>

            </div>
        </>
    );
};



export default Layout;