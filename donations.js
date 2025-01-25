function donation()
{
    const name = document.getElementById("donor-name").value;
    const age = document.getElementById("age").value;
    const amount = document.getElementById("donation-amount").value;

    // Create a donation object
    const donation = { name, age, amount };

    // Get existing donations from localStorage (or initialize with an empty array)
    let donations = JSON.parse(localStorage.getItem("donations")) || [];

    // Add the new donation to the array
    donations.push(donation);

    // Save the updated donations array back to localStorage
    localStorage.setItem("donations", JSON.stringify(donations));


    document.getElementById("donationForm").reset();
}