import "./Header.css";

import Container from "../Container/Container";

export default function Header(){

    return(

        <header className="header">

            <Container>

                <div className="header__content">

                    <h1>🧉 MateHub</h1>

                    <div className="header__profile">

                        <span>Nivel 1</span>

                        <img
                            src="https://placehold.co/40"
                            alt="Avatar"
                        />

                    </div>

                </div>

            </Container>

        </header>

    )

}