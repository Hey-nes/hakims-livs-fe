import CartHeader from "./CartHeader"
import CartProducts from "./CartProducts"
import CartPrice from "./CartPrice"
import "../../App.css";

function Cart() {
    return(
        <body>
            <CartHeader />
            <main className="cart">
                <CartProducts />
                <CartPrice />
            </main>
        </body>
    );
}

export default Cart;
