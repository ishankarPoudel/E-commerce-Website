import { LocalStorageData } from "./localstorage";

export const displayFinal = () => {

    let Lsdata = LocalStorageData();
    let finalprice = Lsdata.reduce((accum, curr) => {
        let output = (curr.totalPrice + accum);
        return output;

    }, 0);

    const subtotal = document.querySelector(".productSubTotal");
    const final = document.querySelector(".productFinalTotal");
    let tax = document.querySelector(".productTax");

    subtotal.textContent = `$ ${finalprice.toFixed(2)}`;
    final.textContent = ` $ ${(finalprice + 18).toFixed(2)}`;
    if (subtotal.textContent == "$ 0.00") {
        tax.textContent = "0.00";
        final.textContent = "0.00";
    };

};