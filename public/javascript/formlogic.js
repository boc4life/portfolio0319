$("#contactForm").on("submit", function(event){
    event.preventDefault();
    let name = $("#nameInput").val().trim();
    let email = $("#emailInput").val().trim();
    let message = $("#messageInput").val();
    let emailCheck = emailIsValid(email);
    if (emailCheck) {
        let data = {
            name: name,
            email: email,
            message: message
        }
        $.post("/contact", data, function(res){
        })
    }
})

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }