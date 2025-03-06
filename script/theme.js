document.getElementById("theme-btn").addEventListener("click", function(event) {
    event.preventDefault();


    const colors = [
        "bg-pink-100", "bg-pink-200", "bg-pink-300", "bg-purple-100", 
        "bg-purple-200", "bg-purple-300", "bg-indigo-100", "bg-indigo-200",
        "bg-teal-100", "bg-teal-200", "bg-yellow-100", "bg-yellow-200",
        "bg-blue-100", "bg-blue-200", "bg-green-100", "bg-green-200", 
        "bg-red-100", "bg-red-200"];

    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.classList.forEach(className => {
        if (className.startsWith('bg-')) {
            document.body.classList.remove(className);
        }
    });

    document.body.classList.add(randomColor);
});
