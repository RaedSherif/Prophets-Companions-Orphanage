function partner()
{
    let name = document.getElementById("name").value.trim();
    let organization = document.getElementById("organization").value.trim();
    let email = document.getElementById("email").value.trim();
    let details = document.getElementById("partnershipDescription").value.trim();
    let error = document.getElementById('error');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (error) 
    {
        error.textContent = '';
    }

    
    if (! name) 
    {
        error.textContent = 'Please enter your name, Do not leave this field empty.';
        return false;
    }

    if (name.length > 32)
    {
        error.textContent ='Name can not be longer than 32 characters';
        return false;
    }

    if (organization.length > 32)
    {
        error.textContent ='Orgainzation name can not be longer than 32 characters';
        return false;
    }

    if (details.length > 32)
        {
            error.textContent ='Description can not be longer than 120 characters';
            return false;
        }

    if (emailRegex.test(email) == false)
            {
                error.textContent ='Email is invalid, make sure it is correct.';
                return false;
            }
}