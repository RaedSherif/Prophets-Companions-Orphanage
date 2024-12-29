function addRow() {
    // Get the table
    const table = document.getElementById("childrenTable").getElementsByTagName("tbody")[0];

    // Prompt for child's name and validate input
    let name = prompt("Enter child's name:");
    if (name==null)return;
    while (!name || !isNaN(name)) {
        alert("Please enter a valid name (letters only).");
        name = prompt("Enter child's name:");
    }

    // Prompt for child's age and validate input
    let age = prompt("Enter child's age:");
    if (age==null)return;
    while (!age || isNaN(age) || age <= 0) {
        alert("Please enter a valid age (positive numbers only).");
        age = prompt("Enter child's age:");
    }

    // Prompt for child's gender and validate input
    let gender = prompt("Enter child's gender (Male/Female):");
    if (gender==null)return;
    while (!gender || (gender !== "male" && gender !== "female")) {
        alert("Please enter a valid gender (Male or Female).");
        gender = prompt("Enter child's gender (Male/Female):");
    }

    // Get the current date
    const date = new Date().toLocaleDateString();

    // Create a new row
    const newRow = table.insertRow();

    // Add cells to the row and populate them
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = age;
    newRow.insertCell(2).textContent = gender.charAt(0).toUpperCase() + gender.slice(1); // Capitalize the gender
    newRow.insertCell(3).textContent = date;
}
