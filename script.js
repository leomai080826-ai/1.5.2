function init() {
    document.getElementById("mylist").onsubmit = addItem;
}

function addItem(event) {
    event.preventDefault();

    let input = document.getElementById("newitem");
    let text = input.value.trim();

    if(text === "") {
        return;
    }

    let li = document.createElement("li");

    let sentence = document.createElement("p");
    sentence.textContent = text;
    sentence.onclick = removeItem;

    li.appendChild(sentence);
    document.getElementById("list").appendChild(li);

    input.value = "";
    input.focus();
}

function removeItem() {
    this.parentElement.remove();
}
window.onload = init;