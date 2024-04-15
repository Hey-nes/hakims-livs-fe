import React from "react";

function CartPrice() {
    return(
        <div className="price-cont">
            <div className="order-cont">
                <div className="order-cont-span">
                    <span>Summar varor</span>
                    <span>123,56 kr</span>
                </div>
                <div className="order-cont-span">
                    <span>Leverans</span>
                    <span>12,56 kr</span>
                </div>
            </div>
            <hr />
            <div>
                <div className="order-cont-span">
                    <h2>Totalsumma</h2>
                    <span>457,89 kr</span>
                </div>
                <div className="order-cont-span">
                    <span>Moms(12%)</span>
                    <span>50,12 kr</span>
                </div>
                <div className="order-cont-span">
                    <span>Sparat mot normalpris</span>
                    <span>(-69%)100 kr</span>
                </div>
            </div>
            <div>
                <button>Lägg till en rabbattkod</button>
            </div>
        </div>
    )
}

export default CartPrice;