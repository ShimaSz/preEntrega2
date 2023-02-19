import {Link} from "react-router-dom";

const ItemList = ({data}) => {
    //console.log({title});
    //console.log({url});
    return(
    <div>
        <Link to={`./ItemDetailContainer/${data.id}`} >
            <p>{data.title}</p>
            <img src={data.url} alt="imagen" />
        </Link>
    </div>
    )
}

export default ItemList;