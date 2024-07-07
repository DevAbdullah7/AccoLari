let dir = document.querySelector('.dir')
dir.addEventListener('click', () => {
    dir.classList.toggle('oppest')
    document.querySelector('#FromInput').value = ''
    document.querySelector('#ToInput').innerHTML = ''
})

let trnasferBTN = document.querySelector('.trnasferBTN')
trnasferBTN.addEventListener('click', () => {
    let FromInput = document.querySelector('#FromInput')
    let ToInput = document.querySelector('#ToInput')
    if (!dir.classList.contains('oppest')) {
        let price = Number(FromInput.value) * 1.357
        let digit = price.toString().split('.')[1]
        let first = price.toString().split('.')[0]
        let seccond = ''
        if (digit.split('')[1] != undefined) {
            seccond = digit.split('')[0]+digit.split('')[1]
        } else {
            seccond = digit.split('')[0]
        }
        ToInput.innerHTML = `
            ${first + '.' + seccond}
        `
    } else if (dir.classList.contains('oppest')) {
        let price = Number(FromInput.value) / 1.357
        let digit = price.toString().split('.')[1]
        let first = price.toString().split('.')[0]
        let seccond = ''
        if (digit.split('')[1] != undefined) {
            seccond = digit.split('')[0]+digit.split('')[1]
        } else {
            seccond = digit.split('')[0]
        }
        ToInput.innerHTML = `
            ${first + '.' + seccond}
        `
    }
})