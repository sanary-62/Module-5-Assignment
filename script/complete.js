document.querySelectorAll(".complete-btn").forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Board updated successfully");


        let taskCounter = document.querySelector("#task-counter");
        let count = parseInt(taskCounter.innerText, 10);
        taskCounter.innerText = count + 1;


        let taskAssigned = document.querySelector("#task-assigned");
        let assignedCount = parseInt(taskAssigned.innerText, 10);
        if (assignedCount > 0) { 
            taskAssigned.innerText = assignedCount - 1;
        }

         
        button.disabled = true;
        button.classList.add('opacity-50');


        let taskName = button.closest('.card').querySelector('h3').innerText;
        let activityLog = document.querySelector(".activity-log");

        
        let customTime = "Completed at 12:00 PM"; 

        
        
        let newLog = document.createElement("p");
        newLog.classList.add("bg-[#F4F7FF]", "p-3", "rounded-lg", "mb-6", "text-[#00303CB3]");
        newLog.innerText = `You have completed the task "${taskName}" ${customTime}`;

        activityLog.appendChild(newLog);
    });
});
