const USER = "username";

const userform= document.querySelector("#userform");
const userinput= document.querySelector("#userinput");
const userName= document.querySelector("#userName");

function getUser() {
    return localStorage.getItem(USER);
}

function setUser(event) {
    
    event.preventDefault();
    localStorage.setItem(USER,userinput.value);
    const task = document.querySelector(".task");
    task.classList.toggle("inactive");
    userName.classList.toggle("inactive");
    
}



function initUser() {

    const h2 =document.querySelector("#listUserName");
    const username = getUser();
    h2.innerHTML = `Hello ${username}`;
    
    if(getUser() != null )
    {
        

        const task = document.querySelector(".task");
        task.classList.toggle("inactive");
        userName.classList.toggle("inactive");

    }
    else {
        userinput.addEventListener("submit",setUser);
    }

    userform.addEventListener("submit",setUser);
}

initUser();