import { Button } from "bootstrap";
import {useState} from "react";

const Contador = ({estado, max}) => {
    const[cuenta, setCuenta] = useState(estado);

    const Sumar = () => {
        const totNuevo = cuenta + 1;

        if(totNuevo < max){
            setCuenta(totNuevo);
        }
    }

    const Resta = () => {
        const totNuevo = cuenta - 1;

        if(totNuevo >= 0){
            setCuenta(totNuevo);
        }
    }

    return(
        <div>
            <Button onClic={Sumar} >+</Button>
            <Button onClic={Resta} >-</Button>
            <p>{cuenta}</p>
        </div>
    )
}