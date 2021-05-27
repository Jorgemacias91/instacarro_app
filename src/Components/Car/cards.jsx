import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getData from '../../Actions/getData';
import style from './cards.module.css';
import CountDownTimer from '../CountDown/countdown';
import {Link} from 'react-router-dom'

export default function Cart(){

    const dataCar = useSelector(state => state.dataCar)
    const dispath = useDispatch();
    const hoursMinSecs = {hours:1, minutes: 20, seconds: 40}

   useEffect(() => {
    dispath(getData())
   },[])

    return (
        <div className={style.movil}>
      <div className={style.container}>
        {dataCar && dataCar.map((elem) => (

          <div className={style.card} key={elem.id}>
            <figure>
            <img src={elem.imageUrl} className={style.imagen} />
            <Link to="/detalhes">
            <figcaption>Ver detalhes</figcaption>
            </Link>
            </figure>
            <div className={style.timeOfert}>
                <div>
                    <p className={style.text}>TEMPO RESTANTE</p>
                    <h3 className={style.timeCor}><CountDownTimer hoursMinSecs={hoursMinSecs}/></h3>
                </div>
                <div>
                    <p className={style.text}>ULTIMA OFERTA</p>
                    <h3 className={style.ofertCor}>R${elem.bids[0] && elem.bids[0].amount}</h3>
                </div>
            </div>
            <hr className={style.line}></hr>
            <div>
              <p className={style.description}>{`${elem.make} ${elem.version} ${elem.year} MODELO ${elem.model}`}</p>
            </div>
            <hr className={style.line}></hr>
            <div className={style.yearKm}>
              <div>
                  <p className={style.text}>{elem.year}</p>
              </div>
              <div>
                  <p className={style.text}>{elem.km} Km</p>
              </div>
            </div>
            <div className={style.divBtn}>
            <hr className={style.line}></hr>
            <button className={style.btn}>Ofertar</button>
            </div>
            
          </div>

        ))}
     
      </div>
</div>
    )
}