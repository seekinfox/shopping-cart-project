const box = document.querySelector('.cart');
if (box.childElementCount === 0) {
    console.log('empty')
} else {
    console.log('not empty')
}


(() => {
    const cartIcon = document.querySelector('.icon');
    const cartOuter = document.querySelector('.cart-outer1');

    cartIcon.addEventListener('click', () => {
        cartOuter.classList.toggle('show')

    })

    const items = document.querySelectorAll('.item')
    console.log(items)

    items.forEach((item) => {
        const addToCart = item.querySelectorAll('.cbtn');
        addToCart.forEach((cartbtn) => {
            cartbtn.addEventListener('click', (e) => {

                const name = e.target.parentElement.parentElement.nextElementSibling.firstElementChild.textContent;
                const img = e.target.parentElement.previousElementSibling.src
                const price = e.target.parentElement.parentElement.nextElementSibling.lastElementChild.textContent

                show(name, img, price)


            })
        })

    })

})()


const show = function (name, img, price) {
    let itemArray = {};
    itemArray.name = name;
    itemArray.img = img;
    itemArray.price = price;
    box.insertAdjacentHTML('afterbegin', `<div class="item" data-price="${itemArray.price}"><img src="${itemArray.img}" alt="demo"><p id="item-name">${itemArray.name}</p><div class="buttons"><button>View item</button><button class="delete-btn">Delete</button></div></div>`)
    total()
}
const total = function () {
    const totalA = [];
    const cartBox = document.querySelector('.cart-inner1')
    const priceItem = cartBox.querySelectorAll('.item')
    priceItem.forEach((item) => {
        let price = item.dataset.price;
        price = price.slice(1)
        totalA.push(parseFloat(price))

    })
    console.log(totalA)
    let sum = totalA.reduce(getsum, 0);

    function getsum(total, num) {
        total += num;
        return total
    }

    sum = sum.toFixed(2);

    const total = document.getElementById('total');
    total.innerHTML = "Total : $" + sum
    control(sum)
    clear(sum)
}
const clear = function (sum) {
    const clearbtn = document.querySelector('.empty');
    clearbtn.addEventListener('click', () => {
        sum = 0;
        console.log(sum)
        document.getElementById('total').innerHTML = 'Total :$' + sum;


        const cart = document.querySelector('.cart');
        const item = cart.querySelectorAll('.item')
        cart.innerHTML = '';
    })
}

const control = function (sum) {
    console.log(sum)
    const total = [];
    const cart = document.querySelector('.cart');
    const cartItems = cart.querySelectorAll('.item');
    const buttons = cart.querySelector('.delete-btn');

    cartItems.forEach((item) => {
        let price = item.dataset.price
        price = parseFloat(price.slice(1))
        total.push(price)
        console.log(total)
        buttons.addEventListener('click', (e) => {
            console.log(e.target.parentElement.parentElement)
            cart.removeChild(e.target.parentElement.parentElement)
            let p = parseFloat(e.target.parentElement.parentElement.dataset.price.slice(1))
            console.log(p)
            console.log(sum)
        })

    })
    console.log(total)



}
/*
const buttons = document.querySelectorAll('.delete-btn');
    const total = [];
    const cart = document.querySelector('.cart');
    const cartItems = cart.querySelectorAll('.item');
    cartItems.forEach((item) => {
        let price = item.dataset.price
        console.log(price)
        price = parseFloat(price.slice(1))
        total.push(price)
        console.log(total)

    })

    console.log(cartItems)
*/
