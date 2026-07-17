import "./MainLayout.css";

import type { ReactNode } from "react";

import Header from "../Header/Header"

import Container from "../Container/Container";

interface Props{

    children:ReactNode;

}

export default function MainLayout({

    children

}:Props){

    return(

        <>

            <Header/>

            <main>

                <Container>

                    {children}

                </Container>

            </main>

        </>

    )

}