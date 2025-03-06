document.querySelector(".clearHistory-btn").addEventListener("click", function(event) {
    event.preventDefault();
    let historyParagraphs = document.querySelectorAll(".activity-log p");
    historyParagraphs.forEach(paragraph => {
        paragraph.remove(); 
    });
});
