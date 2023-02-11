function SetCookies(value , name , days){
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function checkCookie(cookieName) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.startsWith(cookieName + "=")) {
        return true;
      }
    }
    return false;
  }



function RetrieveCookies(name){
    // return a list of (val , key) cookies 
    var cookies = document.cookie.split(';')
    for(var i = 0 ; i < cookies.length ; i++){
        
    }
}

export {
    checkCookie , SetCookies , RetrieveCookies
}