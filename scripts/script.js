
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

const mobile_options_container = document.getElementById('mobile-options-container');
const toggle_mobile_options_btn = document.getElementById('toggle-mobile-options');

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


// Check writing mode
function checkMode(mode){

    if (saq_checkbox.checked || mode == 'saq') {
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

    if (mcq_checkbox.checked || mode == 'mcq') {
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

    // reset line numbers when writing mode is changed
    currentSaqLineNumber = 1; 
    currentMcqLineNumber = 1;

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

    if(currentMcqLineNumber == 30){
        createNotification('info', 'Maximum mcq limit reached. Please refresh the page to add more');
        return 0;
    }

    if(mcqQuestion.question == '' || mcqQuestion.question == null){
        // make a notificaiton
        createNotification('error', 'Please enter valid input in question field')
    }
    else if(mcqQuestion.option_1 == '' || mcqQuestion.option_1 == null){
        // make a notificaiton
        createNotification('error', 'Please enter valid input')
    }
    else if(mcqQuestion.option_2 == '' || mcqQuestion.option_2 == null){
        // make a notificaiton
        createNotification('error', 'Please enter valid input')
    }
    else if(mcqQuestion.option_3 == '' || mcqQuestion.option_3 == null){
        // make a notificaiton
        createNotification('error', 'Please enter valid input')
    }
    else if(mcqQuestion.option_4 == '' || mcqQuestion.option_4 == null){
        // make a notificaiton
        createNotification('error', 'Please enter valid input')
    }
    else{
        // write to preview window
        preview.innerHTML += `<pre>${currentMcqLineNumber}. ${mcqQuestion.question} <br>A. ${mcqQuestion.option_1}    B. ${mcqQuestion.option_2}    C. ${mcqQuestion.option_3}    D. ${mcqQuestion.option_4} </br>`;
        currentMcqLineNumber++;
        clearAllFields();
    }


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
        handleMcq();
        mcq_input_field.focus();
    }
})





// Handle mobile 

// Toggle menu
function toggleMobileMenu(){
    if(mobile_options_container.classList.contains('flex_hidden')){
        mobile_options_container.classList.remove('flex_hidden');
        mobile_options_container.classList.add('flex_visible');
    }
    else if(mobile_options_container.classList.contains('flex_visible')){
        mobile_options_container.classList.remove('flex_visible');
        mobile_options_container.classList.add('flex_hidden');
    }

}

// bind function to the button
toggle_mobile_options_btn.addEventListener('click', toggleMobileMenu);

