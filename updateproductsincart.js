import { displayFinal } from "./finalproduct";
import { LocalStorageData } from "./localstorage";

export const operationsInCart = (event, id, price, stock) => {
    const currentProduct = document.querySelector(`#cardnumber${id}`);
    const productquantity = currentProduct.querySelector(".total-quantity");
    const productPrice = currentProduct.querySelector("#current-Price");

    let quantity = parseInt(productquantity.textContent);
    let Lsdata = LocalStorageData();
    let existingProduct = Lsdata.find((elem) => elem.id === id);

    if (existingProduct) {
        quantity = existingProduct.quantity;
    }
    if (event.target.className === "btn increasement") {
        if (quantity < stock) {
            quantity += 1;
        } else if (quantity === stock) {
            quantity = stock;
            productquantity.style.color = "red";
            productquantity.style.fontWeight = "bold";
        }

    } else if (event.target.className === "btn decreasement") {
        if (quantity > 1) {
            quantity -= 1;
            productquantity.style.color = "black";
            productquantity.style.fontWeight = "normal";
        }
    }
    productquantity.textContent = quantity;
    productPrice.textContent = `$${(price * quantity).toFixed(2)}`;

    let productIndex = Lsdata.findIndex(product => product.id === id);
    if (productIndex !== -1) {
        Lsdata[productIndex].quantity = quantity;
        Lsdata[productIndex].totalPrice = price * quantity;
    } else {
        Lsdata.push({
            id: id,
            quantity: quantity,
            totalPrice: price * quantity,
        });
    }
    localStorage.setItem("data", JSON.stringify(Lsdata));
    displayFinal();
};