const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('.results')
let currentShooterIndex = 202
const aliensRemoved = []
let invadersId

const width = 15

for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    square.id = i
    grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

console.log(squares)

const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
]

function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        if (!aliensRemoved.includes(i)) {
            squares[alienInvaders[i]].classList.add('invader')
        }
    }
}

draw()

squares[currentShooterIndex].classList.add('shooter')

function remove() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.remove('invader')
    }
}

function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter')
    switch(e.key) {
        case 'ArrowLeft':
            if (currentShooterIndex % width !== 0) currentShooterIndex -= 1
            break
        case 'ArrowRight':
            if (currentShooterIndex % width < width - 1) currentShooterIndex += 1
            break
    }
    squares[currentShooterIndex].classList.add('shooter')
}

document.addEventListener('keydown', moveShooter)

function moveInvaders() {
    const leftEdge = alienInvaders[0] % width === 0
    const rightEdge = alienInvaders[alienInvaders.length -1 % width] === width - 1
    remove()
    for(let i = 0; i< alienInvaders.length; i++) {
        alienInvaders[i] += 1
    }
    draw()
}
invadersId = setInterval(moveInvaders, 600)
