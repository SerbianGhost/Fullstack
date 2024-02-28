import React, { ReactNode } from "react";
import Header from "./components/common/Header/Header.tsx";
import Footer from "./components/common/Footer.tsx";

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