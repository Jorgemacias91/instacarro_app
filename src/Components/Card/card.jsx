import React, { useState, useEffect } from "react";
import style from "./card.module.css";
import CountDownTimer from "../CountDown/countdown";
import { Link } from "react-router-dom";

export default function Card({ props }) {
    //um status é criado para o preço e eu o defino como 0 por padrão
    const [price, setPrice] = useState(0);
    useEffect(() => {
        //Se não houver oferta anterior, o status é padrão (0)
        if (props.bids.length) {
            setPrice(props.bids[props.bids.length - 1].amount);
        }
    }, [props.bids]);
    // função que permite a adição dos 250 reais
    function handleOffer() {
        setPrice(parseInt(price) + 250);
    }
    return (
        // A estrutura do componente do cartão é criada
        <div className={style.card} key={props.id}>
            <figure>
                <img
                    src={props.imageUrl}
                    className={style.imagen}
                    alt={props.model + "_(imagen)"}
                />
                <Link to="/detalhes">
                    <figcaption>Ver detalhes</figcaption>
                </Link>
            </figure>

            <div className={style.timeOfert}>
                <div>
                    <p className={style.text}>TEMPO RESTANTE</p>
                    <h3 className={style.timeCor}>
                        <CountDownTimer
                            hoursMinSecs={
                                new Date(Date.now() + props.remainingTime)
                            }
                        />
                    </h3>
                </div>
                <div>
                    <p className={style.text}>ULTIMA OFERTA</p>
                    <h3 className={style.ofertCor}>R${price}</h3>
                </div>
            </div>

            <hr className={style.line}></hr>
            <div>
                <p
                    className={style.description}
                >{`${props.make} ${props.version} ${props.year} MODELO ${props.model}`}</p>
            </div>
            <hr className={style.line}></hr>
            <div className={style.yearKm}>
                <div>
                    <p className={style.text}>{props.year}</p>
                </div>
                <div>
                    <p className={style.text}>{props.km} Km</p>
                </div>
            </div>
            <div className={style.divBtn}>
                <hr className={style.line}></hr>
                <button className={style.btn} onClick={handleOffer}>
                    Ofertar
                </button>
            </div>
        </div>
    );
}