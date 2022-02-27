
if (getCookie("TestCookie") == -1) {
    //Cookie nicht vorhanden
    let name = prompt("Please enter your Name...")
    let color = prompt("Please enter your favourite colour....")
    let howManyDays = 1;
    let d = new Date();
    d.setTime(d.getTime() + (howManyDays*86400000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = "TestCookie=" + name + "|,|" + color+";"+expires;
} else {
    let test = getCookie("testCookie");
    document.getElementById("1").setAttribute("placeholder", test[0])
    document.getElementById("2").setAttribute("placeholder", test[1])
}

function getCookie(cookieName) {
    let decCookie = decodeURIComponent(document.cookie);
    let arr = decCookie.split("=");
    if (arr.length > 1) {
        arr = arr[1].split("|,|")
    }
    if (arr.length == 2) {
        return arr;
    }
    return -1;
}