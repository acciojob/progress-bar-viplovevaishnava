//your JS code here. If required.
let circles = document.querySelectorAll(".circle");
let current = 1;

const nextbtn = document.querySelector('#next')
nextbtn.addEventListener('click', () => {
    // Remove active from the previous circle
    if (current < circles.length) {
        current++
        circles.forEach((circle) => {
            circle.classList.remove('active')
        })
        for (let i = 0; i < current; i++) {
            circles[i].classList.add('active')
        }
    }
})
const prevbtn = document.querySelector('#prev')
prevbtn.addEventListener('click', () => {
    if (current > 1) {
        current -= 1
        circles.forEach((circle) => {
            circle.classList.remove('active')
        })
        for (let i = 0; i < current; i++) {
            circles[i].classList.add('active')
        }

    }
})