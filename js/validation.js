const first_name = document.getElementById('firstname');
const last_name = document.getElementById('lastname');
const message = document.getElementById('message');
const form = document.getElementById('my_form');
const errorEl = document.getElementById('error'); /* Getting elements from the webpage using id we have already written */

form.addEventListener('submit', (e) => {
    let messages = [];
    if(first_name.value === '' || first_name.value == null) {
        messages.push('FirstName');
    }/* check if the first name input is not null or empty */

    if(last_name.value === '' || last_name.value == null) {
        messages.push('LastName');
    }/* check if the last name input is not null or empty */

    if(message.value === '' || message.value == null) {
        messages.push('Message');
    }/* check if the message input is not null or empty */

    if(messages.length > 0) {
        e.preventDefault();
        errorEl.style.display = 'flex';
        errorEl.innerHTML = messages.join(', ') + ' is required'
    } /* this part shows user what items are missing */

    if(messages.length == 0) {
        e.preventDefault();
        errorEl.style.display = 'flex';
        errorEl.innerHTML = 'Correct'
    } /* this part shows that everything is correct */
})