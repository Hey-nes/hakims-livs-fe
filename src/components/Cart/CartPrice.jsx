import React from "react";

function CartPrice({ cartItems }) {
    const sum = cartItems.reduce((total, item) => total + item.price, 0);
    let shipping = sum >= 750 ? 0 : 59;
    const totSum = sum + shipping;

    const tax = totSum * 0.12;
    const roundedTax = tax.toFixed(1);

    const saved = totSum * 1.5;

    const percent = (saved / (saved + totSum)) * 100;
    const roundedPercent = percent.toFixed(1);

    return (
        <div className="price-cont">
            <div className="order-cont">
                <div className="order-cont-span">
                    <span>Summar varor</span>
                    <span>{sum} kr</span>
                </div>
                <div className="order-cont-span">
                    <span>Leverans</span>
                    <span>{shipping} kr</span>
                </div>
            </div>
            <hr />
            <div>
                <div className="order-cont-span">
                    <h2>Totalsumma</h2>
                    <span>{totSum} kr</span>
                </div>
                <div className="order-cont-span">
                    <span>Moms (12%)</span>
                    <span>{roundedTax} kr</span>
                </div>
                <div className="order-cont-span">
                    <span className="saved-price saved-price-num">Sparat mot normalpris</span>
                    <span className="saved-price-num">{roundedPercent}% {saved.toFixed(1)} kr</span>
                </div>
            </div>
            <div>
                <button>Lägg till en rabattkod</button>
            </div>
        </div>
    );
}

export default CartPrice;
