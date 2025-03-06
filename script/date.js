document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
    const date = today.toDateString();
    document.getElementById("today-date").innerHTML = `<span class="text-lg">${date}</span>`;
});
