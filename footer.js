document.addEventListener('DOMContentLoaded', () => {




    const footerContent = `<hr class="mt-5">
<div class="row mt-5 p-4">
    <div class="col-lg-3">
        <span class="fw-medium">Poudel Estore, <span class="fw-light">your ultimate destination for cutting-edge gadgets with exclusive discounts and benefits. Hurry Up!!!</span></span><br>
        <div class="footer-icons d-flex justify-content-evenly mt-3">
        <a href="https://twitter.com/_Shankar_Poudel" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-twitter fs-4"></i>
        </a>
        <a href="https://www.facebook.com/shankarpoudeldrew" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-facebook fs-4 "></i>
        </a>
        <a href="https://github.com/ishankarPoudel" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-github fs-4 "></i>
        </a>
        <a href="https://www.linkedin.com/in/shankar-s-597224191/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin fs-4 "></i>
        </a>
    </div>
    
    </div>
    <div class="col-lg-3 ">
        Poudel E-store
        <ul class="quicklinks p-2 text-left d-flex align-items-center ">
            <span class=""> <li>Laptop</li>
            <li>Accessories</li>
            <li>Sales & Discount</li>
            <li>Computer Store</li>
            <li>Mobile Store</li>
            </span>
        </ul>
    </div>
    <div class="col-lg-3">
        Experince
        <ul class="quicklinks p-2 text-left d-flex align-items-center ">
            <span class=""> <li>Contact us</li>
            <li>Payment method</li>
            <li>Delivery Service</li>
            <li>Return and Exchange</li>
            <li>Customer Support</li>
            </span>
        </ul>
    </div>
    <div class="col-lg-3">
        Subscribe
        <p class="mt-2">Be the first to know about new arrivals, sales & promos!</p>
        <input type="email" class="form-control mb-2" placeholder="poudel@estore.com" name="email" aria-label="Subscribe form" id="exampleInputEmail3" required="">
        <button type="submit" class="btn  btn-block p-2 w-100 mt-2 "><span>Subscribe</span></button>
    </div>
    <hr class="mt-5">
    <p class="text-center">Design and code by <a href="http://www.sharmashankar.com.np">  Shankar Poudel</a></p>
</div>`;



    // // handling meet memebrs bahvaiors

    // const closeButton = document.querySelector(".close");
    // const teamBtn = document.querySelector("#meetteambtn");
    // const mainTeam = document.querySelector(".mainteam");


    // teamBtn.addEventListener("click", () => {
    //     mainTeam.style.display = "block";

    // });
    // closeButton.addEventListener("click", () => {
    //     mainTeam.style.display = "none";

    // });




    const footer = document.querySelector(".footerhere");
    footer.innerHTML = footerContent;



});