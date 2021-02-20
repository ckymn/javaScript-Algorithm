const list = document.getElementsByTagName("ul")[0];
const add = ["s","c","r","i","p","t"];

for(let i = 0; i < add.length; i++){
    let listElement = document.createElement("li");
    let text = document.createTextNode(add[i]);

    listElement.appendChild(text);
    list.appendChild(listElement);
    
}