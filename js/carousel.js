const r1 = document.querySelector('#r1')
const r2 = document.querySelector('#r2')
const r3 = document.querySelector('#r3')

const i1 = document.querySelector('.i1')
const i2 = document.querySelector('.i2')
const i3 = document.querySelector('.i3')

r1.addEventListener('click', showI1)
r2.addEventListener('click', showI2)
r3.addEventListener('click', showI3)

function showI1(){
    if (i1.classList.contains('d-none')){
        i1.classList.remove('d-none')
        i2.classList.add('d-none')
        i3.classList.add('d-none')
    }
}

function showI2(){
    if (i2.classList.contains('d-none')){
        i2.classList.remove('d-none')
        i1.classList.add('d-none')
        i3.classList.add('d-none')
    }
}

function showI3(){
    if (i3.classList.contains('d-none')){
        i3.classList.remove('d-none')
        i2.classList.add('d-none')
        i1.classList.add('d-none')
    }
}

