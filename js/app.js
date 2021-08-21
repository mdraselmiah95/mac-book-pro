// button and price declaration

const memoryBtnOne = document.getElementById('memory-btn-one');
const memoryBtnTwo = document.getElementById('memory-btn-two');

const storageBtnOne = document.getElementById('storage-btn-one');
const storageBtnTwo = document.getElementById('storage-btn-two');
const storageBtnThree = document.getElementById('storage-btn-three');

const deliveryBtnOne = document.getElementById('delivery-btn-one');
const deliveryBtnTwo = document.getElementById('delivery-btn-two');



const bestPrice = document.getElementById('best-price');
const memoryPrice = document.getElementById('memory-cost');
const storagePrice = document.getElementById('storage-cost');
const deliveryPrice = document.getElementById('delivery-cost');
const totalPrice = document.getElementById('total-price');

// memory calculation
memoryBtnOne.addEventListener('click', function () {
    memoryPrice.innerText = Number(0);
    total();
})
memoryBtnTwo.addEventListener('click', function () {
    memoryPrice.innerText = Number(180);
    total();
})

// storage calculation
storageBtnOne.addEventListener('click', function () {
    storagePrice.innerText = Number(0);
    total();
})
storageBtnTwo.addEventListener('click', function () {
    storagePrice.innerText = Number(100);
    total();
})
storageBtnThree.addEventListener('click', function () {
    storagePrice.innerText = Number(180);
    total();
})

// delivery calculation
deliveryBtnOne.addEventListener('click', function () {
    deliveryPrice.innerText = Number(0);
    total();
})
deliveryBtnTwo.addEventListener('click', function () {
    deliveryPrice.innerText = Number(20);
    total();
})

// total calculation function

function total() {
    const bestPriceTotal = Number(bestPrice.innerText);
    const memoryTotal = Number(memoryPrice.innerText);
    const storageTotal = Number(storagePrice.innerText);
    const deliveryTotal = Number(deliveryPrice.innerText);
    const totalCost = bestPriceTotal + memoryTotal + storageTotal + deliveryTotal;
    totalPrice.innerText = totalCost;
}

//apply button calculation

const applyButton = document.getElementById('apply-button');
applyButton.addEventListener('click', function () {
    let finalPrice = document.getElementById('final-price');
    const inputPomo = document.getElementById('input-pomo');
    const inputPomoText = inputPomo.value;
    total();
    if (inputPomoText == 'stevekaku') {
        const totalPriceUpdate = totalPrice.innerText;
        let discountPrice = totalPriceUpdate * 0.8;
        finalPrice.innerText = discountPrice;
        //clear pomo input field
        inputPomo.value = '';
    } else {
        const invalidMassage = document.getElementById('error-massage');
        invalidMassage.style.display = 'block';
        const totalPriceUpdate = totalPrice.innerText;
        finalPrice.innerText = totalPriceUpdate;
    }
})

// ended