import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getData from '../../Actions/getData';
import Card from '../Card/card.jsx'
import style from './cards.module.css'

export default function Cards(){

    const dataCar = useSelector(state => state.dataCar)
    const dispatch = useDispatch();

    const [value, setValue] = useState();

   useEffect(() => {
    dispatch(getData());
   },[])


    return (
        <div className={style.container}>
            {dataCar && dataCar.map((elem)=>{
                <Card props = {elem}/> }
                )
            }
        </div>
    )
}