import { addToLocalStorage } from "./localstorage";
import { updateproducts } from "./updateproducts";

const productContainer = document.querySelector("#productcontainer");
const productTemplate = document.querySelector("#producttemplate");


export const renderProducts = (products) => {
    if (!products || !productTemplate) {
        return false;
    }
    products.forEach((currelem) => {

        const { id, name, description, stock, price, brand, image } = currelem;
        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector("#cardnumber").setAttribute("id", `cardnumber${id}`);
        productClone.querySelector("#category").textContent = brand;
        productClone.querySelector(".productname").textContent = name;
        productClone.querySelector(".des").textContent = description;
        productClone.querySelector("#current-Price").textContent = `$${price}`;
        productClone.querySelector("#actual-Price").textContent = `| was $${price *4}`;
        productClone.querySelector(".image").src = image;
        productClone.querySelector(".stock").textContent = `Total stocks available: ${stock}`;
        const addtocartbtn = productClone.querySelector(".addtocartbtn");

        //adding event listener to increasement and decreasement //used event delegation mechanism
        productClone.querySelector(".operations").addEventListener('click', (event) => {
            updateproducts(event, id, stock);
        });
        productClone.querySelector(".addtocart").addEventListener('click', () => {
            addToLocalStorage(id, price, stock, products);
        });

        //chnaging the text of addtocartbutton once it clicked by the user
        addtocartbtn.addEventListener('click', () => {
            addtocartbtn.textContent = "☑️ Added To Cart!";
            setTimeout(() => {
                addtocartbtn.innerHTML = `<i class="fa-solid fa-cart-arrow-down"> </i>Add to Cart`;
            }, 2000);
        })
        productContainer.append(productClone);
    });
};