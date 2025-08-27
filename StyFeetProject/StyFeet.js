// Select elements
const wrapper = document.querySelector(".sliderWrapper");
const shoeItems = document.querySelectorAll(".shoes li");

// Product data
const products = [
    {
        id: 1,
        title: "Model 1",
        price: 199,
        colors: [
            { code: "black", img: "./img/air.png" },
            { code: "darkblue", img: "./img/air.png" },
        ],
    },
    {
        id: 2,
        title: "Model 2",
        price: 249,
        colors: [
            { code: "gray", img: "./img/air2.png" },
            { code: "lightolivegreen", img: "./img/air2.png" },
        ],
    },
    {
        id: 3,
        title: "Model 3",
        price: 179,
        colors: [
            { code: "blue", img: "./img/jordan.png" },
            { code: "orange", img: "./img/jordan.png" },
        ],
    },
    {
        id: 4,
        title: "Model 4",
        price: 159,
        colors: [
            { code: "white", img: "./img/jordan2.png" },
            { code: "pink", img: "./img/jordan2.png" },
        ],
    },
    {
        id: 5,
        title: "Model 5",
        price: 299,
        colors: [
            { code: "gray", img: "./img/crater.png" },
            { code: "black", img: "./img/crater.png" },
        ],
    },
    {
        id: 6,
        title: "Model 6",
        price: 279,
        colors: [
            { code: "yellow", img: "./img/crater2.png" },
            { code: "lightolivegreen", img: "./img/crater2.png" },
        ],
    },
    {
        id: 7,
        title: "Model 7",
        price: 219,
        colors: [
            { code: "gray", img: "./img/hippie.png" },
            { code: "red", img: "./img/hippie.png" },
        ],
    },
    {
        id: 8,
        title: "Model 8",
        price: 189,
        colors: [
            { code: "white", img: "./img/hippie2.png" },
            { code: "black", img: "./img/hippie2s.png" },
        ],
    },
];

// Default product
let choosenProduct = products[0];

// DOM references for product details
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Shoe navigation (slider)
shoeItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Slide animation
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        wrapper.style.transition = "all 0.5s ease";

        // Update chosen product
        choosenProduct = products[index];

        // Update details
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // Update available colors
        currentProductColors.forEach((color, i) => {
            if (choosenProduct.colors[i]) {
                color.style.backgroundColor = choosenProduct.colors[i].code;
                color.style.display = "inline-block";
            } else {
                color.style.display = "none"; // Hide unused colors
            }
        });
    });
});

// Color change functionality
currentProductColors.forEach((color, i) => {
    color.addEventListener("click", () => {
        if (choosenProduct.colors[i]) {
            currentProductImg.src = choosenProduct.colors[i].img;
        }
    });
});

// Size selection functionality
currentProductSizes.forEach((size) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((s) => {
            s.style.backgroundColor = "white";
            s.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

// Set default product on page load
window.addEventListener("load", () => {
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, i) => {
        if (choosenProduct.colors[i]) {
            color.style.backgroundColor = choosenProduct.colors[i].code;
            color.style.display = "inline-block";
        } else {
            color.style.display = "none";
        }
    });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})
