import './styles.css';
import avatar1 from '../../../assets/imgs/Avatar1.svg';
import avatar2 from '../../../assets/imgs/Avatar2.svg';
import avatar3 from '../../../assets/imgs/Avatar3.svg';
import room1 from '../../../assets/imgs/roomcard1.svg';
import room2 from '../../../assets/imgs/roomcard2.svg';
import room3 from '../../../assets/imgs/roomcard3.svg';
import { RatingStars } from 'components/organims/RatingStars/RatingStars';

// COMMENT ALIMENTAR ISSO COM BACKEND

export function UserRatingSection() {
    return (
        <section className="user-rating-section">
            <h1>Compartilhe sua experiência com todos</h1>
            <div className="cards-container">
                <div className="card-user-rating" id="card1">
                    <div className="card-user-information">
                        <img src={avatar1} alt="" />
                        <div className="title-card-user-rating">
                            <h2>Ayumi Hitsuka</h2>
                            <span>Japão</span>
                        </div>
                        <RatingStars readOnly={true} defaultValue={4.5} />
                        <p>
                            “Enquanto fazia o check-out, já estava resevando
                            outro quarto para a próxima viagem! Que lugar
                            maravilhoso, relaxante, todo mundo é cordial e
                            atencioso. Não vejo defeito nenhum no hotel, só nos
                            restaurantes japoneses próximos, nunca ouvi falar de
                            hot roll no Japão, e ...”
                        </p>
                    </div>
                    <img src={room1} alt="" />
                </div>
                <div className="card-user-rating" id="card2">
                    <div className="card-user-information">
                        <img src={avatar2} alt="" />
                        <div className="title-card-user-rating">
                            <h2>Kleber Do Colombia</h2>
                            <span>Brasil</span>
                        </div>
                        <RatingStars readOnly={true} defaultValue={5} />
                        <p>
                            “Eu e meus parças estavamos em 13, e todo mundo se
                            divertiu junto na sala de jogos, coube geral! Até os
                            funcionários deram um migué pra jogar pebolim, e os
                            mano são bala. ‘Mó’ sossego de manhã, só ouvindo as
                            ondas do mar, e de noite o salão de festas com
                            bailão exxtourando... ”
                        </p>
                    </div>
                    <img src={room2} alt="" />
                </div>
                <div className="card-user-rating" id="card3">
                    <div className="card-user-information">
                        <img src={avatar3} alt="" />
                        <div className="title-card-user-rating">
                            <h2>Shizui de la Mandraka</h2>
                            <span>Venezuela</span>
                        </div>
                        <RatingStars readOnly={true} defaultValue={5} />
                        <p>
                            “Minha familia e eu nos divertimos muito, viajamos
                            para aproveitar a cidade e o hotel é tão bom que
                            aproveitamos só ele! Vamos reservar mais quartos de
                            novo para dessa vez para aproveitarmos a cidade.
                            Kkkkkk”
                        </p>
                    </div>
                    <img src={room3} alt="" />
                </div>
            </div>
        </section>
    );
}
