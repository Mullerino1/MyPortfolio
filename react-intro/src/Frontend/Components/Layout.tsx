import App from "../App"
import Navbar from "./Navbar"
import React from "react"

export default function Layout() {

    return(
    <>
        <header>
        <h1>Portfolio</h1>

        <Navbar />

        </header>
        <main>

        <App />
          

        </main>

        </>
    )
}