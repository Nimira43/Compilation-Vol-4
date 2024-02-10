const bill = document.getElementById('bill')
const numOfPeople = document.getElementById('people-amount')
const result = document.getElementById('result')

let serviceQual = document.getElementById('service-qual')

result.style.display = 'none'

const calculator = document.getElementById('calculator')

calculator.addEventListener('click', calculateTip)

function calculateTip() {
    if (bill.value === '' || serviceQual.value === 0) {
        alert('Please enter a value')
        return
    }
    if (numOfPeople.value === '' || numOfPeople.value <= 1) {
        numOfPeople.value = 1
        result.style.display = 'none'
    } else {
        result.style.display = 'block'
    }

    let totalTip = bill.value * serviceQual.value
    let divTip = totalTip / numOfPeople.value
    let totalBill = totalTip + parseInt(bill.value)
    let divBillTip = totalBill / numOfPeople.value
    
    document.getElementById('result').style.display = 'block'
    document.getElementById('tip').innerText = '£' + totalTip.toFixed(2)
    document.getElementById('total-bill-tip').innerHTML = '£' + totalBill.toFixed(2)
    document.getElementById('div-tip').innerHTML = '£' + divTip.toFixed(2)
    document.getElementById('grand-total').innerHTML = '£' + divBillTip.toFixed(2)

}

