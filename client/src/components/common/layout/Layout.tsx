import React, { ReactNode } from "react";
import Header from "./Header/Header.tsx";
import Footer from "./Footer.tsx";

const Layout = ({children}:{children:ReactNode}) =>{
    return(
        <>
            <Header/>
            <div id="wrap">
                {children}
            </div>
            <Footer/>
        </>
    )
}
export default Layout