import React from "react"
import Navbar from "./Navbar"
import Title from "./Title"

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {

    return(
    <>
    <header>
    <Title title={"Mullerinos Portfolio"} />
        <Navbar/>
    </header>
     
        <main>

        {children}
          

        </main>

        </>
    )
}