
let circles = document.querySelectorAll(".circle");
let current = 1;

const nextbtn = document.querySelector('#next');
const prevbtn = document.querySelector('#prev');

// Initial button states
prevbtn.disabled = true;

nextbtn.addEventListener('click', () => {
    if (current < circles.length) {
        current++;

        circles.forEach((circle) => {
            circle.classList.remove('active');
        });

        for (let i = 0; i < current; i++) {
            circles[i].classList.add('active');
        }

        // Update button states
        prevbtn.disabled = current === 1;
        nextbtn.disabled = current === circles.length;
    }
});

prevbtn.addEventListener('click', () => {
    if (current > 1) {
        current--;

        circles.forEach((circle) => {
            circle.classList.remove('active');
        });

        for (let i = 0; i < current; i++) {
            circles[i].classList.add('active');
        }

        // Update button states
        prevbtn.disabled = current === 1;
        nextbtn.disabled = current === circles.length;
    }
});
