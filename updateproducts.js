export const updateproducts = (event, id, stock) => {
    const currentProduct = document.querySelector(`#cardnumber${id}`);
    const productquantity = currentProduct.querySelector(".total-quantity");

    let qunatity = parseInt(productquantity.getAttribute("data-qunatity")) || 1;
    if (event.target.className === "btn increasement") {
        if (qunatity < stock) {
            qunatity = qunatity + 1;
        } else if (qunatity === stock) {
            qunatity = stock;
            productquantity.style.color = "red";
            productquantity.style.fontWeight = "bold";

        }
    }
    if (event.target.className === "btn decreasement") {
        if (qunatity > 1) {
            qunatity = qunatity - 1;
            productquantity.style.color = "black";
            productquantity.style.fontWeight = "normal";
        }
    }
    productquantity.textContent = qunatity;
    productquantity.setAttribute("data-qunatity", qunatity);
    return qunatity;
};