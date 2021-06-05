import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    //Recibe Dos Argumentos,
    //1.- una función  que es la función a ejecutar
    //2.- Un arreglo de dependencias, si se envia un arreglo vacio, la función solo se ejecuta una vez.
    useEffect( () => {
        getGifs( category )
            .then( imgs => {

                setTimeout( () => {
                    setState({
                        data: imgs,
                        loading: false,
                    })
                }, 3000)

            } );
    }, [ category ]); 


    return state; //{ data: [], loading: true }

}
