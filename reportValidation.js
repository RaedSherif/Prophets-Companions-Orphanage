function validate() {
    let p = document.getElementById("problem-type").value;
    let d = document.getElementById("description").value;
    let e = document.getElementById("contact-email").value;

    if (d == null || d.trim() === "") {
        alert("Please enter a description");
        return false;
    }

    if (e == null || e.trim() === "") {
        alert("Please enter your email for further contact");
        return false;
    }

    if (!e.includes("@") || !e.includes(".")) {
        alert("Please enter a valid email address");
        return false;
    }

    alert("We have received your message and will contact you soon.");
    return true;
}