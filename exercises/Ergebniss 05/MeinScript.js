toSave("name","What is your Name?","1")
toSave("color","What is your Color?","2")

function toSave(name,question,id){
    if(getLocalStorage(name)==-1){
        localStorage.setItem(name,prompt(question))
    }else{
        document.getElementById(id).setAttribute("placeholder", getLocalStorage(name));
    }
}

function getLocalStorage(name) {
    let test = localStorage.getItem(name);
    if (test != null){
        return test;
    }else{
        return -1;
    }
} 