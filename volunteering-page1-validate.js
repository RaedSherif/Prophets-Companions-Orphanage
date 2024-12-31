function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let experience = document.getElementById("experience").value;
    let motivation = document.getElementById("motivation").value;
    let errorMsg = document.getElementById("myerror");

    if (!name) {
        errorMsg.innerHTML = 'Please enter your full name, do not leave any field empty.';
        return false;
    } else if (!email) {
        errorMsg.innerHTML = 'Please enter your email, do not leave any field empty.';
        return false;
    } else if (!phone || phone.length !== 11 || isNaN(phone)) {
        errorMsg.innerHTML = 'Please enter a valid 11-digit phone number.';
        return false;
    } else if (!experience) {
        errorMsg.innerHTML = 'Please share your experience with volunteering or NPO activities.';
        return false;
    } else if (!motivation) {
        errorMsg.innerHTML = 'Please explain why you would like to volunteer with us.';
        return false;
    } else {
        errorMsg.innerHTML = '';
        alert('Thank you! Your application has been received, we will get back to you as soon as possible.');
        return true;
    }
}