import React from "react"
// import Navbar from "./Navbar"
// import Title from "./Title"
import type { PropsWithChildren } from "react"
// import Footer from "./Footer"


type LayoutProps =  PropsWithChildren

export default function Layout(props: LayoutProps) {
    const { children } = props

    return(
    <>
    <header>
    {/* <Title title={"Mullerinos Portfolio"} /> */}
        {/* <Navbar/> */}
        
    </header>
     
        <main className="container">

        {children}
          

        </main>
        {/* <Footer /> */}

        </>
    )
}