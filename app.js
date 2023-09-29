
var textArea = document.getElementById('text');
var postButton = document.getElementById('postButton');

function enable() {
    if (textArea.value.trim() !== '') {
        postButton.disabled = false;
    } else {
        postButton.disabled = true;
    }
}

function Click() {
    if (!postButton.disabled) {
        console.log(textArea.value);
        textArea.value = '';
        postButton.disabled = true;
    }
}

postButton.addEventListener('click', Click);
textArea.addEventListener('input', enable);

function bgc(colors){
   textArea.style.backgroundColor = colors;
}
