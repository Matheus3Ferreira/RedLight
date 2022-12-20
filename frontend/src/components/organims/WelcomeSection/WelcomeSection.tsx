import './styles.css';

export function WelcomeSection() {
    return (
        <section className="welcome-container">
            <img
                src="https://pizarromoveis.com.br/images/images/quartos-de-hotel-feitos-com-moveis-planejados.png"
                alt=""
                className="background-welcome-container"
            />
            <div className="left-welcome-container">
                <h1 className="">
                    Rapido para
                    <br />
                    fazer a reserva
                </h1>
                <h2>
                    Facil de chegar
                    <br />
                    Dificil de deixar
                </h2>
                <p>
                    Aproveite os quartos com desconto e economize
                    <br />
                    até 40% no PIX.
                </p>
                <button>Saiba mais</button>
            </div>
        </section>
    );
}
