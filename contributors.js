function partner()
{
    let name = document.getElementById("name").value.trim();
    let organization = document.getElementById("organization").value.trim();
    let email = document.getElementById("email").value.trim();
    let details = document.getElementById("partnershipDescription").value.trim();
    let error = document.getElementById('error');


    if (error) {
        error.textContent = '';
      }

    
    if (! name) {
        error.textContent = 'Please enter your full name. Do not leave this field empty.';
        return false;
    }

    if (name.length > 7)
    {
        error.textContent ='Name can not be longer than 32 characters';
        return false;
    }
}