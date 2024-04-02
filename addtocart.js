import products from "./api/products.json";
import { displayFinal } from "./finalproduct";
import { LocalStorageData } from "./localstorage";
import { updateCartUI } from "./localstorage";
import { operationsInCart } from "./updateproductsincart";

const fitHere = document.querySelector("#productcontainerii");
let Lsdata = LocalStorageData();

const productTemplate = document.querySelector('#producttemplateii');
let productFound = false;
Lsdata.forEach((storedProduct) => {
    const product = products.find(p => p.id === storedProduct.id);
    if (product) {
        productFound = true;
        const productClone = document.importNode(productTemplate.content, true);
        const { id, name, price, brand, image, stock } = product;

        productClone.querySelector("#cardnumber").setAttribute("id", `cardnumber${id}`);
        productClone.querySelector("#category").textContent = brand;
        productClone.querySelector(".productname").textContent = name;
        productClone.querySelector(".image").src = image;
        productClone.querySelector(".total-quantity").textContent = storedProduct.quantity;
        productClone.querySelector("#current-Price").textContent = `$${storedProduct.totalPrice}`;

        // taking references from the cart.html file 
        productClone.querySelector(".operations").addEventListener("click", (event) => {
            operationsInCart(event, id, price, stock);
        });


        productClone.querySelector(".removebtn").addEventListener("click", () => {
            let Lsdata = LocalStorageData();
            Lsdata = Lsdata.filter((elem) => elem.id != id);
            localStorage.setItem("data", JSON.stringify(Lsdata));
            updateCartUI()
            let removeDiv = document.getElementById(`cardnumber${id}`);
            if (removeDiv) {
                removeDiv.remove();
            }
            displayFinal();
        });
        fitHere.appendChild(productClone);
    };
});
if (!productFound) {
    fitHere.innerHTML = `<h2>Opps! Looks like the cart is empty. Add some products and check this cart again</h2>`;

}
displayFinal();