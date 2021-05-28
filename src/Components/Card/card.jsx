import React from 'react';
import style from './card.module.css';
import CountDownTimer from '../CountDown/countdown';
import {Link} from 'react-router-dom'

export default function Card({props}){
    console.log("kkkkkkkkk")

    return (
      <div>

      </div>

//           <div className={style.card} key={props.id}>

//             <figure>
//             <img src={props.imageUrl} className={style.imagen} />
//             <Link to="/detalhes">
//             <figcaption>Ver detalhes</figcaption>
//             </Link>
//             </figure>

//             <div className={style.timeOfert}>
//                 <div>
//                     <p className={style.text}>TEMPO RESTANTE</p>
//                     <h3 className={style.timeCor}><CountDownTimer
//                       hoursMinSecs={new Date(Date.now() + props.remainingTime)}
//                     /></h3>
//                 </div>
//                 <div>
//                     <p className={style.text}>ULTIMA OFERTA</p>
//                     <h3 className={style.ofertCor}></h3>
//                 </div>
//             </div>

//             <hr className={style.line}></hr>
//             <div>
//               <p className={style.description}>{`${props.make} ${props.version} ${props.year} MODELO ${props.model}`}</p>
//             </div>
//             <hr className={style.line}></hr>
//             <div className={style.yearKm}>
//               <div>
//                   <p className={style.text}>{props.year}</p>
//               </div>
//               <div>
//                   <p className={style.text}>{props.km} Km</p>
//               </div>
//             </div>
//             <div className={style.divBtn}>
//             <hr className={style.line}></hr>
//             <button className={style.btn} onClick={props.onclick}>Ofertar</button>
//             </div>
            
// </div>
    )
}