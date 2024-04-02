export const addToLocalStorage = (id) => {
    const currentElement = document.querySelector(`#cardnumber${id}`);
    const productQuantity = parseInt(currentElement.querySelector(".total-quantity").textContent);
    const currentPrice = parseInt(currentElement.querySelector("#current-Price").textContent.replace('$', ''));

    const totalPrice = currentPrice * productQuantity;

    let storedData = localStorage.getItem("data");
    let data = storedData ? JSON.parse(storedData) : [];
    let productIndex = data.findIndex(product => product.id === id);
    if (productIndex !== -1) {
        const previousQuantity = data[productIndex].quantity;
        const previousTotalPrice = data[productIndex].totalPrice;
        const newTotalPrice = previousTotalPrice + totalPrice;
        data[productIndex].quantity += productQuantity;
        data[productIndex].totalPrice += newTotalPrice;
    } else {
        data.push({
            id: id,
            quantity: productQuantity,
            totalPrice: totalPrice,

        });
    }
    localStorage.setItem("data", JSON.stringify(data));
    updateCartUI();
}
export const LocalStorageData = () => {
        let storedData = localStorage.getItem("data");
        // console.log(storedData);
        let data = storedData ? JSON.parse(storedData) : [];
        return data;
    }
    // Function to directly update the UI based on the localStorage data
export function updateCartUI() {
    let storedData = localStorage.getItem("data");
    let data = storedData ? JSON.parse(storedData) : [];

    const cart = document.querySelector(".fw-bolder");
    let itemCount = data.length;
    cart.textContent = itemCount;
}
document.addEventListener('DOMContentLoaded', updateCartUI);