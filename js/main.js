'use strict';

document.getElementById("mod").addEventListener('click', function(e) {
    e.preventDefault(); // מונע רענון של הדף

    // איפוס הודעת השגיאה בכל לחיצה
    document.getElementById("taskNameError").textContent = "";

    if (validateForm()) {
        // שלב 2: איסוף המידע לאובייקט (במקום סתם להעלים את הטופס)
        const taskData = {
            name: document.getElementById("TaskName").value,
            category: document.getElementById("Categories").value,
            // משיכת הערך מהרדיו שנבחר (אם נבחר)
            priority: document.querySelector('input[name="level"]:checked')?.value || "Normal",
            date: document.getElementById("datetime-local").value,
            description: document.getElementById("Description").value
        };

        // כרגע נדפיס לקונסול כדי לראות שזה עובד (בשלב הבא תבנו פונקציה שמוסיפה ל-HTML)
        console.log("Task Created successfully:", taskData);

        // אופציונלי: כאן אפשר לנקות את הטופס או לסגור אותו
        // document.getElementById("input_form_container").style.display = "none";
        alert("המשימה נקלטה! בדוק את הקונסול (F12)");
    }
});

function validateForm() {
    let isValid = true;
    const taskNameInput = document.getElementById("TaskName");

    // בדיקה אם השדה ריק
    if (taskNameInput.value.trim() === "") {
        // שינוי 1: הצגת השגיאה בתוך ה-SPAN שיצרנו
        document.getElementById("taskNameError").textContent = "שם משימה הוא שדה חובה!";
        isValid = false;
    }

    return isValid;
}