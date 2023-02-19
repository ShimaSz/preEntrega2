import React, { useEffect, useState } from "react";
import Listado from "../listado";
import ItemList from './ItemList';

function ItemListContainer(){
    const listado = [
        {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
            "albumId": 1,
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "url": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
            "albumId": 1,
            "id": 3,
            "title": "officia porro iure quia iusto qui ipsa ut modi",
            "url": "https://via.placeholder.com/600/24f355",
            "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
        {
            "albumId": 1,
            "id": 4,
            "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
            "url": "https://via.placeholder.com/600/d32776",
            "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        },
        {
            "albumId": 1,
            "id": 5,
            "title": "natus nisi omnis corporis facere molestiae rerum in",
            "url": "https://via.placeholder.com/600/f66b97",
            "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
        },
        {
            "albumId": 1,
            "id": 6,
            "title": "accusamus ea aliquid et amet sequi nemo",
            "url": "https://via.placeholder.com/600/56a8c2",
            "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
        },
        {
            "albumId": 1,
            "id": 7,
            "title": "officia delectus consequatur vero aut veniam explicabo molestias",
            "url": "https://via.placeholder.com/600/b0f7cc",
            "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
        },
        {
            "albumId": 1,
            "id": 8,
            "title": "aut porro officiis laborum odit ea laudantium corporis",
            "url": "https://via.placeholder.com/600/54176f",
            "thumbnailUrl": "https://via.placeholder.com/150/54176f"
        }
    ];


    const [datos, setData] = useState([]);
/*
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        //fetch("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.json())
        .then((datos) => setData(datos));
        //.then((datos) => setData(datos.filter(f => f.id <= 10)));
    },[]);*/
    /*
    useEffect(() => {
        const getData = new Promise (res => {
            setTimeout(() => {
                res(Listado)
            }, 2000)
        });
        getData.then(res => setData(res));
        
    },[]);*/

    useEffect(() => {
        /*
        fetch("https://www.omdbapi.com/?apikey=7da6b168&s=all")
        .then((res) => res.json())
        .then((datos) => setData(datos));
        */
        setData(listado);

    },[]);

    console.log("1 " + listado);

    return(
        
        <div>
            {datos.map((d) => (
                <ItemList data={d} key={d.id} />
            ))}
        </div>
        


        /*<div>
            hola
            {
                
                
                !datos ? (<div>Cargando...</div>) : (<div>{datos.map((d) => (<ItemList data={d}  key={d.imdbID} />))}</div>)
                
            }

            
            
        </div>*/
    )
}

export default ItemListContainer;
