const btn = document.getElementById("menu");
btn.addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("show");
    btn.classList.toggle("icon");
});
