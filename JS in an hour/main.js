// let listItems = document.getElementById("ourList").getElementsByTagName("li"); // old way
let listItems = document.querySelectorAll("#ourList li") // new way

let ourHeadLine = document.getElementById("ourHeadLine");

let ourButton = document.getElementById("ourButton");

// let ourList = document.getElementById("ourList");  // old way
let ourList = document.querySelector("#ourList"); // new way



let newItemCounter = 1;

function activateItem(e) {
    // e is the result object passed from the AddEventListener that was clicked on

    // checks that the node is the list item LI
    if (e.target.nodeName == "LI") {
        ourHeadLine.innerHTML = e.target.innerHTML; // get the text of the list item

        // that target that was clicked on, get the parent node
        // then list the number of children the parent has
        for (i=0; i < e.target.parentNode.children.length; i++) {
            // for each childeren, remove the css class name active
            e.target.parentNode.children[i].classList.remove("active");
        }

        // the list item that was clicked on, add the active css class
        e.target.classList.add("active");
    }
}

function createNewItem(){
    ourList.innerHTML += "<li>New Item " + newItemCounter + "</li>";
    newItemCounter++;
}

ourList.addEventListener("click", activateItem);

/* listens to only 1 element added */
// for (i=0; i < listItems.length; i++) {
//     listItems[i].addEventListener("click",activateItem)
// }


ourButton.addEventListener("click", createNewItem);
