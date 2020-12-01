let objList = document.getElementsByTagName("ul");
console.log(objList);

let itemList = document.getElementsByTagName("li");
console.log(itemList.length);

for (let i = 0; i < itemList.length; i++){
    let item = itemList[i];
    item.innerText = "blabla";
    item.style.listStyleType = "circle";
}



