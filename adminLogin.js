function validate_form() {
        // Hardcoded credentials
        const validUsername = "admin";
        const validPassword = "admin";
    
        // Get user input
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
    
        // Check if the username and password are correct
        if (username === validUsername && password === validPassword) {
            window.location.href = "admin-home-page.html"; // Redirect to admin page
            return false; // Prevent the form from submitting
        } 
        else if (username === "" && password === "")
            alert("Please fill the blank section")
        else if (username ==="")
            alert("Please fill the blank section")
        else if (password === "")
            alert("Please fill the blank section")
        else {
            alert("You are not an admin");
            return false; // Prevent form submission
        }
    }
    