
var firstName;
var lastName;
var checkInDate;


// Cookie Functions

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    var name = getCookie(cname);
    if (name != "") {
        return true;
    } else {
        return false;
    }
}

function setFirstNameCookie(string) {
    setCookie("firstName", string, 90);
}

function getFirstNameCookie() {
    if (checkCookie("firstName")) {
        firstName = getCookie("firstName");
        document.getElementById("first-name").innerHTML = getCookie("firstName");
    }
}

function setLastNameCookie(string) {
    setCookie("lastName", string, 90);
}

function getLastNameCookie() {
    if (checkCookie("lastName")) {
        lastName = getCookie("lastName");
        document.getElementById("last-name").innerHTML = getCookie("lastName");
    }
}

function setDateCookie(string) {
    setCookie("lastdate", string, 90);
}

function getDateCookie() {
    if (checkCookie("lastdate")) {
        checkInDate = getCookie("lastdate");
        document.getElementById("last-checkin-date").innerHTML = getCookie("lastdate");
    }
}

// End Cookie Functions

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + '' + ampm;
    return strTime;
  }


$(document).ready(function(){

    // Set Cookies
    getFirstNameCookie();
    getLastNameCookie();
    getDateCookie();
});


