// import Title from "./Title"
import Navbar from "./Nav"
import React from "react"
//import MovieCard from "./MovieCard"
import MyForm from "./Projects"

export default function Layout(){

    return(
        <>
        <header>
            <Navbar/> 
        </header>
       
        <main>
            <MyForm />

            {/* {children} */}
        
        </main>
        </>
    )
}
