
// HTML elements

const preview = document.getElementById('preview');

const saq_checkbox = document.getElementById('check-saq');
const mcq_checkbox = document.getElementById('check-mcq');

const saq_container = document.getElementById('saq-writer-container');
const mcq_container = document.getElementById('mcq-writer-container');

const saq_push = document.getElementById('saq-push-btn');
const mcq_push = document.getElementById('mcq-push-btn');

const saq_input_field = document.getElementById('saq-input-field');

const mcq_input_field = document.getElementById('mcq-input-field');
const option_1_field = document.getElementById('option-1');
const option_2_field = document.getElementById('option-2');
const option_3_field = document.getElementById('option-3');
const option_4_field = document.getElementById('option-4');

const allInputFields = document.querySelectorAll('.input_text');



// Start program after all elements have been loaded
window.addEventListener('load', mainFunction);



// count line number
let currentSaqLineNumber = 1;
let currentMcqLineNumber = 1;



// Program starts here
function mainFunction(){    
    checkMode();
    clearAllFields();
}



// Functions

function checkMode(){

    if (saq_checkbox.checked) {
        // Show SAQ container and hide MCQ container
        saq_container.classList.remove('flex_hidden');
        saq_container.classList.add('flex_visible');
        mcq_container.classList.remove('flex_visible');
        mcq_container.classList.add('flex_hidden');
        // Clear fields
        clearAllFields();
        // Clear preview window
        preview.innerHTML = '';
    } 
    
    if (mcq_checkbox.checked) {
        // Show MCQ container and hide SAQ container
        mcq_container.classList.remove('flex_hidden');
        mcq_container.classList.add('flex_visible');
        saq_container.classList.remove('flex_visible');
        saq_container.classList.add('flex_hidden');
        // Clear fields
        clearAllFields();
        // Clear preview window
        preview.innerHTML = '';
    } 
}


// Clear all input fields
function clearAllFields(){

    allInputFields.forEach(element => {
        element.value = "";
    });
}





// Handle saq
function handleSaq(){
    let saqQuestion = saq_input_field.value;

    if(saqQuestion == '' || saqQuestion == null){
        // make a notificaiton
        createNotification('error', 'Please enter valid input')
    }
    else{
        preview.innerHTML += `<br> ${currentSaqLineNumber}. ${saqQuestion} -`;
        currentSaqLineNumber++;
        clearAllFields();
    }

}

// Push input value when enter is pressed

saq_input_field.addEventListener('keydown', function(e){
    if(e.key == "Enter"){
        handleSaq();
    }
})




// Handle mcq

function handleMcq(){
    let mcqQuestion = {
        question: mcq_input_field.value,
        option_1: option_1_field.value,
        option_2: option_2_field.value,
        option_3: option_3_field.value,
        option_4: option_4_field.value
    }

    // write to preview window
    preview.innerHTML += `<pre>${currentMcqLineNumber}. ${mcqQuestion.question} <br>A. ${mcqQuestion.option_1}    B. ${mcqQuestion.option_2}    C. ${mcqQuestion.option_3}    D. ${mcqQuestion.option_4} </br>`;

    currentMcqLineNumber++;
    clearAllFields();
}


// focus on next field

mcq_input_field.addEventListener('keydown', (e) => {
    if(e.key == 'Enter') { option_1_field.focus();}
});

option_1_field.addEventListener('keydown', (e) => {
    if(e.key == 'Enter') { option_2_field.focus() }
});

option_2_field.addEventListener('keydown', (e) => {
    if(e.key == 'Enter') { option_3_field.focus() }
});

option_3_field.addEventListener('keydown', (e) => {
    if(e.key == 'Enter') { option_4_field.focus() }
});


// Push input value when enter is pressed

option_4_field.addEventListener('keydown', function(e){
    if(e.key == "Enter"){
        // mcq_push.click();
        handleMcq();
        mcq_input_field.focus();
    }
})



