import imgCarrito from './imgCarrito.png';
import './cartWidget.css';

function CartWidget(){
    return(
        <div>
            <img src={imgCarrito} className="carrito" alt="imagen de carrito de compra" />
        </div>
    );
}

export default CartWidget;
