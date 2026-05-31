const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector(".close");

openModal.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {

    if(event.target === modal){
        modal.style.display = "none";
    }

});

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const text =
        document.getElementById("message").value.trim();

    if(name === "" || email === "" || text === ""){

        message.textContent =
        "Без заповнених полів ми навіть не знаємо, де шукати світло.";

        message.className = "error";

        return;
    }

    message.textContent =
    "Заявку прийнято! Якщо світло не з'явиться, спробуйте поговорити з лічильником.";

    message.className = "success";

    form.reset();

});

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});