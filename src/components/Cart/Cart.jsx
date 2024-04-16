import CartHeader from "./CartHeader"
import CartProducts from "./CartProducts"
import CartPrice from "./CartPrice"
import Footer from "../Footer";
import "../../App.css";

function Cart({products}) {
    return(
        <body >
            <CartHeader />
            <main className="cart">
                <CartProducts products={products}/>
                <CartPrice cartItems={products}/>
            </main>
            <Footer />
        </body>
    );
}

export default Cart;
