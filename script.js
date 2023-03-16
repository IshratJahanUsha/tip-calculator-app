const errorMessage = document.querySelector('.error_message'),
    allInput = document.querySelectorAll('input'),

    totalBill = document.querySelector('.total_bill'),
    tipAmountBtns = document.querySelectorAll('.tip_amount'),
    customTipBtn = document.querySelector('.custom_tip_amount'),
    totalPeople = document.querySelector('.people_number'),

    perPersonTipAmount = document.querySelector('.tip_per-person'),
    perPersonBillAmount = document.querySelector('.total_per-person'),

    resetBtn = document.querySelector('.reset_btn')

let tipAmount;


let totalBillAmount = () => {

    // perPersonBillAmount.innerHTML = ''

    let perPersonTip = tipAmount / totalPeople.value

    perPersonTipAmount.innerHTML = perPersonTip.toFixed(2)

    let perPersonTotalBill = totalBill.value / totalPeople.value + perPersonTip

    perPersonBillAmount.innerHTML = perPersonTotalBill.toFixed(2)

}

// for error 
totalBill.addEventListener('input', () => {

    if (totalBill.value == 0 || totalBill.value < 0) {

        errorMessage.classList.add('active')

    } else {
        errorMessage.classList.remove('active')
    }
});

totalPeople.addEventListener('input', () => {

    if (totalPeople.value == 0 || totalPeople.value < 0) {

        errorMessage.classList.add('active')

    } else {
        errorMessage.classList.remove('active')
    }
});


// for tip buttons 
function checkactive(num) {
    tipAmountBtns.forEach((b, index) => {
        if (num != index) {
            b.classList.remove('active')
        }
    })
}

tipAmountBtns.forEach((button, num) => {
    button.addEventListener('click', () => {
        tipAmount = totalBill.value * button.value
        button.classList.add('active')
        customTipBtn.classList.remove('error')
        customTipBtn.classList.remove('success')
        checkactive(num)
    })
})

tipAmountBtns[0].click()
tipAmountBtns[0].classList.add('active')

totalBill.addEventListener('focusout', () => {
    tipAmountBtns[0].click()
})


// for custom tip
let customTipAmount = () => {
    tipAmount = totalBill.value * (customTipBtn.value / 100)
}

customTipBtn.addEventListener('focusin', () => {
    tipAmountBtns.forEach((b) => {
        b.classList.remove('active')
    })
})


// error for all input
allInput.forEach((input) => {
    input.addEventListener('focusout', () => {
        if (input.value < 0 || input.value == 0) {
            input.classList.remove('success')
            input.classList.add('error')
        } else {
            input.classList.remove('error')
            input.classList.add('success')
        }
    })
})

resetBtn.addEventListener('click', () => {
    allInput.forEach((input) => {
        input.value = ''
        input.classList.remove('success')
        input.classList.remove('error')
    })
    tipAmountBtns[0].click()
})