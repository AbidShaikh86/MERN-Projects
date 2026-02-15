const serviceData = [
    {
        id: 1,
        name: "Dry Cleaning",
        price: 200.00
    },
    {
        id: 2,
        name: "Wash & Fold",
        price: 100.00
    },
    {
        id: 3,
        name: "Ironing",
        price: 30.00
    },
    {
        id: 4,
        name: "Stain Removal",
        price: 500.00
    },
    {
        id: 5,
        name: "Leather & Suede Cleaning",
        price: 999.00
    },
    {
        id: 6,
        name: "Wedding Dress Cleaning",
        price: 2800.00
    }
]

let cart = [];

const serviceInfo = document.getElementById('allServices');
const cartDisplay = document.getElementById('cart-body');
const cartTotalElement = document.getElementById('total-Amount');

function displayServices() {
    serviceData.forEach(service => {
        const div = document.createElement('div');
        div.classList.add('service-info');

        div.innerHTML = `
        <div>${service.name}</div>
        <div class="price">₹${service.price.toFixed(2)}</div>
        <button id="btn-${service.id}" onclick=toggleCart(${service.id}) class="service-info-btn">
        Add Item <ion-icon name="add-circle-outline"></ion-icon>
        </button>
        `;
        serviceInfo.appendChild(div);
    })
}
function toggleCart(id) {
    const existingIndex = cart.findIndex(item => item.id === id);

    if (existingIndex > -1) {
        cart.splice(existingIndex, 1);
    } else {
        const serviceToAdd = serviceData.find(service => service.id === id);
        cart.push(serviceToAdd);
    }

    updateCartUI();
    updateButtonStyles();
}
let total;
function updateCartUI() {
    cartDisplay.innerHTML = '';

    if (cart.length === 0) {
        const empDiv = document.createElement('div');
        empDiv.classList.add('no-item-cart');
        // <div class="no-item-cart">
        // </div>`;
        empDiv.innerHTML = `
                <ion-icon name="alert-circle-outline"></ion-icon>
                <h5>No items Added!</h5>
                <p>Add Items to the cart from service bar!</p>`;
        cartTotalElement.innerText = '₹0.00';
        cartDisplay.appendChild(empDiv)
        return;
    }

    total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const cartDiv = document.createElement('div');
        cartDiv.classList.add('item');

        cartDiv.innerHTML = `
                <p>${index + 1}</p>
                <p>${item.name}</p>
                <p>${item.price}</p>
        `;
        cartDisplay.appendChild(cartDiv);
    });
    cartTotalElement.innerText = `₹${total}`;
}
let btn;
function updateButtonStyles() {
    serviceData.forEach(service => {
        btn = document.getElementById(`btn-${service.id}`);
        if (!btn) return;

        const isInCart = cart.some(item => item.id === service.id);

        if (isInCart) {
            btn.classList.add('remove-item');
            btn.innerHTML = 'Remove item <ion-icon name="remove-circle-outline"></ion-icon>';
        } else {
            btn.classList.remove('remove-item');
            btn.innerHTML = 'Add Item <ion-icon name="add-circle-outline"></ion-icon>';
        }
    });
}
const bookBtn = document.getElementById('book-btn')

bookBtn.addEventListener('click', function () {
    const bookTextBox = document.getElementById('txt-name');
    const bookEmailBox = document.getElementById('txt-email');
    const bookNumBox = document.getElementById('txt-num');
    const bookNowBody = document.getElementById('checkCart');

    const existingAlert = bookNowBody.querySelector('.alert-book-now');
    if (existingAlert) {
        existingAlert.remove()
    }

    const Paragraph = document.createElement('p');
    Paragraph.classList.add('alert-book-now');

    const isCartIsEmpty = cart.length === 0;

    if (isCartIsEmpty) {
        Paragraph.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Please Add service to the Cart'
        bookNowBody.appendChild(Paragraph)
    } else if (bookTextBox.value == '' || bookEmailBox.value == '' || bookNumBox.value == '') {
        Paragraph.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Please Enter Required Information'
        bookNowBody.appendChild(Paragraph)
    } else {
        Paragraph.innerHTML = '<ion-icon name="checkmark-circle-outline"></ion-icon> Your Email has Been sent'
        Paragraph.style.color = 'green'
        bookNowBody.appendChild(Paragraph)
        const cartItems = cartDisplay.querySelectorAll('.item')
        cartItems.forEach(item => { item.remove() })
        
        
        
        
        console.log(cart);
        let parms = {
            name: bookTextBox.value,
            email: bookEmailBox.value,
            number: bookNumBox.value,
            cost_total: total,
            ser_name: cart[0].name,
            price: cart[0].price
        }
        console.log(parms);
        
        
        emailjs.send("service_qq7xu5d", "template_em6ysgm", parms)
        .then(console.log('Email Has been Sent!'))
        
        cart = []
        cartTotalElement.innerText = `₹0.00`;
        bookTextBox.value = '';
        bookEmailBox.value = '';
        bookNumBox.value = '';
        updateCartUI()
        updateButtonStyles()
    }
})
displayServices();

// bookBtn.addEventListener('click', function(){
//     const bookTextBox = document.getElementById('txt-name').value
//     const bookEmailBox = document.getElementById('txt-email').value
//     const bookNumberBox = document.getElementById('txt-num').value

//     const bookNowBody = document.getElementById('checkCart')

//     const existingAlert = bookNowBody.querySelector('.alert-book-now');
//     if (existingAlert) {
//         existingAlert.remove();
//     }

//     const Para = document.createElement('p')
//     Para.classList.add('alert-book-now')

//     const isCartIsEmpty = cart.length === 0;

//     if(isCartIsEmpty){
//         Para.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Please Add service to the Cart'
//         bookNowBody.appendChild(Para)
//     }else if(bookTextBox === '' || bookEmailBox === '' || bookNumberBox=== ''){
//         Para.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Please Enter Required Information'
//         bookNowBody.appendChild(Para)
//     }else{
//         Para.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon> Email Has been sent'
//         Para.style.color = 'green'
//         bookNowBody.appendChild(Para)

//     }
// })


