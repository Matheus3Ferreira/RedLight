import { ButtonRedGradient } from 'components/molecules/ButtonRedGradient/ButtonRedGradient';

export function FirstTimeSection() {
    return (
        <div>
            <h1>Sua primeira vez?</h1>
            <p>
                Será a sua primeira vez melhor de todas! Aproveite as condições
                especiais para novos clientes.
            </p>
            <p>
                <span>Cadastre-se</span>
                já e adquira: wi-fi gratis | serviços exclusivos | academia
                gratuita com instrutores
            </p>
            <span>E muito mais!</span>

            <ButtonRedGradient>Cadastrar-se</ButtonRedGradient>
        </div>
    );
}
