function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let experience = document.getElementById("experience").value;
    let motivation = document.getElementById("motivation").value;
     let errorMsg = document.getElementById("myerror");

    if (name == "" || name == null) {
        errorMsg.innerHTML = 'Please enter your full name, do not leave any field empty.';
        return false;
    }
   
   
    else if (email == "" || email == null) {
        errorMsg.innerHTML = 'Please enter your email, do not leave any field empty.';
        return false;
    }

   
    else if (phone == "" || phone == null || phone.length !== 11) {
        errorMsg.innerHTML = 'Please enter your phone number, and be sure that it is exactly 11 digits.';
        return false;
    }


    else if (experience == "" || experience == null) {
        errorMsg.innerHTML = 'Please share your experience with volunteering or NPO activities.';
        return false;
    }

    else if (motivation == "" || motivation == null) {
        errorMsg.innerHTML = 'Please explain why you would like to volunteer with us.';
        return false;
    }
   
    else {
        errorMsg.innerHTML = ''; 
        alert('Thank you! Your application has been received, we will get back to you as soon as possible.');
        return true; 
    }
}
