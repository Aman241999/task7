function saveToLocalStorage(event) {
    event.preventDefault();
  
    let name = event.target.Username.value;
    let email = event.target.emailId.value;
    let phoneNumber = event.target.phonenumber.value;
    let dob = event.target.dob.value;
  let obj={
    name,
    email,
    phoneNumber,
    dob
  }
  localStorage.setItem(obj.email,JSON.stringify(obj))
   showdisplay(obj) 
  }
  function showdisplay(obj){
    let parentItem=document.getElementById("AddItem");
    let li=document.createElement('li');
    li.textContent=obj.name + ' '+obj.email+' '+obj.phoneNumber+ ' '+obj.dob
    parentItem.appendChild(li);

    let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  let Editbutton=document.createElement("Button");
  Editbutton.textContent="Edit";
  deleteButton.addEventListener('click', function() {
    removeFromLocalStorage(obj.email);
    parentItem.removeChild(li);
   
  });

  li.appendChild(deleteButton);
  parentItem.appendChild(li);
  li.appendChild(Editbutton);
  parentItem.appendChild(li);
  }
  function removeFromLocalStorage(email) {
    localStorage.removeItem(email);
  }
  
