function validateBoardGamesForm() {
    const name = document.getElementById("boardgame-name").value.trim();
    const email = document.getElementById("boardgame-email").value.trim();
    const phone = document.getElementById("boardgame-phone").value.trim();
    const experience = document.getElementById("boardgame-experience").value.trim();
    const motivation = document.getElementById("boardgame-motivation").value.trim();
    const errorMsg = document.getElementById("boardgame-error");
  
    if (errorMsg) {
      errorMsg.textContent = '';
    }
  
    if (!name) {
      errorMsg.textContent = 'Please enter your full name. Do not leave this field empty.';
      return false;
    }
  
    if (!email || !email.includes("@") || !email.includes(".")) {
      errorMsg.textContent = 'Please enter a valid email address.';
      return false;
    }
  
    if (!phone || phone.length !== 11 || isNaN(phone)) {
      errorMsg.textContent = 'Please enter a valid 11-digit phone number.';
      return false;
    }
  
    if (!experience) {
      errorMsg.textContent = 'Please share your experience with board games or NPO activities.';
      return false;
    }
  
    if (!motivation) {
      errorMsg.textContent = 'Please explain why you would like to volunteer with us.';
      return false;
    }
  
    alert('Thank you! Your application has been received. We will get back to you as soon as possible.');
    return true;
  }
  