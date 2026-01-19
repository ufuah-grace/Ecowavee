// Button click
document.querySelector('.animate-btn').addEventListener('click', () => {
alert('Redirect to shop page');
});


// Count-up animation
const counters = document.querySelectorAll('.stat h3');


counters.forEach(counter => {
const target = +counter.dataset.count;
let count = 0;
const speed = 40;


const updateCount = () => {
if (count < target) {
count += target / speed;
counter.innerText = Math.ceil(count) + (target === 50 ? 'K+' : '+');
setTimeout(updateCount, 40);
} else {
counter.innerText = target + (target === 50 ? 'K+' : '+');
}
};


updateCount();
});

// sec page
document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filters .active").classList.remove("active");
    btn.classList.add("active");
  });
});

// third page
document.querySelectorAll(".cart-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Added to cart");
  });
});