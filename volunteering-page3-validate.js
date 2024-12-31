function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let experience = document.getElementById("experience").value.trim();
    let motivation = document.getElementById("motivation").value.trim();
    let errorMsg = document.getElementById("myerror");

    if (!name) {
        errorMsg.textContent = 'Please enter your full name. Do not leave this field empty.';
        return false;
    } else if (!email) {
        errorMsg.textContent = 'Please enter your email. Do not leave this field empty.';
        return false;
    } else if (!phone || phone.length !== 11 || isNaN(phone)) {
        errorMsg.textContent = 'Please enter a valid 11-digit phone number.';
        return false;
    } else if (!experience) {
        errorMsg.textContent = 'Please share your experience with volunteering or NPO activities.';
        return false;
    } else if (!motivation) {
        errorMsg.textContent = 'Please explain why you would like to volunteer with us.';
        return false;
    } else {
        errorMsg.textContent = '';
        alert('Thank you! Your application has been received. We will get back to you as soon as possible.');
        return true;
    }
}