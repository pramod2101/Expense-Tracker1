
function handleFormSubmit(event){
    event.preventDefault();
    const expenseDetails={
        expenseAmount:event.target.expenseAmount.value,
        chooseDescreption:event.target.chooseDescreption.value,
        chooseCategory:event.target.chooseCategory.value
    };
    let myobj_serial=JSON.stringify(expenseDetails)
    localStorage.setItem(expenseDetails.chooseDescreption,myobj_serial)
    // const string=myObj.ExpenseAmount + " " + myObj.chooseDescreption+" "+myObj.chooseCategory;
    // const newLi=document.createElement("li");
    // newLi.innerHTML=string + '<button class="delete-btn">Delete</button><button class="edit-btn">Edit</button>'
    // const newLiText=document.createTextNode(string);
    // newLi.appendChild(newLiText)
    // const edit=document.createElement("button")
    printDetails(expenseDetails);
    document.getElementById("form").reset()


}
function printDetails(myObj){
    const list=document.querySelector("ul")
    const newLi=document.createElement("li");
    const newLiText=document.createTextNode(myObj.expenseAmount+" "+myObj.chooseDescreption+" "+myObj.chooseCategory)
    
    const deletebtn=document.createElement("button");
    deletebtn.setAttribute("class","delete-btn")
    deletebtn.textContent="Delete"

    const editbtn=document.createElement("button");
    editbtn.setAttribute("class","edit-btn")
    editbtn.textContent="Edit"

    newLi.appendChild(newLiText);
    newLi.appendChild(deletebtn)
    newLi.appendChild(editbtn)
    list.appendChild(newLi)
    
    
}
document.getElementById("details").addEventListener("click" ,function (event){
    if(event.target.classList.contains("delete-btn")){
        event.preventDefault()
         event.target.parentElement.remove()
         const parentList=event.target.parentElement;
         localStorage.removeItem(parentList.childNodes[0].textContent.split(" ")[1])
        }
    else if(event.target.classList.contains("edit-btn")){
        event.preventDefault();
        const parentList=event.target.parentElement;
        const expenseAmount = parentList.childNodes[0].textContent.split(" ")[0];
        const chooseDescreption = parentList.childNodes[0].textContent.split(" ")[1];
        const chooseCategory = parentList.childNodes[0].textContent.split(" ")[2];

        document.getElementById("expenseAmount").value=expenseAmount
        document.getElementById("chooseDescreption").value=chooseDescreption
        document.getElementById("chooseCategory").value=chooseCategory;
        localStorage.removeItem(chooseDescreption)
        parentList.remove()
    }
})