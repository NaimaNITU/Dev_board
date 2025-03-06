let buttons = document.getElementsByClassName("completeBtn");
let taskAssignElement = document.getElementById('taskAssignNum');
let taskAssignNum = parseFloat(taskAssignElement.innerText);
let workCountElement = document.getElementById('workCount');
let workCount = parseFloat(workCountElement.innerText);
const activityLog = document.getElementById('activityLog');
const clearLogBtn = document.getElementById("clearLogBtn");

for (let button of buttons) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        alert('Board updated successfully');
        button.style.backgroundColor = "oklch(0.872 0.01 258.338)";
        button.disabled = true; // Disable the button

        // Find the parent card and get the title
        let card = button.closest(".bg-slate-200");
        let cardTitle = card.querySelector("h2").innerText;

        // for assigned tasks num
        if (taskAssignNum > 0) {
            taskAssignNum--;
            taskAssignElement.innerText = taskAssignNum;
            if (taskAssignNum == 0) {
                alert('Congrats!!! You have completed all the current tasks');
            }
        }

        // update work count
        workCount++;
        workCountElement.innerText = workCount;

        // Get the current time
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let AmPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        // Create activity log entry
        const p = document.createElement('p');
        p.innerHTML = `You have completed the task <strong>${cardTitle}</strong> at ${hours}:${minutes}:${seconds} ${AmPm}<br><br>`;
        activityLog.appendChild(p);
    });
}

/* // Clear activity log
clearLogBtn.addEventListener("click", function () {
    activityLog.innerHTML = `<h3 class="text-xl font-medium">Activity Log</h3>`;
});
 */

// Clear activity log
document.getElementById("clearLogBtn").addEventListener("click", function () {
    document.getElementById("activityLog").innerHTML = `
        <div class="text-center mt-3">
            <div class="flex items-center justify-center mb-2">
                <img class="mr-2" src="assets/activity.png" alt="">
                <h3 class="text-xl font-medium">Activity Log</h3>
            </div>
            <button id="clearLogBtn" class="bg-indigo-500 text-white font-bold rounded-lg py-2 px-4 mt-2">
                Clear History
            </button>
        </div>
        <div style="margin-top: 10px; margin-bottom: 10px; border-bottom: 1px dashed rgb(205, 204, 204); width: 100%;"></div>
    `;

    // Reattach the event listener
    document.getElementById("clearLogBtn").addEventListener("click", arguments.callee);
});


