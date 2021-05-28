import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getData from "../../Actions/getData";
import Card from "../Card/card.jsx";
import style from "./cards.module.css";

export default function Cards() {
    //os dados armazenados no estado redux são obtidos
    const dataCar = useSelector((state) => state.dataCar);
    const dispatch = useDispatch();
    //passamos a ter nossa ação ativa toda vez que o site é reiniciado
    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    return (
        //os dados são mapeados
        <div className={style.container}>
            {dataCar && dataCar.map((elem) => <Card props={elem} />)}
        </div>
    );
}