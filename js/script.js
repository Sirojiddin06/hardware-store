function order(){
    window.location.href = 'products.html#contact'
}

const all = document.querySelector('#all')
const kitchen = document.querySelector('#kitchen')
const livingRoom = document.querySelector('#living-room')
const home = document.querySelector('#home')

// all.addEventListener('click', allShow)
// kitchen.addEventListener('click', kitchenShow)
// livingRoom.addEventListener('click', livingRoomShow)
// home.addEventListener('click', homeShow)
// console.log(all);
// console.log(kitchen);
// console.log(livingRoom);
// console.log(home);

function allShow()
{
    if (all.classList.contains('d-none')){
        all.classList.remove('d-none')
        kitchen.classList.add('d-none')
        livingRoom.classList.add('d-none')
        home.classList.add('d-none')
    }
}

function kitchenShow()
{
    if (kitchen.classList.contains('d-none')){
        kitchen.classList.remove('d-none')
        all.classList.add('d-none')
        livingRoom.classList.add('d-none')
        home.classList.add('d-none')
    }
}

function livingRoomShow()
{
    if (livingRoom.classList.contains('d-none')){
        livingRoom.classList.remove('d-none')
        kitchen.classList.add('d-none')
        all.classList.add('d-none')
        home.classList.add('d-none')
    }
}

function homeShow()
{
    if (home.classList.contains('d-none')){
        home.classList.remove('d-none')
        kitchen.classList.add('d-none')
        livingRoom.classList.add('d-none')
        all.classList.add('d-none')
    }    
}