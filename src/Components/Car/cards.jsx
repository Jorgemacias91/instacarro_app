import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getData from '../../Actions/getData'
import style from './cards.module.css'
//import Countdown from '../CountDown/countdown.jsx'

export default function Cart(){

    const dataCar = useSelector(state => state.dataCar)
    const dispath = useDispatch();
   // console.log("getdata", getData)

   useEffect(() => {
    dispath(getData())
   },[])

    return (
        <div className={style.movil}>
      <div className={style.container}>
        {dataCar && dataCar.map((elem) => (

          <div className={style.card} key={elem.id}>

            <img src={elem.imageUrl} className={style.imagen} />
            <div className={style.timeOfert}>
                <div>
                    <p>TEMPO RESTANTE</p>
                    {/* <Countdown/> */}
                </div>
                <div>
                    <p>ULTIMA OFERTA</p>
                    <h3>R$ {elem.bids[0] && elem.bids[0].amount}</h3>
                </div>
            </div>
            <button >Ofertar</button>
          </div>

        ))}
     
      </div>
</div>
    )
}