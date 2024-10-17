import React from "react"
// import Title from "./Title"
import type { PropsWithChildren } from "react"
// import Footer from "./Footer"


type DirectionProps =  PropsWithChildren

export default function Direction(props: DirectionProps) {
    const { children } = props

    return(
    <>
     
        <figcaption className="container">

        {children}
          

        </figcaption>
        {/* <Footer /> */}

        </>
    )
}