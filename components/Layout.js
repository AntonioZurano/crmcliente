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
                    <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5">
                        {children}
                    </main>
                </div>

            </div>
        </>
    );
};



export default Layout;