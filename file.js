// CONVERT ARQUIVO BASE 64
const attachment = document.querySelector('input[type=file]').files[0];
const reader = new FileReader();

reader.readAsDataURL(attachment);

reader.onloadend = function() {
    // reader.result é o base64
    console.log(reader.result);
}