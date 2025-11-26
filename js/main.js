'use strict';

// document.getElementById("mod").addEventListener('click',
//     function(e) {
//     document.getElementById("input_form").innerHTML="israel";
//     })


document.getElementById("mod").addEventListener('click',
    function(e) {

        e.preventDefault();

        if (validateForm()) {
        const inputFormDiv =
            document.getElementById("input_form_container");

        inputFormDiv.style.display = "none";
            }
   })

function validateForm()
{
    let isValid = true;

    const taskNameInput = document.getElementById("TaskName");

    //const taskNameRegex = /^[a-zA-Z0-9\s\u0590-\u05FF]+$/;

    if (taskNameInput.value.trim() === "") {
       // displayError(taskNameInput, "שם משימה הוא שדה חובה.");
        isValid = false;
    }
    return isValid;
}