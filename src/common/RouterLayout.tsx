//Este componente permitira al mismo nivel todas las paginas que queramos renderizar

import React from "react";
import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";


//El outlet es un componente de react-router
//Con esta es la ruta de Layout para el render
export const RouterLayout: React.FC<{}> = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}