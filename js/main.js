'use strict';

document.getElementById("mod").addEventListener('click', function(e) {
    e.preventDefault();

    // איפוס הודעת שגיאה
    document.getElementById("taskNameError").textContent = "";

    if (validateForm()) {
        // 1. איסוף המידע
        const taskData = {
            name: document.getElementById("TaskName").value,
            category: document.getElementById("Categories").options[document.getElementById("Categories").selectedIndex].text, // לוקח את הטקסט ולא את ה-value
            priority: document.querySelector('input[name="level"]:checked')?.value || "Normal",
            date: document.getElementById("datetime-local").value,
            description: document.getElementById("Description").value
        };

        // 2. הוספת המשימה לתצוגה (קריאה לפונקציה החדשה)
        addTaskToDOM(taskData);

        // 3. ניקוי הטופס להזנה הבאה
        document.getElementById("form").reset();

        console.log("Task added:", taskData);
    }
});

function validateForm() {
    let isValid = true;
    const taskNameInput = document.getElementById("TaskName");

    if (taskNameInput.value.trim() === "") {
        document.getElementById("taskNameError").textContent = "שם משימה הוא שדה חובה!";
        isValid = false;
    }
    return isValid;
}

// --- פונקציה חדשה שמקבלת אובייקט ויוצרת HTML ---
function addTaskToDOM(task) {
    const list = document.getElementById("task-list");

    // יצירת אלמנט LI חדש
    const li = document.createElement("li");

    // עיצוב בסיסי למשימה (אפשר לשפר ב-CSS אחר כך)
    li.style.borderBottom = "1px solid #ccc";
    li.style.padding = "10px";

    // הכנסת התוכן
    li.innerHTML = `
        <strong>${task.name}</strong> 
        <span style="color: blue;">[${task.category}]</span>
        <br>
        <small>Priority: ${task.priority} | Date: ${task.date}</small>
        <p>${task.description}</p>
    `;

    // הוספה לרשימה בדף
    list.appendChild(li);
}