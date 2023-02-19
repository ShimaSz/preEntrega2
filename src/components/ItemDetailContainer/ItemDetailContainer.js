import React, { useEffect, useState } from "react";

function ItemDetailContainer({id}){
    const [dato, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => res.json())
        .then((datos) => setData(datos.filter(f => f.id === id)));
    },[]);

    console.log(dato);

    return(
        <div>
            {dato}
        </div>
    )
}

export default ItemDetailContainer;
