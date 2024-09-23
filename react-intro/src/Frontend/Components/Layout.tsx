import App from "../App"
import Navbar from "./Navbar"
import React from "react"

export default function Layout({children}) {

    return(
    <>
        <header>
        <h1>Portfolio</h1>

        <Navbar />

        </header>
        <main>

        
            {children}

        </main>

        </>
    )
}