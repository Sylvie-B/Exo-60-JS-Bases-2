let itemList = document.getElementsByTagName("li");
console.log(itemList.length);

for (let i = 0; i < itemList.length; i++){
    let item = itemList[i];
    item.innerText = "blabla";
    console.log(i);
}

let objList = document.getElementsByTagName("ul");
console.log(objList);
console.log(objList.style.listStyleType);

