var textArea = document.getElementById('textarea');
var imageArea = document.getElementById('imageArea');
var successMessage = document.getElementById('success');

const validator = () => {
    var emailField = document.getElementById('emailField').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailField) === true) {
        textArea.style.display = "none";
        imageArea.style.display = "none";
        successMessage.style.display = "block";
    } else {
        document.getElementById('emailMessages1').innerHTML = "valid email required.";
        document.getElementById('inputField').value.style.color = "hsl(4, 100%, 67%)";
    }
}

const homePage = () => {
    textArea.style.display = "block";
    imageArea.style.display = "flex";
    successMessage.style.display = "none";
}

